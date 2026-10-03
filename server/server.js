/**
 * Portable Node Server
 * Zero-dependency, self-contained HTTP & REST API server
 * Runs directly on bundled portable Node or system Node
 */
// Suppress TLS/SSL certificate verification for corporate firewalls / SSL inspection
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');
const os = require('os');
const crypto = require('crypto');

let googleTTS = null;
try {
  googleTTS = require('google-tts-api');
} catch (e) {
  console.warn('[WARN] google-tts-api not found in local node_modules:', e.message);
}

// Persistent TTS Disk Cache directory (identical to Learning App)
const AUDIO_CACHE_DIR = path.join(__dirname, '..', 'audio_cache');
if (!fs.existsSync(AUDIO_CACHE_DIR)) {
  try {
    fs.mkdirSync(AUDIO_CACHE_DIR, { recursive: true });
  } catch (e) {
    console.warn('[WARN] Could not create audio_cache dir:', e.message);
  }
}

function getAudioDiskCachePath(cacheKey) {
  const hash = crypto.createHash('md5').update(cacheKey).digest('hex');
  return path.join(AUDIO_CACHE_DIR, `${hash}.mp3`);
}

// In-memory TTS cache to save bandwidth and make replay instantaneous
const ttsCache = new Map();

// Tamil Mei Ezhuthukkal (pure consonants) phonetic spoken pronunciation map
// When reading isolated consonants, ல் is read as இல், க் as இக், etc.
const TAMIL_MEI_TTS_MAP = {
  'க்': 'இக்',
  'ங்': 'இங்',
  'ச்': 'இச்',
  'ஞ்': 'இஞ்',
  'ட்': 'இட்',
  'ண்': 'இண்',
  'த்': 'இத்',
  'ந்': 'இந்',
  'ப்': 'இப்',
  'ம்': 'இம்',
  'ய்': 'இய்',
  'ர்': 'இர்',
  'ல்': 'இல்',
  'வ்': 'இவ்',
  'ழ்': 'இழ்',
  'ள்': 'இள்',
  'ற்': 'இற்',
  'ன்': 'இன்',
  'ஜ்': 'இஜ்',
  'ஷ்': 'இஷ்',
  'ஸ்': 'இஸ்',
  'ஹ்': 'இஹ்',
  'க்ஷ்': 'இக்ஷ்',
  'ஃ': 'அக்கு'
};

function normalizeTamilTTSPhonetics(input) {
  if (!input) return '';
  const trimmed = input.trim();
  if (TAMIL_MEI_TTS_MAP[trimmed]) {
    return TAMIL_MEI_TTS_MAP[trimmed];
  }
  const graphemes = trimmed.match(/[\u0B80-\u0BFF][\u0BBE-\u0BD7]*/g);
  if (graphemes && graphemes.length === 1 && graphemes[0].endsWith('\u0BCD')) {
    return 'இ' + graphemes[0];
  }
  return trimmed;
}

// Helper to fetch TTS with multiple hosts fallback (exact Learning App implementation)
async function fetchGoogleTTSAudio(text, slow) {
  const hosts = [
    'https://translate.google.com',
    'https://translate.google.co.in',
    'https://translate.google.com.sg',
    'https://translate.google.com.hk'
  ];

  let lastErr = null;
  for (const host of hosts) {
    try {
      if (googleTTS) {
        if (text.length <= 180) {
          const base64 = await googleTTS.getAudioBase64(text, {
            lang: 'ta',
            slow: slow,
            host: host,
            timeout: 8000
          });
          return Buffer.from(base64, 'base64');
        } else {
          const results = await googleTTS.getAllAudioBase64(text, {
            lang: 'ta',
            slow: slow,
            host: host,
            timeout: 12000,
            splitPunct: '.,;?!'
          });
          const buffers = results.map(r => Buffer.from(r.base64, 'base64'));
          return Buffer.concat(buffers);
        }
      }
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error('All TTS hosts failed');
}

// Load configurations
const CONFIG_PATH = path.join(__dirname, 'config.json');
let config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  host: process.env.HOST || '0.0.0.0',
  publicDir: '../public',
  dataDir: '../data',
  enableGzip: true,
  enableCors: true,
  fallbackToSpa: true
};

if (fs.existsSync(CONFIG_PATH)) {
  try {
    const loadedConfig = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
    config = { ...config, ...loadedConfig };
  } catch (err) {
    console.warn('[WARN] Could not parse config.json, using defaults:', err.message);
  }
}

// Environment variables take precedence over config.json (essential for Railway/Docker deployment)
if (process.env.PORT) {
  config.port = parseInt(process.env.PORT, 10);
}
if (process.env.HOST) {
  config.host = process.env.HOST;
}

// Parse command line arguments (e.g., --port=8080 or --host=127.0.0.1)
process.argv.slice(2).forEach(arg => {
  if (arg.startsWith('--port=')) {
    config.port = parseInt(arg.split('=')[1], 10) || config.port;
  } else if (arg.startsWith('--host=')) {
    config.host = arg.split('=')[1] || config.host;
  }
});

// Load MIME types
const MIME_PATH = path.join(__dirname, 'mime.types.json');
let mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=UTF-8',
  '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg'
};

if (fs.existsSync(MIME_PATH)) {
  try {
    mimeTypes = { ...mimeTypes, ...JSON.parse(fs.readFileSync(MIME_PATH, 'utf-8')) };
  } catch (e) {
    console.warn('[WARN] Could not parse mime.types.json, using built-ins.');
  }
}

// Ensure directories exist
const PUBLIC_ROOT = path.resolve(__dirname, config.publicDir);
const DATA_ROOT = path.resolve(__dirname, config.dataDir);

if (!fs.existsSync(PUBLIC_ROOT)) {
  fs.mkdirSync(PUBLIC_ROOT, { recursive: true });
}
if (!fs.existsSync(DATA_ROOT)) {
  fs.mkdirSync(DATA_ROOT, { recursive: true });
}

// Letters Data Store (File-backed persistence)
const LETTERS_FILE = path.join(DATA_ROOT, 'letters.json');

function getLetters() {
  if (!fs.existsSync(LETTERS_FILE)) {
    const initial = [
      {
        id: 'letter-1',
        title: 'Welcome to Portable Letters',
        recipient: 'Team & Collaborators',
        sender: 'Application Author',
        date: new Date().toISOString().split('T')[0],
        category: 'Official',
        status: 'Published',
        content: 'Welcome to your self-contained, portable Node application!\n\nThis application is completely portable. You can copy the entire folder to any Windows machine and launch it immediately with start.bat without installing Node or NPM.\n\nEnjoy fast local development and seamless distribution.',
        updatedAt: new Date().toISOString()
      },
      {
        id: 'letter-2',
        title: 'Project Handover & Release Note',
        recipient: 'Deployment Operations',
        sender: 'Engineering Lead',
        date: new Date().toISOString().split('T')[0],
        category: 'Technical',
        status: 'Draft',
        content: 'All portable server features including static file streaming, gzip compression, REST API, letter drafting, audio synthesis support, and export tools are operational.',
        updatedAt: new Date().toISOString()
      }
    ];
    fs.writeFileSync(LETTERS_FILE, JSON.stringify(initial, null, 2), 'utf-8');
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(LETTERS_FILE, 'utf-8'));
  } catch (err) {
    console.error('[ERROR] Failed to read letters.json:', err.message);
    return [];
  }
}

function saveLetters(data) {
  fs.writeFileSync(LETTERS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// Helper: send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  res.end(JSON.stringify(data));
}

// Helper: read request body
function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 50 * 1024 * 1024) { // 50MB max limit
        reject(new Error('Request body too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve(body);
      }
    });
    req.on('error', reject);
  });
}

// Helper: Get local network IPs
function getLocalNetworkAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }
  return addresses;
}

// Create HTTP Server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Handle CORS Pre-flight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400'
    });
    res.end();
    return;
  }

  // API ROUTING
  if (pathname.startsWith('/api/')) {
    try {
      // 1. System Health & Environment Status
      if (pathname === '/api/status' && req.method === 'GET') {
        const runtimePath = process.execPath;
        const isBundled = runtimePath.toLowerCase().includes(path.resolve(__dirname, '..').toLowerCase());
        return sendJson(res, 200, {
          success: true,
          serverTime: new Date().toISOString(),
          uptimeSeconds: Math.floor(process.uptime()),
          nodeVersion: process.version,
          platform: process.platform,
          arch: process.arch,
          runtimeExecutable: runtimePath,
          isPortableRuntime: isBundled,
          port: config.port,
          memoryUsage: process.memoryUsage(),
          systemMemory: {
            free: os.freemem(),
            total: os.totalmem()
          },
          networkAddresses: getLocalNetworkAddresses()
        });
      }

      // 2. Letters REST API
      if (pathname === '/api/letters') {
        if (req.method === 'GET') {
          const letters = getLetters();
          return sendJson(res, 200, { success: true, count: letters.length, letters });
        }

        if (req.method === 'POST') {
          const payload = await readRequestBody(req);
          const letters = getLetters();
          
          if (payload.id) {
            // Update existing
            const index = letters.findIndex(l => l.id === payload.id);
            if (index !== -1) {
              letters[index] = { ...letters[index], ...payload, updatedAt: new Date().toISOString() };
              saveLetters(letters);
              return sendJson(res, 200, { success: true, letter: letters[index], message: 'Letter updated' });
            }
          }

          // Create new
          const newLetter = {
            id: 'letter-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
            title: payload.title || 'Untitled Letter',
            recipient: payload.recipient || 'Recipient',
            sender: payload.sender || 'Sender',
            date: payload.date || new Date().toISOString().split('T')[0],
            category: payload.category || 'General',
            status: payload.status || 'Draft',
            content: payload.content || '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          letters.unshift(newLetter);
          saveLetters(letters);
          return sendJson(res, 201, { success: true, letter: newLetter, message: 'Letter created' });
        }
      }

      // Single letter DELETE or GET
      const letterMatch = pathname.match(/^\/api\/letters\/([^/]+)$/);
      if (letterMatch) {
        const letterId = letterMatch[1];
        const letters = getLetters();
        const index = letters.findIndex(l => l.id === letterId);

        if (req.method === 'GET') {
          if (index === -1) return sendJson(res, 404, { success: false, error: 'Letter not found' });
          return sendJson(res, 200, { success: true, letter: letters[index] });
        }

        if (req.method === 'DELETE') {
          if (index === -1) return sendJson(res, 404, { success: false, error: 'Letter not found' });
          const removed = letters.splice(index, 1)[0];
          saveLetters(letters);
          return sendJson(res, 200, { success: true, removed, message: 'Letter deleted' });
        }
      }

      // 3. Export / Backup endpoint
      if (pathname === '/api/export' && req.method === 'GET') {
        const letters = getLetters();
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="letters-export-${Date.now()}.json"`,
          'Access-Control-Allow-Origin': '*'
        });
        return res.end(JSON.stringify(letters, null, 2));
      }

      // 4. TTS Audio Stream & Proxy with persistent disk cache, retry and multi-host fallback (exact Learning App implementation)
      if (pathname === '/api/tts' && req.method === 'GET') {
        const rawText = parsedUrl.query.text || parsedUrl.query.q || '';
        const slow = parsedUrl.query.slow === 'true' || parsedUrl.query.slow === '1';

        if (!rawText) {
          return sendJson(res, 400, { success: false, error: 'Query parameter "text" is required' });
        }

        const text = normalizeTamilTTSPhonetics(rawText);
        const cacheKey = `${text}_${slow ? 'slow' : 'normal'}`;

        // 1. Check in-memory cache
        if (ttsCache.has(cacheKey)) {
          const audioBuffer = ttsCache.get(cacheKey);
          res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': audioBuffer.length,
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=86400',
            'Accept-Ranges': 'bytes'
          });
          return res.end(audioBuffer);
        }

        // 2. Check persistent disk cache
        const diskPath = getAudioDiskCachePath(cacheKey);
        if (fs.existsSync(diskPath)) {
          try {
            const audioBuffer = fs.readFileSync(diskPath);
            ttsCache.set(cacheKey, audioBuffer);
            res.writeHead(200, {
              'Content-Type': 'audio/mpeg',
              'Content-Length': audioBuffer.length,
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'public, max-age=86400',
              'Accept-Ranges': 'bytes'
            });
            return res.end(audioBuffer);
          } catch (diskErr) {
            console.warn('[WARN] Error reading from disk cache:', diskErr.message);
          }
        }

        // 3. Fetch from Google TTS across multiple hosts
        fetchGoogleTTSAudio(text, slow).then((audioBuffer) => {
          // Save to disk cache for offline use
          try {
            fs.writeFileSync(diskPath, audioBuffer);
          } catch (writeErr) {
            console.warn('[WARN] Error writing to audio disk cache:', writeErr.message);
          }

          if (ttsCache.size > 500) {
            const firstKey = ttsCache.keys().next().value;
            ttsCache.delete(firstKey);
          }
          ttsCache.set(cacheKey, audioBuffer);

          res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': audioBuffer.length,
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=86400',
            'Accept-Ranges': 'bytes'
          });
          return res.end(audioBuffer);
        }).catch((err) => {
          console.error('[ERROR] TTS synthesis error (online failed):', err.message);
          return sendJson(res, 503, {
            error: 'TTS_UNAVAILABLE',
            message: 'TTS service unreachable or offline',
            text: text
          });
        });
        return;
      }

      // 5. Server Config API
      if (pathname === '/api/config') {
        if (req.method === 'GET') {
          return sendJson(res, 200, { success: true, config });
        }
        if (req.method === 'POST') {
          const newConf = await readRequestBody(req);
          config = { ...config, ...newConf };
          fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');
          return sendJson(res, 200, { success: true, config, message: 'Configuration saved' });
        }
      }

      // 404 for unknown API
      return sendJson(res, 404, { success: false, error: `API route ${pathname} not found` });
    } catch (err) {
      console.error('[API ERROR]', err);
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // STATIC FILE SERVING
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  let filePath = path.join(PUBLIC_ROOT, safePath);

  // Security check: ensure path is inside PUBLIC_ROOT
  if (!filePath.startsWith(PUBLIC_ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('403 Forbidden: Access Denied');
  }

  fs.stat(filePath, (err, stats) => {
    // If not found or directory
    if (err || stats.isDirectory()) {
      if (stats && stats.isDirectory()) {
        const indexInDir = path.join(filePath, 'index.html');
        if (fs.existsSync(indexInDir)) {
          return serveFile(req, res, indexInDir);
        }
      }

      // SPA Fallback to index.html if requested path has no file extension
      if (config.fallbackToSpa && !path.extname(safePath)) {
        const spaIndex = path.join(PUBLIC_ROOT, 'index.html');
        if (fs.existsSync(spaIndex)) {
          return serveFile(req, res, spaIndex);
        }
      }

      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      return res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found</title>
        <style>body{font-family:system-ui,-apple-system,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;}
        .card{background:#1e293b;padding:2.5rem;border-radius:1rem;box-shadow:0 10px 25px rgba(0,0,0,0.5);text-align:center;max-width:450px;}
        h1{color:#f43f5e;font-size:2rem;margin:0 0 1rem;} a{color:#38bdf8;text-decoration:none;font-weight:600;} a:hover{text-decoration:underline;}</style>
        </head>
        <body>
          <div class="card">
            <h1>404 - Not Found</h1>
            <p>The requested file <code>${pathname}</code> was not found on this portable server.</p>
            <p><a href="/">Return to Home</a></p>
          </div>
        </body>
        </html>
      `);
    }

    // Serve file with Range, Compression & Caching support
    serveFile(req, res, filePath, stats);
  });
});

function serveFile(req, res, filePath, stats) {
  if (!stats) {
    try {
      stats = fs.statSync(filePath);
    } catch (e) {
      res.writeHead(404);
      return res.end('Not found');
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const mtime = stats.mtime.toUTCString();
  const etag = `W/"${stats.size.toString(16)}-${stats.mtime.getTime().toString(16)}"`;

  // HTTP Caching (disabled for local dev so changes reflect instantly)
  const headers = {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Accept-Ranges': 'bytes',
    'Access-Control-Allow-Origin': '*'
  };

  // Byte Range Support (for audio/video streaming)
  const rangeHeader = req.headers['range'];
  if (rangeHeader && rangeHeader.startsWith('bytes=')) {
    const parts = rangeHeader.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

    if (start >= stats.size || end >= stats.size || start > end) {
      res.writeHead(416, { 'Content-Range': `bytes */${stats.size}` });
      return res.end();
    }

    headers['Content-Range'] = `bytes ${start}-${end}/${stats.size}`;
    headers['Content-Length'] = (end - start + 1);
    res.writeHead(206, headers);
    fs.createReadStream(filePath, { start, end }).pipe(res);
    return;
  }

  // Compression for text/code assets
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const isCompressible = /text|javascript|json|xml|svg/i.test(contentType);

  if (config.enableGzip && isCompressible && stats.size > 1024) {
    if (acceptEncoding.includes('gzip')) {
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(200, headers);
      return fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
    } else if (acceptEncoding.includes('deflate')) {
      headers['Content-Encoding'] = 'deflate';
      res.writeHead(200, headers);
      return fs.createReadStream(filePath).pipe(zlib.createDeflate()).pipe(res);
    }
  }

  headers['Content-Length'] = stats.size;
  res.writeHead(200, headers);
  fs.createReadStream(filePath).pipe(res);
}

// Function to start server with port fallback
function startServer(port, retries = 5) {
  server.listen(port, config.host, () => {
    const networkIps = getLocalNetworkAddresses();
    console.log('\n======================================================');
    console.log(' 🚀 PORTABLE NODE SERVER IS ONLINE!');
    console.log('======================================================');
    console.log(` • Local URL:    http://localhost:${port}`);
    if (config.host === '0.0.0.0') {
      networkIps.forEach(ip => {
        console.log(` • Network URL:  http://${ip}:${port}`);
      });
    }
    console.log(` • Public Dir:   ${PUBLIC_ROOT}`);
    console.log(` • Data Dir:     ${DATA_ROOT}`);
    console.log(` • Runtime:      ${process.execPath}`);
    console.log('======================================================');
    console.log(' Press Ctrl+C in terminal or run stop.bat to shut down.\n');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && retries > 0) {
      console.warn(`[WARN] Port ${port} is in use. Trying port ${port + 1}...`);
      startServer(port + 1, retries - 1);
    } else {
      console.error('[FATAL SERVER ERROR]', err.message);
      process.exit(1);
    }
  });
}

// Handle termination cleanly
process.on('SIGINT', () => {
  console.log('\n[INFO] Gracefully shutting down portable server...');
  server.close(() => {
    console.log('[INFO] Server stopped.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n[INFO] Received terminate signal...');
  server.close(() => process.exit(0));
});

// Launch server
startServer(config.port);
