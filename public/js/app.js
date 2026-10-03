/**
 * Tamil Letters Studio
 * Interactive Learning App with Google TTS, Multi-Set Level Support, Syllables & Word Animations
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA DEFINITIONS (7 PROGRESSIVE LEVELS WITH MULTI-SETS)
  // =========================================================================

  const LEVEL_DATA = {
    1: {
      number: 1,
      title: 'Level 1 Letters',
      currentSetIndex: 0,
      sets: [
        {
          id: '1-1',
          name: 'டபமய',
          vowels: ["அ", "ஆ"],
          rows: [
            ["ட்", "ட", "டா"],
            ["ப்", "ப", "பா"],
            ["ம்", "ம", "மா"],
            ["ய்", "ய", "யா"]
          ],
          syllables: ["அப்", "அம்", "அட்", "அய்", "ஆப்", "ஆம்", "ஆட்", "ஆய்", "பட்", "டம்", "மட்", "டப்", "பப்", "மம்", "பாய்", "மாய்", "டாய்", "யாய்", "பாப்", "மாம்", "டாட்", "டம் டம்", "டம் பம்", "பட் பட்", "டப் டப்", "பம் பம்", "பப் பப்", "மட் மட்", "பாய் பாய்", "மாய் மாய்", "டாட் டாட்"],
          sampleWords: [
            { word: 'அப்பா', meaning: 'Father', icon: '👨' },
            { word: 'அம்மா', meaning: 'Mother', icon: '👩' },
            { word: 'படம்', meaning: 'Picture', icon: '🖼️' },
            { word: 'பட்டம்', meaning: 'Kite', icon: '🪁' },
            { word: 'பாப்பா', meaning: 'Baby', icon: '👶' },
            { word: 'பாய்', meaning: 'Mat', icon: '🧶' },
            { word: 'மாமா', meaning: 'Uncle', icon: '🧔' },
            { word: 'ஆப்பம்', meaning: 'Appam / Pancake', icon: '🥞' },
            { word: 'பாடம்', meaning: 'Lesson', icon: '📖' },
            { word: 'ஆட்டம்', meaning: 'Dance / Play', icon: '💃' },
            { word: 'மட்டம்', meaning: 'Level / Plain', icon: '📏' },
            { word: 'பயம்', meaning: 'Fear', icon: '😨' },
            { word: 'மாடம்', meaning: 'Attic / Balcony / Niche', icon: '🏛️' },
            { word: 'ஆயா', meaning: 'Grandmother / Nanny', icon: '👵' },
            { word: 'மாயா', meaning: 'Illusion / Wonder', icon: '🔮' },
            { word: 'மாயம்', meaning: 'Magic / Trick', icon: '🪄' },
            { word: 'பட்டா', meaning: 'Title Deed / Record', icon: '📜' },
            { word: 'பாட்டா', meaning: 'Folk Song / Grandfather', icon: '🎵' },
            { word: 'அப்பம்', meaning: 'Sweet Rice Cake', icon: '🥮' },
            { word: 'பாப்பம்', meaning: 'Snack / Cake', icon: '🍰' },
            { word: 'பப்படம்', meaning: 'Crisp Papadum', icon: '🍘' },
            { word: 'மடம்', meaning: 'Hermitage / Monastery', icon: '🛕' },
            { word: 'ஆயம்', meaning: 'Measurement / Toll', icon: '⚖️' },
            { word: 'மாய்', meaning: 'Fade / Vanish', icon: '✨' },
            { word: 'பாயா', meaning: 'Spreading flow', icon: '🌊' },
            { word: 'அடா', meaning: 'Hey you (friendly)', icon: '🗣️' },
            { word: 'ஆடா', meaning: 'Dance / Play', icon: '🕺' },
            { word: 'பாடா', meaning: 'Song line', icon: '🎤' }
          ]
        },
        {
          id: '1-2',
          name: 'சகதவ',
          vowels: ["அ", "ஆ"],
          rows: [
            ["ச்", "ச", "சா"],
            ["க்", "க", "கா"],
            ["த்", "த", "தா"],
            ["வ்", "வ", "வா"]
          ],
          syllables: ["அச்", "அக்", "அத்", "அவ்", "ஆச்", "ஆக்", "ஆத்", "ஆவ்", "சத்", "கத்", "வத்", "தத்", "சக்", "கக்", "தக்", "வக்", "சப்", "கப்", "தப்", "வப்", "சம்", "கம்", "தம்", "வம்", "சாச்", "காக்", "தாத்", "வாவ்", "வாய்", "காய்", "தாய்", "சாய்", "தக் தக்", "தட் தட்", "சக் சக்", "சட் சட்", "டக் டக்", "கட் கட்", "தப் தப்", "கம் கம்", "சம் சம்", "தம் தம்", "வம் வம்", "காய் காய்", "வாய் வாய்"],
          sampleWords: [
            { word: 'அக்கா', meaning: 'Elder Sister', icon: '👧' },
            { word: 'தாத்தா', meaning: 'Grandfather', icon: '👴' },
            { word: 'காகம்', meaning: 'Crow', icon: '🐦‍⬛' },
            { word: 'வாய்', meaning: 'Mouth', icon: '👄' },
            { word: 'காய்', meaning: 'Vegetable', icon: '🥦' },
            { word: 'சட்டம்', meaning: 'Frame / Rule', icon: '📜' },
            { word: 'வா', meaning: 'Come', icon: '👋' },
            { word: 'சாதம்', meaning: 'Cooked Rice', icon: '🍚' },
            { word: 'பாவம்', meaning: 'Pity / Innocence', icon: '🥺' },
            { word: 'தாகம்', meaning: 'Thirst', icon: '🥤' },
            { word: 'வட்டம்', meaning: 'Circle', icon: '⭕' },
            { word: 'சத்தம்', meaning: 'Sound / Noise', icon: '🔊' },
            { word: 'வாசம்', meaning: 'Fragrance / Scent', icon: '🌸' },
            { word: 'பக்கம்', meaning: 'Side / Page', icon: '📄' },
            { word: 'தவம்', meaning: 'Penance / Meditation', icon: '🧘' },
            { word: 'தாயம்', meaning: 'Dice Game', icon: '🎲' },
            { word: 'சாயம்', meaning: 'Dye / Color', icon: '🎨' },
            { word: 'கவசம்', meaning: 'Armor / Shield', icon: '🛡️' },
            { word: 'காக்கா', meaning: 'Crow (baby talk)', icon: '🐦' },
            { word: 'தடம்', meaning: 'Footprint / Track', icon: '👣' },
            { word: 'வடம்', meaning: 'Rope / Cable', icon: '🪢' },
            { word: 'கடம்', meaning: 'Clay Pot / Ghatam', icon: '🏺' },
            { word: 'ஆக்கம்', meaning: 'Creation / Wealth', icon: '🌟' },
            { word: 'கப்பம்', meaning: 'Tribute / Tax', icon: '💰' },
            { word: 'மச்சம்', meaning: 'Beauty Mole', icon: '✨' },
            { word: 'வாடா', meaning: 'Come here, buddy', icon: '🤝' },
            { word: 'தப்பம்', meaning: 'Error / Mistake', icon: '⚠️' },
            { word: 'தட்டாம்', meaning: 'We tap / Flatness', icon: '🥞' },
            { word: 'சடம்', meaning: 'Inert body / Matter', icon: '🗿' },
            { word: 'கசாயம்', meaning: 'Herbal Tea / Tonic', icon: '☕' },
            { word: 'அக்கம்', meaning: 'Neighborhood', icon: '🏘️' },
            { word: 'அச்சம்', meaning: 'Fear / Dread', icon: '😨' },
            { word: 'அச்சா', meaning: 'Print / Good work', icon: '🖨️' },
            { word: 'வாதம்', meaning: 'Debate / Discussion', icon: '🗣️' },
            { word: 'தாதா', meaning: 'Benefactor / Giver', icon: '🤲' },
            { word: 'சாகசம்', meaning: 'Adventure / Stunt', icon: '🧗' },
            { word: 'வாசகம்', meaning: 'Sentence / Motto', icon: '💬' }
          ]
        },
        {
          id: '1-3',
          name: 'ஙஞரற',
          vowels: ["அ", "ஆ"],
          rows: [
            ["ங்", "ங", "ஙா"],
            ["ஞ்", "ஞ", "ஞா"],
            ["ர்", "ர", "ரா"],
            ["ற்", "ற", "றா"]
          ],
          syllables: ["அர்", "அற்", "அங்", "அஞ்", "ஆர்", "ஆற்", "ஆங்", "ரம்", "றம்", "ரக்", "றக்", "ரத்", "றத்", "ரப்", "றப்", "ராப்", "றாப்", "ராய்", "றாய்", "கர்", "தர்", "வர்", "பர்", "மர்", "சர்", "ரம் ரம்", "றம் றம்", "ரக் ரக்", "கர் கர்", "தர் தர்", "பர் பர்", "மர் மர்", "சங் சங்", "தங் தங்", "பங் பங்", "கங் கங்"],
          sampleWords: [
            { word: 'மரம்', meaning: 'Tree', icon: '🌳' },
            { word: 'பம்பரம்', meaning: 'Spinning Top', icon: '🪀' },
            { word: 'ரசம்', meaning: 'Soup / Rasam', icon: '🍲' },
            { word: 'ரத்தம்', meaning: 'Blood', icon: '🩸' },
            { word: 'அறம்', meaning: 'Virtue / Moral Duty', icon: '⚖️' },
            { word: 'மாங்காய்', meaning: 'Raw Mango', icon: '🥭' },
            { word: 'தங்கம்', meaning: 'Gold', icon: '🪙' },
            { word: 'சங்கம்', meaning: 'Academy / Association', icon: '🏛️' },
            { word: 'பஞ்சம்', meaning: 'Scarcity / Famine', icon: '🌾' },
            { word: 'ஞாபகம்', meaning: 'Memory', icon: '🧠' },
            { word: 'தரம்', meaning: 'Quality / Standard', icon: '🏅' },
            { word: 'காரம்', meaning: 'Spicy / Pungent', icon: '🌶️' },
            { word: 'பாரம்', meaning: 'Heavy Burden / Weight', icon: '🏋️' },
            { word: 'மாற்றம்', meaning: 'Change / Transition', icon: '🔄' },
            { word: 'வரம்', meaning: 'Boon / Blessing', icon: '✨' },
            { word: 'சரம்', meaning: 'Garland / String', icon: '📿' },
            { word: 'கரம்', meaning: 'Hand', icon: '✋' },
            { word: 'ஆரம்', meaning: 'Necklace', icon: '📿' },
            { word: 'தாரம்', meaning: 'Spouse / Star', icon: '⭐' },
            { word: 'பாய்மரம்', meaning: 'Sailboat Mast', icon: '⛵' },
            { word: 'சக்கரம்', meaning: 'Wheel', icon: '🎡' },
            { word: 'அற்றம்', meaning: 'End / Destruction', icon: '🛑' },
            { word: 'பற்றா', meaning: 'Shortage / Deficit', icon: '📉' },
            { word: 'கங்கா', meaning: 'Holy Ganga River', icon: '🌊' },
            { word: 'வங்கம்', meaning: 'Bengal / Vessel', icon: '🚢' },
            { word: 'பங்கம்', meaning: 'Damage / Blemish', icon: '⚡' },
            { word: 'ரதம்', meaning: 'Chariot', icon: '🛞' },
            { word: 'சாரம்', meaning: 'Essence / Core', icon: '🧪' },
            { word: 'மார்க்கம்', meaning: 'Path / Way', icon: '🛣️' },
            { word: 'சாம்பார்', meaning: 'Lentil Stew / Sambar', icon: '🍲' },
            { word: 'ஆவாரம்', meaning: 'Avaram Shrub Flower', icon: '🌼' },
            { word: 'அஞ்சா', meaning: 'Fearless / Bold', icon: '🦁' },
            { word: 'அஞ்சாம்', meaning: 'Fifth', icon: '5️⃣' },
            { word: 'ராகம்', meaning: 'Musical Raga', icon: '🎵' },
            { word: 'ராசா', meaning: 'King / Sovereign', icon: '👑' },
            { word: 'வராதா', meaning: 'Will it not come?', icon: '❓' }
          ]
        },
        {
          id: '1-4',
          name: 'நனண',
          vowels: ["அ", "ஆ"],
          rows: [
            ["ந்", "ந", "நா"],
            ["ன்", "ன", "னா"],
            ["ண்", "ண", "ணா"]
          ],
          syllables: ["அன்", "அண்", "ஆன்", "ஆண்", "நம்", "னம்", "ணம்", "நக்", "நத்", "நப்", "கண்", "மண்", "பண்", "வண்", "சண்", "கான்", "மான்", "தான்", "வான்", "நான்", "நார்", "தார்", "கார்", "பார்", "நம் நம்", "னம் னம்", "ணம் ணம்", "கண் கண்", "மண் மண்", "பண் பண்", "மான் மான்", "நன் நன்", "பன் பன்", "கன் கன்", "தன் தன்", "வன் வன்"],
          sampleWords: [
            { word: 'அண்ணன்', meaning: 'Elder Brother', icon: '👦' },
            { word: 'அன்னம்', meaning: 'Swan', icon: '🦢' },
            { word: 'கண்', meaning: 'Eye', icon: '👁️' },
            { word: 'மண்', meaning: 'Earth / Soil', icon: '🌍' },
            { word: 'மான்', meaning: 'Deer', icon: '🦌' },
            { word: 'நாய்', meaning: 'Dog', icon: '🐕' },
            { word: 'நாம்', meaning: 'We', icon: '👥' },
            { word: 'வானம்', meaning: 'Sky', icon: '🌤️' },
            { word: 'வண்ணம்', meaning: 'Color', icon: '🎨' },
            { word: 'மணம்', meaning: 'Fragrance / Scent', icon: '🌸' },
            { word: 'மனம்', meaning: 'Mind / Heart', icon: '💭' },
            { word: 'சந்தனம்', meaning: 'Sandalwood Paste', icon: '🪵' },
            { word: 'பந்தம்', meaning: 'Bond / Relationship / Torch', icon: '🔥' },
            { word: 'பந்தா', meaning: 'Grandeur / Swagger', icon: '🕶️' },
            { word: 'தானம்', meaning: 'Charity / Giving', icon: '🎁' },
            { word: 'கானம்', meaning: 'Forest Melody / Song', icon: '🎶' },
            { word: 'நாதம்', meaning: 'Sacred Sound / Tone', icon: '🔔' },
            { word: 'நாணம்', meaning: 'Modesty / Shyness', icon: '🙈' },
            { word: 'நாட்டம்', meaning: 'Desire / Focus', icon: '🎯' },
            { word: 'நந்தனம்', meaning: 'Flower Garden', icon: '🌺' },
            { word: 'பண்', meaning: 'Ancient Tamil Melody', icon: '🎵' },
            { word: 'கண்ணன்', meaning: 'Lord Krishna', icon: '🦚' },
            { word: 'கணம்', meaning: 'Weight / Moment', icon: '⚖️' },
            { word: 'அன்னான்', meaning: 'That Gentleman', icon: '🙋' },
            { word: 'அண்ணா', meaning: 'Elder Brother (call)', icon: '🤝' },
            { word: 'பண்ணா', meaning: 'Farm / Estate', icon: '🚜' },
            { word: 'பண்டம்', meaning: 'Good / Commodity', icon: '📦' },
            { word: 'மண்டபம்', meaning: 'Pavilion / Assembly Hall', icon: '🏛️' },
            { word: 'அந்தம்', meaning: 'Conclusion / End', icon: '🏁' },
            { word: 'நந்தா', meaning: 'Everlasting Light', icon: '🪔' },
            { word: 'கந்தன்', meaning: 'Lord Murugan', icon: '🪶' },
            { word: 'மாந்தர்', meaning: 'Human Beings / Mortals', icon: '🧑‍🤝‍🧑' },
            { word: 'சாந்தம்', meaning: 'Peace / Serenity', icon: '🕊️' },
            { word: 'காந்தம்', meaning: 'Magnet', icon: '🧲' },
            { word: 'பந்தயம்', meaning: 'Race / Competition', icon: '🏇' },
            { word: 'நார்', meaning: 'Coir / Fiber', icon: '🧶' },
            { word: 'தந்தம்', meaning: 'Elephant Tusk / Ivory', icon: '🐘' },
            { word: 'மன்னன்', meaning: 'King / Emperor', icon: '👑' },
            { word: 'கன்னம்', meaning: 'Cheek', icon: '😊' },
            { word: 'வனம்', meaning: 'Lush Forest', icon: '🌲' },
            { word: 'பன்னம்', meaning: 'Leaves / Foliage', icon: '🌿' }
          ]
        },
        {
          id: '1-5',
          name: 'லளழ',
          vowels: ["அ", "ஆ"],
          rows: [
            ["ல்", "ல", "லா"],
            ["ள்", "ள", "ளா"],
            ["ழ்", "ழ", "ழா"]
          ],
          syllables: ["அல்", "அள்", "ஆழ்", "ஆல்", "ஆள்", "பால்", "கால்", "வால்", "சால்", "நல்", "பல்", "கல்", "வல்", "மல்", "சல்", "வாள்", "நாள்", "காள்", "பாள்", "பள்", "கள்", "தள்", "வள்", "மள்", "யாழ்", "பாழ்", "தாழ்", "வாழ்", "கல் கல்", "பல் பல்", "கால் கால்", "பால் பால்", "வால் வால்", "சல் சல்", "மல் மல்", "நல் நல்", "வாள் வாள்", "நாள் நாள்", "பள் பள்", "கள் கள்", "தள் தள்", "யாழ் யாழ்", "பாழ் பாழ்", "தாழ் தாழ்", "வாழ் வாழ்"],
          sampleWords: [
            { word: 'பால்', meaning: 'Milk', icon: '🥛' },
            { word: 'கல்', meaning: 'Stone', icon: '🪨' },
            { word: 'கால்', meaning: 'Leg / Foot', icon: '🦶' },
            { word: 'பாலம்', meaning: 'Bridge', icon: '🌉' },
            { word: 'காலம்', meaning: 'Time / Era', icon: '⏰' },
            { word: 'ஆலமரம்', meaning: 'Banyan Tree', icon: '🌳' },
            { word: 'வாள்', meaning: 'Sword', icon: '⚔️' },
            { word: 'நாள்', meaning: 'Day / Date', icon: '📅' },
            { word: 'தாளம்', meaning: 'Rhythm / Musical Beat', icon: '🥁' },
            { word: 'பள்ளம்', meaning: 'Pit / Low Trench', icon: '🕳️' },
            { word: 'பழம்', meaning: 'Fruit', icon: '🍎' },
            { word: 'யாழ்', meaning: 'Ancient Tamil Harp', icon: '🎵' },
            { word: 'வால்', meaning: 'Tail', icon: '🐒' },
            { word: 'பல்', meaning: 'Tooth', icon: '🦷' },
            { word: 'பலம்', meaning: 'Physical Strength / Power', icon: '💪' },
            { word: 'வலம்', meaning: 'Clockwise / Right Side', icon: '↪️' },
            { word: 'கலம்', meaning: 'Vessel / Ship', icon: '🚢' },
            { word: 'சால்', meaning: 'Furrow / Shawl', icon: '🧣' },
            { word: 'பாழ்', meaning: 'Ruin / Desolation', icon: '🏚️' },
            { word: 'தாழ்', meaning: 'Door Latch / Low', icon: '🔒' },
            { word: 'வாழ்', meaning: 'To Live / Prosper', icon: '🌱' },
            { word: 'ஆழம்', meaning: 'Depth / Ocean Deep', icon: '🌊' },
            { word: 'ஆள', meaning: 'To Rule / Administer', icon: '👑' },
            { word: 'களம்', meaning: 'Field / Arena', icon: '🏟️' },
            { word: 'வளம்', meaning: 'Prosperity / Wealth', icon: '🌾' },
            { word: 'காளான்', meaning: 'Mushroom', icon: '🍄' },
            { word: 'மலர்', meaning: 'Blossomed Flower', icon: '🌺' },
            { word: 'கழகம்', meaning: 'Federation / Society', icon: '🏛️' },
            { word: 'வழக்கம்', meaning: 'Custom / Tradition', icon: '📜' },
            { word: 'தள்ளா', meaning: 'Staggering / To Push', icon: '🚶' },
            { word: 'வல்லம்', meaning: 'Strength / Fortress', icon: '🏰' },
            { word: 'பல்லம்', meaning: 'Lowland / Basin', icon: '🏞️' },
            { word: 'கல்லா', meaning: 'Shop Cash Box', icon: '💵' },
            { word: 'சாம்பல்', meaning: 'Sacred Ash', icon: '🌋' },
            { word: 'காவல்', meaning: 'Security / Guarding', icon: '👮' },
            { word: 'ஆவல்', meaning: 'Eagerness / Zeal', icon: '✨' },
            { word: 'அள்ளல்', meaning: 'Scooping / Bounty', icon: '🤲' },
            { word: 'சன்னல்', meaning: 'Window', icon: '🪟' },
            { word: 'கண்ணா', meaning: 'Beloved Child / Krishna', icon: '💙' },
            { word: 'நல்', meaning: 'Good / Noble', icon: '🌟' },
            { word: 'நற்காலம்', meaning: 'Good Times / Golden Era', icon: '☀️' },
            { word: 'சவால்', meaning: 'Challenge / Duel', icon: '🥊' },
            { word: 'தபால்', meaning: 'Post / Postal Mail', icon: '✉️' },
            { word: 'கழல்', meaning: 'Warrior Anklet', icon: '🔔' },
            { word: 'பளபள', meaning: 'Glistening / Sparkling', icon: '✨' },
            { word: 'சலசல', meaning: 'Babbling Stream Sound', icon: '🌊' },
            { word: 'படபட', meaning: 'Fluttering Heart Sound', icon: '💓' }
          ]
        }
      ]
    },

    2: {
      number: 2,
      title: 'Level 2 Letters',
      currentSetIndex: 0,
      sets: [
        {
          id: '2-1',
          name: 'டபமய',
          vowels: ["அ", "ஆ", "இ", "ஈ"],
          rows: [
            ["ட்", "ட", "டா", "டி", "டீ"],
            ["ப்", "ப", "பா", "பி", "பீ"],
            ["ம்", "ம", "மா", "மி", "மீ"],
            ["ய்", "ய", "யா", "யி", "யீ"]
          ],
          syllables: ["இப்", "இம்", "இட்", "இய்", "ஈப்", "ஈம்", "ஈட்", "ஈய்", "டிப்", "டீப்", "பிப்", "பீப்", "மிப்", "மீப்", "டிம்", "டீம்", "பிம்", "பீம்", "மிம்", "மீம்", "பிடி", "இடி", "படி", "மடி", "அடி", "மாடி", "டீப் டீப்", "பீப் பீப்", "டிப் டிப்", "பிப் பிப்", "டிம் டிம்", "பிம் பிம்", "பிடி பிடி", "படி படி", "அடி அடி", "சித்", "சீத்", "கித்", "கீத்", "தித்", "தீத்", "வித்", "வீத்", "சிக்", "சீக்", "கிக்", "கீக", "திக்", "தீக்", "விக்", "வீக்", "சிப்", "சீப்", "கிப்", "கீப்", "திப்", "தீப்", "விப்", "வீப்", "சிம்", "சீம்", "கிம்", "கீம்", "திம்", "தீம்", "விம்", "வீம்", "திக் திக்", "சிக் சிக்", "கிக் கிக்", "வித் வித்", "தித் தித்", "தீ தீ", "வீ வீ", "சீ சீ", "திம் திம்", "கிம் கிம்", "ரித்", "ரீத்", "றித்", "றீத்", "ரிப்", "ரீப்", "றிப்", "றீப்", "ரிம்", "ரீம்", "றிம்", "றீம்", "ரிங்", "ரீங்", "றிங்", "றீங்", "அரி", "பரி", "கரி", "வரி", "சரி", "விரி", "அறி", "பறி", "மறி", "ரிம் ரிம்", "ரீம் ரீம்", "றிம் றிம்", "றீம் றீம்", "ரிங் ரிங்", "ரீங் ரீங்", "சரி சரி", "வரி வரி", "பரி பரி", "நித்", "நீத்", "னித்", "னீத்", "ணித்", "ணீத்", "நிப்", "நீப்", "னிப்", "னீப்", "ணிப்", "ணீப்", "நிம்", "நீம்", "னிம்", "னீம்", "ணிம்", "ணீம்", "கனி", "பனி", "தனி", "இனி", "அணி", "மணி", "பணி", "நிம் நிம்", "நீம் நீம்", "னிம் னிம்", "னீம் னீம்", "ணிம் ணிம்", "ணீம் ணீம்", "பனி பனி", "மணி மணி", "தனி தனி", "லித்", "லீத்", "ளித்", "ளீத்", "ழித்", "ழீத்", "லிப்", "லீப்", "ளிப்", "ளீப்", "ழிப்", "ழீப்", "லிம்", "லீம்", "ளிம்", "ளீம்", "ழிம்", "ழீம்", "தில்", "வில்", "வழி", "விழி", "வலி", "பலி", "காலி", "வாலி", "மல்லி", "கிளி கிளி", "வலி வலி", "வழி வழி", "விழி விழி", "மில் மில்", "தில் தில்", "வில் வில்", "பல்லி பல்லி", "மல்லி மல்லி"],
          sampleWords: [
            { word: 'ஈ', meaning: 'Housefly', icon: '🪰' },
            { word: 'இடி', meaning: 'Thunder / Strike', icon: '⚡' },
            { word: 'பிடி', meaning: 'Catch / Hold', icon: '✊' },
            { word: 'மடி', meaning: 'Lap / Fold', icon: '🧎' },
            { word: 'படி', meaning: 'Study / Step', icon: '📚' },
            { word: 'அடி', meaning: 'Foot / Base / Beat', icon: '👣' },
            { word: 'ஆடி', meaning: 'Mirror / Tamil Month', icon: '🪞' },
            { word: 'மாடி', meaning: 'Terrace / Balcony', icon: '🏢' },
            { word: 'பாடி', meaning: 'Singing / Camp', icon: '🎶' },
            { word: 'பாட்டி', meaning: 'Grandmother', icon: '👵' },
            { word: 'பட்டி', meaning: 'Rural Village / Pen', icon: '🏡' },
            { word: 'ஈட்டி', meaning: 'Spear / Javelin', icon: '🗡️' },
            { word: 'பீடம்', meaning: 'Altar / Pedestal', icon: '🏛️' },
            { word: 'இடம்', meaning: 'Place / Position', icon: '📍' },
            { word: 'மிட்டாய்', meaning: 'Candy / Sweet', icon: '🍬' },
            { word: 'மாமி', meaning: 'Aunt', icon: '👩' },
            { word: 'ஈயம்', meaning: 'Lead Metal', icon: '🪙' },
            { word: 'தீ', meaning: 'Fire / Flame', icon: '🔥' },
            { word: 'வீதி', meaning: 'Street / Avenue', icon: '🛣️' },
            { word: 'கத்தி', meaning: 'Knife', icon: '🔪' },
            { word: 'அத்தி', meaning: 'Cluster Fig Tree', icon: '🌳' },
            { word: 'விடி', meaning: 'Dawn / Awaken', icon: '🌅' },
            { word: 'கீதம்', meaning: 'Sacred Song', icon: '🎶' },
            { word: 'விவாதம்', meaning: 'Debate / Discussion', icon: '🗣️' },
            { word: 'ஆதி', meaning: 'Origin / Primeval', icon: '🌅' },
            { word: 'சிப்பம்', meaning: 'Parcel / Bundle', icon: '📦' },
            { word: 'சிப்பி', meaning: 'Seashell / Oyster', icon: '🐚' },
            { word: 'தீபம்', meaning: 'Oil Lamp / Light', icon: '🪔' },
            { word: 'கவி', meaning: 'Poet / Verse', icon: '📜' },
            { word: 'சீவி', meaning: 'To Comb / Slice', icon: '🪮' },
            { word: 'சீதா', meaning: 'Custard Apple / Sita', icon: '🍈' },
            { word: 'பித்தம்', meaning: 'Bile / Passion', icon: '🧪' },
            { word: 'தாடி', meaning: 'Beard', icon: '🧔' },
            { word: 'தம்பி', meaning: 'Younger Brother', icon: '👦' },
            { word: 'அரி', meaning: 'Harvest Grain / Lion', icon: '🌾' },
            { word: 'பரி', meaning: 'Swift Horse', icon: '🐎' },
            { word: 'கரி', meaning: 'Charcoal / Black', icon: '⚫' },
            { word: 'வரி', meaning: 'Line / Stripe / Tax', icon: '📝' },
            { word: 'விரி', meaning: 'Spread Open', icon: '📖' },
            { word: 'சரி', meaning: 'Right / Correct', icon: '✅' },
            { word: 'கீரி', meaning: 'Mongoose', icon: '🦦' },
            { word: 'திரி', meaning: 'Lamp Wick', icon: '🕯️' },
            { word: 'அறி', meaning: 'Wisdom / Knowledge', icon: '🧠' },
            { word: 'பறி', meaning: 'Pluck / Snatch', icon: '🌸' },
            { word: 'மறி', meaning: 'Young Goat / Shield', icon: '🐐' },
            { word: 'அரிசி', meaning: 'Uncooked Rice', icon: '🍚' },
            { word: 'கிரீடம்', meaning: 'Royal Crown', icon: '👑' },
            { word: 'விசிறி', meaning: 'Handheld Fan', icon: '🪭' },
            { word: 'பத்திரம்', meaning: 'Safety / Document', icon: '📄' },
            { word: 'சித்திரம்', meaning: 'Painting / Artwork', icon: '🖼️' },
            { word: 'ராத்திரி', meaning: 'Night Time', icon: '🌙' },
            { word: 'ரீங்காரம்', meaning: 'Humming of Bees', icon: '🐝' },
            { word: 'சிங்கம்', meaning: 'Lion', icon: '🦁' },
            { word: 'சிற்பம்', meaning: 'Sculpture / Statue', icon: '🗿' },
            { word: 'வீரம்', meaning: 'Courage / Bravery', icon: '🛡️' },
            { word: 'ரவி', meaning: 'Bright Sun', icon: '☀️' },
            { word: 'சீரம்', meaning: 'Fluid / Essence', icon: '💧' },
            { word: 'ஈரம்', meaning: 'Moisture / Wet', icon: '💧' },
            { word: 'தங்கச்சி', meaning: 'Little Sister', icon: '👧' },
            { word: 'நீதி', meaning: 'Justice / Righteousness', icon: '⚖️' },
            { word: 'நீர்', meaning: 'Water', icon: '💧' },
            { word: 'தண்ணீர்', meaning: 'Drinking Water', icon: '🚰' },
            { word: 'கனி', meaning: 'Ripe Sweet Fruit', icon: '🍎' },
            { word: 'பனி', meaning: 'Snow / Morning Dew', icon: '❄️' },
            { word: 'நனி', meaning: 'Abundantly / Very', icon: '✨' },
            { word: 'தனி', meaning: 'Solitary / Unique', icon: '🧍' },
            { word: 'இனி', meaning: 'Henceforth / Sweetness', icon: '🍬' },
            { word: 'அணி', meaning: 'Ornament / Lineup', icon: '🏅' },
            { word: 'மணி', meaning: 'Chime Bell / Gem', icon: '🔔' },
            { word: 'பணி', meaning: 'Duty / Work', icon: '💼' },
            { word: 'கன்னி', meaning: 'Young Maiden', icon: '👧' },
            { word: 'நிமிடம்', meaning: 'Minute / Second', icon: '⏱️' },
            { word: 'நாடி', meaning: 'Pulse / Nerve', icon: '💓' },
            { word: 'பன்னீர்', meaning: 'Scented Rosewater', icon: '🌹' },
            { word: 'கண்ணீர்', meaning: 'Tears', icon: '😢' },
            { word: 'வினா', meaning: 'Inquiry / Question', icon: '❓' },
            { word: 'தினசரி', meaning: 'Daily Journal', icon: '📰' },
            { word: 'மனிதன்', meaning: 'Human Being', icon: '👨' },
            { word: 'மீன்', meaning: 'Fish', icon: '🐟' },
            { word: 'வண்டி', meaning: 'Cart / Vehicle', icon: '🛒' },
            { word: 'விண்', meaning: 'Sky / Outer Space', icon: '🌌' },
            { word: 'கிண்ணம்', meaning: 'Metal Bowl', icon: '🥣' },
            { word: 'நரி', meaning: 'Jackal / Fox', icon: '🦊' },
            { word: 'பன்றி', meaning: 'Boar / Pig', icon: '🐖' },
            { word: 'நன்றி', meaning: 'Thank You / Gratitude', icon: '💐' },
            { word: 'மந்திரி', meaning: 'Minister / Counselor', icon: '👔' },
            { word: 'வில்', meaning: 'Archer Bow', icon: '🏹' },
            { word: 'விரல்', meaning: 'Finger', icon: '☝️' },
            { word: 'கல்வி', meaning: 'Education', icon: '🎓' },
            { word: 'கிளி', meaning: 'Green Parrot', icon: '🦜' },
            { word: 'மயில்', meaning: 'Peacock', icon: '🦚' },
            { word: 'தமிழ்', meaning: 'Classical Tamil', icon: '📖' },
            { word: 'அனில்', meaning: 'Striped Squirrel', icon: '🐿️' },
            { word: 'தாலி', meaning: 'Sacred Necklace', icon: '📿' },
            { word: 'பள்ளி', meaning: 'School', icon: '🏫' },
            { word: 'வழி', meaning: 'Path / Gateway', icon: '🛣️' },
            { word: 'விழி', meaning: 'Watchful Eye', icon: '👁️' },
            { word: 'கழி', meaning: 'Bamboo Staff', icon: '🦯' },
            { word: 'அலி', meaning: 'Gentle Friend', icon: '🤝' },
            { word: 'வலி', meaning: 'Strength / Ache', icon: '🩹' },
            { word: 'பலி', meaning: 'Sacred Tribute', icon: '🕊️' },
            { word: 'விரலி', meaning: 'Turmeric Finger', icon: '🌿' },
            { word: 'காலி', meaning: 'Vacant / Empty', icon: '📭' },
            { word: 'சாலி', meaning: 'Fine Silk Weaver', icon: '🌾' },
            { word: 'வாலி', meaning: 'Water Bucket', icon: '🪣' },
            { word: 'பாலி', meaning: 'Ancient Pali Language', icon: '📜' },
            { word: 'நிழல்', meaning: 'Cool Shade / Shadow', icon: '👥' },
            { word: 'தில்', meaning: 'Courage / Guts', icon: '🦁' },
            { word: 'மல்லி', meaning: 'White Jasmine', icon: '🌼' },
            { word: 'பல்லி', meaning: 'Wall Gecko', icon: '🦎' },
            { word: 'வில்லி', meaning: 'Sharp Archeress', icon: '🎯' },
            { word: 'கிள்ளி', meaning: 'Gentle Pinch / Chola King', icon: '🤏' },
            { word: 'மார்கழி', meaning: 'Winter Margazhi Month', icon: '❄️' },
            { word: 'நீளம்', meaning: 'Length / Blue', icon: '📏' },
            { word: 'நீச்சல்', meaning: 'Swimming', icon: '🏊' },
            { word: 'ஆப்பிள்', meaning: 'Apple', icon: '🍎' },
            { word: 'நிலா', meaning: 'Moon', icon: '🌙' },
            { word: 'நிலம்', meaning: 'Land / Earth', icon: '🏞️' }
          ]
        },
        {
          id: '2-2',
          name: 'சகதவ',
          vowels: ["அ", "ஆ", "இ", "ஈ"],
          rows: [
            ["ச்", "ச", "சா", "சி", "சீ"],
            ["க்", "க", "கா", "கி", "கீ"],
            ["த்", "த", "தா", "தி", "தீ"],
            ["வ்", "வ", "வா", "வி", "வீ"]
          ],
          syllables: ["இப்", "இம்", "இட்", "இய்", "ஈப்", "ஈம்", "ஈட்", "ஈய்", "டிப்", "டீப்", "பிப்", "பீப்", "மிப்", "மீப்", "டிம்", "டீம்", "பிம்", "பீம்", "மிம்", "மீம்", "பிடி", "இடி", "படி", "மடி", "அடி", "மாடி", "டீப் டீப்", "பீப் பீப்", "டிப் டிப்", "பிப் பிப்", "டிம் டிம்", "பிம் பிம்", "பிடி பிடி", "படி படி", "அடி அடி", "சித்", "சீத்", "கித்", "கீத்", "தித்", "தீத்", "வித்", "வீத்", "சிக்", "சீக்", "கிக்", "கீக", "திக்", "தீக்", "விக்", "வீக்", "சிப்", "சீப்", "கிப்", "கீப்", "திப்", "தீப்", "விப்", "வீப்", "சிம்", "சீம்", "கிம்", "கீம்", "திம்", "தீம்", "விம்", "வீம்", "திக் திக்", "சிக் சிக்", "கிக் கிக்", "வித் வித்", "தித் தித்", "தீ தீ", "வீ வீ", "சீ சீ", "திம் திம்", "கிம் கிம்", "ரித்", "ரீத்", "றித்", "றீத்", "ரிப்", "ரீப்", "றிப்", "றீப்", "ரிம்", "ரீம்", "றிம்", "றீம்", "ரிங்", "ரீங்", "றிங்", "றீங்", "அரி", "பரி", "கரி", "வரி", "சரி", "விரி", "அறி", "பறி", "மறி", "ரிம் ரிம்", "ரீம் ரீம்", "றிம் றிம்", "றீம் றீம்", "ரிங் ரிங்", "ரீங் ரீங்", "சரி சரி", "வரி வரி", "பரி பரி", "நித்", "நீத்", "னித்", "னீத்", "ணித்", "ணீத்", "நிப்", "நீப்", "னிப்", "னீப்", "ணிப்", "ணீப்", "நிம்", "நீம்", "னிம்", "னீம்", "ணிம்", "ணீம்", "கனி", "பனி", "தனி", "இனி", "அணி", "மணி", "பணி", "நிம் நிம்", "நீம் நீம்", "னிம் னிம்", "னீம் னீம்", "ணிம் ணிம்", "ணீம் ணீம்", "பனி பனி", "மணி மணி", "தனி தனி", "லித்", "லீத்", "ளித்", "ளீத்", "ழித்", "ழீத்", "லிப்", "லீப்", "ளிப்", "ளீப்", "ழிப்", "ழீப்", "லிம்", "லீம்", "ளிம்", "ளீம்", "ழிம்", "ழீம்", "தில்", "வில்", "வழி", "விழி", "வலி", "பலி", "காலி", "வாலி", "மல்லி", "கிளி கிளி", "வலி வலி", "வழி வழி", "விழி விழி", "மில் மில்", "தில் தில்", "வில் வில்", "பல்லி பல்லி", "மல்லி மல்லி"],
          sampleWords: [
            { word: 'ஈ', meaning: 'Housefly', icon: '🪰' },
            { word: 'இடி', meaning: 'Thunder / Strike', icon: '⚡' },
            { word: 'பிடி', meaning: 'Catch / Hold', icon: '✊' },
            { word: 'மடி', meaning: 'Lap / Fold', icon: '🧎' },
            { word: 'படி', meaning: 'Study / Step', icon: '📚' },
            { word: 'அடி', meaning: 'Foot / Base / Beat', icon: '👣' },
            { word: 'ஆடி', meaning: 'Mirror / Tamil Month', icon: '🪞' },
            { word: 'மாடி', meaning: 'Terrace / Balcony', icon: '🏢' },
            { word: 'பாடி', meaning: 'Singing / Camp', icon: '🎶' },
            { word: 'பாட்டி', meaning: 'Grandmother', icon: '👵' },
            { word: 'பட்டி', meaning: 'Rural Village / Pen', icon: '🏡' },
            { word: 'ஈட்டி', meaning: 'Spear / Javelin', icon: '🗡️' },
            { word: 'பீடம்', meaning: 'Altar / Pedestal', icon: '🏛️' },
            { word: 'இடம்', meaning: 'Place / Position', icon: '📍' },
            { word: 'மிட்டாய்', meaning: 'Candy / Sweet', icon: '🍬' },
            { word: 'மாமி', meaning: 'Aunt', icon: '👩' },
            { word: 'ஈயம்', meaning: 'Lead Metal', icon: '🪙' },
            { word: 'தீ', meaning: 'Fire / Flame', icon: '🔥' },
            { word: 'வீதி', meaning: 'Street / Avenue', icon: '🛣️' },
            { word: 'கத்தி', meaning: 'Knife', icon: '🔪' },
            { word: 'அத்தி', meaning: 'Cluster Fig Tree', icon: '🌳' },
            { word: 'விடி', meaning: 'Dawn / Awaken', icon: '🌅' },
            { word: 'கீதம்', meaning: 'Sacred Song', icon: '🎶' },
            { word: 'விவாதம்', meaning: 'Debate / Discussion', icon: '🗣️' },
            { word: 'ஆதி', meaning: 'Origin / Primeval', icon: '🌅' },
            { word: 'சிப்பம்', meaning: 'Parcel / Bundle', icon: '📦' },
            { word: 'சிப்பி', meaning: 'Seashell / Oyster', icon: '🐚' },
            { word: 'தீபம்', meaning: 'Oil Lamp / Light', icon: '🪔' },
            { word: 'கவி', meaning: 'Poet / Verse', icon: '📜' },
            { word: 'சீவி', meaning: 'To Comb / Slice', icon: '🪮' },
            { word: 'சீதா', meaning: 'Custard Apple / Sita', icon: '🍈' },
            { word: 'பித்தம்', meaning: 'Bile / Passion', icon: '🧪' },
            { word: 'தாடி', meaning: 'Beard', icon: '🧔' },
            { word: 'தம்பி', meaning: 'Younger Brother', icon: '👦' },
            { word: 'அரி', meaning: 'Harvest Grain / Lion', icon: '🌾' },
            { word: 'பரி', meaning: 'Swift Horse', icon: '🐎' },
            { word: 'கரி', meaning: 'Charcoal / Black', icon: '⚫' },
            { word: 'வரி', meaning: 'Line / Stripe / Tax', icon: '📝' },
            { word: 'விரி', meaning: 'Spread Open', icon: '📖' },
            { word: 'சரி', meaning: 'Right / Correct', icon: '✅' },
            { word: 'கீரி', meaning: 'Mongoose', icon: '🦦' },
            { word: 'திரி', meaning: 'Lamp Wick', icon: '🕯️' },
            { word: 'அறி', meaning: 'Wisdom / Knowledge', icon: '🧠' },
            { word: 'பறி', meaning: 'Pluck / Snatch', icon: '🌸' },
            { word: 'மறி', meaning: 'Young Goat / Shield', icon: '🐐' },
            { word: 'அரிசி', meaning: 'Uncooked Rice', icon: '🍚' },
            { word: 'கிரீடம்', meaning: 'Royal Crown', icon: '👑' },
            { word: 'விசிறி', meaning: 'Handheld Fan', icon: '🪭' },
            { word: 'பத்திரம்', meaning: 'Safety / Document', icon: '📄' },
            { word: 'சித்திரம்', meaning: 'Painting / Artwork', icon: '🖼️' },
            { word: 'ராத்திரி', meaning: 'Night Time', icon: '🌙' },
            { word: 'ரீங்காரம்', meaning: 'Humming of Bees', icon: '🐝' },
            { word: 'சிங்கம்', meaning: 'Lion', icon: '🦁' },
            { word: 'சிற்பம்', meaning: 'Sculpture / Statue', icon: '🗿' },
            { word: 'வீரம்', meaning: 'Courage / Bravery', icon: '🛡️' },
            { word: 'ரவி', meaning: 'Bright Sun', icon: '☀️' },
            { word: 'சீரம்', meaning: 'Fluid / Essence', icon: '💧' },
            { word: 'ஈரம்', meaning: 'Moisture / Wet', icon: '💧' },
            { word: 'தங்கச்சி', meaning: 'Little Sister', icon: '👧' },
            { word: 'நீதி', meaning: 'Justice / Righteousness', icon: '⚖️' },
            { word: 'நீர்', meaning: 'Water', icon: '💧' },
            { word: 'தண்ணீர்', meaning: 'Drinking Water', icon: '🚰' },
            { word: 'கனி', meaning: 'Ripe Sweet Fruit', icon: '🍎' },
            { word: 'பனி', meaning: 'Snow / Morning Dew', icon: '❄️' },
            { word: 'நனி', meaning: 'Abundantly / Very', icon: '✨' },
            { word: 'தனி', meaning: 'Solitary / Unique', icon: '🧍' },
            { word: 'இனி', meaning: 'Henceforth / Sweetness', icon: '🍬' },
            { word: 'அணி', meaning: 'Ornament / Lineup', icon: '🏅' },
            { word: 'மணி', meaning: 'Chime Bell / Gem', icon: '🔔' },
            { word: 'பணி', meaning: 'Duty / Work', icon: '💼' },
            { word: 'கன்னி', meaning: 'Young Maiden', icon: '👧' },
            { word: 'நிமிடம்', meaning: 'Minute / Second', icon: '⏱️' },
            { word: 'நாடி', meaning: 'Pulse / Nerve', icon: '💓' },
            { word: 'பன்னீர்', meaning: 'Scented Rosewater', icon: '🌹' },
            { word: 'கண்ணீர்', meaning: 'Tears', icon: '😢' },
            { word: 'வினா', meaning: 'Inquiry / Question', icon: '❓' },
            { word: 'தினசரி', meaning: 'Daily Journal', icon: '📰' },
            { word: 'மனிதன்', meaning: 'Human Being', icon: '👨' },
            { word: 'மீன்', meaning: 'Fish', icon: '🐟' },
            { word: 'வண்டி', meaning: 'Cart / Vehicle', icon: '🛒' },
            { word: 'விண்', meaning: 'Sky / Outer Space', icon: '🌌' },
            { word: 'கிண்ணம்', meaning: 'Metal Bowl', icon: '🥣' },
            { word: 'நரி', meaning: 'Jackal / Fox', icon: '🦊' },
            { word: 'பன்றி', meaning: 'Boar / Pig', icon: '🐖' },
            { word: 'நன்றி', meaning: 'Thank You / Gratitude', icon: '💐' },
            { word: 'மந்திரி', meaning: 'Minister / Counselor', icon: '👔' },
            { word: 'வில்', meaning: 'Archer Bow', icon: '🏹' },
            { word: 'விரல்', meaning: 'Finger', icon: '☝️' },
            { word: 'கல்வி', meaning: 'Education', icon: '🎓' },
            { word: 'கிளி', meaning: 'Green Parrot', icon: '🦜' },
            { word: 'மயில்', meaning: 'Peacock', icon: '🦚' },
            { word: 'தமிழ்', meaning: 'Classical Tamil', icon: '📖' },
            { word: 'அனில்', meaning: 'Striped Squirrel', icon: '🐿️' },
            { word: 'தாலி', meaning: 'Sacred Necklace', icon: '📿' },
            { word: 'பள்ளி', meaning: 'School', icon: '🏫' },
            { word: 'வழி', meaning: 'Path / Gateway', icon: '🛣️' },
            { word: 'விழி', meaning: 'Watchful Eye', icon: '👁️' },
            { word: 'கழி', meaning: 'Bamboo Staff', icon: '🦯' },
            { word: 'அலி', meaning: 'Gentle Friend', icon: '🤝' },
            { word: 'வலி', meaning: 'Strength / Ache', icon: '🩹' },
            { word: 'பலி', meaning: 'Sacred Tribute', icon: '🕊️' },
            { word: 'விரலி', meaning: 'Turmeric Finger', icon: '🌿' },
            { word: 'காலி', meaning: 'Vacant / Empty', icon: '📭' },
            { word: 'சாலி', meaning: 'Fine Silk Weaver', icon: '🌾' },
            { word: 'வாலி', meaning: 'Water Bucket', icon: '🪣' },
            { word: 'பாலி', meaning: 'Ancient Pali Language', icon: '📜' },
            { word: 'நிழல்', meaning: 'Cool Shade / Shadow', icon: '👥' },
            { word: 'தில்', meaning: 'Courage / Guts', icon: '🦁' },
            { word: 'மல்லி', meaning: 'White Jasmine', icon: '🌼' },
            { word: 'பல்லி', meaning: 'Wall Gecko', icon: '🦎' },
            { word: 'வில்லி', meaning: 'Sharp Archeress', icon: '🎯' },
            { word: 'கிள்ளி', meaning: 'Gentle Pinch / Chola King', icon: '🤏' },
            { word: 'மார்கழி', meaning: 'Winter Margazhi Month', icon: '❄️' },
            { word: 'நீளம்', meaning: 'Length / Blue', icon: '📏' },
            { word: 'நீச்சல்', meaning: 'Swimming', icon: '🏊' },
            { word: 'ஆப்பிள்', meaning: 'Apple', icon: '🍎' },
            { word: 'நிலா', meaning: 'Moon', icon: '🌙' },
            { word: 'நிலம்', meaning: 'Land / Earth', icon: '🏞️' }
          ]
        },
        {
          id: '2-3',
          name: 'ஙஞரற',
          vowels: ["அ", "ஆ", "இ", "ஈ"],
          rows: [
            ["ங்", "ங", "ஙா", "ஙி", "ஙீ"],
            ["ஞ்", "ஞ", "ஞா", "ஞி", "ஞீ"],
            ["ர்", "ர", "ரா", "ரி", "ரீ"],
            ["ற்", "ற", "றா", "றி", "றீ"]
          ],
          syllables: ["இப்", "இம்", "இட்", "இய்", "ஈப்", "ஈம்", "ஈட்", "ஈய்", "டிப்", "டீப்", "பிப்", "பீப்", "மிப்", "மீப்", "டிம்", "டீம்", "பிம்", "பீம்", "மிம்", "மீம்", "பிடி", "இடி", "படி", "மடி", "அடி", "மாடி", "டீப் டீப்", "பீப் பீப்", "டிப் டிப்", "பிப் பிப்", "டிம் டிம்", "பிம் பிம்", "பிடி பிடி", "படி படி", "அடி அடி", "சித்", "சீத்", "கித்", "கீத்", "தித்", "தீத்", "வித்", "வீத்", "சிக்", "சீக்", "கிக்", "கீக", "திக்", "தீக்", "விக்", "வீக்", "சிப்", "சீப்", "கிப்", "கீப்", "திப்", "தீப்", "விப்", "வீப்", "சிம்", "சீம்", "கிம்", "கீம்", "திம்", "தீம்", "விம்", "வீம்", "திக் திக்", "சிக் சிக்", "கிக் கிக்", "வித் வித்", "தித் தித்", "தீ தீ", "வீ வீ", "சீ சீ", "திம் திம்", "கிம் கிம்", "ரித்", "ரீத்", "றித்", "றீத்", "ரிப்", "ரீப்", "றிப்", "றீப்", "ரிம்", "ரீம்", "றிம்", "றீம்", "ரிங்", "ரீங்", "றிங்", "றீங்", "அரி", "பரி", "கரி", "வரி", "சரி", "விரி", "அறி", "பறி", "மறி", "ரிம் ரிம்", "ரீம் ரீம்", "றிம் றிம்", "றீம் றீம்", "ரிங் ரிங்", "ரீங் ரீங்", "சரி சரி", "வரி வரி", "பரி பரி", "நித்", "நீத்", "னித்", "னீத்", "ணித்", "ணீத்", "நிப்", "நீப்", "னிப்", "னீப்", "ணிப்", "ணீப்", "நிம்", "நீம்", "னிம்", "னீம்", "ணிம்", "ணீம்", "கனி", "பனி", "தனி", "இனி", "அணி", "மணி", "பணி", "நிம் நிம்", "நீம் நீம்", "னிம் னிம்", "னீம் னீம்", "ணிம் ணிம்", "ணீம் ணீம்", "பனி பனி", "மணி மணி", "தனி தனி", "லித்", "லீத்", "ளித்", "ளீத்", "ழித்", "ழீத்", "லிப்", "லீப்", "ளிப்", "ளீப்", "ழிப்", "ழீப்", "லிம்", "லீம்", "ளிம்", "ளீம்", "ழிம்", "ழீம்", "தில்", "வில்", "வழி", "விழி", "வலி", "பலி", "காலி", "வாலி", "மல்லி", "கிளி கிளி", "வலி வலி", "வழி வழி", "விழி விழி", "மில் மில்", "தில் தில்", "வில் வில்", "பல்லி பல்லி", "மல்லி மல்லி"],
          sampleWords: [
            { word: 'ஈ', meaning: 'Housefly', icon: '🪰' },
            { word: 'இடி', meaning: 'Thunder / Strike', icon: '⚡' },
            { word: 'பிடி', meaning: 'Catch / Hold', icon: '✊' },
            { word: 'மடி', meaning: 'Lap / Fold', icon: '🧎' },
            { word: 'படி', meaning: 'Study / Step', icon: '📚' },
            { word: 'அடி', meaning: 'Foot / Base / Beat', icon: '👣' },
            { word: 'ஆடி', meaning: 'Mirror / Tamil Month', icon: '🪞' },
            { word: 'மாடி', meaning: 'Terrace / Balcony', icon: '🏢' },
            { word: 'பாடி', meaning: 'Singing / Camp', icon: '🎶' },
            { word: 'பாட்டி', meaning: 'Grandmother', icon: '👵' },
            { word: 'பட்டி', meaning: 'Rural Village / Pen', icon: '🏡' },
            { word: 'ஈட்டி', meaning: 'Spear / Javelin', icon: '🗡️' },
            { word: 'பீடம்', meaning: 'Altar / Pedestal', icon: '🏛️' },
            { word: 'இடம்', meaning: 'Place / Position', icon: '📍' },
            { word: 'மிட்டாய்', meaning: 'Candy / Sweet', icon: '🍬' },
            { word: 'மாமி', meaning: 'Aunt', icon: '👩' },
            { word: 'ஈயம்', meaning: 'Lead Metal', icon: '🪙' },
            { word: 'தீ', meaning: 'Fire / Flame', icon: '🔥' },
            { word: 'வீதி', meaning: 'Street / Avenue', icon: '🛣️' },
            { word: 'கத்தி', meaning: 'Knife', icon: '🔪' },
            { word: 'அத்தி', meaning: 'Cluster Fig Tree', icon: '🌳' },
            { word: 'விடி', meaning: 'Dawn / Awaken', icon: '🌅' },
            { word: 'கீதம்', meaning: 'Sacred Song', icon: '🎶' },
            { word: 'விவாதம்', meaning: 'Debate / Discussion', icon: '🗣️' },
            { word: 'ஆதி', meaning: 'Origin / Primeval', icon: '🌅' },
            { word: 'சிப்பம்', meaning: 'Parcel / Bundle', icon: '📦' },
            { word: 'சிப்பி', meaning: 'Seashell / Oyster', icon: '🐚' },
            { word: 'தீபம்', meaning: 'Oil Lamp / Light', icon: '🪔' },
            { word: 'கவி', meaning: 'Poet / Verse', icon: '📜' },
            { word: 'சீவி', meaning: 'To Comb / Slice', icon: '🪮' },
            { word: 'சீதா', meaning: 'Custard Apple / Sita', icon: '🍈' },
            { word: 'பித்தம்', meaning: 'Bile / Passion', icon: '🧪' },
            { word: 'தாடி', meaning: 'Beard', icon: '🧔' },
            { word: 'தம்பி', meaning: 'Younger Brother', icon: '👦' },
            { word: 'அரி', meaning: 'Harvest Grain / Lion', icon: '🌾' },
            { word: 'பரி', meaning: 'Swift Horse', icon: '🐎' },
            { word: 'கரி', meaning: 'Charcoal / Black', icon: '⚫' },
            { word: 'வரி', meaning: 'Line / Stripe / Tax', icon: '📝' },
            { word: 'விரி', meaning: 'Spread Open', icon: '📖' },
            { word: 'சரி', meaning: 'Right / Correct', icon: '✅' },
            { word: 'கீரி', meaning: 'Mongoose', icon: '🦦' },
            { word: 'திரி', meaning: 'Lamp Wick', icon: '🕯️' },
            { word: 'அறி', meaning: 'Wisdom / Knowledge', icon: '🧠' },
            { word: 'பறி', meaning: 'Pluck / Snatch', icon: '🌸' },
            { word: 'மறி', meaning: 'Young Goat / Shield', icon: '🐐' },
            { word: 'அரிசி', meaning: 'Uncooked Rice', icon: '🍚' },
            { word: 'கிரீடம்', meaning: 'Royal Crown', icon: '👑' },
            { word: 'விசிறி', meaning: 'Handheld Fan', icon: '🪭' },
            { word: 'பத்திரம்', meaning: 'Safety / Document', icon: '📄' },
            { word: 'சித்திரம்', meaning: 'Painting / Artwork', icon: '🖼️' },
            { word: 'ராத்திரி', meaning: 'Night Time', icon: '🌙' },
            { word: 'ரீங்காரம்', meaning: 'Humming of Bees', icon: '🐝' },
            { word: 'சிங்கம்', meaning: 'Lion', icon: '🦁' },
            { word: 'சிற்பம்', meaning: 'Sculpture / Statue', icon: '🗿' },
            { word: 'வீரம்', meaning: 'Courage / Bravery', icon: '🛡️' },
            { word: 'ரவி', meaning: 'Bright Sun', icon: '☀️' },
            { word: 'சீரம்', meaning: 'Fluid / Essence', icon: '💧' },
            { word: 'ஈரம்', meaning: 'Moisture / Wet', icon: '💧' },
            { word: 'தங்கச்சி', meaning: 'Little Sister', icon: '👧' },
            { word: 'நீதி', meaning: 'Justice / Righteousness', icon: '⚖️' },
            { word: 'நீர்', meaning: 'Water', icon: '💧' },
            { word: 'தண்ணீர்', meaning: 'Drinking Water', icon: '🚰' },
            { word: 'கனி', meaning: 'Ripe Sweet Fruit', icon: '🍎' },
            { word: 'பனி', meaning: 'Snow / Morning Dew', icon: '❄️' },
            { word: 'நனி', meaning: 'Abundantly / Very', icon: '✨' },
            { word: 'தனி', meaning: 'Solitary / Unique', icon: '🧍' },
            { word: 'இனி', meaning: 'Henceforth / Sweetness', icon: '🍬' },
            { word: 'அணி', meaning: 'Ornament / Lineup', icon: '🏅' },
            { word: 'மணி', meaning: 'Chime Bell / Gem', icon: '🔔' },
            { word: 'பணி', meaning: 'Duty / Work', icon: '💼' },
            { word: 'கன்னி', meaning: 'Young Maiden', icon: '👧' },
            { word: 'நிமிடம்', meaning: 'Minute / Second', icon: '⏱️' },
            { word: 'நாடி', meaning: 'Pulse / Nerve', icon: '💓' },
            { word: 'பன்னீர்', meaning: 'Scented Rosewater', icon: '🌹' },
            { word: 'கண்ணீர்', meaning: 'Tears', icon: '😢' },
            { word: 'வினா', meaning: 'Inquiry / Question', icon: '❓' },
            { word: 'தினசரி', meaning: 'Daily Journal', icon: '📰' },
            { word: 'மனிதன்', meaning: 'Human Being', icon: '👨' },
            { word: 'மீன்', meaning: 'Fish', icon: '🐟' },
            { word: 'வண்டி', meaning: 'Cart / Vehicle', icon: '🛒' },
            { word: 'விண்', meaning: 'Sky / Outer Space', icon: '🌌' },
            { word: 'கிண்ணம்', meaning: 'Metal Bowl', icon: '🥣' },
            { word: 'நரி', meaning: 'Jackal / Fox', icon: '🦊' },
            { word: 'பன்றி', meaning: 'Boar / Pig', icon: '🐖' },
            { word: 'நன்றி', meaning: 'Thank You / Gratitude', icon: '💐' },
            { word: 'மந்திரி', meaning: 'Minister / Counselor', icon: '👔' },
            { word: 'வில்', meaning: 'Archer Bow', icon: '🏹' },
            { word: 'விரல்', meaning: 'Finger', icon: '☝️' },
            { word: 'கல்வி', meaning: 'Education', icon: '🎓' },
            { word: 'கிளி', meaning: 'Green Parrot', icon: '🦜' },
            { word: 'மயில்', meaning: 'Peacock', icon: '🦚' },
            { word: 'தமிழ்', meaning: 'Classical Tamil', icon: '📖' },
            { word: 'அனில்', meaning: 'Striped Squirrel', icon: '🐿️' },
            { word: 'தாலி', meaning: 'Sacred Necklace', icon: '📿' },
            { word: 'பள்ளி', meaning: 'School', icon: '🏫' },
            { word: 'வழி', meaning: 'Path / Gateway', icon: '🛣️' },
            { word: 'விழி', meaning: 'Watchful Eye', icon: '👁️' },
            { word: 'கழி', meaning: 'Bamboo Staff', icon: '🦯' },
            { word: 'அலி', meaning: 'Gentle Friend', icon: '🤝' },
            { word: 'வலி', meaning: 'Strength / Ache', icon: '🩹' },
            { word: 'பலி', meaning: 'Sacred Tribute', icon: '🕊️' },
            { word: 'விரலி', meaning: 'Turmeric Finger', icon: '🌿' },
            { word: 'காலி', meaning: 'Vacant / Empty', icon: '📭' },
            { word: 'சாலி', meaning: 'Fine Silk Weaver', icon: '🌾' },
            { word: 'வாலி', meaning: 'Water Bucket', icon: '🪣' },
            { word: 'பாலி', meaning: 'Ancient Pali Language', icon: '📜' },
            { word: 'நிழல்', meaning: 'Cool Shade / Shadow', icon: '👥' },
            { word: 'தில்', meaning: 'Courage / Guts', icon: '🦁' },
            { word: 'மல்லி', meaning: 'White Jasmine', icon: '🌼' },
            { word: 'பல்லி', meaning: 'Wall Gecko', icon: '🦎' },
            { word: 'வில்லி', meaning: 'Sharp Archeress', icon: '🎯' },
            { word: 'கிள்ளி', meaning: 'Gentle Pinch / Chola King', icon: '🤏' },
            { word: 'மார்கழி', meaning: 'Winter Margazhi Month', icon: '❄️' },
            { word: 'நீளம்', meaning: 'Length / Blue', icon: '📏' },
            { word: 'நீச்சல்', meaning: 'Swimming', icon: '🏊' },
            { word: 'ஆப்பிள்', meaning: 'Apple', icon: '🍎' },
            { word: 'நிலா', meaning: 'Moon', icon: '🌙' },
            { word: 'நிலம்', meaning: 'Land / Earth', icon: '🏞️' }
          ]
        },
        {
          id: '2-4',
          name: 'நனண',
          vowels: ["அ", "ஆ", "இ", "ஈ"],
          rows: [
            ["ந்", "ந", "நா", "நி", "நீ"],
            ["ன்", "ன", "னா", "னி", "னீ"],
            ["ண்", "ண", "ணா", "ணி", "ணீ"]
          ],
          syllables: ["இப்", "இம்", "இட்", "இய்", "ஈப்", "ஈம்", "ஈட்", "ஈய்", "டிப்", "டீப்", "பிப்", "பீப்", "மிப்", "மீப்", "டிம்", "டீம்", "பிம்", "பீம்", "மிம்", "மீம்", "பிடி", "இடி", "படி", "மடி", "அடி", "மாடி", "டீப் டீப்", "பீப் பீப்", "டிப் டிப்", "பிப் பிப்", "டிம் டிம்", "பிம் பிம்", "பிடி பிடி", "படி படி", "அடி அடி", "சித்", "சீத்", "கித்", "கீத்", "தித்", "தீத்", "வித்", "வீத்", "சிக்", "சீக்", "கிக்", "கீக", "திக்", "தீக்", "விக்", "வீக்", "சிப்", "சீப்", "கிப்", "கீப்", "திப்", "தீப்", "விப்", "வீப்", "சிம்", "சீம்", "கிம்", "கீம்", "திம்", "தீம்", "விம்", "வீம்", "திக் திக்", "சிக் சிக்", "கிக் கிக்", "வித் வித்", "தித் தித்", "தீ தீ", "வீ வீ", "சீ சீ", "திம் திம்", "கிம் கிம்", "ரித்", "ரீத்", "றித்", "றீத்", "ரிப்", "ரீப்", "றிப்", "றீப்", "ரிம்", "ரீம்", "றிம்", "றீம்", "ரிங்", "ரீங்", "றிங்", "றீங்", "அரி", "பரி", "கரி", "வரி", "சரி", "விரி", "அறி", "பறி", "மறி", "ரிம் ரிம்", "ரீம் ரீம்", "றிம் றிம்", "றீம் றீம்", "ரிங் ரிங்", "ரீங் ரீங்", "சரி சரி", "வரி வரி", "பரி பரி", "நித்", "நீத்", "னித்", "னீத்", "ணித்", "ணீத்", "நிப்", "நீப்", "னிப்", "னீப்", "ணிப்", "ணீப்", "நிம்", "நீம்", "னிம்", "னீம்", "ணிம்", "ணீம்", "கனி", "பனி", "தனி", "இனி", "அணி", "மணி", "பணி", "நிம் நிம்", "நீம் நீம்", "னிம் னிம்", "னீம் னீம்", "ணிம் ணிம்", "ணீம் ணீம்", "பனி பனி", "மணி மணி", "தனி தனி", "லித்", "லீத்", "ளித்", "ளீத்", "ழித்", "ழீத்", "லிப்", "லீப்", "ளிப்", "ளீப்", "ழிப்", "ழீப்", "லிம்", "லீம்", "ளிம்", "ளீம்", "ழிம்", "ழீம்", "தில்", "வில்", "வழி", "விழி", "வலி", "பலி", "காலி", "வாலி", "மல்லி", "கிளி கிளி", "வலி வலி", "வழி வழி", "விழி விழி", "மில் மில்", "தில் தில்", "வில் வில்", "பல்லி பல்லி", "மல்லி மல்லி"],
          sampleWords: [
            { word: 'ஈ', meaning: 'Housefly', icon: '🪰' },
            { word: 'இடி', meaning: 'Thunder / Strike', icon: '⚡' },
            { word: 'பிடி', meaning: 'Catch / Hold', icon: '✊' },
            { word: 'மடி', meaning: 'Lap / Fold', icon: '🧎' },
            { word: 'படி', meaning: 'Study / Step', icon: '📚' },
            { word: 'அடி', meaning: 'Foot / Base / Beat', icon: '👣' },
            { word: 'ஆடி', meaning: 'Mirror / Tamil Month', icon: '🪞' },
            { word: 'மாடி', meaning: 'Terrace / Balcony', icon: '🏢' },
            { word: 'பாடி', meaning: 'Singing / Camp', icon: '🎶' },
            { word: 'பாட்டி', meaning: 'Grandmother', icon: '👵' },
            { word: 'பட்டி', meaning: 'Rural Village / Pen', icon: '🏡' },
            { word: 'ஈட்டி', meaning: 'Spear / Javelin', icon: '🗡️' },
            { word: 'பீடம்', meaning: 'Altar / Pedestal', icon: '🏛️' },
            { word: 'இடம்', meaning: 'Place / Position', icon: '📍' },
            { word: 'மிட்டாய்', meaning: 'Candy / Sweet', icon: '🍬' },
            { word: 'மாமி', meaning: 'Aunt', icon: '👩' },
            { word: 'ஈயம்', meaning: 'Lead Metal', icon: '🪙' },
            { word: 'தீ', meaning: 'Fire / Flame', icon: '🔥' },
            { word: 'வீதி', meaning: 'Street / Avenue', icon: '🛣️' },
            { word: 'கத்தி', meaning: 'Knife', icon: '🔪' },
            { word: 'அத்தி', meaning: 'Cluster Fig Tree', icon: '🌳' },
            { word: 'விடி', meaning: 'Dawn / Awaken', icon: '🌅' },
            { word: 'கீதம்', meaning: 'Sacred Song', icon: '🎶' },
            { word: 'விவாதம்', meaning: 'Debate / Discussion', icon: '🗣️' },
            { word: 'ஆதி', meaning: 'Origin / Primeval', icon: '🌅' },
            { word: 'சிப்பம்', meaning: 'Parcel / Bundle', icon: '📦' },
            { word: 'சிப்பி', meaning: 'Seashell / Oyster', icon: '🐚' },
            { word: 'தீபம்', meaning: 'Oil Lamp / Light', icon: '🪔' },
            { word: 'கவி', meaning: 'Poet / Verse', icon: '📜' },
            { word: 'சீவி', meaning: 'To Comb / Slice', icon: '🪮' },
            { word: 'சீதா', meaning: 'Custard Apple / Sita', icon: '🍈' },
            { word: 'பித்தம்', meaning: 'Bile / Passion', icon: '🧪' },
            { word: 'தாடி', meaning: 'Beard', icon: '🧔' },
            { word: 'தம்பி', meaning: 'Younger Brother', icon: '👦' },
            { word: 'அரி', meaning: 'Harvest Grain / Lion', icon: '🌾' },
            { word: 'பரி', meaning: 'Swift Horse', icon: '🐎' },
            { word: 'கரி', meaning: 'Charcoal / Black', icon: '⚫' },
            { word: 'வரி', meaning: 'Line / Stripe / Tax', icon: '📝' },
            { word: 'விரி', meaning: 'Spread Open', icon: '📖' },
            { word: 'சரி', meaning: 'Right / Correct', icon: '✅' },
            { word: 'கீரி', meaning: 'Mongoose', icon: '🦦' },
            { word: 'திரி', meaning: 'Lamp Wick', icon: '🕯️' },
            { word: 'அறி', meaning: 'Wisdom / Knowledge', icon: '🧠' },
            { word: 'பறி', meaning: 'Pluck / Snatch', icon: '🌸' },
            { word: 'மறி', meaning: 'Young Goat / Shield', icon: '🐐' },
            { word: 'அரிசி', meaning: 'Uncooked Rice', icon: '🍚' },
            { word: 'கிரீடம்', meaning: 'Royal Crown', icon: '👑' },
            { word: 'விசிறி', meaning: 'Handheld Fan', icon: '🪭' },
            { word: 'பத்திரம்', meaning: 'Safety / Document', icon: '📄' },
            { word: 'சித்திரம்', meaning: 'Painting / Artwork', icon: '🖼️' },
            { word: 'ராத்திரி', meaning: 'Night Time', icon: '🌙' },
            { word: 'ரீங்காரம்', meaning: 'Humming of Bees', icon: '🐝' },
            { word: 'சிங்கம்', meaning: 'Lion', icon: '🦁' },
            { word: 'சிற்பம்', meaning: 'Sculpture / Statue', icon: '🗿' },
            { word: 'வீரம்', meaning: 'Courage / Bravery', icon: '🛡️' },
            { word: 'ரவி', meaning: 'Bright Sun', icon: '☀️' },
            { word: 'சீரம்', meaning: 'Fluid / Essence', icon: '💧' },
            { word: 'ஈரம்', meaning: 'Moisture / Wet', icon: '💧' },
            { word: 'தங்கச்சி', meaning: 'Little Sister', icon: '👧' },
            { word: 'நீதி', meaning: 'Justice / Righteousness', icon: '⚖️' },
            { word: 'நீர்', meaning: 'Water', icon: '💧' },
            { word: 'தண்ணீர்', meaning: 'Drinking Water', icon: '🚰' },
            { word: 'கனி', meaning: 'Ripe Sweet Fruit', icon: '🍎' },
            { word: 'பனி', meaning: 'Snow / Morning Dew', icon: '❄️' },
            { word: 'நனி', meaning: 'Abundantly / Very', icon: '✨' },
            { word: 'தனி', meaning: 'Solitary / Unique', icon: '🧍' },
            { word: 'இனி', meaning: 'Henceforth / Sweetness', icon: '🍬' },
            { word: 'அணி', meaning: 'Ornament / Lineup', icon: '🏅' },
            { word: 'மணி', meaning: 'Chime Bell / Gem', icon: '🔔' },
            { word: 'பணி', meaning: 'Duty / Work', icon: '💼' },
            { word: 'கன்னி', meaning: 'Young Maiden', icon: '👧' },
            { word: 'நிமிடம்', meaning: 'Minute / Second', icon: '⏱️' },
            { word: 'நாடி', meaning: 'Pulse / Nerve', icon: '💓' },
            { word: 'பன்னீர்', meaning: 'Scented Rosewater', icon: '🌹' },
            { word: 'கண்ணீர்', meaning: 'Tears', icon: '😢' },
            { word: 'வினா', meaning: 'Inquiry / Question', icon: '❓' },
            { word: 'தினசரி', meaning: 'Daily Journal', icon: '📰' },
            { word: 'மனிதன்', meaning: 'Human Being', icon: '👨' },
            { word: 'மீன்', meaning: 'Fish', icon: '🐟' },
            { word: 'வண்டி', meaning: 'Cart / Vehicle', icon: '🛒' },
            { word: 'விண்', meaning: 'Sky / Outer Space', icon: '🌌' },
            { word: 'கிண்ணம்', meaning: 'Metal Bowl', icon: '🥣' },
            { word: 'நரி', meaning: 'Jackal / Fox', icon: '🦊' },
            { word: 'பன்றி', meaning: 'Boar / Pig', icon: '🐖' },
            { word: 'நன்றி', meaning: 'Thank You / Gratitude', icon: '💐' },
            { word: 'மந்திரி', meaning: 'Minister / Counselor', icon: '👔' },
            { word: 'வில்', meaning: 'Archer Bow', icon: '🏹' },
            { word: 'விரல்', meaning: 'Finger', icon: '☝️' },
            { word: 'கல்வி', meaning: 'Education', icon: '🎓' },
            { word: 'கிளி', meaning: 'Green Parrot', icon: '🦜' },
            { word: 'மயில்', meaning: 'Peacock', icon: '🦚' },
            { word: 'தமிழ்', meaning: 'Classical Tamil', icon: '📖' },
            { word: 'அனில்', meaning: 'Striped Squirrel', icon: '🐿️' },
            { word: 'தாலி', meaning: 'Sacred Necklace', icon: '📿' },
            { word: 'பள்ளி', meaning: 'School', icon: '🏫' },
            { word: 'வழி', meaning: 'Path / Gateway', icon: '🛣️' },
            { word: 'விழி', meaning: 'Watchful Eye', icon: '👁️' },
            { word: 'கழி', meaning: 'Bamboo Staff', icon: '🦯' },
            { word: 'அலி', meaning: 'Gentle Friend', icon: '🤝' },
            { word: 'வலி', meaning: 'Strength / Ache', icon: '🩹' },
            { word: 'பலி', meaning: 'Sacred Tribute', icon: '🕊️' },
            { word: 'விரலி', meaning: 'Turmeric Finger', icon: '🌿' },
            { word: 'காலி', meaning: 'Vacant / Empty', icon: '📭' },
            { word: 'சாலி', meaning: 'Fine Silk Weaver', icon: '🌾' },
            { word: 'வாலி', meaning: 'Water Bucket', icon: '🪣' },
            { word: 'பாலி', meaning: 'Ancient Pali Language', icon: '📜' },
            { word: 'நிழல்', meaning: 'Cool Shade / Shadow', icon: '👥' },
            { word: 'தில்', meaning: 'Courage / Guts', icon: '🦁' },
            { word: 'மல்லி', meaning: 'White Jasmine', icon: '🌼' },
            { word: 'பல்லி', meaning: 'Wall Gecko', icon: '🦎' },
            { word: 'வில்லி', meaning: 'Sharp Archeress', icon: '🎯' },
            { word: 'கிள்ளி', meaning: 'Gentle Pinch / Chola King', icon: '🤏' },
            { word: 'மார்கழி', meaning: 'Winter Margazhi Month', icon: '❄️' },
            { word: 'நீளம்', meaning: 'Length / Blue', icon: '📏' },
            { word: 'நீச்சல்', meaning: 'Swimming', icon: '🏊' },
            { word: 'ஆப்பிள்', meaning: 'Apple', icon: '🍎' },
            { word: 'நிலா', meaning: 'Moon', icon: '🌙' },
            { word: 'நிலம்', meaning: 'Land / Earth', icon: '🏞️' }
          ]
        },
        {
          id: '2-5',
          name: 'லளழ',
          vowels: ["அ", "ஆ", "இ", "ஈ"],
          rows: [
            ["ல்", "ல", "லா", "லி", "லீ"],
            ["ள்", "ள", "ளா", "ளி", "ளீ"],
            ["ழ்", "ழ", "ழா", "ழி", "ழீ"]
          ],
          syllables: ["இப்", "இம்", "இட்", "இய்", "ஈப்", "ஈம்", "ஈட்", "ஈய்", "டிப்", "டீப்", "பிப்", "பீப்", "மிப்", "மீப்", "டிம்", "டீம்", "பிம்", "பீம்", "மிம்", "மீம்", "பிடி", "இடி", "படி", "மடி", "அடி", "மாடி", "டீப் டீப்", "பீப் பீப்", "டிப் டிப்", "பிப் பிப்", "டிம் டிம்", "பிம் பிம்", "பிடி பிடி", "படி படி", "அடி அடி", "சித்", "சீத்", "கித்", "கீத்", "தித்", "தீத்", "வித்", "வீத்", "சிக்", "சீக்", "கிக்", "கீக", "திக்", "தீக்", "விக்", "வீக்", "சிப்", "சீப்", "கிப்", "கீப்", "திப்", "தீப்", "விப்", "வீப்", "சிம்", "சீம்", "கிம்", "கீம்", "திம்", "தீம்", "விம்", "வீம்", "திக் திக்", "சிக் சிக்", "கிக் கிக்", "வித் வித்", "தித் தித்", "தீ தீ", "வீ வீ", "சீ சீ", "திம் திம்", "கிம் கிம்", "ரித்", "ரீத்", "றித்", "றீத்", "ரிப்", "ரீப்", "றிப்", "றீப்", "ரிம்", "ரீம்", "றிம்", "றீம்", "ரிங்", "ரீங்", "றிங்", "றீங்", "அரி", "பரி", "கரி", "வரி", "சரி", "விரி", "அறி", "பறி", "மறி", "ரிம் ரிம்", "ரீம் ரீம்", "றிம் றிம்", "றீம் றீம்", "ரிங் ரிங்", "ரீங் ரீங்", "சரி சரி", "வரி வரி", "பரி பரி", "நித்", "நீத்", "னித்", "னீத்", "ணித்", "ணீத்", "நிப்", "நீப்", "னிப்", "னீப்", "ணிப்", "ணீப்", "நிம்", "நீம்", "னிம்", "னீம்", "ணிம்", "ணீம்", "கனி", "பனி", "தனி", "இனி", "அணி", "மணி", "பணி", "நிம் நிம்", "நீம் நீம்", "னிம் னிம்", "னீம் னீம்", "ணிம் ணிம்", "ணீம் ணீம்", "பனி பனி", "மணி மணி", "தனி தனி", "லித்", "லீத்", "ளித்", "ளீத்", "ழித்", "ழீத்", "லிப்", "லீப்", "ளிப்", "ளீப்", "ழிப்", "ழீப்", "லிம்", "லீம்", "ளிம்", "ளீம்", "ழிம்", "ழீம்", "தில்", "வில்", "வழி", "விழி", "வலி", "பலி", "காலி", "வாலி", "மல்லி", "கிளி கிளி", "வலி வலி", "வழி வழி", "விழி விழி", "மில் மில்", "தில் தில்", "வில் வில்", "பல்லி பல்லி", "மல்லி மல்லி"],
          sampleWords: [
            { word: 'ஈ', meaning: 'Housefly', icon: '🪰' },
            { word: 'இடி', meaning: 'Thunder / Strike', icon: '⚡' },
            { word: 'பிடி', meaning: 'Catch / Hold', icon: '✊' },
            { word: 'மடி', meaning: 'Lap / Fold', icon: '🧎' },
            { word: 'படி', meaning: 'Study / Step', icon: '📚' },
            { word: 'அடி', meaning: 'Foot / Base / Beat', icon: '👣' },
            { word: 'ஆடி', meaning: 'Mirror / Tamil Month', icon: '🪞' },
            { word: 'மாடி', meaning: 'Terrace / Balcony', icon: '🏢' },
            { word: 'பாடி', meaning: 'Singing / Camp', icon: '🎶' },
            { word: 'பாட்டி', meaning: 'Grandmother', icon: '👵' },
            { word: 'பட்டி', meaning: 'Rural Village / Pen', icon: '🏡' },
            { word: 'ஈட்டி', meaning: 'Spear / Javelin', icon: '🗡️' },
            { word: 'பீடம்', meaning: 'Altar / Pedestal', icon: '🏛️' },
            { word: 'இடம்', meaning: 'Place / Position', icon: '📍' },
            { word: 'மிட்டாய்', meaning: 'Candy / Sweet', icon: '🍬' },
            { word: 'மாமி', meaning: 'Aunt', icon: '👩' },
            { word: 'ஈயம்', meaning: 'Lead Metal', icon: '🪙' },
            { word: 'தீ', meaning: 'Fire / Flame', icon: '🔥' },
            { word: 'வீதி', meaning: 'Street / Avenue', icon: '🛣️' },
            { word: 'கத்தி', meaning: 'Knife', icon: '🔪' },
            { word: 'அத்தி', meaning: 'Cluster Fig Tree', icon: '🌳' },
            { word: 'விடி', meaning: 'Dawn / Awaken', icon: '🌅' },
            { word: 'கீதம்', meaning: 'Sacred Song', icon: '🎶' },
            { word: 'விவாதம்', meaning: 'Debate / Discussion', icon: '🗣️' },
            { word: 'ஆதி', meaning: 'Origin / Primeval', icon: '🌅' },
            { word: 'சிப்பம்', meaning: 'Parcel / Bundle', icon: '📦' },
            { word: 'சிப்பி', meaning: 'Seashell / Oyster', icon: '🐚' },
            { word: 'தீபம்', meaning: 'Oil Lamp / Light', icon: '🪔' },
            { word: 'கவி', meaning: 'Poet / Verse', icon: '📜' },
            { word: 'சீவி', meaning: 'To Comb / Slice', icon: '🪮' },
            { word: 'சீதா', meaning: 'Custard Apple / Sita', icon: '🍈' },
            { word: 'பித்தம்', meaning: 'Bile / Passion', icon: '🧪' },
            { word: 'தாடி', meaning: 'Beard', icon: '🧔' },
            { word: 'தம்பி', meaning: 'Younger Brother', icon: '👦' },
            { word: 'அரி', meaning: 'Harvest Grain / Lion', icon: '🌾' },
            { word: 'பரி', meaning: 'Swift Horse', icon: '🐎' },
            { word: 'கரி', meaning: 'Charcoal / Black', icon: '⚫' },
            { word: 'வரி', meaning: 'Line / Stripe / Tax', icon: '📝' },
            { word: 'விரி', meaning: 'Spread Open', icon: '📖' },
            { word: 'சரி', meaning: 'Right / Correct', icon: '✅' },
            { word: 'கீரி', meaning: 'Mongoose', icon: '🦦' },
            { word: 'திரி', meaning: 'Lamp Wick', icon: '🕯️' },
            { word: 'அறி', meaning: 'Wisdom / Knowledge', icon: '🧠' },
            { word: 'பறி', meaning: 'Pluck / Snatch', icon: '🌸' },
            { word: 'மறி', meaning: 'Young Goat / Shield', icon: '🐐' },
            { word: 'அரிசி', meaning: 'Uncooked Rice', icon: '🍚' },
            { word: 'கிரீடம்', meaning: 'Royal Crown', icon: '👑' },
            { word: 'விசிறி', meaning: 'Handheld Fan', icon: '🪭' },
            { word: 'பத்திரம்', meaning: 'Safety / Document', icon: '📄' },
            { word: 'சித்திரம்', meaning: 'Painting / Artwork', icon: '🖼️' },
            { word: 'ராத்திரி', meaning: 'Night Time', icon: '🌙' },
            { word: 'ரீங்காரம்', meaning: 'Humming of Bees', icon: '🐝' },
            { word: 'சிங்கம்', meaning: 'Lion', icon: '🦁' },
            { word: 'சிற்பம்', meaning: 'Sculpture / Statue', icon: '🗿' },
            { word: 'வீரம்', meaning: 'Courage / Bravery', icon: '🛡️' },
            { word: 'ரவி', meaning: 'Bright Sun', icon: '☀️' },
            { word: 'சீரம்', meaning: 'Fluid / Essence', icon: '💧' },
            { word: 'ஈரம்', meaning: 'Moisture / Wet', icon: '💧' },
            { word: 'தங்கச்சி', meaning: 'Little Sister', icon: '👧' },
            { word: 'நீதி', meaning: 'Justice / Righteousness', icon: '⚖️' },
            { word: 'நீர்', meaning: 'Water', icon: '💧' },
            { word: 'தண்ணீர்', meaning: 'Drinking Water', icon: '🚰' },
            { word: 'கனி', meaning: 'Ripe Sweet Fruit', icon: '🍎' },
            { word: 'பனி', meaning: 'Snow / Morning Dew', icon: '❄️' },
            { word: 'நனி', meaning: 'Abundantly / Very', icon: '✨' },
            { word: 'தனி', meaning: 'Solitary / Unique', icon: '🧍' },
            { word: 'இனி', meaning: 'Henceforth / Sweetness', icon: '🍬' },
            { word: 'அணி', meaning: 'Ornament / Lineup', icon: '🏅' },
            { word: 'மணி', meaning: 'Chime Bell / Gem', icon: '🔔' },
            { word: 'பணி', meaning: 'Duty / Work', icon: '💼' },
            { word: 'கன்னி', meaning: 'Young Maiden', icon: '👧' },
            { word: 'நிமிடம்', meaning: 'Minute / Second', icon: '⏱️' },
            { word: 'நாடி', meaning: 'Pulse / Nerve', icon: '💓' },
            { word: 'பன்னீர்', meaning: 'Scented Rosewater', icon: '🌹' },
            { word: 'கண்ணீர்', meaning: 'Tears', icon: '😢' },
            { word: 'வினா', meaning: 'Inquiry / Question', icon: '❓' },
            { word: 'தினசரி', meaning: 'Daily Journal', icon: '📰' },
            { word: 'மனிதன்', meaning: 'Human Being', icon: '👨' },
            { word: 'மீன்', meaning: 'Fish', icon: '🐟' },
            { word: 'வண்டி', meaning: 'Cart / Vehicle', icon: '🛒' },
            { word: 'விண்', meaning: 'Sky / Outer Space', icon: '🌌' },
            { word: 'கிண்ணம்', meaning: 'Metal Bowl', icon: '🥣' },
            { word: 'நரி', meaning: 'Jackal / Fox', icon: '🦊' },
            { word: 'பன்றி', meaning: 'Boar / Pig', icon: '🐖' },
            { word: 'நன்றி', meaning: 'Thank You / Gratitude', icon: '💐' },
            { word: 'மந்திரி', meaning: 'Minister / Counselor', icon: '👔' },
            { word: 'வில்', meaning: 'Archer Bow', icon: '🏹' },
            { word: 'விரல்', meaning: 'Finger', icon: '☝️' },
            { word: 'கல்வி', meaning: 'Education', icon: '🎓' },
            { word: 'கிளி', meaning: 'Green Parrot', icon: '🦜' },
            { word: 'மயில்', meaning: 'Peacock', icon: '🦚' },
            { word: 'தமிழ்', meaning: 'Classical Tamil', icon: '📖' },
            { word: 'அனில்', meaning: 'Striped Squirrel', icon: '🐿️' },
            { word: 'தாலி', meaning: 'Sacred Necklace', icon: '📿' },
            { word: 'பள்ளி', meaning: 'School', icon: '🏫' },
            { word: 'வழி', meaning: 'Path / Gateway', icon: '🛣️' },
            { word: 'விழி', meaning: 'Watchful Eye', icon: '👁️' },
            { word: 'கழி', meaning: 'Bamboo Staff', icon: '🦯' },
            { word: 'அலி', meaning: 'Gentle Friend', icon: '🤝' },
            { word: 'வலி', meaning: 'Strength / Ache', icon: '🩹' },
            { word: 'பலி', meaning: 'Sacred Tribute', icon: '🕊️' },
            { word: 'விரலி', meaning: 'Turmeric Finger', icon: '🌿' },
            { word: 'காலி', meaning: 'Vacant / Empty', icon: '📭' },
            { word: 'சாலி', meaning: 'Fine Silk Weaver', icon: '🌾' },
            { word: 'வாலி', meaning: 'Water Bucket', icon: '🪣' },
            { word: 'பாலி', meaning: 'Ancient Pali Language', icon: '📜' },
            { word: 'நிழல்', meaning: 'Cool Shade / Shadow', icon: '👥' },
            { word: 'தில்', meaning: 'Courage / Guts', icon: '🦁' },
            { word: 'மல்லி', meaning: 'White Jasmine', icon: '🌼' },
            { word: 'பல்லி', meaning: 'Wall Gecko', icon: '🦎' },
            { word: 'வில்லி', meaning: 'Sharp Archeress', icon: '🎯' },
            { word: 'கிள்ளி', meaning: 'Gentle Pinch / Chola King', icon: '🤏' },
            { word: 'மார்கழி', meaning: 'Winter Margazhi Month', icon: '❄️' },
            { word: 'நீளம்', meaning: 'Length / Blue', icon: '📏' },
            { word: 'நீச்சல்', meaning: 'Swimming', icon: '🏊' },
            { word: 'ஆப்பிள்', meaning: 'Apple', icon: '🍎' },
            { word: 'நிலா', meaning: 'Moon', icon: '🌙' },
            { word: 'நிலம்', meaning: 'Land / Earth', icon: '🏞️' }
          ]
        }
      ]
    },

    3: {
      number: 3,
      title: 'Level 3 Letters',
      currentSetIndex: 0,
      sets: [
        {
          id: '3-1',
          name: 'டபமய',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ"],
          rows: [
            ["ட்", "ட", "டா", "டி", "டீ", "டெ", "டே"],
            ["ப்", "ப", "பா", "பி", "பீ", "பெ", "பே"],
            ["ம்", "ம", "மா", "மி", "மீ", "மெ", "மே"],
            ["ய்", "ய", "யா", "யி", "யீ", "யெ", "யே"]
          ],
          syllables: ["எப்", "எம்", "எட்", "எல்", "என்", "எண்", "எர்", "எற்", "ஏப்", "ஏம்", "ஏட்", "ஏல்", "ஏன்", "ஏண்", "ஏர்", "ஏற்", "பெட்", "பேட்", "மெட்", "மேட்", "டெட்", "டேட்", "செட்", "சேட்", "கெட்", "கேட்", "தெட்", "தேட்", "வெட்", "வேட்", "பெப்", "பேப்", "மெப்", "மேப்", "செப்", "சேப்", "கெப்", "கேப்", "வெப்", "வேப்", "பெம்", "பேம்", "மெம்", "மேம்", "செம்", "சேம்", "கெம்", "கேம்", "வெம்", "வேம்", "பென்", "பேன்", "மென்", "மேன்", "சென்", "சேன்", "கென்", "கேன்", "வென்", "வேன்", "பெல்", "பேல்", "மெல்", "மேல்", "செல்", "சேல்", "கெல்", "கேல்", "வெல்", "வேல்", "தென்", "தேன்", "தெல்", "தேல்", "நெல்", "நேல்", "நென்", "னேன்", "செடி", "வெடி", "நெளி", "தெறி", "எலி", "எரி", "ஏரி", "தேனீ", "மேனி", "வேலி", "பெட் பெட்", "செட் செட்", "வெட் வெட்", "மெட் மெட்", "கேட் கேட்", "செடி செடி", "வெடி வெடி", "மெல்ல மெல்ல", "நேர் நேர்", "தேர் தேர்", "வேல் வேல்", "நெல் நெல்", "தேன் தேன்", "மேல் மேல்", "வேர் வேர்", "செம் செம்", "வெம் வெம்", "தென் தென்", "பென் பென்", "எலி எலி"],
          sampleWords: [
            { word: 'ஏணி', meaning: 'Ladder', icon: '🪜' },
            { word: 'ஏர்', meaning: 'Plow', icon: '🌾' },
            { word: 'ஏரி', meaning: 'Freshwater Lake', icon: '🏞️' },
            { word: 'ஏலக்காய்', meaning: 'Cardamom', icon: '🌿' },
            { word: 'ஏனம்', meaning: 'Vessel / Utensil', icon: '🏺' },
            { word: 'ஏற்றம்', meaning: 'Elevation / Lift', icon: '📈' },
            { word: 'ஏவல்', meaning: 'Command / Bidding', icon: '📜' },
            { word: 'எலி', meaning: 'Mouse / Rat', icon: '🐁' },
            { word: 'எரி', meaning: 'Burn / Flame', icon: '🔥' },
            { word: 'எண்', meaning: 'Number / Count', icon: '🔢' },
            { word: 'எண்ணம்', meaning: 'Thought / Intention', icon: '💭' },
            { word: 'எதிரி', meaning: 'Opponent / Rival', icon: '🤺' },
            { word: 'எதிர்', meaning: 'Opposite / Front', icon: '↔️' },
            { word: 'எச்சில்', meaning: 'Saliva / Food crumb', icon: '💧' },
            { word: 'எட்டி', meaning: 'Reach / Peek', icon: '👀' },
            { word: 'எளிதாய்', meaning: 'Easily / Effortlessly', icon: '✨' },
            { word: 'எறி', meaning: 'Throw / Hurl', icon: '⚾' },
            { word: 'பெண்', meaning: 'Woman / Girl', icon: '👩' },
            { word: 'பெட்டி', meaning: 'Box / Trunk', icon: '📦' },
            { word: 'பெரிய', meaning: 'Big / Grand', icon: '🐘' },
            { word: 'பெயர்', meaning: 'Name / Identity', icon: '🏷️' },
            { word: 'பெரியார்', meaning: 'Venerable Elder', icon: '👴' },
            { word: 'பேனா', meaning: 'Writing Pen', icon: '🖊️' },
            { word: 'பேரன்', meaning: 'Grandson', icon: '👦' },
            { word: 'பேர்த்தி', meaning: 'Granddaughter', icon: '👧' },
            { word: 'பேரிடர்', meaning: 'Disaster / Calamity', icon: '⚡' },
            { word: 'பேரதிர்ச்சி', meaning: 'Great Shock / Surprise', icon: '😲' },
            { word: 'செடி', meaning: 'Plant / Shrub', icon: '🌱' },
            { word: 'செங்கல்', meaning: 'Red Brick', icon: '🧱' },
            { word: 'செம்மண்', meaning: 'Red Clay Soil', icon: '🪴' },
            { word: 'செவ்வாய்', meaning: 'Tuesday / Planet Mars', icon: '🪐' },
            { word: 'செம்மரி', meaning: 'Red Fleece Sheep', icon: '🐑' },
            { word: 'செம்பட்டி', meaning: 'Red Ribbon / Cloth', icon: '🎗️' },
            { word: 'செல்லம்', meaning: 'Darling / Pet', icon: '🥰' },
            { word: 'சேவல்', meaning: 'Rooster / Cock', icon: '🐓' },
            { word: 'சேதி', meaning: 'News / Message', icon: '📰' },
            { word: 'சேரி', meaning: 'Hamlet / Settlement', icon: '🏡' },
            { word: 'சேவகன்', meaning: 'Servant / Warrior', icon: '🛡️' },
            { word: 'சேமிக்க', meaning: 'To Save / Treasure', icon: '🪙' },
            { word: 'சேவடி', meaning: 'Sacred Feet', icon: '👣' },
            { word: 'கெட்டி', meaning: 'Firm / Solid / Clever', icon: '💪' },
            { word: 'கெட்ட', meaning: 'Bad / Unhealthy', icon: '🚫' },
            { word: 'கேசரி', meaning: 'Sweet Kesari Halwa', icon: '🍮' },
            { word: 'கேள்வி', meaning: 'Question / Query', icon: '❓' },
            { word: 'கேடயம்', meaning: 'Defensive Shield', icon: '🛡️' },
            { word: 'தெப்பம்', meaning: 'Water Raft / Float', icon: '🛶' },
            { word: 'தென்றல்', meaning: 'Gentle Breeze', icon: '🍃' },
            { word: 'தெரி', meaning: 'To Shine / Appear', icon: '💡' },
            { word: 'தெளி', meaning: 'Crystal Clear / Pure', icon: '💧' },
            { word: 'தெப்பல்', meaning: 'Floating Raft', icon: '⛵' },
            { word: 'தெறி', meaning: 'Splash / Scatter', icon: '💦' },
            { word: 'தேனீ', meaning: 'Honeybee', icon: '🐝' },
            { word: 'தேர்', meaning: 'Temple Chariot', icon: '🛞' },
            { word: 'தேசம்', meaning: 'Nation / Homeland', icon: '🗺️' },
            { word: 'தேவன்', meaning: 'Divine Lord', icon: '👑' },
            { word: 'தேவி', meaning: 'Goddess / Empress', icon: '👸' },
            { word: 'தேதி', meaning: 'Calendar Date', icon: '📅' },
            { word: 'தேங்காய்', meaning: 'Coconut', icon: '🥥' },
            { word: 'தேள்', meaning: 'Scorpion', icon: '🦂' },
            { word: 'தேம்பல்', meaning: 'Gentle Weep / Sigh', icon: '🥺' },
            { word: 'தேற்றல்', meaning: 'Consolation / Comfort', icon: '🤝' },
            { word: 'வெள்ளம்', meaning: 'Water Flood', icon: '🌊' },
            { word: 'வெற்றி', meaning: 'Victory / Triumph', icon: '🏆' },
            { word: 'வெள்ளி', meaning: 'Silver / Friday', icon: '🪙' },
            { word: 'வெப்பம்', meaning: 'Warm Heat', icon: '🌡️' },
            { word: 'வெட்கம்', meaning: 'Modesty / Shyness', icon: '🙈' },
            { word: 'வெட்டி', meaning: 'Cut Out / Dug', icon: '✂️' },
            { word: 'வெல்லம்', meaning: 'Sweet Jaggery', icon: '🍬' },
            { word: 'வெங்காயம்', meaning: 'Onion', icon: '🧅' },
            { word: 'வெடி', meaning: 'Firecracker / Burst', icon: '💥' },
            { word: 'வேல்', meaning: 'Sacred Spear', icon: '🗡️' },
            { word: 'வேர்', meaning: 'Plant Root', icon: '🌱' },
            { word: 'வேப்பமரம்', meaning: 'Neem Tree', icon: '🌳' },
            { word: 'வேகம்', meaning: 'Speed / Velocity', icon: '⚡' },
            { word: 'வேடன்', meaning: 'Hunter of the Wild', icon: '🏹' },
            { word: 'வேலி', meaning: 'Protective Fence', icon: '🚧' },
            { word: 'வேனில்', meaning: 'Summer Season', icon: '☀️' },
            { word: 'நெல்', meaning: 'Paddy Harvest', icon: '🌾' },
            { word: 'நெற்றி', meaning: 'Forehead', icon: '🧘' },
            { word: 'நெய்தல்', meaning: 'Seashore Landscape', icon: '🏖️' },
            { word: 'நெஞ்சம்', meaning: 'Affectionate Heart', icon: '❤️' },
            { word: 'நெய்த', meaning: 'Woven / Spun', icon: '🧵' },
            { word: 'நெளி', meaning: 'Wiggle / Curve', icon: '〰️' },
            { word: 'நேரம்', meaning: 'Time / Hour', icon: '⏰' },
            { word: 'நேசம்', meaning: 'True Friendship', icon: '💖' },
            { word: 'நேர்த்தி', meaning: 'Neatness / Order', icon: '✨' },
            { word: 'நேர்', meaning: 'Straight / Upright', icon: '📏' },
            { word: 'நேர்பட', meaning: 'Honestly / Plainly', icon: '🎯' },
            { word: 'மெலிந்த', meaning: 'Slender / Slim', icon: '🏃' },
            { word: 'மெல்ல', meaning: 'Gently / Slowly', icon: '🐢' },
            { word: 'மேளம்', meaning: 'Classical Drum', icon: '🥁' },
            { word: 'மேகம்', meaning: 'Rain Cloud', icon: '☁️' },
            { word: 'மேனி', meaning: 'Graceful Complexion', icon: '✨' },
            { word: 'மேல்', meaning: 'Above / Zenith', icon: '⬆️' },
            { word: 'மேற்கண்ட', meaning: 'Aforementioned', icon: '👆' },
            { word: 'எண்ணி', meaning: 'Having Counted', icon: '🧮' },
            { word: 'செம்மீன்', meaning: 'Red Shrimp / Prawn', icon: '🦐' },
            { word: 'தெவிட்டாத', meaning: 'Sweet Delight', icon: '🍯' },
            { word: 'டெல்டா', meaning: 'Fertile River Delta', icon: '🏞️' },
            { word: 'கேரி', meaning: 'Rail Coach / Car', icon: '🚃' }
          ]
        },
        {
          id: '3-2',
          name: 'சகதவ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ"],
          rows: [
            ["ச்", "ச", "சா", "சி", "சீ", "செ", "சே"],
            ["க்", "க", "கா", "கி", "கீ", "கெ", "கே"],
            ["த்", "த", "தா", "தி", "தீ", "தெ", "தே"],
            ["வ்", "வ", "வா", "வி", "வீ", "வெ", "வே"]
          ],
          syllables: ["எப்", "எம்", "எட்", "எல்", "என்", "எண்", "எர்", "எற்", "ஏப்", "ஏம்", "ஏட்", "ஏல்", "ஏன்", "ஏண்", "ஏர்", "ஏற்", "பெட்", "பேட்", "மெட்", "மேட்", "டெட்", "டேட்", "செட்", "சேட்", "கெட்", "கேட்", "தெட்", "தேட்", "வெட்", "வேட்", "பெப்", "பேப்", "மெப்", "மேப்", "செப்", "சேப்", "கெப்", "கேப்", "வெப்", "வேப்", "பெம்", "பேம்", "மெம்", "மேம்", "செம்", "சேம்", "கெம்", "கேம்", "வெம்", "வேம்", "பென்", "பேன்", "மென்", "மேன்", "சென்", "சேன்", "கென்", "கேன்", "வென்", "வேன்", "பெல்", "பேல்", "மெல்", "மேல்", "செல்", "சேல்", "கெல்", "கேல்", "வெல்", "வேல்", "தென்", "தேன்", "தெல்", "தேல்", "நெல்", "நேல்", "நென்", "னேன்", "செடி", "வெடி", "நெளி", "தெறி", "எலி", "எரி", "ஏரி", "தேனீ", "மேனி", "வேலி", "பெட் பெட்", "செட் செட்", "வெட் வெட்", "மெட் மெட்", "கேட் கேட்", "செடி செடி", "வெடி வெடி", "மெல்ல மெல்ல", "நேர் நேர்", "தேர் தேர்", "வேல் வேல்", "நெல் நெல்", "தேன் தேன்", "மேல் மேல்", "வேர் வேர்", "செம் செம்", "வெம் வெம்", "தென் தென்", "பென் பென்", "எலி எலி"],
          sampleWords: [
            { word: 'ஏணி', meaning: 'Ladder', icon: '🪜' },
            { word: 'ஏர்', meaning: 'Plow', icon: '🌾' },
            { word: 'ஏரி', meaning: 'Freshwater Lake', icon: '🏞️' },
            { word: 'ஏலக்காய்', meaning: 'Cardamom', icon: '🌿' },
            { word: 'ஏனம்', meaning: 'Vessel / Utensil', icon: '🏺' },
            { word: 'ஏற்றம்', meaning: 'Elevation / Lift', icon: '📈' },
            { word: 'ஏவல்', meaning: 'Command / Bidding', icon: '📜' },
            { word: 'எலி', meaning: 'Mouse / Rat', icon: '🐁' },
            { word: 'எரி', meaning: 'Burn / Flame', icon: '🔥' },
            { word: 'எண்', meaning: 'Number / Count', icon: '🔢' },
            { word: 'எண்ணம்', meaning: 'Thought / Intention', icon: '💭' },
            { word: 'எதிரி', meaning: 'Opponent / Rival', icon: '🤺' },
            { word: 'எதிர்', meaning: 'Opposite / Front', icon: '↔️' },
            { word: 'எச்சில்', meaning: 'Saliva / Food crumb', icon: '💧' },
            { word: 'எட்டி', meaning: 'Reach / Peek', icon: '👀' },
            { word: 'எளிதாய்', meaning: 'Easily / Effortlessly', icon: '✨' },
            { word: 'எறி', meaning: 'Throw / Hurl', icon: '⚾' },
            { word: 'பெண்', meaning: 'Woman / Girl', icon: '👩' },
            { word: 'பெட்டி', meaning: 'Box / Trunk', icon: '📦' },
            { word: 'பெரிய', meaning: 'Big / Grand', icon: '🐘' },
            { word: 'பெயர்', meaning: 'Name / Identity', icon: '🏷️' },
            { word: 'பெரியார்', meaning: 'Venerable Elder', icon: '👴' },
            { word: 'பேனா', meaning: 'Writing Pen', icon: '🖊️' },
            { word: 'பேரன்', meaning: 'Grandson', icon: '👦' },
            { word: 'பேர்த்தி', meaning: 'Granddaughter', icon: '👧' },
            { word: 'பேரிடர்', meaning: 'Disaster / Calamity', icon: '⚡' },
            { word: 'பேரதிர்ச்சி', meaning: 'Great Shock / Surprise', icon: '😲' },
            { word: 'செடி', meaning: 'Plant / Shrub', icon: '🌱' },
            { word: 'செங்கல்', meaning: 'Red Brick', icon: '🧱' },
            { word: 'செம்மண்', meaning: 'Red Clay Soil', icon: '🪴' },
            { word: 'செவ்வாய்', meaning: 'Tuesday / Planet Mars', icon: '🪐' },
            { word: 'செம்மரி', meaning: 'Red Fleece Sheep', icon: '🐑' },
            { word: 'செம்பட்டி', meaning: 'Red Ribbon / Cloth', icon: '🎗️' },
            { word: 'செல்லம்', meaning: 'Darling / Pet', icon: '🥰' },
            { word: 'சேவல்', meaning: 'Rooster / Cock', icon: '🐓' },
            { word: 'சேதி', meaning: 'News / Message', icon: '📰' },
            { word: 'சேரி', meaning: 'Hamlet / Settlement', icon: '🏡' },
            { word: 'சேவகன்', meaning: 'Servant / Warrior', icon: '🛡️' },
            { word: 'சேமிக்க', meaning: 'To Save / Treasure', icon: '🪙' },
            { word: 'சேவடி', meaning: 'Sacred Feet', icon: '👣' },
            { word: 'கெட்டி', meaning: 'Firm / Solid / Clever', icon: '💪' },
            { word: 'கெட்ட', meaning: 'Bad / Unhealthy', icon: '🚫' },
            { word: 'கேசரி', meaning: 'Sweet Kesari Halwa', icon: '🍮' },
            { word: 'கேள்வி', meaning: 'Question / Query', icon: '❓' },
            { word: 'கேடயம்', meaning: 'Defensive Shield', icon: '🛡️' },
            { word: 'தெப்பம்', meaning: 'Water Raft / Float', icon: '🛶' },
            { word: 'தென்றல்', meaning: 'Gentle Breeze', icon: '🍃' },
            { word: 'தெரி', meaning: 'To Shine / Appear', icon: '💡' },
            { word: 'தெளி', meaning: 'Crystal Clear / Pure', icon: '💧' },
            { word: 'தெப்பல்', meaning: 'Floating Raft', icon: '⛵' },
            { word: 'தெறி', meaning: 'Splash / Scatter', icon: '💦' },
            { word: 'தேனீ', meaning: 'Honeybee', icon: '🐝' },
            { word: 'தேர்', meaning: 'Temple Chariot', icon: '🛞' },
            { word: 'தேசம்', meaning: 'Nation / Homeland', icon: '🗺️' },
            { word: 'தேவன்', meaning: 'Divine Lord', icon: '👑' },
            { word: 'தேவி', meaning: 'Goddess / Empress', icon: '👸' },
            { word: 'தேதி', meaning: 'Calendar Date', icon: '📅' },
            { word: 'தேங்காய்', meaning: 'Coconut', icon: '🥥' },
            { word: 'தேள்', meaning: 'Scorpion', icon: '🦂' },
            { word: 'தேம்பல்', meaning: 'Gentle Weep / Sigh', icon: '🥺' },
            { word: 'தேற்றல்', meaning: 'Consolation / Comfort', icon: '🤝' },
            { word: 'வெள்ளம்', meaning: 'Water Flood', icon: '🌊' },
            { word: 'வெற்றி', meaning: 'Victory / Triumph', icon: '🏆' },
            { word: 'வெள்ளி', meaning: 'Silver / Friday', icon: '🪙' },
            { word: 'வெப்பம்', meaning: 'Warm Heat', icon: '🌡️' },
            { word: 'வெட்கம்', meaning: 'Modesty / Shyness', icon: '🙈' },
            { word: 'வெட்டி', meaning: 'Cut Out / Dug', icon: '✂️' },
            { word: 'வெல்லம்', meaning: 'Sweet Jaggery', icon: '🍬' },
            { word: 'வெங்காயம்', meaning: 'Onion', icon: '🧅' },
            { word: 'வெடி', meaning: 'Firecracker / Burst', icon: '💥' },
            { word: 'வேல்', meaning: 'Sacred Spear', icon: '🗡️' },
            { word: 'வேர்', meaning: 'Plant Root', icon: '🌱' },
            { word: 'வேப்பமரம்', meaning: 'Neem Tree', icon: '🌳' },
            { word: 'வேகம்', meaning: 'Speed / Velocity', icon: '⚡' },
            { word: 'வேடன்', meaning: 'Hunter of the Wild', icon: '🏹' },
            { word: 'வேலி', meaning: 'Protective Fence', icon: '🚧' },
            { word: 'வேனில்', meaning: 'Summer Season', icon: '☀️' },
            { word: 'நெல்', meaning: 'Paddy Harvest', icon: '🌾' },
            { word: 'நெற்றி', meaning: 'Forehead', icon: '🧘' },
            { word: 'நெய்தல்', meaning: 'Seashore Landscape', icon: '🏖️' },
            { word: 'நெஞ்சம்', meaning: 'Affectionate Heart', icon: '❤️' },
            { word: 'நெய்த', meaning: 'Woven / Spun', icon: '🧵' },
            { word: 'நெளி', meaning: 'Wiggle / Curve', icon: '〰️' },
            { word: 'நேரம்', meaning: 'Time / Hour', icon: '⏰' },
            { word: 'நேசம்', meaning: 'True Friendship', icon: '💖' },
            { word: 'நேர்த்தி', meaning: 'Neatness / Order', icon: '✨' },
            { word: 'நேர்', meaning: 'Straight / Upright', icon: '📏' },
            { word: 'நேர்பட', meaning: 'Honestly / Plainly', icon: '🎯' },
            { word: 'மெலிந்த', meaning: 'Slender / Slim', icon: '🏃' },
            { word: 'மெல்ல', meaning: 'Gently / Slowly', icon: '🐢' },
            { word: 'மேளம்', meaning: 'Classical Drum', icon: '🥁' },
            { word: 'மேகம்', meaning: 'Rain Cloud', icon: '☁️' },
            { word: 'மேனி', meaning: 'Graceful Complexion', icon: '✨' },
            { word: 'மேல்', meaning: 'Above / Zenith', icon: '⬆️' },
            { word: 'மேற்கண்ட', meaning: 'Aforementioned', icon: '👆' },
            { word: 'எண்ணி', meaning: 'Having Counted', icon: '🧮' },
            { word: 'செம்மீன்', meaning: 'Red Shrimp / Prawn', icon: '🦐' },
            { word: 'தெவிட்டாத', meaning: 'Sweet Delight', icon: '🍯' },
            { word: 'டெல்டா', meaning: 'Fertile River Delta', icon: '🏞️' },
            { word: 'கேரி', meaning: 'Rail Coach / Car', icon: '🚃' }
          ]
        },
        {
          id: '3-3',
          name: 'ஙஞரற',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ"],
          rows: [
            ["ங்", "ங", "ஙா", "ஙி", "ஙீ", "ஙெ", "ஙே"],
            ["ஞ்", "ஞ", "ஞா", "ஞி", "ஞீ", "ஞெ", "ஞே"],
            ["ர்", "ர", "ரா", "ரி", "ரீ", "ரெ", "ரே"],
            ["ற்", "ற", "றா", "றி", "றீ", "றெ", "றே"]
          ],
          syllables: ["எப்", "எம்", "எட்", "எல்", "என்", "எண்", "எர்", "எற்", "ஏப்", "ஏம்", "ஏட்", "ஏல்", "ஏன்", "ஏண்", "ஏர்", "ஏற்", "பெட்", "பேட்", "மெட்", "மேட்", "டெட்", "டேட்", "செட்", "சேட்", "கெட்", "கேட்", "தெட்", "தேட்", "வெட்", "வேட்", "பெப்", "பேப்", "மெப்", "மேப்", "செப்", "சேப்", "கெப்", "கேப்", "வெப்", "வேப்", "பெம்", "பேம்", "மெம்", "மேம்", "செம்", "சேம்", "கெம்", "கேம்", "வெம்", "வேம்", "பென்", "பேன்", "மென்", "மேன்", "சென்", "சேன்", "கென்", "கேன்", "வென்", "வேன்", "பெல்", "பேல்", "மெல்", "மேல்", "செல்", "சேல்", "கெல்", "கேல்", "வெல்", "வேல்", "தென்", "தேன்", "தெல்", "தேல்", "நெல்", "நேல்", "நென்", "னேன்", "செடி", "வெடி", "நெளி", "தெறி", "எலி", "எரி", "ஏரி", "தேனீ", "மேனி", "வேலி", "பெட் பெட்", "செட் செட்", "வெட் வெட்", "மெட் மெட்", "கேட் கேட்", "செடி செடி", "வெடி வெடி", "மெல்ல மெல்ல", "நேர் நேர்", "தேர் தேர்", "வேல் வேல்", "நெல் நெல்", "தேன் தேன்", "மேல் மேல்", "வேர் வேர்", "செம் செம்", "வெம் வெம்", "தென் தென்", "பென் பென்", "எலி எலி"],
          sampleWords: [
            { word: 'ஏணி', meaning: 'Ladder', icon: '🪜' },
            { word: 'ஏர்', meaning: 'Plow', icon: '🌾' },
            { word: 'ஏரி', meaning: 'Freshwater Lake', icon: '🏞️' },
            { word: 'ஏலக்காய்', meaning: 'Cardamom', icon: '🌿' },
            { word: 'ஏனம்', meaning: 'Vessel / Utensil', icon: '🏺' },
            { word: 'ஏற்றம்', meaning: 'Elevation / Lift', icon: '📈' },
            { word: 'ஏவல்', meaning: 'Command / Bidding', icon: '📜' },
            { word: 'எலி', meaning: 'Mouse / Rat', icon: '🐁' },
            { word: 'எரி', meaning: 'Burn / Flame', icon: '🔥' },
            { word: 'எண்', meaning: 'Number / Count', icon: '🔢' },
            { word: 'எண்ணம்', meaning: 'Thought / Intention', icon: '💭' },
            { word: 'எதிரி', meaning: 'Opponent / Rival', icon: '🤺' },
            { word: 'எதிர்', meaning: 'Opposite / Front', icon: '↔️' },
            { word: 'எச்சில்', meaning: 'Saliva / Food crumb', icon: '💧' },
            { word: 'எட்டி', meaning: 'Reach / Peek', icon: '👀' },
            { word: 'எளிதாய்', meaning: 'Easily / Effortlessly', icon: '✨' },
            { word: 'எறி', meaning: 'Throw / Hurl', icon: '⚾' },
            { word: 'பெண்', meaning: 'Woman / Girl', icon: '👩' },
            { word: 'பெட்டி', meaning: 'Box / Trunk', icon: '📦' },
            { word: 'பெரிய', meaning: 'Big / Grand', icon: '🐘' },
            { word: 'பெயர்', meaning: 'Name / Identity', icon: '🏷️' },
            { word: 'பெரியார்', meaning: 'Venerable Elder', icon: '👴' },
            { word: 'பேனா', meaning: 'Writing Pen', icon: '🖊️' },
            { word: 'பேரன்', meaning: 'Grandson', icon: '👦' },
            { word: 'பேர்த்தி', meaning: 'Granddaughter', icon: '👧' },
            { word: 'பேரிடர்', meaning: 'Disaster / Calamity', icon: '⚡' },
            { word: 'பேரதிர்ச்சி', meaning: 'Great Shock / Surprise', icon: '😲' },
            { word: 'செடி', meaning: 'Plant / Shrub', icon: '🌱' },
            { word: 'செங்கல்', meaning: 'Red Brick', icon: '🧱' },
            { word: 'செம்மண்', meaning: 'Red Clay Soil', icon: '🪴' },
            { word: 'செவ்வாய்', meaning: 'Tuesday / Planet Mars', icon: '🪐' },
            { word: 'செம்மரி', meaning: 'Red Fleece Sheep', icon: '🐑' },
            { word: 'செம்பட்டி', meaning: 'Red Ribbon / Cloth', icon: '🎗️' },
            { word: 'செல்லம்', meaning: 'Darling / Pet', icon: '🥰' },
            { word: 'சேவல்', meaning: 'Rooster / Cock', icon: '🐓' },
            { word: 'சேதி', meaning: 'News / Message', icon: '📰' },
            { word: 'சேரி', meaning: 'Hamlet / Settlement', icon: '🏡' },
            { word: 'சேவகன்', meaning: 'Servant / Warrior', icon: '🛡️' },
            { word: 'சேமிக்க', meaning: 'To Save / Treasure', icon: '🪙' },
            { word: 'சேவடி', meaning: 'Sacred Feet', icon: '👣' },
            { word: 'கெட்டி', meaning: 'Firm / Solid / Clever', icon: '💪' },
            { word: 'கெட்ட', meaning: 'Bad / Unhealthy', icon: '🚫' },
            { word: 'கேசரி', meaning: 'Sweet Kesari Halwa', icon: '🍮' },
            { word: 'கேள்வி', meaning: 'Question / Query', icon: '❓' },
            { word: 'கேடயம்', meaning: 'Defensive Shield', icon: '🛡️' },
            { word: 'தெப்பம்', meaning: 'Water Raft / Float', icon: '🛶' },
            { word: 'தென்றல்', meaning: 'Gentle Breeze', icon: '🍃' },
            { word: 'தெரி', meaning: 'To Shine / Appear', icon: '💡' },
            { word: 'தெளி', meaning: 'Crystal Clear / Pure', icon: '💧' },
            { word: 'தெப்பல்', meaning: 'Floating Raft', icon: '⛵' },
            { word: 'தெறி', meaning: 'Splash / Scatter', icon: '💦' },
            { word: 'தேனீ', meaning: 'Honeybee', icon: '🐝' },
            { word: 'தேர்', meaning: 'Temple Chariot', icon: '🛞' },
            { word: 'தேசம்', meaning: 'Nation / Homeland', icon: '🗺️' },
            { word: 'தேவன்', meaning: 'Divine Lord', icon: '👑' },
            { word: 'தேவி', meaning: 'Goddess / Empress', icon: '👸' },
            { word: 'தேதி', meaning: 'Calendar Date', icon: '📅' },
            { word: 'தேங்காய்', meaning: 'Coconut', icon: '🥥' },
            { word: 'தேள்', meaning: 'Scorpion', icon: '🦂' },
            { word: 'தேம்பல்', meaning: 'Gentle Weep / Sigh', icon: '🥺' },
            { word: 'தேற்றல்', meaning: 'Consolation / Comfort', icon: '🤝' },
            { word: 'வெள்ளம்', meaning: 'Water Flood', icon: '🌊' },
            { word: 'வெற்றி', meaning: 'Victory / Triumph', icon: '🏆' },
            { word: 'வெள்ளி', meaning: 'Silver / Friday', icon: '🪙' },
            { word: 'வெப்பம்', meaning: 'Warm Heat', icon: '🌡️' },
            { word: 'வெட்கம்', meaning: 'Modesty / Shyness', icon: '🙈' },
            { word: 'வெட்டி', meaning: 'Cut Out / Dug', icon: '✂️' },
            { word: 'வெல்லம்', meaning: 'Sweet Jaggery', icon: '🍬' },
            { word: 'வெங்காயம்', meaning: 'Onion', icon: '🧅' },
            { word: 'வெடி', meaning: 'Firecracker / Burst', icon: '💥' },
            { word: 'வேல்', meaning: 'Sacred Spear', icon: '🗡️' },
            { word: 'வேர்', meaning: 'Plant Root', icon: '🌱' },
            { word: 'வேப்பமரம்', meaning: 'Neem Tree', icon: '🌳' },
            { word: 'வேகம்', meaning: 'Speed / Velocity', icon: '⚡' },
            { word: 'வேடன்', meaning: 'Hunter of the Wild', icon: '🏹' },
            { word: 'வேலி', meaning: 'Protective Fence', icon: '🚧' },
            { word: 'வேனில்', meaning: 'Summer Season', icon: '☀️' },
            { word: 'நெல்', meaning: 'Paddy Harvest', icon: '🌾' },
            { word: 'நெற்றி', meaning: 'Forehead', icon: '🧘' },
            { word: 'நெய்தல்', meaning: 'Seashore Landscape', icon: '🏖️' },
            { word: 'நெஞ்சம்', meaning: 'Affectionate Heart', icon: '❤️' },
            { word: 'நெய்த', meaning: 'Woven / Spun', icon: '🧵' },
            { word: 'நெளி', meaning: 'Wiggle / Curve', icon: '〰️' },
            { word: 'நேரம்', meaning: 'Time / Hour', icon: '⏰' },
            { word: 'நேசம்', meaning: 'True Friendship', icon: '💖' },
            { word: 'நேர்த்தி', meaning: 'Neatness / Order', icon: '✨' },
            { word: 'நேர்', meaning: 'Straight / Upright', icon: '📏' },
            { word: 'நேர்பட', meaning: 'Honestly / Plainly', icon: '🎯' },
            { word: 'மெலிந்த', meaning: 'Slender / Slim', icon: '🏃' },
            { word: 'மெல்ல', meaning: 'Gently / Slowly', icon: '🐢' },
            { word: 'மேளம்', meaning: 'Classical Drum', icon: '🥁' },
            { word: 'மேகம்', meaning: 'Rain Cloud', icon: '☁️' },
            { word: 'மேனி', meaning: 'Graceful Complexion', icon: '✨' },
            { word: 'மேல்', meaning: 'Above / Zenith', icon: '⬆️' },
            { word: 'மேற்கண்ட', meaning: 'Aforementioned', icon: '👆' },
            { word: 'எண்ணி', meaning: 'Having Counted', icon: '🧮' },
            { word: 'செம்மீன்', meaning: 'Red Shrimp / Prawn', icon: '🦐' },
            { word: 'தெவிட்டாத', meaning: 'Sweet Delight', icon: '🍯' },
            { word: 'டெல்டா', meaning: 'Fertile River Delta', icon: '🏞️' },
            { word: 'கேரி', meaning: 'Rail Coach / Car', icon: '🚃' }
          ]
        },
        {
          id: '3-4',
          name: 'நனண',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ"],
          rows: [
            ["ந்", "ந", "நா", "நி", "நீ", "நெ", "நே"],
            ["ன்", "ன", "னா", "னி", "னீ", "னெ", "னே"],
            ["ண்", "ண", "ணா", "ணி", "ணீ", "ணெ", "ணே"]
          ],
          syllables: ["எப்", "எம்", "எட்", "எல்", "என்", "எண்", "எர்", "எற்", "ஏப்", "ஏம்", "ஏட்", "ஏல்", "ஏன்", "ஏண்", "ஏர்", "ஏற்", "பெட்", "பேட்", "மெட்", "மேட்", "டெட்", "டேட்", "செட்", "சேட்", "கெட்", "கேட்", "தெட்", "தேட்", "வெட்", "வேட்", "பெப்", "பேப்", "மெப்", "மேப்", "செப்", "சேப்", "கெப்", "கேப்", "வெப்", "வேப்", "பெம்", "பேம்", "மெம்", "மேம்", "செம்", "சேம்", "கெம்", "கேம்", "வெம்", "வேம்", "பென்", "பேன்", "மென்", "மேன்", "சென்", "சேன்", "கென்", "கேன்", "வென்", "வேன்", "பெல்", "பேல்", "மெல்", "மேல்", "செல்", "சேல்", "கெல்", "கேல்", "வெல்", "வேல்", "தென்", "தேன்", "தெல்", "தேல்", "நெல்", "நேல்", "நென்", "னேன்", "செடி", "வெடி", "நெளி", "தெறி", "எலி", "எரி", "ஏரி", "தேனீ", "மேனி", "வேலி", "பெட் பெட்", "செட் செட்", "வெட் வெட்", "மெட் மெட்", "கேட் கேட்", "செடி செடி", "வெடி வெடி", "மெல்ல மெல்ல", "நேர் நேர்", "தேர் தேர்", "வேல் வேல்", "நெல் நெல்", "தேன் தேன்", "மேல் மேல்", "வேர் வேர்", "செம் செம்", "வெம் வெம்", "தென் தென்", "பென் பென்", "எலி எலி"],
          sampleWords: [
            { word: 'ஏணி', meaning: 'Ladder', icon: '🪜' },
            { word: 'ஏர்', meaning: 'Plow', icon: '🌾' },
            { word: 'ஏரி', meaning: 'Freshwater Lake', icon: '🏞️' },
            { word: 'ஏலக்காய்', meaning: 'Cardamom', icon: '🌿' },
            { word: 'ஏனம்', meaning: 'Vessel / Utensil', icon: '🏺' },
            { word: 'ஏற்றம்', meaning: 'Elevation / Lift', icon: '📈' },
            { word: 'ஏவல்', meaning: 'Command / Bidding', icon: '📜' },
            { word: 'எலி', meaning: 'Mouse / Rat', icon: '🐁' },
            { word: 'எரி', meaning: 'Burn / Flame', icon: '🔥' },
            { word: 'எண்', meaning: 'Number / Count', icon: '🔢' },
            { word: 'எண்ணம்', meaning: 'Thought / Intention', icon: '💭' },
            { word: 'எதிரி', meaning: 'Opponent / Rival', icon: '🤺' },
            { word: 'எதிர்', meaning: 'Opposite / Front', icon: '↔️' },
            { word: 'எச்சில்', meaning: 'Saliva / Food crumb', icon: '💧' },
            { word: 'எட்டி', meaning: 'Reach / Peek', icon: '👀' },
            { word: 'எளிதாய்', meaning: 'Easily / Effortlessly', icon: '✨' },
            { word: 'எறி', meaning: 'Throw / Hurl', icon: '⚾' },
            { word: 'பெண்', meaning: 'Woman / Girl', icon: '👩' },
            { word: 'பெட்டி', meaning: 'Box / Trunk', icon: '📦' },
            { word: 'பெரிய', meaning: 'Big / Grand', icon: '🐘' },
            { word: 'பெயர்', meaning: 'Name / Identity', icon: '🏷️' },
            { word: 'பெரியார்', meaning: 'Venerable Elder', icon: '👴' },
            { word: 'பேனா', meaning: 'Writing Pen', icon: '🖊️' },
            { word: 'பேரன்', meaning: 'Grandson', icon: '👦' },
            { word: 'பேர்த்தி', meaning: 'Granddaughter', icon: '👧' },
            { word: 'பேரிடர்', meaning: 'Disaster / Calamity', icon: '⚡' },
            { word: 'பேரதிர்ச்சி', meaning: 'Great Shock / Surprise', icon: '😲' },
            { word: 'செடி', meaning: 'Plant / Shrub', icon: '🌱' },
            { word: 'செங்கல்', meaning: 'Red Brick', icon: '🧱' },
            { word: 'செம்மண்', meaning: 'Red Clay Soil', icon: '🪴' },
            { word: 'செவ்வாய்', meaning: 'Tuesday / Planet Mars', icon: '🪐' },
            { word: 'செம்மரி', meaning: 'Red Fleece Sheep', icon: '🐑' },
            { word: 'செம்பட்டி', meaning: 'Red Ribbon / Cloth', icon: '🎗️' },
            { word: 'செல்லம்', meaning: 'Darling / Pet', icon: '🥰' },
            { word: 'சேவல்', meaning: 'Rooster / Cock', icon: '🐓' },
            { word: 'சேதி', meaning: 'News / Message', icon: '📰' },
            { word: 'சேரி', meaning: 'Hamlet / Settlement', icon: '🏡' },
            { word: 'சேவகன்', meaning: 'Servant / Warrior', icon: '🛡️' },
            { word: 'சேமிக்க', meaning: 'To Save / Treasure', icon: '🪙' },
            { word: 'சேவடி', meaning: 'Sacred Feet', icon: '👣' },
            { word: 'கெட்டி', meaning: 'Firm / Solid / Clever', icon: '💪' },
            { word: 'கெட்ட', meaning: 'Bad / Unhealthy', icon: '🚫' },
            { word: 'கேசரி', meaning: 'Sweet Kesari Halwa', icon: '🍮' },
            { word: 'கேள்வி', meaning: 'Question / Query', icon: '❓' },
            { word: 'கேடயம்', meaning: 'Defensive Shield', icon: '🛡️' },
            { word: 'தெப்பம்', meaning: 'Water Raft / Float', icon: '🛶' },
            { word: 'தென்றல்', meaning: 'Gentle Breeze', icon: '🍃' },
            { word: 'தெரி', meaning: 'To Shine / Appear', icon: '💡' },
            { word: 'தெளி', meaning: 'Crystal Clear / Pure', icon: '💧' },
            { word: 'தெப்பல்', meaning: 'Floating Raft', icon: '⛵' },
            { word: 'தெறி', meaning: 'Splash / Scatter', icon: '💦' },
            { word: 'தேனீ', meaning: 'Honeybee', icon: '🐝' },
            { word: 'தேர்', meaning: 'Temple Chariot', icon: '🛞' },
            { word: 'தேசம்', meaning: 'Nation / Homeland', icon: '🗺️' },
            { word: 'தேவன்', meaning: 'Divine Lord', icon: '👑' },
            { word: 'தேவி', meaning: 'Goddess / Empress', icon: '👸' },
            { word: 'தேதி', meaning: 'Calendar Date', icon: '📅' },
            { word: 'தேங்காய்', meaning: 'Coconut', icon: '🥥' },
            { word: 'தேள்', meaning: 'Scorpion', icon: '🦂' },
            { word: 'தேம்பல்', meaning: 'Gentle Weep / Sigh', icon: '🥺' },
            { word: 'தேற்றல்', meaning: 'Consolation / Comfort', icon: '🤝' },
            { word: 'வெள்ளம்', meaning: 'Water Flood', icon: '🌊' },
            { word: 'வெற்றி', meaning: 'Victory / Triumph', icon: '🏆' },
            { word: 'வெள்ளி', meaning: 'Silver / Friday', icon: '🪙' },
            { word: 'வெப்பம்', meaning: 'Warm Heat', icon: '🌡️' },
            { word: 'வெட்கம்', meaning: 'Modesty / Shyness', icon: '🙈' },
            { word: 'வெட்டி', meaning: 'Cut Out / Dug', icon: '✂️' },
            { word: 'வெல்லம்', meaning: 'Sweet Jaggery', icon: '🍬' },
            { word: 'வெங்காயம்', meaning: 'Onion', icon: '🧅' },
            { word: 'வெடி', meaning: 'Firecracker / Burst', icon: '💥' },
            { word: 'வேல்', meaning: 'Sacred Spear', icon: '🗡️' },
            { word: 'வேர்', meaning: 'Plant Root', icon: '🌱' },
            { word: 'வேப்பமரம்', meaning: 'Neem Tree', icon: '🌳' },
            { word: 'வேகம்', meaning: 'Speed / Velocity', icon: '⚡' },
            { word: 'வேடன்', meaning: 'Hunter of the Wild', icon: '🏹' },
            { word: 'வேலி', meaning: 'Protective Fence', icon: '🚧' },
            { word: 'வேனில்', meaning: 'Summer Season', icon: '☀️' },
            { word: 'நெல்', meaning: 'Paddy Harvest', icon: '🌾' },
            { word: 'நெற்றி', meaning: 'Forehead', icon: '🧘' },
            { word: 'நெய்தல்', meaning: 'Seashore Landscape', icon: '🏖️' },
            { word: 'நெஞ்சம்', meaning: 'Affectionate Heart', icon: '❤️' },
            { word: 'நெய்த', meaning: 'Woven / Spun', icon: '🧵' },
            { word: 'நெளி', meaning: 'Wiggle / Curve', icon: '〰️' },
            { word: 'நேரம்', meaning: 'Time / Hour', icon: '⏰' },
            { word: 'நேசம்', meaning: 'True Friendship', icon: '💖' },
            { word: 'நேர்த்தி', meaning: 'Neatness / Order', icon: '✨' },
            { word: 'நேர்', meaning: 'Straight / Upright', icon: '📏' },
            { word: 'நேர்பட', meaning: 'Honestly / Plainly', icon: '🎯' },
            { word: 'மெலிந்த', meaning: 'Slender / Slim', icon: '🏃' },
            { word: 'மெல்ல', meaning: 'Gently / Slowly', icon: '🐢' },
            { word: 'மேளம்', meaning: 'Classical Drum', icon: '🥁' },
            { word: 'மேகம்', meaning: 'Rain Cloud', icon: '☁️' },
            { word: 'மேனி', meaning: 'Graceful Complexion', icon: '✨' },
            { word: 'மேல்', meaning: 'Above / Zenith', icon: '⬆️' },
            { word: 'மேற்கண்ட', meaning: 'Aforementioned', icon: '👆' },
            { word: 'எண்ணி', meaning: 'Having Counted', icon: '🧮' },
            { word: 'செம்மீன்', meaning: 'Red Shrimp / Prawn', icon: '🦐' },
            { word: 'தெவிட்டாத', meaning: 'Sweet Delight', icon: '🍯' },
            { word: 'டெல்டா', meaning: 'Fertile River Delta', icon: '🏞️' },
            { word: 'கேரி', meaning: 'Rail Coach / Car', icon: '🚃' }
          ]
        },
        {
          id: '3-5',
          name: 'லளழ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ"],
          rows: [
            ["ல்", "ல", "லா", "லி", "லீ", "லெ", "லே"],
            ["ள்", "ள", "ளா", "ளி", "ளீ", "ளெ", "ளே"],
            ["ழ்", "ழ", "ழா", "ழி", "ழீ", "ழெ", "ழே"]
          ],
          syllables: ["எப்", "எம்", "எட்", "எல்", "என்", "எண்", "எர்", "எற்", "ஏப்", "ஏம்", "ஏட்", "ஏல்", "ஏன்", "ஏண்", "ஏர்", "ஏற்", "பெட்", "பேட்", "மெட்", "மேட்", "டெட்", "டேட்", "செட்", "சேட்", "கெட்", "கேட்", "தெட்", "தேட்", "வெட்", "வேட்", "பெப்", "பேப்", "மெப்", "மேப்", "செப்", "சேப்", "கெப்", "கேப்", "வெப்", "வேப்", "பெம்", "பேம்", "மெம்", "மேம்", "செம்", "சேம்", "கெம்", "கேம்", "வெம்", "வேம்", "பென்", "பேன்", "மென்", "மேன்", "சென்", "சேன்", "கென்", "கேன்", "வென்", "வேன்", "பெல்", "பேல்", "மெல்", "மேல்", "செல்", "சேல்", "கெல்", "கேல்", "வெல்", "வேல்", "தென்", "தேன்", "தெல்", "தேல்", "நெல்", "நேல்", "நென்", "னேன்", "செடி", "வெடி", "நெளி", "தெறி", "எலி", "எரி", "ஏரி", "தேனீ", "மேனி", "வேலி", "பெட் பெட்", "செட் செட்", "வெட் வெட்", "மெட் மெட்", "கேட் கேட்", "செடி செடி", "வெடி வெடி", "மெல்ல மெல்ல", "நேர் நேர்", "தேர் தேர்", "வேல் வேல்", "நெல் நெல்", "தேன் தேன்", "மேல் மேல்", "வேர் வேர்", "செம் செம்", "வெம் வெம்", "தென் தென்", "பென் பென்", "எலி எலி"],
          sampleWords: [
            { word: 'ஏணி', meaning: 'Ladder', icon: '🪜' },
            { word: 'ஏர்', meaning: 'Plow', icon: '🌾' },
            { word: 'ஏரி', meaning: 'Freshwater Lake', icon: '🏞️' },
            { word: 'ஏலக்காய்', meaning: 'Cardamom', icon: '🌿' },
            { word: 'ஏனம்', meaning: 'Vessel / Utensil', icon: '🏺' },
            { word: 'ஏற்றம்', meaning: 'Elevation / Lift', icon: '📈' },
            { word: 'ஏவல்', meaning: 'Command / Bidding', icon: '📜' },
            { word: 'எலி', meaning: 'Mouse / Rat', icon: '🐁' },
            { word: 'எரி', meaning: 'Burn / Flame', icon: '🔥' },
            { word: 'எண்', meaning: 'Number / Count', icon: '🔢' },
            { word: 'எண்ணம்', meaning: 'Thought / Intention', icon: '💭' },
            { word: 'எதிரி', meaning: 'Opponent / Rival', icon: '🤺' },
            { word: 'எதிர்', meaning: 'Opposite / Front', icon: '↔️' },
            { word: 'எச்சில்', meaning: 'Saliva / Food crumb', icon: '💧' },
            { word: 'எட்டி', meaning: 'Reach / Peek', icon: '👀' },
            { word: 'எளிதாய்', meaning: 'Easily / Effortlessly', icon: '✨' },
            { word: 'எறி', meaning: 'Throw / Hurl', icon: '⚾' },
            { word: 'பெண்', meaning: 'Woman / Girl', icon: '👩' },
            { word: 'பெட்டி', meaning: 'Box / Trunk', icon: '📦' },
            { word: 'பெரிய', meaning: 'Big / Grand', icon: '🐘' },
            { word: 'பெயர்', meaning: 'Name / Identity', icon: '🏷️' },
            { word: 'பெரியார்', meaning: 'Venerable Elder', icon: '👴' },
            { word: 'பேனா', meaning: 'Writing Pen', icon: '🖊️' },
            { word: 'பேரன்', meaning: 'Grandson', icon: '👦' },
            { word: 'பேர்த்தி', meaning: 'Granddaughter', icon: '👧' },
            { word: 'பேரிடர்', meaning: 'Disaster / Calamity', icon: '⚡' },
            { word: 'பேரதிர்ச்சி', meaning: 'Great Shock / Surprise', icon: '😲' },
            { word: 'செடி', meaning: 'Plant / Shrub', icon: '🌱' },
            { word: 'செங்கல்', meaning: 'Red Brick', icon: '🧱' },
            { word: 'செம்மண்', meaning: 'Red Clay Soil', icon: '🪴' },
            { word: 'செவ்வாய்', meaning: 'Tuesday / Planet Mars', icon: '🪐' },
            { word: 'செம்மரி', meaning: 'Red Fleece Sheep', icon: '🐑' },
            { word: 'செம்பட்டி', meaning: 'Red Ribbon / Cloth', icon: '🎗️' },
            { word: 'செல்லம்', meaning: 'Darling / Pet', icon: '🥰' },
            { word: 'சேவல்', meaning: 'Rooster / Cock', icon: '🐓' },
            { word: 'சேதி', meaning: 'News / Message', icon: '📰' },
            { word: 'சேரி', meaning: 'Hamlet / Settlement', icon: '🏡' },
            { word: 'சேவகன்', meaning: 'Servant / Warrior', icon: '🛡️' },
            { word: 'சேமிக்க', meaning: 'To Save / Treasure', icon: '🪙' },
            { word: 'சேவடி', meaning: 'Sacred Feet', icon: '👣' },
            { word: 'கெட்டி', meaning: 'Firm / Solid / Clever', icon: '💪' },
            { word: 'கெட்ட', meaning: 'Bad / Unhealthy', icon: '🚫' },
            { word: 'கேசரி', meaning: 'Sweet Kesari Halwa', icon: '🍮' },
            { word: 'கேள்வி', meaning: 'Question / Query', icon: '❓' },
            { word: 'கேடயம்', meaning: 'Defensive Shield', icon: '🛡️' },
            { word: 'தெப்பம்', meaning: 'Water Raft / Float', icon: '🛶' },
            { word: 'தென்றல்', meaning: 'Gentle Breeze', icon: '🍃' },
            { word: 'தெரி', meaning: 'To Shine / Appear', icon: '💡' },
            { word: 'தெளி', meaning: 'Crystal Clear / Pure', icon: '💧' },
            { word: 'தெப்பல்', meaning: 'Floating Raft', icon: '⛵' },
            { word: 'தெறி', meaning: 'Splash / Scatter', icon: '💦' },
            { word: 'தேனீ', meaning: 'Honeybee', icon: '🐝' },
            { word: 'தேர்', meaning: 'Temple Chariot', icon: '🛞' },
            { word: 'தேசம்', meaning: 'Nation / Homeland', icon: '🗺️' },
            { word: 'தேவன்', meaning: 'Divine Lord', icon: '👑' },
            { word: 'தேவி', meaning: 'Goddess / Empress', icon: '👸' },
            { word: 'தேதி', meaning: 'Calendar Date', icon: '📅' },
            { word: 'தேங்காய்', meaning: 'Coconut', icon: '🥥' },
            { word: 'தேள்', meaning: 'Scorpion', icon: '🦂' },
            { word: 'தேம்பல்', meaning: 'Gentle Weep / Sigh', icon: '🥺' },
            { word: 'தேற்றல்', meaning: 'Consolation / Comfort', icon: '🤝' },
            { word: 'வெள்ளம்', meaning: 'Water Flood', icon: '🌊' },
            { word: 'வெற்றி', meaning: 'Victory / Triumph', icon: '🏆' },
            { word: 'வெள்ளி', meaning: 'Silver / Friday', icon: '🪙' },
            { word: 'வெப்பம்', meaning: 'Warm Heat', icon: '🌡️' },
            { word: 'வெட்கம்', meaning: 'Modesty / Shyness', icon: '🙈' },
            { word: 'வெட்டி', meaning: 'Cut Out / Dug', icon: '✂️' },
            { word: 'வெல்லம்', meaning: 'Sweet Jaggery', icon: '🍬' },
            { word: 'வெங்காயம்', meaning: 'Onion', icon: '🧅' },
            { word: 'வெடி', meaning: 'Firecracker / Burst', icon: '💥' },
            { word: 'வேல்', meaning: 'Sacred Spear', icon: '🗡️' },
            { word: 'வேர்', meaning: 'Plant Root', icon: '🌱' },
            { word: 'வேப்பமரம்', meaning: 'Neem Tree', icon: '🌳' },
            { word: 'வேகம்', meaning: 'Speed / Velocity', icon: '⚡' },
            { word: 'வேடன்', meaning: 'Hunter of the Wild', icon: '🏹' },
            { word: 'வேலி', meaning: 'Protective Fence', icon: '🚧' },
            { word: 'வேனில்', meaning: 'Summer Season', icon: '☀️' },
            { word: 'நெல்', meaning: 'Paddy Harvest', icon: '🌾' },
            { word: 'நெற்றி', meaning: 'Forehead', icon: '🧘' },
            { word: 'நெய்தல்', meaning: 'Seashore Landscape', icon: '🏖️' },
            { word: 'நெஞ்சம்', meaning: 'Affectionate Heart', icon: '❤️' },
            { word: 'நெய்த', meaning: 'Woven / Spun', icon: '🧵' },
            { word: 'நெளி', meaning: 'Wiggle / Curve', icon: '〰️' },
            { word: 'நேரம்', meaning: 'Time / Hour', icon: '⏰' },
            { word: 'நேசம்', meaning: 'True Friendship', icon: '💖' },
            { word: 'நேர்த்தி', meaning: 'Neatness / Order', icon: '✨' },
            { word: 'நேர்', meaning: 'Straight / Upright', icon: '📏' },
            { word: 'நேர்பட', meaning: 'Honestly / Plainly', icon: '🎯' },
            { word: 'மெலிந்த', meaning: 'Slender / Slim', icon: '🏃' },
            { word: 'மெல்ல', meaning: 'Gently / Slowly', icon: '🐢' },
            { word: 'மேளம்', meaning: 'Classical Drum', icon: '🥁' },
            { word: 'மேகம்', meaning: 'Rain Cloud', icon: '☁️' },
            { word: 'மேனி', meaning: 'Graceful Complexion', icon: '✨' },
            { word: 'மேல்', meaning: 'Above / Zenith', icon: '⬆️' },
            { word: 'மேற்கண்ட', meaning: 'Aforementioned', icon: '👆' },
            { word: 'எண்ணி', meaning: 'Having Counted', icon: '🧮' },
            { word: 'செம்மீன்', meaning: 'Red Shrimp / Prawn', icon: '🦐' },
            { word: 'தெவிட்டாத', meaning: 'Sweet Delight', icon: '🍯' },
            { word: 'டெல்டா', meaning: 'Fertile River Delta', icon: '🏞️' },
            { word: 'கேரி', meaning: 'Rail Coach / Car', icon: '🚃' }
          ]
        }
      ]
    },

    4: {
      number: 4,
      title: 'Level 4 Letters',
      currentSetIndex: 0,
      sets: [
        {
          id: '4-1',
          name: 'டபமய',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ"],
          rows: [
            ["ட்", "ட", "டா", "டி", "டீ", "டெ", "டே", "டை"],
            ["ப்", "ப", "பா", "பி", "பீ", "பெ", "பே", "பை"],
            ["ம்", "ம", "மா", "மி", "மீ", "மெ", "மே", "மை"],
            ["ய்", "ய", "யா", "யி", "யீ", "யெ", "யே", "யை"]
          ],
          syllables: ["கை", "பை", "மை", "தை", "டை", "சை", "வை", "லை", "ளை", "ழை", "ரை", "றை", "னை", "ணை", "நை", "கைத்", "பைத்", "மைத்", "தைத்", "டைத்", "சைத்", "வைத்", "லைத்", "ளைத்", "ழைத்", "கைப்", "பைப்", "மைப்", "தைப்", "டைப்", "சைப்", "வைப்", "லைப்", "ளைப்", "ழைப்", "கைம்", "பைம்", "மைம்", "தைம்", "டைம்", "சைம்", "வைம்", "லைம்", "ளைம்", "ழைம்", "யானை", "வாழை", "மாலை", "காலை", "வலை", "தலை", "மலை", "அலை", "இலை", "சிலை", "விலை", "நிலை", "கலை", "பாவை", "பறவை", "மழை", "நடை", "விடை", "தடை", "படை", "ஆடை", "வடை", "நகை", "ஆசை", "திசை", "இசை", "நத்தை", "அத்தை", "விதை", "கதை", "சேலை", "வேலை", "எல்லை", "தவளை", "பிள்ளை", "வெள்ளை", "கிளை", "கீரை", "தாமரை", "திரை", "சிறை", "அன்னை", "சென்னை", "கை கை", "பை பை", "மை மை", "தை தை", "டை டை", "சை சை", "வை வை", "லை லை", "யானை யானை", "வாழை வாழை", "மாலை மாலை", "காலை காலை", "வலை வலை", "தலை தலை", "மலை மலை", "அலை அலை", "இலை இலை", "சிலை சிலை", "மழை மழை", "நடை நடை", "ஆடை ஆடை", "வடை வடை", "ஆசை ஆசை", "இசை இசை", "விதை விதை", "கதை கதை", "வேலை வேலை", "வெள்ளை வெள்ளை", "சென்னை சென்னை", "நன்மை நன்மை"],
          sampleWords: [
            { word: 'ஐவர்', meaning: 'The Five Heroes', icon: '👥' },
            { word: 'ஐயம்', meaning: 'Doubt / Wonder', icon: '❓' },
            { word: 'கை', meaning: 'Hand / Palm', icon: '✋' },
            { word: 'பை', meaning: 'Bag / Pouch', icon: '🎒' },
            { word: 'மை', meaning: 'Black Kohl / Ink', icon: '✒️' },
            { word: 'தை', meaning: 'Tamil Harvest Month / Sew', icon: '🌾' },
            { word: 'யானை', meaning: 'Elephant', icon: '🐘' },
            { word: 'வாழை', meaning: 'Banana Tree', icon: '🍌' },
            { word: 'மாலை', meaning: 'Flower Garland / Twilight', icon: '💐' },
            { word: 'காலை', meaning: 'Early Morning', icon: '🌅' },
            { word: 'வலை', meaning: 'Fishing Net / Web', icon: '🕸️' },
            { word: 'தலை', meaning: 'Head / Crown', icon: '🗣️' },
            { word: 'மலை', meaning: 'High Mountain / Hill', icon: '⛰️' },
            { word: 'அலை', meaning: 'Ocean Sea Wave', icon: '🌊' },
            { word: 'இலை', meaning: 'Green Plant Leaf', icon: '🍃' },
            { word: 'சிலை', meaning: 'Carved Statue', icon: '🗿' },
            { word: 'விலை', meaning: 'Price / Value', icon: '🏷️' },
            { word: 'நிலை', meaning: 'State / Steadfastness', icon: '🏛️' },
            { word: 'கலை', meaning: 'Fine Art / Skill', icon: '🎨' },
            { word: 'பாவை', meaning: 'Traditional Puppet / Maiden', icon: '🎎' },
            { word: 'பறவை', meaning: 'Flying Bird', icon: '🕊️' },
            { word: 'மழை', meaning: 'Falling Rain', icon: '🌧️' },
            { word: 'நடை', meaning: 'Walking Gait / Pace', icon: '🚶' },
            { word: 'விடை', meaning: 'Correct Answer', icon: '✅' },
            { word: 'தடை', meaning: 'Obstacle / Shield', icon: '🛑' },
            { word: 'படை', meaning: 'Troops / Legion', icon: '⚔️' },
            { word: 'அடை', meaning: 'Crispy Lentil Pancake', icon: '🥞' },
            { word: 'ஆடை', meaning: 'Woven Garment', icon: '👗' },
            { word: 'வாடை', meaning: 'Pleasant Aroma / Breeze', icon: '🌬️' },
            { word: 'மேடை', meaning: 'Public Stage / Platform', icon: '🎭' },
            { word: 'வடை', meaning: 'Golden Crispy Vada', icon: '🍘' },
            { word: 'நகை', meaning: 'Joyous Smile / Jewelry', icon: '💎' },
            { word: 'பகை', meaning: 'Hostility / Rivalry', icon: '⚡' },
            { word: 'வகை', meaning: 'Category / Sort', icon: '📂' },
            { word: 'கைப்பை', meaning: 'Handbag / Tote', icon: '👜' },
            { word: 'கைத்தறி', meaning: 'Traditional Handloom', icon: '🧵' },
            { word: 'கைவண்டி', meaning: 'Handcart', icon: '🛒' },
            { word: 'பச்சை', meaning: 'Vibrant Green Leaf', icon: '🟢' },
            { word: 'ஆசை', meaning: 'Fond Wish / Longing', icon: '🌟' },
            { word: 'திசை', meaning: 'Cardinal Direction', icon: '🧭' },
            { word: 'இசை', meaning: 'Classical Music', icon: '🎵' },
            { word: 'அசை', meaning: 'Rhythmic Syllable', icon: '🎼' },
            { word: 'விசை', meaning: 'Physical Force / Switch', icon: '🔘' },
            { word: 'நத்தை', meaning: 'Spiral Shell Snail', icon: '🐌' },
            { word: 'அத்தை', meaning: 'Paternal Aunt', icon: '👩' },
            { word: 'விதை', meaning: 'Sprouting Seed', icon: '🌱' },
            { word: 'கதை', meaning: 'Folktale / Story', icon: '📖' },
            { word: 'சிதை', meaning: 'Ancient Cairn / Relic', icon: '🏺' },
            { word: 'மெத்தை', meaning: 'Plush Cushion / Mattress', icon: '🛏️' },
            { word: 'சேனை', meaning: 'Army Battalion', icon: '🛡️' },
            { word: 'சேலை', meaning: 'Silk Sari', icon: '🥻' },
            { word: 'வேலை', meaning: 'Productive Work', icon: '💼' },
            { word: 'வேளை', meaning: 'Auspicious Time', icon: '⌛' },
            { word: 'மேற்கை', meaning: 'Forearm', icon: '💪' },
            { word: 'நெல்லை', meaning: 'Paddy Town', icon: '🌾' },
            { word: 'எல்லை', meaning: 'Boundary Marker', icon: '📍' },
            { word: 'மல்லிகை', meaning: 'Fragrant Jasmine', icon: '🌼' },
            { word: 'நம்பிக்கை', meaning: 'Deep Faith / Trust', icon: '🤝' },
            { word: 'சேர்க்கை', meaning: 'Harmonious Blend', icon: '✨' },
            { word: 'வேர்க்கடலை', meaning: 'Roasted Peanut', icon: '🥜' },
            { word: 'தவளை', meaning: 'Green Pond Frog', icon: '🐸' },
            { word: 'பிள்ளை', meaning: 'Beloved Child', icon: '🧒' },
            { word: 'வெள்ளை', meaning: 'Pure White', icon: '⚪' },
            { word: 'கிளை', meaning: 'Bough / Tree Branch', icon: '🌿' },
            { word: 'வளை', meaning: 'Curved Arch / Burrow', icon: '🌈' },
            { word: 'வளையல்', meaning: 'Glass Bangle', icon: '💫' },
            { word: 'இளை', meaning: 'Take Respite', icon: '🧘' },
            { word: 'கீரை', meaning: 'Garden Greens / Spinach', icon: '🥬' },
            { word: 'நாரை', meaning: 'White Crane Bird', icon: '🪿' },
            { word: 'தாமரை', meaning: 'Pink Sacred Lotus', icon: '🪷' },
            { word: 'திரை', meaning: 'Stage Curtain', icon: '🎬' },
            { word: 'சிறை', meaning: 'Fortress Bastion', icon: '🏰' },
            { word: 'கறை', meaning: 'Ink Tint / Mark', icon: '💧' },
            { word: 'பறை', meaning: 'Resonant Beat Drum', icon: '🥁' },
            { word: 'மறை', meaning: 'Sacred Wisdom / Veda', icon: '📜' },
            { word: 'நிறை', meaning: 'Abundance / Plenty', icon: '🏺' },
            { word: 'இறை', meaning: 'Supreme Lord / Sovereign', icon: '👑' },
            { word: 'விதைக்க', meaning: 'To Scatter Seeds', icon: '🌾' },
            { word: 'அன்னை', meaning: 'Nurturing Mother', icon: '🤱' },
            { word: 'பின்னை', meaning: 'Subsequent Hour', icon: '⏳' },
            { word: 'சென்னை', meaning: 'Chennai Metropolis', icon: '🏙️' },
            { word: 'மென்மை', meaning: 'Soft Tenderness', icon: '🧸' },
            { word: 'தன்மை', meaning: 'True Nature / Essence', icon: '💎' },
            { word: 'நன்மை', meaning: 'Virtue / Good Deed', icon: '🎁' },
            { word: 'பன்மை', meaning: 'Plural Harmony', icon: '👥' },
            { word: 'மேன்மை', meaning: 'Supreme Majesty', icon: '🌟' },
            { word: 'நேர்மை', meaning: 'Truthful Integrity', icon: '⚖️' },
            { word: 'எளிமை', meaning: 'Humble Grace', icon: '🕊️' },
            { word: 'இனிமை', meaning: 'Honey Sweetness', icon: '🍯' },
            { word: 'தனிமை', meaning: 'Quiet Solitude', icon: '🌙' },
            { word: 'பச்சைக்கிளி', meaning: 'Vivid Green Parrot', icon: '🦜' },
            { word: 'வெண்டைக்காய்', meaning: 'Okra Pod', icon: '🥒' },
            { word: 'தலைமை', meaning: 'Supreme Leadership', icon: '🎖️' },
            { word: 'வெள்ளையன்', meaning: 'Pure Hearted One', icon: '🤍' },
            { word: 'கற்றாழை', meaning: 'Medicinal Aloe Plant', icon: '🪴' },
            { word: 'வாழைக்காய்', meaning: 'Green Plantain', icon: '🍌' },
            { word: 'வாழைமரம்', meaning: 'Plantain Tree', icon: '🌴' },
            { word: 'மாலைவேளை', meaning: 'Gentle Dusk', icon: '🌆' }
          ]
        },
        {
          id: '4-2',
          name: 'சகதவ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ"],
          rows: [
            ["ச்", "ச", "சா", "சி", "சீ", "செ", "சே", "சை"],
            ["க்", "க", "கா", "கி", "கீ", "கெ", "கே", "கை"],
            ["த்", "த", "தா", "தி", "தீ", "தெ", "தே", "தை"],
            ["வ்", "வ", "வா", "வி", "வீ", "வெ", "வே", "வை"]
          ],
          syllables: ["கை", "பை", "மை", "தை", "டை", "சை", "வை", "லை", "ளை", "ழை", "ரை", "றை", "னை", "ணை", "நை", "கைத்", "பைத்", "மைத்", "தைத்", "டைத்", "சைத்", "வைத்", "லைத்", "ளைத்", "ழைத்", "கைப்", "பைப்", "மைப்", "தைப்", "டைப்", "சைப்", "வைப்", "லைப்", "ளைப்", "ழைப்", "கைம்", "பைம்", "மைம்", "தைம்", "டைம்", "சைம்", "வைம்", "லைம்", "ளைம்", "ழைம்", "யானை", "வாழை", "மாலை", "காலை", "வலை", "தலை", "மலை", "அலை", "இலை", "சிலை", "விலை", "நிலை", "கலை", "பாவை", "பறவை", "மழை", "நடை", "விடை", "தடை", "படை", "ஆடை", "வடை", "நகை", "ஆசை", "திசை", "இசை", "நத்தை", "அத்தை", "விதை", "கதை", "சேலை", "வேலை", "எல்லை", "தவளை", "பிள்ளை", "வெள்ளை", "கிளை", "கீரை", "தாமரை", "திரை", "சிறை", "அன்னை", "சென்னை", "கை கை", "பை பை", "மை மை", "தை தை", "டை டை", "சை சை", "வை வை", "லை லை", "யானை யானை", "வாழை வாழை", "மாலை மாலை", "காலை காலை", "வலை வலை", "தலை தலை", "மலை மலை", "அலை அலை", "இலை இலை", "சிலை சிலை", "மழை மழை", "நடை நடை", "ஆடை ஆடை", "வடை வடை", "ஆசை ஆசை", "இசை இசை", "விதை விதை", "கதை கதை", "வேலை வேலை", "வெள்ளை வெள்ளை", "சென்னை சென்னை", "நன்மை நன்மை"],
          sampleWords: [
            { word: 'ஐவர்', meaning: 'The Five Heroes', icon: '👥' },
            { word: 'ஐயம்', meaning: 'Doubt / Wonder', icon: '❓' },
            { word: 'கை', meaning: 'Hand / Palm', icon: '✋' },
            { word: 'பை', meaning: 'Bag / Pouch', icon: '🎒' },
            { word: 'மை', meaning: 'Black Kohl / Ink', icon: '✒️' },
            { word: 'தை', meaning: 'Tamil Harvest Month / Sew', icon: '🌾' },
            { word: 'யானை', meaning: 'Elephant', icon: '🐘' },
            { word: 'வாழை', meaning: 'Banana Tree', icon: '🍌' },
            { word: 'மாலை', meaning: 'Flower Garland / Twilight', icon: '💐' },
            { word: 'காலை', meaning: 'Early Morning', icon: '🌅' },
            { word: 'வலை', meaning: 'Fishing Net / Web', icon: '🕸️' },
            { word: 'தலை', meaning: 'Head / Crown', icon: '🗣️' },
            { word: 'மலை', meaning: 'High Mountain / Hill', icon: '⛰️' },
            { word: 'அலை', meaning: 'Ocean Sea Wave', icon: '🌊' },
            { word: 'இலை', meaning: 'Green Plant Leaf', icon: '🍃' },
            { word: 'சிலை', meaning: 'Carved Statue', icon: '🗿' },
            { word: 'விலை', meaning: 'Price / Value', icon: '🏷️' },
            { word: 'நிலை', meaning: 'State / Steadfastness', icon: '🏛️' },
            { word: 'கலை', meaning: 'Fine Art / Skill', icon: '🎨' },
            { word: 'பாவை', meaning: 'Traditional Puppet / Maiden', icon: '🎎' },
            { word: 'பறவை', meaning: 'Flying Bird', icon: '🕊️' },
            { word: 'மழை', meaning: 'Falling Rain', icon: '🌧️' },
            { word: 'நடை', meaning: 'Walking Gait / Pace', icon: '🚶' },
            { word: 'விடை', meaning: 'Correct Answer', icon: '✅' },
            { word: 'தடை', meaning: 'Obstacle / Shield', icon: '🛑' },
            { word: 'படை', meaning: 'Troops / Legion', icon: '⚔️' },
            { word: 'அடை', meaning: 'Crispy Lentil Pancake', icon: '🥞' },
            { word: 'ஆடை', meaning: 'Woven Garment', icon: '👗' },
            { word: 'வாடை', meaning: 'Pleasant Aroma / Breeze', icon: '🌬️' },
            { word: 'மேடை', meaning: 'Public Stage / Platform', icon: '🎭' },
            { word: 'வடை', meaning: 'Golden Crispy Vada', icon: '🍘' },
            { word: 'நகை', meaning: 'Joyous Smile / Jewelry', icon: '💎' },
            { word: 'பகை', meaning: 'Hostility / Rivalry', icon: '⚡' },
            { word: 'வகை', meaning: 'Category / Sort', icon: '📂' },
            { word: 'கைப்பை', meaning: 'Handbag / Tote', icon: '👜' },
            { word: 'கைத்தறி', meaning: 'Traditional Handloom', icon: '🧵' },
            { word: 'கைவண்டி', meaning: 'Handcart', icon: '🛒' },
            { word: 'பச்சை', meaning: 'Vibrant Green Leaf', icon: '🟢' },
            { word: 'ஆசை', meaning: 'Fond Wish / Longing', icon: '🌟' },
            { word: 'திசை', meaning: 'Cardinal Direction', icon: '🧭' },
            { word: 'இசை', meaning: 'Classical Music', icon: '🎵' },
            { word: 'அசை', meaning: 'Rhythmic Syllable', icon: '🎼' },
            { word: 'விசை', meaning: 'Physical Force / Switch', icon: '🔘' },
            { word: 'நத்தை', meaning: 'Spiral Shell Snail', icon: '🐌' },
            { word: 'அத்தை', meaning: 'Paternal Aunt', icon: '👩' },
            { word: 'விதை', meaning: 'Sprouting Seed', icon: '🌱' },
            { word: 'கதை', meaning: 'Folktale / Story', icon: '📖' },
            { word: 'சிதை', meaning: 'Ancient Cairn / Relic', icon: '🏺' },
            { word: 'மெத்தை', meaning: 'Plush Cushion / Mattress', icon: '🛏️' },
            { word: 'சேனை', meaning: 'Army Battalion', icon: '🛡️' },
            { word: 'சேலை', meaning: 'Silk Sari', icon: '🥻' },
            { word: 'வேலை', meaning: 'Productive Work', icon: '💼' },
            { word: 'வேளை', meaning: 'Auspicious Time', icon: '⌛' },
            { word: 'மேற்கை', meaning: 'Forearm', icon: '💪' },
            { word: 'நெல்லை', meaning: 'Paddy Town', icon: '🌾' },
            { word: 'எல்லை', meaning: 'Boundary Marker', icon: '📍' },
            { word: 'மல்லிகை', meaning: 'Fragrant Jasmine', icon: '🌼' },
            { word: 'நம்பிக்கை', meaning: 'Deep Faith / Trust', icon: '🤝' },
            { word: 'சேர்க்கை', meaning: 'Harmonious Blend', icon: '✨' },
            { word: 'வேர்க்கடலை', meaning: 'Roasted Peanut', icon: '🥜' },
            { word: 'தவளை', meaning: 'Green Pond Frog', icon: '🐸' },
            { word: 'பிள்ளை', meaning: 'Beloved Child', icon: '🧒' },
            { word: 'வெள்ளை', meaning: 'Pure White', icon: '⚪' },
            { word: 'கிளை', meaning: 'Bough / Tree Branch', icon: '🌿' },
            { word: 'வளை', meaning: 'Curved Arch / Burrow', icon: '🌈' },
            { word: 'வளையல்', meaning: 'Glass Bangle', icon: '💫' },
            { word: 'இளை', meaning: 'Take Respite', icon: '🧘' },
            { word: 'கீரை', meaning: 'Garden Greens / Spinach', icon: '🥬' },
            { word: 'நாரை', meaning: 'White Crane Bird', icon: '🪿' },
            { word: 'தாமரை', meaning: 'Pink Sacred Lotus', icon: '🪷' },
            { word: 'திரை', meaning: 'Stage Curtain', icon: '🎬' },
            { word: 'சிறை', meaning: 'Fortress Bastion', icon: '🏰' },
            { word: 'கறை', meaning: 'Ink Tint / Mark', icon: '💧' },
            { word: 'பறை', meaning: 'Resonant Beat Drum', icon: '🥁' },
            { word: 'மறை', meaning: 'Sacred Wisdom / Veda', icon: '📜' },
            { word: 'நிறை', meaning: 'Abundance / Plenty', icon: '🏺' },
            { word: 'இறை', meaning: 'Supreme Lord / Sovereign', icon: '👑' },
            { word: 'விதைக்க', meaning: 'To Scatter Seeds', icon: '🌾' },
            { word: 'அன்னை', meaning: 'Nurturing Mother', icon: '🤱' },
            { word: 'பின்னை', meaning: 'Subsequent Hour', icon: '⏳' },
            { word: 'சென்னை', meaning: 'Chennai Metropolis', icon: '🏙️' },
            { word: 'மென்மை', meaning: 'Soft Tenderness', icon: '🧸' },
            { word: 'தன்மை', meaning: 'True Nature / Essence', icon: '💎' },
            { word: 'நன்மை', meaning: 'Virtue / Good Deed', icon: '🎁' },
            { word: 'பன்மை', meaning: 'Plural Harmony', icon: '👥' },
            { word: 'மேன்மை', meaning: 'Supreme Majesty', icon: '🌟' },
            { word: 'நேர்மை', meaning: 'Truthful Integrity', icon: '⚖️' },
            { word: 'எளிமை', meaning: 'Humble Grace', icon: '🕊️' },
            { word: 'இனிமை', meaning: 'Honey Sweetness', icon: '🍯' },
            { word: 'தனிமை', meaning: 'Quiet Solitude', icon: '🌙' },
            { word: 'பச்சைக்கிளி', meaning: 'Vivid Green Parrot', icon: '🦜' },
            { word: 'வெண்டைக்காய்', meaning: 'Okra Pod', icon: '🥒' },
            { word: 'தலைமை', meaning: 'Supreme Leadership', icon: '🎖️' },
            { word: 'வெள்ளையன்', meaning: 'Pure Hearted One', icon: '🤍' },
            { word: 'கற்றாழை', meaning: 'Medicinal Aloe Plant', icon: '🪴' },
            { word: 'வாழைக்காய்', meaning: 'Green Plantain', icon: '🍌' },
            { word: 'வாழைமரம்', meaning: 'Plantain Tree', icon: '🌴' },
            { word: 'மாலைவேளை', meaning: 'Gentle Dusk', icon: '🌆' }
          ]
        },
        {
          id: '4-3',
          name: 'ஙஞரற',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ"],
          rows: [
            ["ங்", "ங", "ஙா", "ஙி", "ஙீ", "ஙெ", "ஙே", "ஙை"],
            ["ஞ்", "ஞ", "ஞா", "ஞி", "ஞீ", "ஞெ", "ஞே", "ஞை"],
            ["ர்", "ர", "ரா", "ரி", "ரீ", "ரெ", "ரே", "ரை"],
            ["ற்", "ற", "றா", "றி", "றீ", "றெ", "றே", "றை"]
          ],
          syllables: ["கை", "பை", "மை", "தை", "டை", "சை", "வை", "லை", "ளை", "ழை", "ரை", "றை", "னை", "ணை", "நை", "கைத்", "பைத்", "மைத்", "தைத்", "டைத்", "சைத்", "வைத்", "லைத்", "ளைத்", "ழைத்", "கைப்", "பைப்", "மைப்", "தைப்", "டைப்", "சைப்", "வைப்", "லைப்", "ளைப்", "ழைப்", "கைம்", "பைம்", "மைம்", "தைம்", "டைம்", "சைம்", "வைம்", "லைம்", "ளைம்", "ழைம்", "யானை", "வாழை", "மாலை", "காலை", "வலை", "தலை", "மலை", "அலை", "இலை", "சிலை", "விலை", "நிலை", "கலை", "பாவை", "பறவை", "மழை", "நடை", "விடை", "தடை", "படை", "ஆடை", "வடை", "நகை", "ஆசை", "திசை", "இசை", "நத்தை", "அத்தை", "விதை", "கதை", "சேலை", "வேலை", "எல்லை", "தவளை", "பிள்ளை", "வெள்ளை", "கிளை", "கீரை", "தாமரை", "திரை", "சிறை", "அன்னை", "சென்னை", "கை கை", "பை பை", "மை மை", "தை தை", "டை டை", "சை சை", "வை வை", "லை லை", "யானை யானை", "வாழை வாழை", "மாலை மாலை", "காலை காலை", "வலை வலை", "தலை தலை", "மலை மலை", "அலை அலை", "இலை இலை", "சிலை சிலை", "மழை மழை", "நடை நடை", "ஆடை ஆடை", "வடை வடை", "ஆசை ஆசை", "இசை இசை", "விதை விதை", "கதை கதை", "வேலை வேலை", "வெள்ளை வெள்ளை", "சென்னை சென்னை", "நன்மை நன்மை"],
          sampleWords: [
            { word: 'ஐவர்', meaning: 'The Five Heroes', icon: '👥' },
            { word: 'ஐயம்', meaning: 'Doubt / Wonder', icon: '❓' },
            { word: 'கை', meaning: 'Hand / Palm', icon: '✋' },
            { word: 'பை', meaning: 'Bag / Pouch', icon: '🎒' },
            { word: 'மை', meaning: 'Black Kohl / Ink', icon: '✒️' },
            { word: 'தை', meaning: 'Tamil Harvest Month / Sew', icon: '🌾' },
            { word: 'யானை', meaning: 'Elephant', icon: '🐘' },
            { word: 'வாழை', meaning: 'Banana Tree', icon: '🍌' },
            { word: 'மாலை', meaning: 'Flower Garland / Twilight', icon: '💐' },
            { word: 'காலை', meaning: 'Early Morning', icon: '🌅' },
            { word: 'வலை', meaning: 'Fishing Net / Web', icon: '🕸️' },
            { word: 'தலை', meaning: 'Head / Crown', icon: '🗣️' },
            { word: 'மலை', meaning: 'High Mountain / Hill', icon: '⛰️' },
            { word: 'அலை', meaning: 'Ocean Sea Wave', icon: '🌊' },
            { word: 'இலை', meaning: 'Green Plant Leaf', icon: '🍃' },
            { word: 'சிலை', meaning: 'Carved Statue', icon: '🗿' },
            { word: 'விலை', meaning: 'Price / Value', icon: '🏷️' },
            { word: 'நிலை', meaning: 'State / Steadfastness', icon: '🏛️' },
            { word: 'கலை', meaning: 'Fine Art / Skill', icon: '🎨' },
            { word: 'பாவை', meaning: 'Traditional Puppet / Maiden', icon: '🎎' },
            { word: 'பறவை', meaning: 'Flying Bird', icon: '🕊️' },
            { word: 'மழை', meaning: 'Falling Rain', icon: '🌧️' },
            { word: 'நடை', meaning: 'Walking Gait / Pace', icon: '🚶' },
            { word: 'விடை', meaning: 'Correct Answer', icon: '✅' },
            { word: 'தடை', meaning: 'Obstacle / Shield', icon: '🛑' },
            { word: 'படை', meaning: 'Troops / Legion', icon: '⚔️' },
            { word: 'அடை', meaning: 'Crispy Lentil Pancake', icon: '🥞' },
            { word: 'ஆடை', meaning: 'Woven Garment', icon: '👗' },
            { word: 'வாடை', meaning: 'Pleasant Aroma / Breeze', icon: '🌬️' },
            { word: 'மேடை', meaning: 'Public Stage / Platform', icon: '🎭' },
            { word: 'வடை', meaning: 'Golden Crispy Vada', icon: '🍘' },
            { word: 'நகை', meaning: 'Joyous Smile / Jewelry', icon: '💎' },
            { word: 'பகை', meaning: 'Hostility / Rivalry', icon: '⚡' },
            { word: 'வகை', meaning: 'Category / Sort', icon: '📂' },
            { word: 'கைப்பை', meaning: 'Handbag / Tote', icon: '👜' },
            { word: 'கைத்தறி', meaning: 'Traditional Handloom', icon: '🧵' },
            { word: 'கைவண்டி', meaning: 'Handcart', icon: '🛒' },
            { word: 'பச்சை', meaning: 'Vibrant Green Leaf', icon: '🟢' },
            { word: 'ஆசை', meaning: 'Fond Wish / Longing', icon: '🌟' },
            { word: 'திசை', meaning: 'Cardinal Direction', icon: '🧭' },
            { word: 'இசை', meaning: 'Classical Music', icon: '🎵' },
            { word: 'அசை', meaning: 'Rhythmic Syllable', icon: '🎼' },
            { word: 'விசை', meaning: 'Physical Force / Switch', icon: '🔘' },
            { word: 'நத்தை', meaning: 'Spiral Shell Snail', icon: '🐌' },
            { word: 'அத்தை', meaning: 'Paternal Aunt', icon: '👩' },
            { word: 'விதை', meaning: 'Sprouting Seed', icon: '🌱' },
            { word: 'கதை', meaning: 'Folktale / Story', icon: '📖' },
            { word: 'சிதை', meaning: 'Ancient Cairn / Relic', icon: '🏺' },
            { word: 'மெத்தை', meaning: 'Plush Cushion / Mattress', icon: '🛏️' },
            { word: 'சேனை', meaning: 'Army Battalion', icon: '🛡️' },
            { word: 'சேலை', meaning: 'Silk Sari', icon: '🥻' },
            { word: 'வேலை', meaning: 'Productive Work', icon: '💼' },
            { word: 'வேளை', meaning: 'Auspicious Time', icon: '⌛' },
            { word: 'மேற்கை', meaning: 'Forearm', icon: '💪' },
            { word: 'நெல்லை', meaning: 'Paddy Town', icon: '🌾' },
            { word: 'எல்லை', meaning: 'Boundary Marker', icon: '📍' },
            { word: 'மல்லிகை', meaning: 'Fragrant Jasmine', icon: '🌼' },
            { word: 'நம்பிக்கை', meaning: 'Deep Faith / Trust', icon: '🤝' },
            { word: 'சேர்க்கை', meaning: 'Harmonious Blend', icon: '✨' },
            { word: 'வேர்க்கடலை', meaning: 'Roasted Peanut', icon: '🥜' },
            { word: 'தவளை', meaning: 'Green Pond Frog', icon: '🐸' },
            { word: 'பிள்ளை', meaning: 'Beloved Child', icon: '🧒' },
            { word: 'வெள்ளை', meaning: 'Pure White', icon: '⚪' },
            { word: 'கிளை', meaning: 'Bough / Tree Branch', icon: '🌿' },
            { word: 'வளை', meaning: 'Curved Arch / Burrow', icon: '🌈' },
            { word: 'வளையல்', meaning: 'Glass Bangle', icon: '💫' },
            { word: 'இளை', meaning: 'Take Respite', icon: '🧘' },
            { word: 'கீரை', meaning: 'Garden Greens / Spinach', icon: '🥬' },
            { word: 'நாரை', meaning: 'White Crane Bird', icon: '🪿' },
            { word: 'தாமரை', meaning: 'Pink Sacred Lotus', icon: '🪷' },
            { word: 'திரை', meaning: 'Stage Curtain', icon: '🎬' },
            { word: 'சிறை', meaning: 'Fortress Bastion', icon: '🏰' },
            { word: 'கறை', meaning: 'Ink Tint / Mark', icon: '💧' },
            { word: 'பறை', meaning: 'Resonant Beat Drum', icon: '🥁' },
            { word: 'மறை', meaning: 'Sacred Wisdom / Veda', icon: '📜' },
            { word: 'நிறை', meaning: 'Abundance / Plenty', icon: '🏺' },
            { word: 'இறை', meaning: 'Supreme Lord / Sovereign', icon: '👑' },
            { word: 'விதைக்க', meaning: 'To Scatter Seeds', icon: '🌾' },
            { word: 'அன்னை', meaning: 'Nurturing Mother', icon: '🤱' },
            { word: 'பின்னை', meaning: 'Subsequent Hour', icon: '⏳' },
            { word: 'சென்னை', meaning: 'Chennai Metropolis', icon: '🏙️' },
            { word: 'மென்மை', meaning: 'Soft Tenderness', icon: '🧸' },
            { word: 'தன்மை', meaning: 'True Nature / Essence', icon: '💎' },
            { word: 'நன்மை', meaning: 'Virtue / Good Deed', icon: '🎁' },
            { word: 'பன்மை', meaning: 'Plural Harmony', icon: '👥' },
            { word: 'மேன்மை', meaning: 'Supreme Majesty', icon: '🌟' },
            { word: 'நேர்மை', meaning: 'Truthful Integrity', icon: '⚖️' },
            { word: 'எளிமை', meaning: 'Humble Grace', icon: '🕊️' },
            { word: 'இனிமை', meaning: 'Honey Sweetness', icon: '🍯' },
            { word: 'தனிமை', meaning: 'Quiet Solitude', icon: '🌙' },
            { word: 'பச்சைக்கிளி', meaning: 'Vivid Green Parrot', icon: '🦜' },
            { word: 'வெண்டைக்காய்', meaning: 'Okra Pod', icon: '🥒' },
            { word: 'தலைமை', meaning: 'Supreme Leadership', icon: '🎖️' },
            { word: 'வெள்ளையன்', meaning: 'Pure Hearted One', icon: '🤍' },
            { word: 'கற்றாழை', meaning: 'Medicinal Aloe Plant', icon: '🪴' },
            { word: 'வாழைக்காய்', meaning: 'Green Plantain', icon: '🍌' },
            { word: 'வாழைமரம்', meaning: 'Plantain Tree', icon: '🌴' },
            { word: 'மாலைவேளை', meaning: 'Gentle Dusk', icon: '🌆' }
          ]
        },
        {
          id: '4-4',
          name: 'நனண',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ"],
          rows: [
            ["ந்", "ந", "நா", "நி", "நீ", "நெ", "நே", "நை"],
            ["ன்", "ன", "னா", "னி", "னீ", "னெ", "னே", "னை"],
            ["ண்", "ண", "ணா", "ணி", "ணீ", "ணெ", "ணே", "ணை"]
          ],
          syllables: ["கை", "பை", "மை", "தை", "டை", "சை", "வை", "லை", "ளை", "ழை", "ரை", "றை", "னை", "ணை", "நை", "கைத்", "பைத்", "மைத்", "தைத்", "டைத்", "சைத்", "வைத்", "லைத்", "ளைத்", "ழைத்", "கைப்", "பைப்", "மைப்", "தைப்", "டைப்", "சைப்", "வைப்", "லைப்", "ளைப்", "ழைப்", "கைம்", "பைம்", "மைம்", "தைம்", "டைம்", "சைம்", "வைம்", "லைம்", "ளைம்", "ழைம்", "யானை", "வாழை", "மாலை", "காலை", "வலை", "தலை", "மலை", "அலை", "இலை", "சிலை", "விலை", "நிலை", "கலை", "பாவை", "பறவை", "மழை", "நடை", "விடை", "தடை", "படை", "ஆடை", "வடை", "நகை", "ஆசை", "திசை", "இசை", "நத்தை", "அத்தை", "விதை", "கதை", "சேலை", "வேலை", "எல்லை", "தவளை", "பிள்ளை", "வெள்ளை", "கிளை", "கீரை", "தாமரை", "திரை", "சிறை", "அன்னை", "சென்னை", "கை கை", "பை பை", "மை மை", "தை தை", "டை டை", "சை சை", "வை வை", "லை லை", "யானை யானை", "வாழை வாழை", "மாலை மாலை", "காலை காலை", "வலை வலை", "தலை தலை", "மலை மலை", "அலை அலை", "இலை இலை", "சிலை சிலை", "மழை மழை", "நடை நடை", "ஆடை ஆடை", "வடை வடை", "ஆசை ஆசை", "இசை இசை", "விதை விதை", "கதை கதை", "வேலை வேலை", "வெள்ளை வெள்ளை", "சென்னை சென்னை", "நன்மை நன்மை"],
          sampleWords: [
            { word: 'ஐவர்', meaning: 'The Five Heroes', icon: '👥' },
            { word: 'ஐயம்', meaning: 'Doubt / Wonder', icon: '❓' },
            { word: 'கை', meaning: 'Hand / Palm', icon: '✋' },
            { word: 'பை', meaning: 'Bag / Pouch', icon: '🎒' },
            { word: 'மை', meaning: 'Black Kohl / Ink', icon: '✒️' },
            { word: 'தை', meaning: 'Tamil Harvest Month / Sew', icon: '🌾' },
            { word: 'யானை', meaning: 'Elephant', icon: '🐘' },
            { word: 'வாழை', meaning: 'Banana Tree', icon: '🍌' },
            { word: 'மாலை', meaning: 'Flower Garland / Twilight', icon: '💐' },
            { word: 'காலை', meaning: 'Early Morning', icon: '🌅' },
            { word: 'வலை', meaning: 'Fishing Net / Web', icon: '🕸️' },
            { word: 'தலை', meaning: 'Head / Crown', icon: '🗣️' },
            { word: 'மலை', meaning: 'High Mountain / Hill', icon: '⛰️' },
            { word: 'அலை', meaning: 'Ocean Sea Wave', icon: '🌊' },
            { word: 'இலை', meaning: 'Green Plant Leaf', icon: '🍃' },
            { word: 'சிலை', meaning: 'Carved Statue', icon: '🗿' },
            { word: 'விலை', meaning: 'Price / Value', icon: '🏷️' },
            { word: 'நிலை', meaning: 'State / Steadfastness', icon: '🏛️' },
            { word: 'கலை', meaning: 'Fine Art / Skill', icon: '🎨' },
            { word: 'பாவை', meaning: 'Traditional Puppet / Maiden', icon: '🎎' },
            { word: 'பறவை', meaning: 'Flying Bird', icon: '🕊️' },
            { word: 'மழை', meaning: 'Falling Rain', icon: '🌧️' },
            { word: 'நடை', meaning: 'Walking Gait / Pace', icon: '🚶' },
            { word: 'விடை', meaning: 'Correct Answer', icon: '✅' },
            { word: 'தடை', meaning: 'Obstacle / Shield', icon: '🛑' },
            { word: 'படை', meaning: 'Troops / Legion', icon: '⚔️' },
            { word: 'அடை', meaning: 'Crispy Lentil Pancake', icon: '🥞' },
            { word: 'ஆடை', meaning: 'Woven Garment', icon: '👗' },
            { word: 'வாடை', meaning: 'Pleasant Aroma / Breeze', icon: '🌬️' },
            { word: 'மேடை', meaning: 'Public Stage / Platform', icon: '🎭' },
            { word: 'வடை', meaning: 'Golden Crispy Vada', icon: '🍘' },
            { word: 'நகை', meaning: 'Joyous Smile / Jewelry', icon: '💎' },
            { word: 'பகை', meaning: 'Hostility / Rivalry', icon: '⚡' },
            { word: 'வகை', meaning: 'Category / Sort', icon: '📂' },
            { word: 'கைப்பை', meaning: 'Handbag / Tote', icon: '👜' },
            { word: 'கைத்தறி', meaning: 'Traditional Handloom', icon: '🧵' },
            { word: 'கைவண்டி', meaning: 'Handcart', icon: '🛒' },
            { word: 'பச்சை', meaning: 'Vibrant Green Leaf', icon: '🟢' },
            { word: 'ஆசை', meaning: 'Fond Wish / Longing', icon: '🌟' },
            { word: 'திசை', meaning: 'Cardinal Direction', icon: '🧭' },
            { word: 'இசை', meaning: 'Classical Music', icon: '🎵' },
            { word: 'அசை', meaning: 'Rhythmic Syllable', icon: '🎼' },
            { word: 'விசை', meaning: 'Physical Force / Switch', icon: '🔘' },
            { word: 'நத்தை', meaning: 'Spiral Shell Snail', icon: '🐌' },
            { word: 'அத்தை', meaning: 'Paternal Aunt', icon: '👩' },
            { word: 'விதை', meaning: 'Sprouting Seed', icon: '🌱' },
            { word: 'கதை', meaning: 'Folktale / Story', icon: '📖' },
            { word: 'சிதை', meaning: 'Ancient Cairn / Relic', icon: '🏺' },
            { word: 'மெத்தை', meaning: 'Plush Cushion / Mattress', icon: '🛏️' },
            { word: 'சேனை', meaning: 'Army Battalion', icon: '🛡️' },
            { word: 'சேலை', meaning: 'Silk Sari', icon: '🥻' },
            { word: 'வேலை', meaning: 'Productive Work', icon: '💼' },
            { word: 'வேளை', meaning: 'Auspicious Time', icon: '⌛' },
            { word: 'மேற்கை', meaning: 'Forearm', icon: '💪' },
            { word: 'நெல்லை', meaning: 'Paddy Town', icon: '🌾' },
            { word: 'எல்லை', meaning: 'Boundary Marker', icon: '📍' },
            { word: 'மல்லிகை', meaning: 'Fragrant Jasmine', icon: '🌼' },
            { word: 'நம்பிக்கை', meaning: 'Deep Faith / Trust', icon: '🤝' },
            { word: 'சேர்க்கை', meaning: 'Harmonious Blend', icon: '✨' },
            { word: 'வேர்க்கடலை', meaning: 'Roasted Peanut', icon: '🥜' },
            { word: 'தவளை', meaning: 'Green Pond Frog', icon: '🐸' },
            { word: 'பிள்ளை', meaning: 'Beloved Child', icon: '🧒' },
            { word: 'வெள்ளை', meaning: 'Pure White', icon: '⚪' },
            { word: 'கிளை', meaning: 'Bough / Tree Branch', icon: '🌿' },
            { word: 'வளை', meaning: 'Curved Arch / Burrow', icon: '🌈' },
            { word: 'வளையல்', meaning: 'Glass Bangle', icon: '💫' },
            { word: 'இளை', meaning: 'Take Respite', icon: '🧘' },
            { word: 'கீரை', meaning: 'Garden Greens / Spinach', icon: '🥬' },
            { word: 'நாரை', meaning: 'White Crane Bird', icon: '🪿' },
            { word: 'தாமரை', meaning: 'Pink Sacred Lotus', icon: '🪷' },
            { word: 'திரை', meaning: 'Stage Curtain', icon: '🎬' },
            { word: 'சிறை', meaning: 'Fortress Bastion', icon: '🏰' },
            { word: 'கறை', meaning: 'Ink Tint / Mark', icon: '💧' },
            { word: 'பறை', meaning: 'Resonant Beat Drum', icon: '🥁' },
            { word: 'மறை', meaning: 'Sacred Wisdom / Veda', icon: '📜' },
            { word: 'நிறை', meaning: 'Abundance / Plenty', icon: '🏺' },
            { word: 'இறை', meaning: 'Supreme Lord / Sovereign', icon: '👑' },
            { word: 'விதைக்க', meaning: 'To Scatter Seeds', icon: '🌾' },
            { word: 'அன்னை', meaning: 'Nurturing Mother', icon: '🤱' },
            { word: 'பின்னை', meaning: 'Subsequent Hour', icon: '⏳' },
            { word: 'சென்னை', meaning: 'Chennai Metropolis', icon: '🏙️' },
            { word: 'மென்மை', meaning: 'Soft Tenderness', icon: '🧸' },
            { word: 'தன்மை', meaning: 'True Nature / Essence', icon: '💎' },
            { word: 'நன்மை', meaning: 'Virtue / Good Deed', icon: '🎁' },
            { word: 'பன்மை', meaning: 'Plural Harmony', icon: '👥' },
            { word: 'மேன்மை', meaning: 'Supreme Majesty', icon: '🌟' },
            { word: 'நேர்மை', meaning: 'Truthful Integrity', icon: '⚖️' },
            { word: 'எளிமை', meaning: 'Humble Grace', icon: '🕊️' },
            { word: 'இனிமை', meaning: 'Honey Sweetness', icon: '🍯' },
            { word: 'தனிமை', meaning: 'Quiet Solitude', icon: '🌙' },
            { word: 'பச்சைக்கிளி', meaning: 'Vivid Green Parrot', icon: '🦜' },
            { word: 'வெண்டைக்காய்', meaning: 'Okra Pod', icon: '🥒' },
            { word: 'தலைமை', meaning: 'Supreme Leadership', icon: '🎖️' },
            { word: 'வெள்ளையன்', meaning: 'Pure Hearted One', icon: '🤍' },
            { word: 'கற்றாழை', meaning: 'Medicinal Aloe Plant', icon: '🪴' },
            { word: 'வாழைக்காய்', meaning: 'Green Plantain', icon: '🍌' },
            { word: 'வாழைமரம்', meaning: 'Plantain Tree', icon: '🌴' },
            { word: 'மாலைவேளை', meaning: 'Gentle Dusk', icon: '🌆' }
          ]
        },
        {
          id: '4-5',
          name: 'லளழ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ"],
          rows: [
            ["ல்", "ல", "லா", "லி", "லீ", "லெ", "லே", "லை"],
            ["ள்", "ள", "ளா", "ளி", "ளீ", "ளெ", "ளே", "ளை"],
            ["ழ்", "ழ", "ழா", "ழி", "ழீ", "ழெ", "ழே", "ழை"]
          ],
          syllables: ["கை", "பை", "மை", "தை", "டை", "சை", "வை", "லை", "ளை", "ழை", "ரை", "றை", "னை", "ணை", "நை", "கைத்", "பைத்", "மைத்", "தைத்", "டைத்", "சைத்", "வைத்", "லைத்", "ளைத்", "ழைத்", "கைப்", "பைப்", "மைப்", "தைப்", "டைப்", "சைப்", "வைப்", "லைப்", "ளைப்", "ழைப்", "கைம்", "பைம்", "மைம்", "தைம்", "டைம்", "சைம்", "வைம்", "லைம்", "ளைம்", "ழைம்", "யானை", "வாழை", "மாலை", "காலை", "வலை", "தலை", "மலை", "அலை", "இலை", "சிலை", "விலை", "நிலை", "கலை", "பாவை", "பறவை", "மழை", "நடை", "விடை", "தடை", "படை", "ஆடை", "வடை", "நகை", "ஆசை", "திசை", "இசை", "நத்தை", "அத்தை", "விதை", "கதை", "சேலை", "வேலை", "எல்லை", "தவளை", "பிள்ளை", "வெள்ளை", "கிளை", "கீரை", "தாமரை", "திரை", "சிறை", "அன்னை", "சென்னை", "கை கை", "பை பை", "மை மை", "தை தை", "டை டை", "சை சை", "வை வை", "லை லை", "யானை யானை", "வாழை வாழை", "மாலை மாலை", "காலை காலை", "வலை வலை", "தலை தலை", "மலை மலை", "அலை அலை", "இலை இலை", "சிலை சிலை", "மழை மழை", "நடை நடை", "ஆடை ஆடை", "வடை வடை", "ஆசை ஆசை", "இசை இசை", "விதை விதை", "கதை கதை", "வேலை வேலை", "வெள்ளை வெள்ளை", "சென்னை சென்னை", "நன்மை நன்மை"],
          sampleWords: [
            { word: 'ஐவர்', meaning: 'The Five Heroes', icon: '👥' },
            { word: 'ஐயம்', meaning: 'Doubt / Wonder', icon: '❓' },
            { word: 'கை', meaning: 'Hand / Palm', icon: '✋' },
            { word: 'பை', meaning: 'Bag / Pouch', icon: '🎒' },
            { word: 'மை', meaning: 'Black Kohl / Ink', icon: '✒️' },
            { word: 'தை', meaning: 'Tamil Harvest Month / Sew', icon: '🌾' },
            { word: 'யானை', meaning: 'Elephant', icon: '🐘' },
            { word: 'வாழை', meaning: 'Banana Tree', icon: '🍌' },
            { word: 'மாலை', meaning: 'Flower Garland / Twilight', icon: '💐' },
            { word: 'காலை', meaning: 'Early Morning', icon: '🌅' },
            { word: 'வலை', meaning: 'Fishing Net / Web', icon: '🕸️' },
            { word: 'தலை', meaning: 'Head / Crown', icon: '🗣️' },
            { word: 'மலை', meaning: 'High Mountain / Hill', icon: '⛰️' },
            { word: 'அலை', meaning: 'Ocean Sea Wave', icon: '🌊' },
            { word: 'இலை', meaning: 'Green Plant Leaf', icon: '🍃' },
            { word: 'சிலை', meaning: 'Carved Statue', icon: '🗿' },
            { word: 'விலை', meaning: 'Price / Value', icon: '🏷️' },
            { word: 'நிலை', meaning: 'State / Steadfastness', icon: '🏛️' },
            { word: 'கலை', meaning: 'Fine Art / Skill', icon: '🎨' },
            { word: 'பாவை', meaning: 'Traditional Puppet / Maiden', icon: '🎎' },
            { word: 'பறவை', meaning: 'Flying Bird', icon: '🕊️' },
            { word: 'மழை', meaning: 'Falling Rain', icon: '🌧️' },
            { word: 'நடை', meaning: 'Walking Gait / Pace', icon: '🚶' },
            { word: 'விடை', meaning: 'Correct Answer', icon: '✅' },
            { word: 'தடை', meaning: 'Obstacle / Shield', icon: '🛑' },
            { word: 'படை', meaning: 'Troops / Legion', icon: '⚔️' },
            { word: 'அடை', meaning: 'Crispy Lentil Pancake', icon: '🥞' },
            { word: 'ஆடை', meaning: 'Woven Garment', icon: '👗' },
            { word: 'வாடை', meaning: 'Pleasant Aroma / Breeze', icon: '🌬️' },
            { word: 'மேடை', meaning: 'Public Stage / Platform', icon: '🎭' },
            { word: 'வடை', meaning: 'Golden Crispy Vada', icon: '🍘' },
            { word: 'நகை', meaning: 'Joyous Smile / Jewelry', icon: '💎' },
            { word: 'பகை', meaning: 'Hostility / Rivalry', icon: '⚡' },
            { word: 'வகை', meaning: 'Category / Sort', icon: '📂' },
            { word: 'கைப்பை', meaning: 'Handbag / Tote', icon: '👜' },
            { word: 'கைத்தறி', meaning: 'Traditional Handloom', icon: '🧵' },
            { word: 'கைவண்டி', meaning: 'Handcart', icon: '🛒' },
            { word: 'பச்சை', meaning: 'Vibrant Green Leaf', icon: '🟢' },
            { word: 'ஆசை', meaning: 'Fond Wish / Longing', icon: '🌟' },
            { word: 'திசை', meaning: 'Cardinal Direction', icon: '🧭' },
            { word: 'இசை', meaning: 'Classical Music', icon: '🎵' },
            { word: 'அசை', meaning: 'Rhythmic Syllable', icon: '🎼' },
            { word: 'விசை', meaning: 'Physical Force / Switch', icon: '🔘' },
            { word: 'நத்தை', meaning: 'Spiral Shell Snail', icon: '🐌' },
            { word: 'அத்தை', meaning: 'Paternal Aunt', icon: '👩' },
            { word: 'விதை', meaning: 'Sprouting Seed', icon: '🌱' },
            { word: 'கதை', meaning: 'Folktale / Story', icon: '📖' },
            { word: 'சிதை', meaning: 'Ancient Cairn / Relic', icon: '🏺' },
            { word: 'மெத்தை', meaning: 'Plush Cushion / Mattress', icon: '🛏️' },
            { word: 'சேனை', meaning: 'Army Battalion', icon: '🛡️' },
            { word: 'சேலை', meaning: 'Silk Sari', icon: '🥻' },
            { word: 'வேலை', meaning: 'Productive Work', icon: '💼' },
            { word: 'வேளை', meaning: 'Auspicious Time', icon: '⌛' },
            { word: 'மேற்கை', meaning: 'Forearm', icon: '💪' },
            { word: 'நெல்லை', meaning: 'Paddy Town', icon: '🌾' },
            { word: 'எல்லை', meaning: 'Boundary Marker', icon: '📍' },
            { word: 'மல்லிகை', meaning: 'Fragrant Jasmine', icon: '🌼' },
            { word: 'நம்பிக்கை', meaning: 'Deep Faith / Trust', icon: '🤝' },
            { word: 'சேர்க்கை', meaning: 'Harmonious Blend', icon: '✨' },
            { word: 'வேர்க்கடலை', meaning: 'Roasted Peanut', icon: '🥜' },
            { word: 'தவளை', meaning: 'Green Pond Frog', icon: '🐸' },
            { word: 'பிள்ளை', meaning: 'Beloved Child', icon: '🧒' },
            { word: 'வெள்ளை', meaning: 'Pure White', icon: '⚪' },
            { word: 'கிளை', meaning: 'Bough / Tree Branch', icon: '🌿' },
            { word: 'வளை', meaning: 'Curved Arch / Burrow', icon: '🌈' },
            { word: 'வளையல்', meaning: 'Glass Bangle', icon: '💫' },
            { word: 'இளை', meaning: 'Take Respite', icon: '🧘' },
            { word: 'கீரை', meaning: 'Garden Greens / Spinach', icon: '🥬' },
            { word: 'நாரை', meaning: 'White Crane Bird', icon: '🪿' },
            { word: 'தாமரை', meaning: 'Pink Sacred Lotus', icon: '🪷' },
            { word: 'திரை', meaning: 'Stage Curtain', icon: '🎬' },
            { word: 'சிறை', meaning: 'Fortress Bastion', icon: '🏰' },
            { word: 'கறை', meaning: 'Ink Tint / Mark', icon: '💧' },
            { word: 'பறை', meaning: 'Resonant Beat Drum', icon: '🥁' },
            { word: 'மறை', meaning: 'Sacred Wisdom / Veda', icon: '📜' },
            { word: 'நிறை', meaning: 'Abundance / Plenty', icon: '🏺' },
            { word: 'இறை', meaning: 'Supreme Lord / Sovereign', icon: '👑' },
            { word: 'விதைக்க', meaning: 'To Scatter Seeds', icon: '🌾' },
            { word: 'அன்னை', meaning: 'Nurturing Mother', icon: '🤱' },
            { word: 'பின்னை', meaning: 'Subsequent Hour', icon: '⏳' },
            { word: 'சென்னை', meaning: 'Chennai Metropolis', icon: '🏙️' },
            { word: 'மென்மை', meaning: 'Soft Tenderness', icon: '🧸' },
            { word: 'தன்மை', meaning: 'True Nature / Essence', icon: '💎' },
            { word: 'நன்மை', meaning: 'Virtue / Good Deed', icon: '🎁' },
            { word: 'பன்மை', meaning: 'Plural Harmony', icon: '👥' },
            { word: 'மேன்மை', meaning: 'Supreme Majesty', icon: '🌟' },
            { word: 'நேர்மை', meaning: 'Truthful Integrity', icon: '⚖️' },
            { word: 'எளிமை', meaning: 'Humble Grace', icon: '🕊️' },
            { word: 'இனிமை', meaning: 'Honey Sweetness', icon: '🍯' },
            { word: 'தனிமை', meaning: 'Quiet Solitude', icon: '🌙' },
            { word: 'பச்சைக்கிளி', meaning: 'Vivid Green Parrot', icon: '🦜' },
            { word: 'வெண்டைக்காய்', meaning: 'Okra Pod', icon: '🥒' },
            { word: 'தலைமை', meaning: 'Supreme Leadership', icon: '🎖️' },
            { word: 'வெள்ளையன்', meaning: 'Pure Hearted One', icon: '🤍' },
            { word: 'கற்றாழை', meaning: 'Medicinal Aloe Plant', icon: '🪴' },
            { word: 'வாழைக்காய்', meaning: 'Green Plantain', icon: '🍌' },
            { word: 'வாழைமரம்', meaning: 'Plantain Tree', icon: '🌴' },
            { word: 'மாலைவேளை', meaning: 'Gentle Dusk', icon: '🌆' }
          ]
        }
      ]
    },

    5: {
      number: 5,
      title: 'Level 5 Letters',
      currentSetIndex: 0,
      sets: [
        {
          id: '5-1',
          name: 'டபமய',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ"],
          rows: [
            ["ட்", "ட", "டா", "டி", "டீ", "டெ", "டே", "டை", "டொ", "டோ"],
            ["ப்", "ப", "பா", "பி", "பீ", "பெ", "பே", "பை", "பொ", "போ"],
            ["ம்", "ம", "மா", "மி", "மீ", "மெ", "மே", "மை", "மொ", "மோ"],
            ["ய்", "ய", "யா", "யி", "யீ", "யெ", "யே", "யை", "யொ", "யோ"]
          ],
          syllables: ["பொட்", "போட்", "மொட்", "மோட்", "கொட்", "கோட்", "சொட்", "சோட்", "தொட்", "தோட்", "பொப்", "போப்", "மொப்", "மோப்", "கொப்", "கோப்", "சொப்", "சோப்", "தொப்", "தோப்", "பொம்", "போம்", "மொம்", "மோம்", "கொம்", "கோம்", "சொம்", "சோம்", "தொம்", "தோம்", "பொன்", "போன்", "மொன்", "மோன்", "கொன்", "கோன்", "சொன்", "சோன்", "தொன்", "தோன்", "பொல்", "போல்", "மொல்", "மோல்", "கொல்", "கோல்", "சொல்", "சோல்", "தொல்", "தோல்", "ஒலி", "ஒளி", "ஓடை", "ஓலை", "ஓசை", "கொடி", "கொடை", "கோடை", "சோலை", "தோசை", "தோகை", "தோழி", "நோட்டம்", "பொன் பொன்", "சொல் சொல்", "கோல் கோல்", "போல் போல்", "தோல் தோல்", "கொடி கொடி", "ஓடம் ஓடம்", "ஓலை ஓலை", "சோலை சோலை", "தோசை தோசை", "மோப்பம் மோப்பம்", "போட்டி போட்டி"],
          sampleWords: [
            { word: "ஒலி", meaning: "Sound / Voice", icon: "🔊" },
            { word: "ஒளி", meaning: "Bright Light / Beam", icon: "💡" },
            { word: "ஒப்பனை", meaning: "Makeover / Ornament", icon: "💄" },
            { word: "ஒட்டகம்", meaning: "Desert Camel", icon: "🐪" },
            { word: "ஒற்றை", meaning: "Single / Odd Number", icon: "1️⃣" },
            { word: "ஒப்பந்தம்", meaning: "Agreement / Treaty", icon: "📜" },
            { word: "ஒத்திகை", meaning: "Rehearsal / Practice", icon: "🎭" },
            { word: "ஓடம்", meaning: "River Boat / Canoe", icon: "⛵" },
            { word: "ஓட்டம்", meaning: "Fast Run / Sprint", icon: "🏃" },
            { word: "ஓலை", meaning: "Palm Leaf Scroll", icon: "📜" },
            { word: "ஓவியம்", meaning: "Artistic Painting", icon: "🎨" },
            { word: "ஓசை", meaning: "Melodious Sound", icon: "🎶" },
            { word: "ஓரமாய்", meaning: "By the Edge", icon: "🛣️" },
            { word: "ஓடை", meaning: "Flowing Stream", icon: "🏞️" },
            { word: "பொன்", meaning: "Pure Gold", icon: "🪙" },
            { word: "பொறி", meaning: "Spark of Fire", icon: "✨" },
            { word: "பொங்கல்", meaning: "Pongal Festival / Rice", icon: "🍲" },
            { word: "பொம்மை", meaning: "Play Doll / Toy", icon: "🪆" },
            { word: "பொறை", meaning: "Patience / Forbearance", icon: "🧘" },
            { word: "போர்", meaning: "Battle / War", icon: "⚔️" },
            { word: "போட்டி", meaning: "Contest / Game", icon: "🏆" },
            { word: "போதனை", meaning: "Teaching / Sermon", icon: "📖" },
            { word: "போதை", meaning: "Intoxication / Bliss", icon: "✨" },
            { word: "கொடி", meaning: "National Flag / Vine", icon: "🚩" },
            { word: "கொடை", meaning: "Bountiful Donation", icon: "🎁" },
            { word: "கொன்றை", meaning: "Golden Shower Tree", icon: "🌼" },
            { word: "கொப்பரை", meaning: "Dried Coconut Copra", icon: "🥥" },
            { word: "கொள்கை", meaning: "Guiding Principle", icon: "📜" },
            { word: "கொண்டல்", meaning: "Eastern Raincloud", icon: "🌧️" },
            { word: "கோட்டை", meaning: "Historic Fort", icon: "🏰" },
            { word: "கோலம்", meaning: "Floor Rangoli Art", icon: "🌸" },
            { word: "கோடை", meaning: "Hot Summer Time", icon: "☀️" },
            { word: "கோரை", meaning: "Reed Grass", icon: "🌾" },
            { word: "கோழி", meaning: "Domestic Hen", icon: "🐔" },
            { word: "கோவில்", meaning: "Holy Temple", icon: "🛕" },
            { word: "கோணல்", meaning: "Crooked / Bent", icon: "〰️" },
            { word: "கோரல்", meaning: "Plea / Demand", icon: "🗣️" },
            { word: "சொல்", meaning: "Spoken Word", icon: "💬" },
            { word: "சொத்தை", meaning: "Asset / Wealth", icon: "🏛️" },
            { word: "சொர்க்கம்", meaning: "Heaven / Paradise", icon: "🌈" },
            { word: "சோலை", meaning: "Lush Grove / Garden", icon: "🌴" },
            { word: "சோளம்", meaning: "Sweet Corn Maize", icon: "🌽" },
            { word: "சோம்பல்", meaning: "Lethargy / Rest", icon: "🛋️" },
            { word: "சோதனை", meaning: "Trial / Experiment", icon: "🧪" },
            { word: "சோகமாய்", meaning: "With Melancholy", icon: "🥺" },
            { word: "தொட்டி", meaning: "Water Basin / Tank", icon: "🛁" },
            { word: "தொட்டில்", meaning: "Baby Cradle", icon: "👶" },
            { word: "தொப்பி", meaning: "Head Cap", icon: "🧢" },
            { word: "தொடை", meaning: "Thigh / Verse Garland", icon: "🦵" },
            { word: "தொல்லை", meaning: "Trouble / Nuisance", icon: "😫" },
            { word: "தோட்டம்", meaning: "Green Garden Farm", icon: "🏡" },
            { word: "தோல்", meaning: "Skin / Leather", icon: "🧥" },
            { word: "தோழன்", meaning: "Dear Comrade", icon: "🤝" },
            { word: "தோழி", meaning: "Dear Female Friend", icon: "👭" },
            { word: "தோகை", meaning: "Peacock Plumage", icon: "🦚" },
            { word: "தோசை", meaning: "Crispy Dosa Crepe", icon: "🥞" },
            { word: "தோரணம்", meaning: "Festive Festoon Garland", icon: "🎊" },
            { word: "நொடி", meaning: "Split Second / Instant", icon: "⏱️" },
            { word: "நோய்", meaning: "Ailment / Illness", icon: "🩹" },
            { word: "நோக்கம்", meaning: "Noble Purpose", icon: "🎯" },
            { word: "நோட்டம்", meaning: "Perception / View", icon: "👀" },
            { word: "மொட்டை", meaning: "Shaved Head / Balcony", icon: "👨‍🦲" },
            { word: "மொச்சை", meaning: "Broad Field Beans", icon: "🫘" },
            { word: "மோதிரம்", meaning: "Finger Ring", icon: "💍" },
            { word: "மோகம்", meaning: "Deep Passion / Craving", icon: "💖" },
            { word: "மோப்பம்", meaning: "Scent Tracking", icon: "👃" },
            { word: "மோதல்", meaning: "Clash / Impact", icon: "💥" },
            { word: "ரோமம்", meaning: "Body Hair / Fur", icon: "🦁" },
            { word: "லோகம்", meaning: "Realm / World", icon: "🌍" },
            { word: "யோசனை", meaning: "Idea / Consideration", icon: "💡" },
            { word: "யோகம்", meaning: "Good Fortune / Yoga", icon: "🧘" }
          ]
        },
        {
          id: '5-2',
          name: 'சகதவ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ"],
          rows: [
            ["ச்", "ச", "சா", "சி", "சீ", "செ", "சே", "சை", "சொ", "சோ"],
            ["க்", "க", "கா", "கி", "கீ", "கெ", "கே", "கை", "கொ", "கோ"],
            ["த்", "த", "தா", "தி", "தீ", "தெ", "தே", "தை", "தொ", "தோ"],
            ["வ்", "வ", "வா", "வி", "வீ", "வெ", "வே", "வை", "வொ", "வோ"]
          ],
          syllables: ["பொட்", "போட்", "மொட்", "மோட்", "கொட்", "கோட்", "சொட்", "சோட்", "தொட்", "தோட்", "பொப்", "போப்", "மொப்", "மோப்", "கொப்", "கோப்", "சொப்", "சோப்", "தொப்", "தோப்", "பொம்", "போம்", "மொம்", "மோம்", "கொம்", "கோம்", "சொம்", "சோம்", "தொம்", "தோம்", "பொன்", "போன்", "மொன்", "மோன்", "கொன்", "கோன்", "சொன்", "சோன்", "தொன்", "தோன்", "பொல்", "போல்", "மொல்", "மோல்", "கொல்", "கோல்", "சொல்", "சோல்", "தொல்", "தோல்", "ஒலி", "ஒளி", "ஓடை", "ஓலை", "ஓசை", "கொடி", "கொடை", "கோடை", "சோலை", "தோசை", "தோகை", "தோழி", "நோட்டம்", "பொன் பொன்", "சொல் சொல்", "கோல் கோல்", "போல் போல்", "தோல் தோல்", "கொடி கொடி", "ஓடம் ஓடம்", "ஓலை ஓலை", "சோலை சோலை", "தோசை தோசை", "மோப்பம் மோப்பம்", "போட்டி போட்டி"],
          sampleWords: [
            { word: "ஒலி", meaning: "Sound / Voice", icon: "🔊" },
            { word: "ஒளி", meaning: "Bright Light / Beam", icon: "💡" },
            { word: "ஒப்பனை", meaning: "Makeover / Ornament", icon: "💄" },
            { word: "ஒட்டகம்", meaning: "Desert Camel", icon: "🐪" },
            { word: "ஒற்றை", meaning: "Single / Odd Number", icon: "1️⃣" },
            { word: "ஒப்பந்தம்", meaning: "Agreement / Treaty", icon: "📜" },
            { word: "ஒத்திகை", meaning: "Rehearsal / Practice", icon: "🎭" },
            { word: "ஓடம்", meaning: "River Boat / Canoe", icon: "⛵" },
            { word: "ஓட்டம்", meaning: "Fast Run / Sprint", icon: "🏃" },
            { word: "ஓலை", meaning: "Palm Leaf Scroll", icon: "📜" },
            { word: "ஓவியம்", meaning: "Artistic Painting", icon: "🎨" },
            { word: "ஓசை", meaning: "Melodious Sound", icon: "🎶" },
            { word: "ஓரமாய்", meaning: "By the Edge", icon: "🛣️" },
            { word: "ஓடை", meaning: "Flowing Stream", icon: "🏞️" },
            { word: "பொன்", meaning: "Pure Gold", icon: "🪙" },
            { word: "பொறி", meaning: "Spark of Fire", icon: "✨" },
            { word: "பொங்கல்", meaning: "Pongal Festival / Rice", icon: "🍲" },
            { word: "பொம்மை", meaning: "Play Doll / Toy", icon: "🪆" },
            { word: "பொறை", meaning: "Patience / Forbearance", icon: "🧘" },
            { word: "போர்", meaning: "Battle / War", icon: "⚔️" },
            { word: "போட்டி", meaning: "Contest / Game", icon: "🏆" },
            { word: "போதனை", meaning: "Teaching / Sermon", icon: "📖" },
            { word: "போதை", meaning: "Intoxication / Bliss", icon: "✨" },
            { word: "கொடி", meaning: "National Flag / Vine", icon: "🚩" },
            { word: "கொடை", meaning: "Bountiful Donation", icon: "🎁" },
            { word: "கொன்றை", meaning: "Golden Shower Tree", icon: "🌼" },
            { word: "கொப்பரை", meaning: "Dried Coconut Copra", icon: "🥥" },
            { word: "கொள்கை", meaning: "Guiding Principle", icon: "📜" },
            { word: "கொண்டல்", meaning: "Eastern Raincloud", icon: "🌧️" },
            { word: "கோட்டை", meaning: "Historic Fort", icon: "🏰" },
            { word: "கோலம்", meaning: "Floor Rangoli Art", icon: "🌸" },
            { word: "கோடை", meaning: "Hot Summer Time", icon: "☀️" },
            { word: "கோரை", meaning: "Reed Grass", icon: "🌾" },
            { word: "கோழி", meaning: "Domestic Hen", icon: "🐔" },
            { word: "கோவில்", meaning: "Holy Temple", icon: "🛕" },
            { word: "கோணல்", meaning: "Crooked / Bent", icon: "〰️" },
            { word: "கோரல்", meaning: "Plea / Demand", icon: "🗣️" },
            { word: "சொல்", meaning: "Spoken Word", icon: "💬" },
            { word: "சொத்தை", meaning: "Asset / Wealth", icon: "🏛️" },
            { word: "சொர்க்கம்", meaning: "Heaven / Paradise", icon: "🌈" },
            { word: "சோலை", meaning: "Lush Grove / Garden", icon: "🌴" },
            { word: "சோளம்", meaning: "Sweet Corn Maize", icon: "🌽" },
            { word: "சோம்பல்", meaning: "Lethargy / Rest", icon: "🛋️" },
            { word: "சோதனை", meaning: "Trial / Experiment", icon: "🧪" },
            { word: "சோகமாய்", meaning: "With Melancholy", icon: "🥺" },
            { word: "தொட்டி", meaning: "Water Basin / Tank", icon: "🛁" },
            { word: "தொட்டில்", meaning: "Baby Cradle", icon: "👶" },
            { word: "தொப்பி", meaning: "Head Cap", icon: "🧢" },
            { word: "தொடை", meaning: "Thigh / Verse Garland", icon: "🦵" },
            { word: "தொல்லை", meaning: "Trouble / Nuisance", icon: "😫" },
            { word: "தோட்டம்", meaning: "Green Garden Farm", icon: "🏡" },
            { word: "தோல்", meaning: "Skin / Leather", icon: "🧥" },
            { word: "தோழன்", meaning: "Dear Comrade", icon: "🤝" },
            { word: "தோழி", meaning: "Dear Female Friend", icon: "👭" },
            { word: "தோகை", meaning: "Peacock Plumage", icon: "🦚" },
            { word: "தோசை", meaning: "Crispy Dosa Crepe", icon: "🥞" },
            { word: "தோரணம்", meaning: "Festive Festoon Garland", icon: "🎊" },
            { word: "நொடி", meaning: "Split Second / Instant", icon: "⏱️" },
            { word: "நோய்", meaning: "Ailment / Illness", icon: "🩹" },
            { word: "நோக்கம்", meaning: "Noble Purpose", icon: "🎯" },
            { word: "நோட்டம்", meaning: "Perception / View", icon: "👀" },
            { word: "மொட்டை", meaning: "Shaved Head / Balcony", icon: "👨‍🦲" },
            { word: "மொச்சை", meaning: "Broad Field Beans", icon: "🫘" },
            { word: "மோதிரம்", meaning: "Finger Ring", icon: "💍" },
            { word: "மோகம்", meaning: "Deep Passion / Craving", icon: "💖" },
            { word: "மோப்பம்", meaning: "Scent Tracking", icon: "👃" },
            { word: "மோதல்", meaning: "Clash / Impact", icon: "💥" },
            { word: "ரோமம்", meaning: "Body Hair / Fur", icon: "🦁" },
            { word: "லோகம்", meaning: "Realm / World", icon: "🌍" },
            { word: "யோசனை", meaning: "Idea / Consideration", icon: "💡" },
            { word: "யோகம்", meaning: "Good Fortune / Yoga", icon: "🧘" }
          ]
        },
        {
          id: '5-3',
          name: 'ஙஞரற',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ"],
          rows: [
            ["ங்", "ங", "ஙா", "ஙி", "ஙீ", "ஙெ", "ஙே", "ஙை", "ஙொ", "ஙோ"],
            ["ஞ்", "ஞ", "ஞா", "ஞி", "ஞீ", "ஞெ", "ஞே", "ஞை", "ஞொ", "ஞோ"],
            ["ர்", "ர", "ரா", "ரி", "ரீ", "ரெ", "ரே", "ரை", "ரொ", "ரோ"],
            ["ற்", "ற", "றா", "றி", "றீ", "றெ", "றே", "றை", "றொ", "றோ"]
          ],
          syllables: ["பொட்", "போட்", "மொட்", "மோட்", "கொட்", "கோட்", "சொட்", "சோட்", "தொட்", "தோட்", "பொப்", "போப்", "மொப்", "மோப்", "கொப்", "கோப்", "சொப்", "சோப்", "தொப்", "தோப்", "பொம்", "போம்", "மொம்", "மோம்", "கொம்", "கோம்", "சொம்", "சோம்", "தொம்", "தோம்", "பொன்", "போன்", "மொன்", "மோன்", "கொன்", "கோன்", "சொன்", "சோன்", "தொன்", "தோன்", "பொல்", "போல்", "மொல்", "மோல்", "கொல்", "கோல்", "சொல்", "சோல்", "தொல்", "தோல்", "ஒலி", "ஒளி", "ஓடை", "ஓலை", "ஓசை", "கொடி", "கொடை", "கோடை", "சோலை", "தோசை", "தோகை", "தோழி", "நோட்டம்", "பொன் பொன்", "சொல் சொல்", "கோல் கோல்", "போல் போல்", "தோல் தோல்", "கொடி கொடி", "ஓடம் ஓடம்", "ஓலை ஓலை", "சோலை சோலை", "தோசை தோசை", "மோப்பம் மோப்பம்", "போட்டி போட்டி"],
          sampleWords: [
            { word: "ஒலி", meaning: "Sound / Voice", icon: "🔊" },
            { word: "ஒளி", meaning: "Bright Light / Beam", icon: "💡" },
            { word: "ஒப்பனை", meaning: "Makeover / Ornament", icon: "💄" },
            { word: "ஒட்டகம்", meaning: "Desert Camel", icon: "🐪" },
            { word: "ஒற்றை", meaning: "Single / Odd Number", icon: "1️⃣" },
            { word: "ஒப்பந்தம்", meaning: "Agreement / Treaty", icon: "📜" },
            { word: "ஒத்திகை", meaning: "Rehearsal / Practice", icon: "🎭" },
            { word: "ஓடம்", meaning: "River Boat / Canoe", icon: "⛵" },
            { word: "ஓட்டம்", meaning: "Fast Run / Sprint", icon: "🏃" },
            { word: "ஓலை", meaning: "Palm Leaf Scroll", icon: "📜" },
            { word: "ஓவியம்", meaning: "Artistic Painting", icon: "🎨" },
            { word: "ஓசை", meaning: "Melodious Sound", icon: "🎶" },
            { word: "ஓரமாய்", meaning: "By the Edge", icon: "🛣️" },
            { word: "ஓடை", meaning: "Flowing Stream", icon: "🏞️" },
            { word: "பொன்", meaning: "Pure Gold", icon: "🪙" },
            { word: "பொறி", meaning: "Spark of Fire", icon: "✨" },
            { word: "பொங்கல்", meaning: "Pongal Festival / Rice", icon: "🍲" },
            { word: "பொம்மை", meaning: "Play Doll / Toy", icon: "🪆" },
            { word: "பொறை", meaning: "Patience / Forbearance", icon: "🧘" },
            { word: "போர்", meaning: "Battle / War", icon: "⚔️" },
            { word: "போட்டி", meaning: "Contest / Game", icon: "🏆" },
            { word: "போதனை", meaning: "Teaching / Sermon", icon: "📖" },
            { word: "போதை", meaning: "Intoxication / Bliss", icon: "✨" },
            { word: "கொடி", meaning: "National Flag / Vine", icon: "🚩" },
            { word: "கொடை", meaning: "Bountiful Donation", icon: "🎁" },
            { word: "கொன்றை", meaning: "Golden Shower Tree", icon: "🌼" },
            { word: "கொப்பரை", meaning: "Dried Coconut Copra", icon: "🥥" },
            { word: "கொள்கை", meaning: "Guiding Principle", icon: "📜" },
            { word: "கொண்டல்", meaning: "Eastern Raincloud", icon: "🌧️" },
            { word: "கோட்டை", meaning: "Historic Fort", icon: "🏰" },
            { word: "கோலம்", meaning: "Floor Rangoli Art", icon: "🌸" },
            { word: "கோடை", meaning: "Hot Summer Time", icon: "☀️" },
            { word: "கோரை", meaning: "Reed Grass", icon: "🌾" },
            { word: "கோழி", meaning: "Domestic Hen", icon: "🐔" },
            { word: "கோவில்", meaning: "Holy Temple", icon: "🛕" },
            { word: "கோணல்", meaning: "Crooked / Bent", icon: "〰️" },
            { word: "கோரல்", meaning: "Plea / Demand", icon: "🗣️" },
            { word: "சொல்", meaning: "Spoken Word", icon: "💬" },
            { word: "சொத்தை", meaning: "Asset / Wealth", icon: "🏛️" },
            { word: "சொர்க்கம்", meaning: "Heaven / Paradise", icon: "🌈" },
            { word: "சோலை", meaning: "Lush Grove / Garden", icon: "🌴" },
            { word: "சோளம்", meaning: "Sweet Corn Maize", icon: "🌽" },
            { word: "சோம்பல்", meaning: "Lethargy / Rest", icon: "🛋️" },
            { word: "சோதனை", meaning: "Trial / Experiment", icon: "🧪" },
            { word: "சோகமாய்", meaning: "With Melancholy", icon: "🥺" },
            { word: "தொட்டி", meaning: "Water Basin / Tank", icon: "🛁" },
            { word: "தொட்டில்", meaning: "Baby Cradle", icon: "👶" },
            { word: "தொப்பி", meaning: "Head Cap", icon: "🧢" },
            { word: "தொடை", meaning: "Thigh / Verse Garland", icon: "🦵" },
            { word: "தொல்லை", meaning: "Trouble / Nuisance", icon: "😫" },
            { word: "தோட்டம்", meaning: "Green Garden Farm", icon: "🏡" },
            { word: "தோல்", meaning: "Skin / Leather", icon: "🧥" },
            { word: "தோழன்", meaning: "Dear Comrade", icon: "🤝" },
            { word: "தோழி", meaning: "Dear Female Friend", icon: "👭" },
            { word: "தோகை", meaning: "Peacock Plumage", icon: "🦚" },
            { word: "தோசை", meaning: "Crispy Dosa Crepe", icon: "🥞" },
            { word: "தோரணம்", meaning: "Festive Festoon Garland", icon: "🎊" },
            { word: "நொடி", meaning: "Split Second / Instant", icon: "⏱️" },
            { word: "நோய்", meaning: "Ailment / Illness", icon: "🩹" },
            { word: "நோக்கம்", meaning: "Noble Purpose", icon: "🎯" },
            { word: "நோட்டம்", meaning: "Perception / View", icon: "👀" },
            { word: "மொட்டை", meaning: "Shaved Head / Balcony", icon: "👨‍🦲" },
            { word: "மொச்சை", meaning: "Broad Field Beans", icon: "🫘" },
            { word: "மோதிரம்", meaning: "Finger Ring", icon: "💍" },
            { word: "மோகம்", meaning: "Deep Passion / Craving", icon: "💖" },
            { word: "மோப்பம்", meaning: "Scent Tracking", icon: "👃" },
            { word: "மோதல்", meaning: "Clash / Impact", icon: "💥" },
            { word: "ரோமம்", meaning: "Body Hair / Fur", icon: "🦁" },
            { word: "லோகம்", meaning: "Realm / World", icon: "🌍" },
            { word: "யோசனை", meaning: "Idea / Consideration", icon: "💡" },
            { word: "யோகம்", meaning: "Good Fortune / Yoga", icon: "🧘" }
          ]
        },
        {
          id: '5-4',
          name: 'நனண',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ"],
          rows: [
            ["ந்", "ந", "நா", "நி", "நீ", "நெ", "நே", "நை", "நொ", "நோ"],
            ["ன்", "ன", "னா", "னி", "னீ", "னெ", "னே", "னை", "னொ", "னோ"],
            ["ண்", "ண", "ணா", "ணி", "ணீ", "ணெ", "ணே", "ணை", "ணொ", "ணோ"]
          ],
          syllables: ["பொட்", "போட்", "மொட்", "மோட்", "கொட்", "கோட்", "சொட்", "சோட்", "தொட்", "தோட்", "பொப்", "போப்", "மொப்", "மோப்", "கொப்", "கோப்", "சொப்", "சோப்", "தொப்", "தோப்", "பொம்", "போம்", "மொம்", "மோம்", "கொம்", "கோம்", "சொம்", "சோம்", "தொம்", "தோம்", "பொன்", "போன்", "மொன்", "மோன்", "கொன்", "கோன்", "சொன்", "சோன்", "தொன்", "தோன்", "பொல்", "போல்", "மொல்", "மோல்", "கொல்", "கோல்", "சொல்", "சோல்", "தொல்", "தோல்", "ஒலி", "ஒளி", "ஓடை", "ஓலை", "ஓசை", "கொடி", "கொடை", "கோடை", "சோலை", "தோசை", "தோகை", "தோழி", "நோட்டம்", "பொன் பொன்", "சொல் சொல்", "கோல் கோல்", "போல் போல்", "தோல் தோல்", "கொடி கொடி", "ஓடம் ஓடம்", "ஓலை ஓலை", "சோலை சோலை", "தோசை தோசை", "மோப்பம் மோப்பம்", "போட்டி போட்டி"],
          sampleWords: [
            { word: "ஒலி", meaning: "Sound / Voice", icon: "🔊" },
            { word: "ஒளி", meaning: "Bright Light / Beam", icon: "💡" },
            { word: "ஒப்பனை", meaning: "Makeover / Ornament", icon: "💄" },
            { word: "ஒட்டகம்", meaning: "Desert Camel", icon: "🐪" },
            { word: "ஒற்றை", meaning: "Single / Odd Number", icon: "1️⃣" },
            { word: "ஒப்பந்தம்", meaning: "Agreement / Treaty", icon: "📜" },
            { word: "ஒத்திகை", meaning: "Rehearsal / Practice", icon: "🎭" },
            { word: "ஓடம்", meaning: "River Boat / Canoe", icon: "⛵" },
            { word: "ஓட்டம்", meaning: "Fast Run / Sprint", icon: "🏃" },
            { word: "ஓலை", meaning: "Palm Leaf Scroll", icon: "📜" },
            { word: "ஓவியம்", meaning: "Artistic Painting", icon: "🎨" },
            { word: "ஓசை", meaning: "Melodious Sound", icon: "🎶" },
            { word: "ஓரமாய்", meaning: "By the Edge", icon: "🛣️" },
            { word: "ஓடை", meaning: "Flowing Stream", icon: "🏞️" },
            { word: "பொன்", meaning: "Pure Gold", icon: "🪙" },
            { word: "பொறி", meaning: "Spark of Fire", icon: "✨" },
            { word: "பொங்கல்", meaning: "Pongal Festival / Rice", icon: "🍲" },
            { word: "பொம்மை", meaning: "Play Doll / Toy", icon: "🪆" },
            { word: "பொறை", meaning: "Patience / Forbearance", icon: "🧘" },
            { word: "போர்", meaning: "Battle / War", icon: "⚔️" },
            { word: "போட்டி", meaning: "Contest / Game", icon: "🏆" },
            { word: "போதனை", meaning: "Teaching / Sermon", icon: "📖" },
            { word: "போதை", meaning: "Intoxication / Bliss", icon: "✨" },
            { word: "கொடி", meaning: "National Flag / Vine", icon: "🚩" },
            { word: "கொடை", meaning: "Bountiful Donation", icon: "🎁" },
            { word: "கொன்றை", meaning: "Golden Shower Tree", icon: "🌼" },
            { word: "கொப்பரை", meaning: "Dried Coconut Copra", icon: "🥥" },
            { word: "கொள்கை", meaning: "Guiding Principle", icon: "📜" },
            { word: "கொண்டல்", meaning: "Eastern Raincloud", icon: "🌧️" },
            { word: "கோட்டை", meaning: "Historic Fort", icon: "🏰" },
            { word: "கோலம்", meaning: "Floor Rangoli Art", icon: "🌸" },
            { word: "கோடை", meaning: "Hot Summer Time", icon: "☀️" },
            { word: "கோரை", meaning: "Reed Grass", icon: "🌾" },
            { word: "கோழி", meaning: "Domestic Hen", icon: "🐔" },
            { word: "கோவில்", meaning: "Holy Temple", icon: "🛕" },
            { word: "கோணல்", meaning: "Crooked / Bent", icon: "〰️" },
            { word: "கோரல்", meaning: "Plea / Demand", icon: "🗣️" },
            { word: "சொல்", meaning: "Spoken Word", icon: "💬" },
            { word: "சொத்தை", meaning: "Asset / Wealth", icon: "🏛️" },
            { word: "சொர்க்கம்", meaning: "Heaven / Paradise", icon: "🌈" },
            { word: "சோலை", meaning: "Lush Grove / Garden", icon: "🌴" },
            { word: "சோளம்", meaning: "Sweet Corn Maize", icon: "🌽" },
            { word: "சோம்பல்", meaning: "Lethargy / Rest", icon: "🛋️" },
            { word: "சோதனை", meaning: "Trial / Experiment", icon: "🧪" },
            { word: "சோகமாய்", meaning: "With Melancholy", icon: "🥺" },
            { word: "தொட்டி", meaning: "Water Basin / Tank", icon: "🛁" },
            { word: "தொட்டில்", meaning: "Baby Cradle", icon: "👶" },
            { word: "தொப்பி", meaning: "Head Cap", icon: "🧢" },
            { word: "தொடை", meaning: "Thigh / Verse Garland", icon: "🦵" },
            { word: "தொல்லை", meaning: "Trouble / Nuisance", icon: "😫" },
            { word: "தோட்டம்", meaning: "Green Garden Farm", icon: "🏡" },
            { word: "தோல்", meaning: "Skin / Leather", icon: "🧥" },
            { word: "தோழன்", meaning: "Dear Comrade", icon: "🤝" },
            { word: "தோழி", meaning: "Dear Female Friend", icon: "👭" },
            { word: "தோகை", meaning: "Peacock Plumage", icon: "🦚" },
            { word: "தோசை", meaning: "Crispy Dosa Crepe", icon: "🥞" },
            { word: "தோரணம்", meaning: "Festive Festoon Garland", icon: "🎊" },
            { word: "நொடி", meaning: "Split Second / Instant", icon: "⏱️" },
            { word: "நோய்", meaning: "Ailment / Illness", icon: "🩹" },
            { word: "நோக்கம்", meaning: "Noble Purpose", icon: "🎯" },
            { word: "நோட்டம்", meaning: "Perception / View", icon: "👀" },
            { word: "மொட்டை", meaning: "Shaved Head / Balcony", icon: "👨‍🦲" },
            { word: "மொச்சை", meaning: "Broad Field Beans", icon: "🫘" },
            { word: "மோதிரம்", meaning: "Finger Ring", icon: "💍" },
            { word: "மோகம்", meaning: "Deep Passion / Craving", icon: "💖" },
            { word: "மோப்பம்", meaning: "Scent Tracking", icon: "👃" },
            { word: "மோதல்", meaning: "Clash / Impact", icon: "💥" },
            { word: "ரோமம்", meaning: "Body Hair / Fur", icon: "🦁" },
            { word: "லோகம்", meaning: "Realm / World", icon: "🌍" },
            { word: "யோசனை", meaning: "Idea / Consideration", icon: "💡" },
            { word: "யோகம்", meaning: "Good Fortune / Yoga", icon: "🧘" }
          ]
        },
        {
          id: '5-5',
          name: 'லளழ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ"],
          rows: [
            ["ல்", "ல", "லா", "லி", "லீ", "லெ", "லே", "லை", "லொ", "லோ"],
            ["ள்", "ள", "ளா", "ளி", "ளீ", "ளெ", "ளே", "ளை", "ளொ", "ளோ"],
            ["ழ்", "ழ", "ழா", "ழி", "ழீ", "ழெ", "ழே", "ழை", "ழொ", "ழோ"]
          ],
          syllables: ["பொட்", "போட்", "மொட்", "மோட்", "கொட்", "கோட்", "சொட்", "சோட்", "தொட்", "தோட்", "பொப்", "போப்", "மொப்", "மோப்", "கொப்", "கோப்", "சொப்", "சோப்", "தொப்", "தோப்", "பொம்", "போம்", "மொம்", "மோம்", "கொம்", "கோம்", "சொம்", "சோம்", "தொம்", "தோம்", "பொன்", "போன்", "மொன்", "மோன்", "கொன்", "கோன்", "சொன்", "சோன்", "தொன்", "தோன்", "பொல்", "போல்", "மொல்", "மோல்", "கொல்", "கோல்", "சொல்", "சோல்", "தொல்", "தோல்", "ஒலி", "ஒளி", "ஓடை", "ஓலை", "ஓசை", "கொடி", "கொடை", "கோடை", "சோலை", "தோசை", "தோகை", "தோழி", "நோட்டம்", "பொன் பொன்", "சொல் சொல்", "கோல் கோல்", "போல் போல்", "தோல் தோல்", "கொடி கொடி", "ஓடம் ஓடம்", "ஓலை ஓலை", "சோலை சோலை", "தோசை தோசை", "மோப்பம் மோப்பம்", "போட்டி போட்டி"],
          sampleWords: [
            { word: "ஒலி", meaning: "Sound / Voice", icon: "🔊" },
            { word: "ஒளி", meaning: "Bright Light / Beam", icon: "💡" },
            { word: "ஒப்பனை", meaning: "Makeover / Ornament", icon: "💄" },
            { word: "ஒட்டகம்", meaning: "Desert Camel", icon: "🐪" },
            { word: "ஒற்றை", meaning: "Single / Odd Number", icon: "1️⃣" },
            { word: "ஒப்பந்தம்", meaning: "Agreement / Treaty", icon: "📜" },
            { word: "ஒத்திகை", meaning: "Rehearsal / Practice", icon: "🎭" },
            { word: "ஓடம்", meaning: "River Boat / Canoe", icon: "⛵" },
            { word: "ஓட்டம்", meaning: "Fast Run / Sprint", icon: "🏃" },
            { word: "ஓலை", meaning: "Palm Leaf Scroll", icon: "📜" },
            { word: "ஓவியம்", meaning: "Artistic Painting", icon: "🎨" },
            { word: "ஓசை", meaning: "Melodious Sound", icon: "🎶" },
            { word: "ஓரமாய்", meaning: "By the Edge", icon: "🛣️" },
            { word: "ஓடை", meaning: "Flowing Stream", icon: "🏞️" },
            { word: "பொன்", meaning: "Pure Gold", icon: "🪙" },
            { word: "பொறி", meaning: "Spark of Fire", icon: "✨" },
            { word: "பொங்கல்", meaning: "Pongal Festival / Rice", icon: "🍲" },
            { word: "பொம்மை", meaning: "Play Doll / Toy", icon: "🪆" },
            { word: "பொறை", meaning: "Patience / Forbearance", icon: "🧘" },
            { word: "போர்", meaning: "Battle / War", icon: "⚔️" },
            { word: "போட்டி", meaning: "Contest / Game", icon: "🏆" },
            { word: "போதனை", meaning: "Teaching / Sermon", icon: "📖" },
            { word: "போதை", meaning: "Intoxication / Bliss", icon: "✨" },
            { word: "கொடி", meaning: "National Flag / Vine", icon: "🚩" },
            { word: "கொடை", meaning: "Bountiful Donation", icon: "🎁" },
            { word: "கொன்றை", meaning: "Golden Shower Tree", icon: "🌼" },
            { word: "கொப்பரை", meaning: "Dried Coconut Copra", icon: "🥥" },
            { word: "கொள்கை", meaning: "Guiding Principle", icon: "📜" },
            { word: "கொண்டல்", meaning: "Eastern Raincloud", icon: "🌧️" },
            { word: "கோட்டை", meaning: "Historic Fort", icon: "🏰" },
            { word: "கோலம்", meaning: "Floor Rangoli Art", icon: "🌸" },
            { word: "கோடை", meaning: "Hot Summer Time", icon: "☀️" },
            { word: "கோரை", meaning: "Reed Grass", icon: "🌾" },
            { word: "கோழி", meaning: "Domestic Hen", icon: "🐔" },
            { word: "கோவில்", meaning: "Holy Temple", icon: "🛕" },
            { word: "கோணல்", meaning: "Crooked / Bent", icon: "〰️" },
            { word: "கோரல்", meaning: "Plea / Demand", icon: "🗣️" },
            { word: "சொல்", meaning: "Spoken Word", icon: "💬" },
            { word: "சொத்தை", meaning: "Asset / Wealth", icon: "🏛️" },
            { word: "சொர்க்கம்", meaning: "Heaven / Paradise", icon: "🌈" },
            { word: "சோலை", meaning: "Lush Grove / Garden", icon: "🌴" },
            { word: "சோளம்", meaning: "Sweet Corn Maize", icon: "🌽" },
            { word: "சோம்பல்", meaning: "Lethargy / Rest", icon: "🛋️" },
            { word: "சோதனை", meaning: "Trial / Experiment", icon: "🧪" },
            { word: "சோகமாய்", meaning: "With Melancholy", icon: "🥺" },
            { word: "தொட்டி", meaning: "Water Basin / Tank", icon: "🛁" },
            { word: "தொட்டில்", meaning: "Baby Cradle", icon: "👶" },
            { word: "தொப்பி", meaning: "Head Cap", icon: "🧢" },
            { word: "தொடை", meaning: "Thigh / Verse Garland", icon: "🦵" },
            { word: "தொல்லை", meaning: "Trouble / Nuisance", icon: "😫" },
            { word: "தோட்டம்", meaning: "Green Garden Farm", icon: "🏡" },
            { word: "தோல்", meaning: "Skin / Leather", icon: "🧥" },
            { word: "தோழன்", meaning: "Dear Comrade", icon: "🤝" },
            { word: "தோழி", meaning: "Dear Female Friend", icon: "👭" },
            { word: "தோகை", meaning: "Peacock Plumage", icon: "🦚" },
            { word: "தோசை", meaning: "Crispy Dosa Crepe", icon: "🥞" },
            { word: "தோரணம்", meaning: "Festive Festoon Garland", icon: "🎊" },
            { word: "நொடி", meaning: "Split Second / Instant", icon: "⏱️" },
            { word: "நோய்", meaning: "Ailment / Illness", icon: "🩹" },
            { word: "நோக்கம்", meaning: "Noble Purpose", icon: "🎯" },
            { word: "நோட்டம்", meaning: "Perception / View", icon: "👀" },
            { word: "மொட்டை", meaning: "Shaved Head / Balcony", icon: "👨‍🦲" },
            { word: "மொச்சை", meaning: "Broad Field Beans", icon: "🫘" },
            { word: "மோதிரம்", meaning: "Finger Ring", icon: "💍" },
            { word: "மோகம்", meaning: "Deep Passion / Craving", icon: "💖" },
            { word: "மோப்பம்", meaning: "Scent Tracking", icon: "👃" },
            { word: "மோதல்", meaning: "Clash / Impact", icon: "💥" },
            { word: "ரோமம்", meaning: "Body Hair / Fur", icon: "🦁" },
            { word: "லோகம்", meaning: "Realm / World", icon: "🌍" },
            { word: "யோசனை", meaning: "Idea / Consideration", icon: "💡" },
            { word: "யோகம்", meaning: "Good Fortune / Yoga", icon: "🧘" }
          ]
        }
      ]
    },

    6: {
      number: 6,
      title: 'Level 6 Letters',
      currentSetIndex: 0,
      sets: [
        {
          id: '6-1',
          name: 'டபமய',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ"],
          rows: [
            ["ட்", "ட", "டா", "டி", "டீ", "டெ", "டே", "டை", "டொ", "டோ", "டு", "டூ"],
            ["ப்", "ப", "பா", "பி", "பீ", "பெ", "பே", "பை", "பொ", "போ", "பு", "பூ"],
            ["ம்", "ம", "மா", "மி", "மீ", "மெ", "மே", "மை", "மொ", "மோ", "மு", "மூ"],
            ["ய்", "ய", "யா", "யி", "யீ", "யெ", "யே", "யை", "யொ", "யோ", "யு", "யூ"]
          ],
          syllables: ["குட்", "கூட்", "சுட்", "சூட்", "துட்", "தூட்", "புட்", "பூட்", "முட்", "மூட்", "குப்", "கூப்", "சுப்", "சூப்", "துப்", "தூப்", "புப்", "பூப்", "முப்", "மூப்", "கும்", "கூம்", "சும்", "சூம்", "தும்", "தூம்", "பும்", "பூம்", "மும்", "மூம்", "குன்", "கூன்", "சுன்", "சூன்", "துன்", "தூன்", "புன்", "பூன்", "முன்", "மூன்", "குல்", "கூல்", "சுல்", "சூல்", "துல்", "தூல்", "புல்", "பூல்", "முல்", "மூல்", "பசு", "புலி", "குடை", "கூடை", "சூறை", "துணி", "பூனை", "பூமி", "முடி", "மூடி", "வீடு", "காடு", "நாடு", "பந்து", "முயல்", "அன்பு", "நண்டு", "ஊசி", "உப்பு", "பசு பசு", "புலி புலி", "குடை குடை", "பூ பூ", "வீடு வீடு", "காடு காடு", "நாடு நாடு", "பந்து பந்து", "ஊஞ்சல் ஊஞ்சல்", "முத்து முத்து", "அன்பு அன்பு"],
          sampleWords: [
            { word: "உப்பு", meaning: "Sea Salt", icon: "🧂" },
            { word: "ஊஞ்சல்", meaning: "Garden Swing", icon: "🪢" },
            { word: "பசு", meaning: "Sacred Cow", icon: "🐄" },
            { word: "பூ", meaning: "Fragrant Flower", icon: "🌸" },
            { word: "சூரியன்", meaning: "Radiant Sun", icon: "☀️" },
            { word: "புலி", meaning: "Royal Bengal Tiger", icon: "🐅" },
            { word: "குடை", meaning: "Rain Umbrella", icon: "☂️" },
            { word: "குதிரை", meaning: "Galloping Horse", icon: "🐎" },
            { word: "குரங்கு", meaning: "Playful Monkey", icon: "🐒" },
            { word: "குருவி", meaning: "Sparrow Bird", icon: "🐦" },
            { word: "குளம்", meaning: "Lotus Pond", icon: "🏞️" },
            { word: "கூடை", meaning: "Woven Basket", icon: "🧺" },
            { word: "கூண்டு", meaning: "Bird Cage / Aviary", icon: "🪺" },
            { word: "கூட்டம்", meaning: "Crowd / Gathering", icon: "👥" },
            { word: "கூரை", meaning: "Thatch Roof", icon: "🏠" },
            { word: "சுண்டல்", meaning: "Steamed Spiced Chickpeas", icon: "🍲" },
            { word: "சுவர்", meaning: "Brick Wall", icon: "🧱" },
            { word: "சூடம்", meaning: "Camphor Light", icon: "🪔" },
            { word: "சூறை", meaning: "Whirlwind / Gale", icon: "🌪️" },
            { word: "துணை", meaning: "Companion / Support", icon: "🤝" },
            { word: "துணி", meaning: "Cloth / Fabric", icon: "🧵" },
            { word: "துளசி", meaning: "Holy Basil Herb", icon: "🌿" },
            { word: "துள்ளி", meaning: "Skipping with Joy", icon: "🏃" },
            { word: "தூண்டில்", meaning: "Fishing Hook / Line", icon: "🎣" },
            { word: "தூண்", meaning: "Pillar / Column", icon: "🏛️" },
            { word: "தூக்கம்", meaning: "Peaceful Slumber", icon: "😴" },
            { word: "புறா", meaning: "White Dove / Pigeon", icon: "🕊️" },
            { word: "புல்", meaning: "Green Grass Meadow", icon: "🌱" },
            { word: "புகை", meaning: "Incense Smoke", icon: "💨" },
            { word: "புதுமை", meaning: "Novelty / Innovation", icon: "💡" },
            { word: "பூனை", meaning: "Friendly Cat", icon: "🐱" },
            { word: "பூண்டு", meaning: "Garlic Bulb", icon: "🧄" },
            { word: "பூங்கா", meaning: "Flower Garden Park", icon: "🌳" },
            { word: "பூமி", meaning: "Planet Earth", icon: "🌍" },
            { word: "முடி", meaning: "Royal Crown / Hair", icon: "👑" },
            { word: "முத்து", meaning: "Ocean Pearl", icon: "🦪" },
            { word: "முல்லை", meaning: "Wild Jasmine Flower", icon: "🌼" },
            { word: "முட்டை", meaning: "Egg", icon: "🥚" },
            { word: "மூங்கில்", meaning: "Bamboo Cane", icon: "🎋" },
            { word: "மூளை", meaning: "Sharp Intellect / Brain", icon: "🧠" },
            { word: "மூடி", meaning: "Lid / Cover", icon: "🏺" },
            { word: "ரூபாய்", meaning: "Indian Rupee Currency", icon: "🪙" },
            { word: "உரல்", meaning: "Stone Mortar", icon: "🥣" },
            { word: "உலக்கை", meaning: "Pounding Pestle", icon: "🪵" },
            { word: "உதவி", meaning: "Helping Hand", icon: "🤝" },
            { word: "உரிமை", meaning: "Sacred Right", icon: "📜" },
            { word: "உண்மை", meaning: "Pure Truth", icon: "⭐" },
            { word: "உயிர்", meaning: "Life Breath", icon: "💓" },
            { word: "ஊசி", meaning: "Sewing Needle", icon: "🪡" },
            { word: "ஊர்", meaning: "Town / Village", icon: "🏡" },
            { word: "ஊற்றல்", meaning: "Pouring Water Stream", icon: "🚰" },
            { word: "வீடு", meaning: "Home / Abode", icon: "🏠" },
            { word: "காடு", meaning: "Jungle / Forest", icon: "🌲" },
            { word: "நாடு", meaning: "Nation / Country", icon: "🗺️" },
            { word: "பந்து", meaning: "Playing Ball", icon: "⚽" },
            { word: "முயல்", meaning: "Gentle Rabbit", icon: "🐇" },
            { word: "குழல்", meaning: "Bamboo Flute", icon: "🪈" },
            { word: "அன்பு", meaning: "Loving Affection", icon: "❤️" },
            { word: "நண்டு", meaning: "Crab", icon: "🦀" }
          ]
        },
        {
          id: '6-2',
          name: 'சகதவ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ"],
          rows: [
            ["ச்", "ச", "சா", "சி", "சீ", "செ", "சே", "சை", "சொ", "சோ", "சு", "சூ"],
            ["க்", "க", "கா", "கி", "கீ", "கெ", "கே", "கை", "கொ", "கோ", "கு", "கூ"],
            ["த்", "த", "தா", "தி", "தீ", "தெ", "தே", "தை", "தொ", "தோ", "து", "தூ"],
            ["வ்", "வ", "வா", "வி", "வீ", "வெ", "வே", "வை", "வொ", "வோ", "வு", "வூ"]
          ],
          syllables: ["குட்", "கூட்", "சுட்", "சூட்", "துட்", "தூட்", "புட்", "பூட்", "முட்", "மூட்", "குப்", "கூப்", "சுப்", "சூப்", "துப்", "தூப்", "புப்", "பூப்", "முப்", "மூப்", "கும்", "கூம்", "சும்", "சூம்", "தும்", "தூம்", "பும்", "பூம்", "மும்", "மூம்", "குன்", "கூன்", "சுன்", "சூன்", "துன்", "தூன்", "புன்", "பூன்", "முன்", "மூன்", "குல்", "கூல்", "சுல்", "சூல்", "துல்", "தூல்", "புல்", "பூல்", "முல்", "மூல்", "பசு", "புலி", "குடை", "கூடை", "சூறை", "துணி", "பூனை", "பூமி", "முடி", "மூடி", "வீடு", "காடு", "நாடு", "பந்து", "முயல்", "அன்பு", "நண்டு", "ஊசி", "உப்பு", "பசு பசு", "புலி புலி", "குடை குடை", "பூ பூ", "வீடு வீடு", "காடு காடு", "நாடு நாடு", "பந்து பந்து", "ஊஞ்சல் ஊஞ்சல்", "முத்து முத்து", "அன்பு அன்பு"],
          sampleWords: [
            { word: "உப்பு", meaning: "Sea Salt", icon: "🧂" },
            { word: "ஊஞ்சல்", meaning: "Garden Swing", icon: "🪢" },
            { word: "பசு", meaning: "Sacred Cow", icon: "🐄" },
            { word: "பூ", meaning: "Fragrant Flower", icon: "🌸" },
            { word: "சூரியன்", meaning: "Radiant Sun", icon: "☀️" },
            { word: "புலி", meaning: "Royal Bengal Tiger", icon: "🐅" },
            { word: "குடை", meaning: "Rain Umbrella", icon: "☂️" },
            { word: "குதிரை", meaning: "Galloping Horse", icon: "🐎" },
            { word: "குரங்கு", meaning: "Playful Monkey", icon: "🐒" },
            { word: "குருவி", meaning: "Sparrow Bird", icon: "🐦" },
            { word: "குளம்", meaning: "Lotus Pond", icon: "🏞️" },
            { word: "கூடை", meaning: "Woven Basket", icon: "🧺" },
            { word: "கூண்டு", meaning: "Bird Cage / Aviary", icon: "🪺" },
            { word: "கூட்டம்", meaning: "Crowd / Gathering", icon: "👥" },
            { word: "கூரை", meaning: "Thatch Roof", icon: "🏠" },
            { word: "சுண்டல்", meaning: "Steamed Spiced Chickpeas", icon: "🍲" },
            { word: "சுவர்", meaning: "Brick Wall", icon: "🧱" },
            { word: "சூடம்", meaning: "Camphor Light", icon: "🪔" },
            { word: "சூறை", meaning: "Whirlwind / Gale", icon: "🌪️" },
            { word: "துணை", meaning: "Companion / Support", icon: "🤝" },
            { word: "துணி", meaning: "Cloth / Fabric", icon: "🧵" },
            { word: "துளசி", meaning: "Holy Basil Herb", icon: "🌿" },
            { word: "துள்ளி", meaning: "Skipping with Joy", icon: "🏃" },
            { word: "தூண்டில்", meaning: "Fishing Hook / Line", icon: "🎣" },
            { word: "தூண்", meaning: "Pillar / Column", icon: "🏛️" },
            { word: "தூக்கம்", meaning: "Peaceful Slumber", icon: "😴" },
            { word: "புறா", meaning: "White Dove / Pigeon", icon: "🕊️" },
            { word: "புல்", meaning: "Green Grass Meadow", icon: "🌱" },
            { word: "புகை", meaning: "Incense Smoke", icon: "💨" },
            { word: "புதுமை", meaning: "Novelty / Innovation", icon: "💡" },
            { word: "பூனை", meaning: "Friendly Cat", icon: "🐱" },
            { word: "பூண்டு", meaning: "Garlic Bulb", icon: "🧄" },
            { word: "பூங்கா", meaning: "Flower Garden Park", icon: "🌳" },
            { word: "பூமி", meaning: "Planet Earth", icon: "🌍" },
            { word: "முடி", meaning: "Royal Crown / Hair", icon: "👑" },
            { word: "முத்து", meaning: "Ocean Pearl", icon: "🦪" },
            { word: "முல்லை", meaning: "Wild Jasmine Flower", icon: "🌼" },
            { word: "முட்டை", meaning: "Egg", icon: "🥚" },
            { word: "மூங்கில்", meaning: "Bamboo Cane", icon: "🎋" },
            { word: "மூளை", meaning: "Sharp Intellect / Brain", icon: "🧠" },
            { word: "மூடி", meaning: "Lid / Cover", icon: "🏺" },
            { word: "ரூபாய்", meaning: "Indian Rupee Currency", icon: "🪙" },
            { word: "உரல்", meaning: "Stone Mortar", icon: "🥣" },
            { word: "உலக்கை", meaning: "Pounding Pestle", icon: "🪵" },
            { word: "உதவி", meaning: "Helping Hand", icon: "🤝" },
            { word: "உரிமை", meaning: "Sacred Right", icon: "📜" },
            { word: "உண்மை", meaning: "Pure Truth", icon: "⭐" },
            { word: "உயிர்", meaning: "Life Breath", icon: "💓" },
            { word: "ஊசி", meaning: "Sewing Needle", icon: "🪡" },
            { word: "ஊர்", meaning: "Town / Village", icon: "🏡" },
            { word: "ஊற்றல்", meaning: "Pouring Water Stream", icon: "🚰" },
            { word: "வீடு", meaning: "Home / Abode", icon: "🏠" },
            { word: "காடு", meaning: "Jungle / Forest", icon: "🌲" },
            { word: "நாடு", meaning: "Nation / Country", icon: "🗺️" },
            { word: "பந்து", meaning: "Playing Ball", icon: "⚽" },
            { word: "முயல்", meaning: "Gentle Rabbit", icon: "🐇" },
            { word: "குழல்", meaning: "Bamboo Flute", icon: "🪈" },
            { word: "அன்பு", meaning: "Loving Affection", icon: "❤️" },
            { word: "நண்டு", meaning: "Crab", icon: "🦀" }
          ]
        },
        {
          id: '6-3',
          name: 'ஙஞரற',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ"],
          rows: [
            ["ங்", "ங", "ஙா", "ஙி", "ஙீ", "ஙெ", "ஙே", "ஙை", "ஙொ", "ஙோ", "ஙு", "ஙூ"],
            ["ஞ்", "ஞ", "ஞா", "ஞி", "ஞீ", "ஞெ", "ஞே", "ஞை", "ஞொ", "ஞோ", "ஞு", "ஞூ"],
            ["ர்", "ர", "ரா", "ரி", "ரீ", "ரெ", "ரே", "ரை", "ரொ", "ரோ", "ரு", "ரூ"],
            ["ற்", "ற", "றா", "றி", "றீ", "றெ", "றே", "றை", "றொ", "றோ", "று", "றூ"]
          ],
          syllables: ["குட்", "கூட்", "சுட்", "சூட்", "துட்", "தூட்", "புட்", "பூட்", "முட்", "மூட்", "குப்", "கூப்", "சுப்", "சூப்", "துப்", "தூப்", "புப்", "பூப்", "முப்", "மூப்", "கும்", "கூம்", "சும்", "சூம்", "தும்", "தூம்", "பும்", "பூம்", "மும்", "மூம்", "குன்", "கூன்", "சுன்", "சூன்", "துன்", "தூன்", "புன்", "பூன்", "முன்", "மூன்", "குல்", "கூல்", "சுல்", "சூல்", "துல்", "தூல்", "புல்", "பூல்", "முல்", "மூல்", "பசு", "புலி", "குடை", "கூடை", "சூறை", "துணி", "பூனை", "பூமி", "முடி", "மூடி", "வீடு", "காடு", "நாடு", "பந்து", "முயல்", "அன்பு", "நண்டு", "ஊசி", "உப்பு", "பசு பசு", "புலி புலி", "குடை குடை", "பூ பூ", "வீடு வீடு", "காடு காடு", "நாடு நாடு", "பந்து பந்து", "ஊஞ்சல் ஊஞ்சல்", "முத்து முத்து", "அன்பு அன்பு"],
          sampleWords: [
            { word: "உப்பு", meaning: "Sea Salt", icon: "🧂" },
            { word: "ஊஞ்சல்", meaning: "Garden Swing", icon: "🪢" },
            { word: "பசு", meaning: "Sacred Cow", icon: "🐄" },
            { word: "பூ", meaning: "Fragrant Flower", icon: "🌸" },
            { word: "சூரியன்", meaning: "Radiant Sun", icon: "☀️" },
            { word: "புலி", meaning: "Royal Bengal Tiger", icon: "🐅" },
            { word: "குடை", meaning: "Rain Umbrella", icon: "☂️" },
            { word: "குதிரை", meaning: "Galloping Horse", icon: "🐎" },
            { word: "குரங்கு", meaning: "Playful Monkey", icon: "🐒" },
            { word: "குருவி", meaning: "Sparrow Bird", icon: "🐦" },
            { word: "குளம்", meaning: "Lotus Pond", icon: "🏞️" },
            { word: "கூடை", meaning: "Woven Basket", icon: "🧺" },
            { word: "கூண்டு", meaning: "Bird Cage / Aviary", icon: "🪺" },
            { word: "கூட்டம்", meaning: "Crowd / Gathering", icon: "👥" },
            { word: "கூரை", meaning: "Thatch Roof", icon: "🏠" },
            { word: "சுண்டல்", meaning: "Steamed Spiced Chickpeas", icon: "🍲" },
            { word: "சுவர்", meaning: "Brick Wall", icon: "🧱" },
            { word: "சூடம்", meaning: "Camphor Light", icon: "🪔" },
            { word: "சூறை", meaning: "Whirlwind / Gale", icon: "🌪️" },
            { word: "துணை", meaning: "Companion / Support", icon: "🤝" },
            { word: "துணி", meaning: "Cloth / Fabric", icon: "🧵" },
            { word: "துளசி", meaning: "Holy Basil Herb", icon: "🌿" },
            { word: "துள்ளி", meaning: "Skipping with Joy", icon: "🏃" },
            { word: "தூண்டில்", meaning: "Fishing Hook / Line", icon: "🎣" },
            { word: "தூண்", meaning: "Pillar / Column", icon: "🏛️" },
            { word: "தூக்கம்", meaning: "Peaceful Slumber", icon: "😴" },
            { word: "புறா", meaning: "White Dove / Pigeon", icon: "🕊️" },
            { word: "புல்", meaning: "Green Grass Meadow", icon: "🌱" },
            { word: "புகை", meaning: "Incense Smoke", icon: "💨" },
            { word: "புதுமை", meaning: "Novelty / Innovation", icon: "💡" },
            { word: "பூனை", meaning: "Friendly Cat", icon: "🐱" },
            { word: "பூண்டு", meaning: "Garlic Bulb", icon: "🧄" },
            { word: "பூங்கா", meaning: "Flower Garden Park", icon: "🌳" },
            { word: "பூமி", meaning: "Planet Earth", icon: "🌍" },
            { word: "முடி", meaning: "Royal Crown / Hair", icon: "👑" },
            { word: "முத்து", meaning: "Ocean Pearl", icon: "🦪" },
            { word: "முல்லை", meaning: "Wild Jasmine Flower", icon: "🌼" },
            { word: "முட்டை", meaning: "Egg", icon: "🥚" },
            { word: "மூங்கில்", meaning: "Bamboo Cane", icon: "🎋" },
            { word: "மூளை", meaning: "Sharp Intellect / Brain", icon: "🧠" },
            { word: "மூடி", meaning: "Lid / Cover", icon: "🏺" },
            { word: "ரூபாய்", meaning: "Indian Rupee Currency", icon: "🪙" },
            { word: "உரல்", meaning: "Stone Mortar", icon: "🥣" },
            { word: "உலக்கை", meaning: "Pounding Pestle", icon: "🪵" },
            { word: "உதவி", meaning: "Helping Hand", icon: "🤝" },
            { word: "உரிமை", meaning: "Sacred Right", icon: "📜" },
            { word: "உண்மை", meaning: "Pure Truth", icon: "⭐" },
            { word: "உயிர்", meaning: "Life Breath", icon: "💓" },
            { word: "ஊசி", meaning: "Sewing Needle", icon: "🪡" },
            { word: "ஊர்", meaning: "Town / Village", icon: "🏡" },
            { word: "ஊற்றல்", meaning: "Pouring Water Stream", icon: "🚰" },
            { word: "வீடு", meaning: "Home / Abode", icon: "🏠" },
            { word: "காடு", meaning: "Jungle / Forest", icon: "🌲" },
            { word: "நாடு", meaning: "Nation / Country", icon: "🗺️" },
            { word: "பந்து", meaning: "Playing Ball", icon: "⚽" },
            { word: "முயல்", meaning: "Gentle Rabbit", icon: "🐇" },
            { word: "குழல்", meaning: "Bamboo Flute", icon: "🪈" },
            { word: "அன்பு", meaning: "Loving Affection", icon: "❤️" },
            { word: "நண்டு", meaning: "Crab", icon: "🦀" }
          ]
        },
        {
          id: '6-4',
          name: 'நனண',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ"],
          rows: [
            ["ந்", "ந", "நா", "நி", "நீ", "நெ", "நே", "நை", "நொ", "நோ", "நு", "நூ"],
            ["ன்", "ன", "னா", "னி", "னீ", "னெ", "னே", "னை", "னொ", "னோ", "னு", "னூ"],
            ["ண்", "ண", "ணா", "ணி", "ணீ", "ணெ", "ணே", "ணை", "ணொ", "ணோ", "ணு", "ணூ"]
          ],
          syllables: ["குட்", "கூட்", "சுட்", "சூட்", "துட்", "தூட்", "புட்", "பூட்", "முட்", "மூட்", "குப்", "கூப்", "சுப்", "சூப்", "துப்", "தூப்", "புப்", "பூப்", "முப்", "மூப்", "கும்", "கூம்", "சும்", "சூம்", "தும்", "தூம்", "பும்", "பூம்", "மும்", "மூம்", "குன்", "கூன்", "சுன்", "சூன்", "துன்", "தூன்", "புன்", "பூன்", "முன்", "மூன்", "குல்", "கூல்", "சுல்", "சூல்", "துல்", "தூல்", "புல்", "பூல்", "முல்", "மூல்", "பசு", "புலி", "குடை", "கூடை", "சூறை", "துணி", "பூனை", "பூமி", "முடி", "மூடி", "வீடு", "காடு", "நாடு", "பந்து", "முயல்", "அன்பு", "நண்டு", "ஊசி", "உப்பு", "பசு பசு", "புலி புலி", "குடை குடை", "பூ பூ", "வீடு வீடு", "காடு காடு", "நாடு நாடு", "பந்து பந்து", "ஊஞ்சல் ஊஞ்சல்", "முத்து முத்து", "அன்பு அன்பு"],
          sampleWords: [
            { word: "உப்பு", meaning: "Sea Salt", icon: "🧂" },
            { word: "ஊஞ்சல்", meaning: "Garden Swing", icon: "🪢" },
            { word: "பசு", meaning: "Sacred Cow", icon: "🐄" },
            { word: "பூ", meaning: "Fragrant Flower", icon: "🌸" },
            { word: "சூரியன்", meaning: "Radiant Sun", icon: "☀️" },
            { word: "புலி", meaning: "Royal Bengal Tiger", icon: "🐅" },
            { word: "குடை", meaning: "Rain Umbrella", icon: "☂️" },
            { word: "குதிரை", meaning: "Galloping Horse", icon: "🐎" },
            { word: "குரங்கு", meaning: "Playful Monkey", icon: "🐒" },
            { word: "குருவி", meaning: "Sparrow Bird", icon: "🐦" },
            { word: "குளம்", meaning: "Lotus Pond", icon: "🏞️" },
            { word: "கூடை", meaning: "Woven Basket", icon: "🧺" },
            { word: "கூண்டு", meaning: "Bird Cage / Aviary", icon: "🪺" },
            { word: "கூட்டம்", meaning: "Crowd / Gathering", icon: "👥" },
            { word: "கூரை", meaning: "Thatch Roof", icon: "🏠" },
            { word: "சுண்டல்", meaning: "Steamed Spiced Chickpeas", icon: "🍲" },
            { word: "சுவர்", meaning: "Brick Wall", icon: "🧱" },
            { word: "சூடம்", meaning: "Camphor Light", icon: "🪔" },
            { word: "சூறை", meaning: "Whirlwind / Gale", icon: "🌪️" },
            { word: "துணை", meaning: "Companion / Support", icon: "🤝" },
            { word: "துணி", meaning: "Cloth / Fabric", icon: "🧵" },
            { word: "துளசி", meaning: "Holy Basil Herb", icon: "🌿" },
            { word: "துள்ளி", meaning: "Skipping with Joy", icon: "🏃" },
            { word: "தூண்டில்", meaning: "Fishing Hook / Line", icon: "🎣" },
            { word: "தூண்", meaning: "Pillar / Column", icon: "🏛️" },
            { word: "தூக்கம்", meaning: "Peaceful Slumber", icon: "😴" },
            { word: "புறா", meaning: "White Dove / Pigeon", icon: "🕊️" },
            { word: "புல்", meaning: "Green Grass Meadow", icon: "🌱" },
            { word: "புகை", meaning: "Incense Smoke", icon: "💨" },
            { word: "புதுமை", meaning: "Novelty / Innovation", icon: "💡" },
            { word: "பூனை", meaning: "Friendly Cat", icon: "🐱" },
            { word: "பூண்டு", meaning: "Garlic Bulb", icon: "🧄" },
            { word: "பூங்கா", meaning: "Flower Garden Park", icon: "🌳" },
            { word: "பூமி", meaning: "Planet Earth", icon: "🌍" },
            { word: "முடி", meaning: "Royal Crown / Hair", icon: "👑" },
            { word: "முத்து", meaning: "Ocean Pearl", icon: "🦪" },
            { word: "முல்லை", meaning: "Wild Jasmine Flower", icon: "🌼" },
            { word: "முட்டை", meaning: "Egg", icon: "🥚" },
            { word: "மூங்கில்", meaning: "Bamboo Cane", icon: "🎋" },
            { word: "மூளை", meaning: "Sharp Intellect / Brain", icon: "🧠" },
            { word: "மூடி", meaning: "Lid / Cover", icon: "🏺" },
            { word: "ரூபாய்", meaning: "Indian Rupee Currency", icon: "🪙" },
            { word: "உரல்", meaning: "Stone Mortar", icon: "🥣" },
            { word: "உலக்கை", meaning: "Pounding Pestle", icon: "🪵" },
            { word: "உதவி", meaning: "Helping Hand", icon: "🤝" },
            { word: "உரிமை", meaning: "Sacred Right", icon: "📜" },
            { word: "உண்மை", meaning: "Pure Truth", icon: "⭐" },
            { word: "உயிர்", meaning: "Life Breath", icon: "💓" },
            { word: "ஊசி", meaning: "Sewing Needle", icon: "🪡" },
            { word: "ஊர்", meaning: "Town / Village", icon: "🏡" },
            { word: "ஊற்றல்", meaning: "Pouring Water Stream", icon: "🚰" },
            { word: "வீடு", meaning: "Home / Abode", icon: "🏠" },
            { word: "காடு", meaning: "Jungle / Forest", icon: "🌲" },
            { word: "நாடு", meaning: "Nation / Country", icon: "🗺️" },
            { word: "பந்து", meaning: "Playing Ball", icon: "⚽" },
            { word: "முயல்", meaning: "Gentle Rabbit", icon: "🐇" },
            { word: "குழல்", meaning: "Bamboo Flute", icon: "🪈" },
            { word: "அன்பு", meaning: "Loving Affection", icon: "❤️" },
            { word: "நண்டு", meaning: "Crab", icon: "🦀" }
          ]
        },
        {
          id: '6-5',
          name: 'லளழ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ"],
          rows: [
            ["ல்", "ல", "லா", "லி", "லீ", "லெ", "லே", "லை", "லொ", "லோ", "லு", "லூ"],
            ["ள்", "ள", "ளா", "ளி", "ளீ", "ளெ", "ளே", "ளை", "ளொ", "ளோ", "ளு", "ளூ"],
            ["ழ்", "ழ", "ழா", "ழி", "ழீ", "ழெ", "ழே", "ழை", "ழொ", "ழோ", "ழு", "ழூ"]
          ],
          syllables: ["குட்", "கூட்", "சுட்", "சூட்", "துட்", "தூட்", "புட்", "பூட்", "முட்", "மூட்", "குப்", "கூப்", "சுப்", "சூப்", "துப்", "தூப்", "புப்", "பூப்", "முப்", "மூப்", "கும்", "கூம்", "சும்", "சூம்", "தும்", "தூம்", "பும்", "பூம்", "மும்", "மூம்", "குன்", "கூன்", "சுன்", "சூன்", "துன்", "தூன்", "புன்", "பூன்", "முன்", "மூன்", "குல்", "கூல்", "சுல்", "சூல்", "துல்", "தூல்", "புல்", "பூல்", "முல்", "மூல்", "பசு", "புலி", "குடை", "கூடை", "சூறை", "துணி", "பூனை", "பூமி", "முடி", "மூடி", "வீடு", "காடு", "நாடு", "பந்து", "முயல்", "அன்பு", "நண்டு", "ஊசி", "உப்பு", "பசு பசு", "புலி புலி", "குடை குடை", "பூ பூ", "வீடு வீடு", "காடு காடு", "நாடு நாடு", "பந்து பந்து", "ஊஞ்சல் ஊஞ்சல்", "முத்து முத்து", "அன்பு அன்பு"],
          sampleWords: [
            { word: "உப்பு", meaning: "Sea Salt", icon: "🧂" },
            { word: "ஊஞ்சல்", meaning: "Garden Swing", icon: "🪢" },
            { word: "பசு", meaning: "Sacred Cow", icon: "🐄" },
            { word: "பூ", meaning: "Fragrant Flower", icon: "🌸" },
            { word: "சூரியன்", meaning: "Radiant Sun", icon: "☀️" },
            { word: "புலி", meaning: "Royal Bengal Tiger", icon: "🐅" },
            { word: "குடை", meaning: "Rain Umbrella", icon: "☂️" },
            { word: "குதிரை", meaning: "Galloping Horse", icon: "🐎" },
            { word: "குரங்கு", meaning: "Playful Monkey", icon: "🐒" },
            { word: "குருவி", meaning: "Sparrow Bird", icon: "🐦" },
            { word: "குளம்", meaning: "Lotus Pond", icon: "🏞️" },
            { word: "கூடை", meaning: "Woven Basket", icon: "🧺" },
            { word: "கூண்டு", meaning: "Bird Cage / Aviary", icon: "🪺" },
            { word: "கூட்டம்", meaning: "Crowd / Gathering", icon: "👥" },
            { word: "கூரை", meaning: "Thatch Roof", icon: "🏠" },
            { word: "சுண்டல்", meaning: "Steamed Spiced Chickpeas", icon: "🍲" },
            { word: "சுவர்", meaning: "Brick Wall", icon: "🧱" },
            { word: "சூடம்", meaning: "Camphor Light", icon: "🪔" },
            { word: "சூறை", meaning: "Whirlwind / Gale", icon: "🌪️" },
            { word: "துணை", meaning: "Companion / Support", icon: "🤝" },
            { word: "துணி", meaning: "Cloth / Fabric", icon: "🧵" },
            { word: "துளசி", meaning: "Holy Basil Herb", icon: "🌿" },
            { word: "துள்ளி", meaning: "Skipping with Joy", icon: "🏃" },
            { word: "தூண்டில்", meaning: "Fishing Hook / Line", icon: "🎣" },
            { word: "தூண்", meaning: "Pillar / Column", icon: "🏛️" },
            { word: "தூக்கம்", meaning: "Peaceful Slumber", icon: "😴" },
            { word: "புறா", meaning: "White Dove / Pigeon", icon: "🕊️" },
            { word: "புல்", meaning: "Green Grass Meadow", icon: "🌱" },
            { word: "புகை", meaning: "Incense Smoke", icon: "💨" },
            { word: "புதுமை", meaning: "Novelty / Innovation", icon: "💡" },
            { word: "பூனை", meaning: "Friendly Cat", icon: "🐱" },
            { word: "பூண்டு", meaning: "Garlic Bulb", icon: "🧄" },
            { word: "பூங்கா", meaning: "Flower Garden Park", icon: "🌳" },
            { word: "பூமி", meaning: "Planet Earth", icon: "🌍" },
            { word: "முடி", meaning: "Royal Crown / Hair", icon: "👑" },
            { word: "முத்து", meaning: "Ocean Pearl", icon: "🦪" },
            { word: "முல்லை", meaning: "Wild Jasmine Flower", icon: "🌼" },
            { word: "முட்டை", meaning: "Egg", icon: "🥚" },
            { word: "மூங்கில்", meaning: "Bamboo Cane", icon: "🎋" },
            { word: "மூளை", meaning: "Sharp Intellect / Brain", icon: "🧠" },
            { word: "மூடி", meaning: "Lid / Cover", icon: "🏺" },
            { word: "ரூபாய்", meaning: "Indian Rupee Currency", icon: "🪙" },
            { word: "உரல்", meaning: "Stone Mortar", icon: "🥣" },
            { word: "உலக்கை", meaning: "Pounding Pestle", icon: "🪵" },
            { word: "உதவி", meaning: "Helping Hand", icon: "🤝" },
            { word: "உரிமை", meaning: "Sacred Right", icon: "📜" },
            { word: "உண்மை", meaning: "Pure Truth", icon: "⭐" },
            { word: "உயிர்", meaning: "Life Breath", icon: "💓" },
            { word: "ஊசி", meaning: "Sewing Needle", icon: "🪡" },
            { word: "ஊர்", meaning: "Town / Village", icon: "🏡" },
            { word: "ஊற்றல்", meaning: "Pouring Water Stream", icon: "🚰" },
            { word: "வீடு", meaning: "Home / Abode", icon: "🏠" },
            { word: "காடு", meaning: "Jungle / Forest", icon: "🌲" },
            { word: "நாடு", meaning: "Nation / Country", icon: "🗺️" },
            { word: "பந்து", meaning: "Playing Ball", icon: "⚽" },
            { word: "முயல்", meaning: "Gentle Rabbit", icon: "🐇" },
            { word: "குழல்", meaning: "Bamboo Flute", icon: "🪈" },
            { word: "அன்பு", meaning: "Loving Affection", icon: "❤️" },
            { word: "நண்டு", meaning: "Crab", icon: "🦀" }
          ]
        }
      ]
    },

    7: {
      number: 7,
      title: 'Level 7 Letters',
      currentSetIndex: 0,
      sets: [
        {
          id: '7-1',
          name: 'டபமய',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ", "ஔ"],
          rows: [
            ["ட்", "ட", "டா", "டி", "டீ", "டெ", "டே", "டை", "டொ", "டோ", "டு", "டூ", "டௌ"],
            ["ப்", "ப", "பா", "பி", "பீ", "பெ", "பே", "பை", "பொ", "போ", "பு", "பூ", "பௌ"],
            ["ம்", "ம", "மா", "மி", "மீ", "மெ", "மே", "மை", "மொ", "மோ", "மு", "மூ", "மௌ"],
            ["ய்", "ய", "யா", "யி", "யீ", "யெ", "யே", "யை", "யொ", "யோ", "யு", "யூ", "யௌ"]
          ],
          syllables: ["ஔ", "கௌ", "சௌ", "தௌ", "பௌ", "மௌ", "வௌ", "லௌ", "ரௌ", "நௌ", "கௌட்", "கௌப்", "கௌம்", "கௌன்", "கௌல்", "சௌட்", "சௌப்", "சௌம்", "சௌன்", "சௌல்", "தௌட்", "தௌப்", "தௌம்", "தௌன்", "தௌல்", "பௌட்", "பௌப்", "பௌம்", "பௌன்", "பௌல்", "மௌட்", "மௌப்", "மௌம்", "மௌன்", "மௌல்", "வௌட்", "வௌப்", "வௌம்", "வௌன்", "வௌல்", "லௌட்", "லௌப்", "லௌம்", "லௌன்", "லௌல்", "ரௌட்", "ரௌப்", "ரௌம்", "ரௌன்", "ரௌல்", "ஔட்", "ஔப்", "ஔம்", "ஔன்", "ஔல்", "ஔவை", "ஔரி", "கௌவை", "கௌளி", "கௌல்", "சௌடம்", "தௌவை", "மௌலி", "மௌவல்", "வௌவால்", "வௌவு", "வௌவல்", "கௌரவம்", "மௌனம்", "கௌ கௌ", "சௌ சௌ", "தௌ தௌ", "பௌ பௌ", "மௌ மௌ", "வௌ வௌ", "ஔவை ஔவை", "மௌனம் மௌனம்", "வௌவால் வௌவால்", "கௌரவம் கௌரவம்", "பௌர்ணமி பௌர்ணமி", "சௌக்கியம் சௌக்கியம்"],
          sampleWords: [
            { word: "ஔவை", meaning: "Wise Elder / Mother", icon: "👵" },
            { word: "ஔவையார்", meaning: "Revered Poetess Avvaiyar", icon: "📜" },
            { word: "ஔடதம்", meaning: "Healing Medicine", icon: "💊" },
            { word: "ஔவியம்", meaning: "Envy / Conceit", icon: "😒" },
            { word: "ஔரி", meaning: "Indigo Dye Plant", icon: "🌿" },
            { word: "ஔகாரம்", meaning: "The Sacred Letter Au", icon: "🔤" },
            { word: "ஔதாரியம்", meaning: "Generosity / Magnanimity", icon: "🎁" },
            { word: "ஔன்னத்தியம்", meaning: "Loftiness / Nobility", icon: "🏔️" },
            { word: "கௌரவம்", meaning: "Honor / Dignity", icon: "👑" },
            { word: "கௌமாரம்", meaning: "Youthful Valor / Murugan", icon: "🏹" },
            { word: "கௌதமன்", meaning: "Sage Gautama", icon: "🧘" },
            { word: "கௌதமை", meaning: "Gautami River", icon: "🌊" },
            { word: "கௌளி", meaning: "House Gecko / Lizard", icon: "🦎" },
            { word: "கௌவை", meaning: "Affliction / Village Echo", icon: "🗣️" },
            { word: "கௌல்", meaning: "Solemn Accord / Treaty", icon: "🤝" },
            { word: "கௌரவர்", meaning: "The Kaurava Dynasty", icon: "⚔️" },
            { word: "கௌரி", meaning: "Goddess Gauri", icon: "🌺" },
            { word: "சௌக்கியம்", meaning: "Good Health / Wellbeing", icon: "😊" },
            { word: "சௌந்தரியம்", meaning: "Radiant Natural Beauty", icon: "🌸" },
            { word: "சௌகரியம்", meaning: "Comfort / Convenience", icon: "🛋️" },
            { word: "சௌடம்", meaning: "Brilliant Luster", icon: "✨" },
            { word: "சௌபாக்கியம்", meaning: "Bountiful Fortune", icon: "💰" },
            { word: "சௌரம்", meaning: "Solar Power / Radiance", icon: "☀️" },
            { word: "தௌவை", meaning: "Elder Goddess / Sister", icon: "👩" },
            { word: "தௌசம்", meaning: "Luminosity / Radiance", icon: "🌟" },
            { word: "பௌர்ணமி", meaning: "Full Moon Night", icon: "🌕" },
            { word: "பௌதிகம்", meaning: "Physical Nature / Material", icon: "⚛️" },
            { word: "பௌத்தம்", meaning: "Peaceful Buddhist Path", icon: "☸️" },
            { word: "பௌத்தர்", meaning: "Peaceful Buddhist Monk", icon: "🧘" },
            { word: "பௌவம்", meaning: "Vast Ocean Deep", icon: "🌊" },
            { word: "மௌனம்", meaning: "Sacred Silence", icon: "🤫" },
            { word: "மௌலி", meaning: "Diadem / Crown", icon: "👑" },
            { word: "மௌவல்", meaning: "Fragrant Jasmine Blossom", icon: "🌼" },
            { word: "மௌரியர்", meaning: "The Maurya Dynasty", icon: "🏛️" },
            { word: "வௌவால்", meaning: "Nocturnal Bat", icon: "🦇" },
            { word: "வௌவு", meaning: "Seize / Grasp Firmly", icon: "🦅" },
            { word: "வௌவல்", meaning: "Catching / Snatching", icon: "🎣" },
            { word: "லௌகிகம்", meaning: "Worldly Wisdom", icon: "🌍" },
            { word: "ரௌத்திரம்", meaning: "Righteous Fiery Valor", icon: "🔥" }
          ]
        },
        {
          id: '7-2',
          name: 'சகதவ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ", "ஔ"],
          rows: [
            ["ச்", "ச", "சா", "சி", "சீ", "செ", "சே", "சை", "சொ", "சோ", "சு", "சூ", "சௌ"],
            ["க்", "க", "கா", "கி", "கீ", "கெ", "கே", "கை", "கொ", "கோ", "கு", "கூ", "கௌ"],
            ["த்", "த", "தா", "தி", "தீ", "தெ", "தே", "தை", "தொ", "தோ", "து", "தூ", "தௌ"],
            ["வ்", "வ", "வா", "வி", "வீ", "வெ", "வே", "வை", "வொ", "வோ", "வு", "வூ", "வௌ"]
          ],
          syllables: ["ஔ", "கௌ", "சௌ", "தௌ", "பௌ", "மௌ", "வௌ", "லௌ", "ரௌ", "நௌ", "கௌட்", "கௌப்", "கௌம்", "கௌன்", "கௌல்", "சௌட்", "சௌப்", "சௌம்", "சௌன்", "சௌல்", "தௌட்", "தௌப்", "தௌம்", "தௌன்", "தௌல்", "பௌட்", "பௌப்", "பௌம்", "பௌன்", "பௌல்", "மௌட்", "மௌப்", "மௌம்", "மௌன்", "மௌல்", "வௌட்", "வௌப்", "வௌம்", "வௌன்", "வௌல்", "லௌட்", "லௌப்", "லௌம்", "லௌன்", "லௌல்", "ரௌட்", "ரௌப்", "ரௌம்", "ரௌன்", "ரௌல்", "ஔட்", "ஔப்", "ஔம்", "ஔன்", "ஔல்", "ஔவை", "ஔரி", "கௌவை", "கௌளி", "கௌல்", "சௌடம்", "தௌவை", "மௌலி", "மௌவல்", "வௌவால்", "வௌவு", "வௌவல்", "கௌரவம்", "மௌனம்", "கௌ கௌ", "சௌ சௌ", "தௌ தௌ", "பௌ பௌ", "மௌ மௌ", "வௌ வௌ", "ஔவை ஔவை", "மௌனம் மௌனம்", "வௌவால் வௌவால்", "கௌரவம் கௌரவம்", "பௌர்ணமி பௌர்ணமி", "சௌக்கியம் சௌக்கியம்"],
          sampleWords: [
            { word: "ஔவை", meaning: "Wise Elder / Mother", icon: "👵" },
            { word: "ஔவையார்", meaning: "Revered Poetess Avvaiyar", icon: "📜" },
            { word: "ஔடதம்", meaning: "Healing Medicine", icon: "💊" },
            { word: "ஔவியம்", meaning: "Envy / Conceit", icon: "😒" },
            { word: "ஔரி", meaning: "Indigo Dye Plant", icon: "🌿" },
            { word: "ஔகாரம்", meaning: "The Sacred Letter Au", icon: "🔤" },
            { word: "ஔதாரியம்", meaning: "Generosity / Magnanimity", icon: "🎁" },
            { word: "ஔன்னத்தியம்", meaning: "Loftiness / Nobility", icon: "🏔️" },
            { word: "கௌரவம்", meaning: "Honor / Dignity", icon: "👑" },
            { word: "கௌமாரம்", meaning: "Youthful Valor / Murugan", icon: "🏹" },
            { word: "கௌதமன்", meaning: "Sage Gautama", icon: "🧘" },
            { word: "கௌதமை", meaning: "Gautami River", icon: "🌊" },
            { word: "கௌளி", meaning: "House Gecko / Lizard", icon: "🦎" },
            { word: "கௌவை", meaning: "Affliction / Village Echo", icon: "🗣️" },
            { word: "கௌல்", meaning: "Solemn Accord / Treaty", icon: "🤝" },
            { word: "கௌரவர்", meaning: "The Kaurava Dynasty", icon: "⚔️" },
            { word: "கௌரி", meaning: "Goddess Gauri", icon: "🌺" },
            { word: "சௌக்கியம்", meaning: "Good Health / Wellbeing", icon: "😊" },
            { word: "சௌந்தரியம்", meaning: "Radiant Natural Beauty", icon: "🌸" },
            { word: "சௌகரியம்", meaning: "Comfort / Convenience", icon: "🛋️" },
            { word: "சௌடம்", meaning: "Brilliant Luster", icon: "✨" },
            { word: "சௌபாக்கியம்", meaning: "Bountiful Fortune", icon: "💰" },
            { word: "சௌரம்", meaning: "Solar Power / Radiance", icon: "☀️" },
            { word: "தௌவை", meaning: "Elder Goddess / Sister", icon: "👩" },
            { word: "தௌசம்", meaning: "Luminosity / Radiance", icon: "🌟" },
            { word: "பௌர்ணமி", meaning: "Full Moon Night", icon: "🌕" },
            { word: "பௌதிகம்", meaning: "Physical Nature / Material", icon: "⚛️" },
            { word: "பௌத்தம்", meaning: "Peaceful Buddhist Path", icon: "☸️" },
            { word: "பௌத்தர்", meaning: "Peaceful Buddhist Monk", icon: "🧘" },
            { word: "பௌவம்", meaning: "Vast Ocean Deep", icon: "🌊" },
            { word: "மௌனம்", meaning: "Sacred Silence", icon: "🤫" },
            { word: "மௌலி", meaning: "Diadem / Crown", icon: "👑" },
            { word: "மௌவல்", meaning: "Fragrant Jasmine Blossom", icon: "🌼" },
            { word: "மௌரியர்", meaning: "The Maurya Dynasty", icon: "🏛️" },
            { word: "வௌவால்", meaning: "Nocturnal Bat", icon: "🦇" },
            { word: "வௌவு", meaning: "Seize / Grasp Firmly", icon: "🦅" },
            { word: "வௌவல்", meaning: "Catching / Snatching", icon: "🎣" },
            { word: "லௌகிகம்", meaning: "Worldly Wisdom", icon: "🌍" },
            { word: "ரௌத்திரம்", meaning: "Righteous Fiery Valor", icon: "🔥" }
          ]
        },
        {
          id: '7-3',
          name: 'ஙஞரற',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ", "ஔ"],
          rows: [
            ["ங்", "ங", "ஙா", "ஙி", "ஙீ", "ஙெ", "ஙே", "ஙை", "ஙொ", "ஙோ", "ஙு", "ஙூ", "ஙௌ"],
            ["ஞ்", "ஞ", "ஞா", "ஞி", "ஞீ", "ஞெ", "ஞே", "ஞை", "ஞொ", "ஞோ", "ஞு", "ஞூ", "ஞௌ"],
            ["ர்", "ர", "ரா", "ரி", "ரீ", "ரெ", "ரே", "ரை", "ரொ", "ரோ", "ரு", "ரூ", "ரௌ"],
            ["ற்", "ற", "றா", "றி", "றீ", "றெ", "றே", "றை", "றொ", "றோ", "று", "றூ", "றௌ"]
          ],
          syllables: ["ஔ", "கௌ", "சௌ", "தௌ", "பௌ", "மௌ", "வௌ", "லௌ", "ரௌ", "நௌ", "கௌட்", "கௌப்", "கௌம்", "கௌன்", "கௌல்", "சௌட்", "சௌப்", "சௌம்", "சௌன்", "சௌல்", "தௌட்", "தௌப்", "தௌம்", "தௌன்", "தௌல்", "பௌட்", "பௌப்", "பௌம்", "பௌன்", "பௌல்", "மௌட்", "மௌப்", "மௌம்", "மௌன்", "மௌல்", "வௌட்", "வௌப்", "வௌம்", "வௌன்", "வௌல்", "லௌட்", "லௌப்", "லௌம்", "லௌன்", "லௌல்", "ரௌட்", "ரௌப்", "ரௌம்", "ரௌன்", "ரௌல்", "ஔட்", "ஔப்", "ஔம்", "ஔன்", "ஔல்", "ஔவை", "ஔரி", "கௌவை", "கௌளி", "கௌல்", "சௌடம்", "தௌவை", "மௌலி", "மௌவல்", "வௌவால்", "வௌவு", "வௌவல்", "கௌரவம்", "மௌனம்", "கௌ கௌ", "சௌ சௌ", "தௌ தௌ", "பௌ பௌ", "மௌ மௌ", "வௌ வௌ", "ஔவை ஔவை", "மௌனம் மௌனம்", "வௌவால் வௌவால்", "கௌரவம் கௌரவம்", "பௌர்ணமி பௌர்ணமி", "சௌக்கியம் சௌக்கியம்"],
          sampleWords: [
            { word: "ஔவை", meaning: "Wise Elder / Mother", icon: "👵" },
            { word: "ஔவையார்", meaning: "Revered Poetess Avvaiyar", icon: "📜" },
            { word: "ஔடதம்", meaning: "Healing Medicine", icon: "💊" },
            { word: "ஔவியம்", meaning: "Envy / Conceit", icon: "😒" },
            { word: "ஔரி", meaning: "Indigo Dye Plant", icon: "🌿" },
            { word: "ஔகாரம்", meaning: "The Sacred Letter Au", icon: "🔤" },
            { word: "ஔதாரியம்", meaning: "Generosity / Magnanimity", icon: "🎁" },
            { word: "ஔன்னத்தியம்", meaning: "Loftiness / Nobility", icon: "🏔️" },
            { word: "கௌரவம்", meaning: "Honor / Dignity", icon: "👑" },
            { word: "கௌமாரம்", meaning: "Youthful Valor / Murugan", icon: "🏹" },
            { word: "கௌதமன்", meaning: "Sage Gautama", icon: "🧘" },
            { word: "கௌதமை", meaning: "Gautami River", icon: "🌊" },
            { word: "கௌளி", meaning: "House Gecko / Lizard", icon: "🦎" },
            { word: "கௌவை", meaning: "Affliction / Village Echo", icon: "🗣️" },
            { word: "கௌல்", meaning: "Solemn Accord / Treaty", icon: "🤝" },
            { word: "கௌரவர்", meaning: "The Kaurava Dynasty", icon: "⚔️" },
            { word: "கௌரி", meaning: "Goddess Gauri", icon: "🌺" },
            { word: "சௌக்கியம்", meaning: "Good Health / Wellbeing", icon: "😊" },
            { word: "சௌந்தரியம்", meaning: "Radiant Natural Beauty", icon: "🌸" },
            { word: "சௌகரியம்", meaning: "Comfort / Convenience", icon: "🛋️" },
            { word: "சௌடம்", meaning: "Brilliant Luster", icon: "✨" },
            { word: "சௌபாக்கியம்", meaning: "Bountiful Fortune", icon: "💰" },
            { word: "சௌரம்", meaning: "Solar Power / Radiance", icon: "☀️" },
            { word: "தௌவை", meaning: "Elder Goddess / Sister", icon: "👩" },
            { word: "தௌசம்", meaning: "Luminosity / Radiance", icon: "🌟" },
            { word: "பௌர்ணமி", meaning: "Full Moon Night", icon: "🌕" },
            { word: "பௌதிகம்", meaning: "Physical Nature / Material", icon: "⚛️" },
            { word: "பௌத்தம்", meaning: "Peaceful Buddhist Path", icon: "☸️" },
            { word: "பௌத்தர்", meaning: "Peaceful Buddhist Monk", icon: "🧘" },
            { word: "பௌவம்", meaning: "Vast Ocean Deep", icon: "🌊" },
            { word: "மௌனம்", meaning: "Sacred Silence", icon: "🤫" },
            { word: "மௌலி", meaning: "Diadem / Crown", icon: "👑" },
            { word: "மௌவல்", meaning: "Fragrant Jasmine Blossom", icon: "🌼" },
            { word: "மௌரியர்", meaning: "The Maurya Dynasty", icon: "🏛️" },
            { word: "வௌவால்", meaning: "Nocturnal Bat", icon: "🦇" },
            { word: "வௌவு", meaning: "Seize / Grasp Firmly", icon: "🦅" },
            { word: "வௌவல்", meaning: "Catching / Snatching", icon: "🎣" },
            { word: "லௌகிகம்", meaning: "Worldly Wisdom", icon: "🌍" },
            { word: "ரௌத்திரம்", meaning: "Righteous Fiery Valor", icon: "🔥" }
          ]
        },
        {
          id: '7-4',
          name: 'நனண',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ", "ஔ"],
          rows: [
            ["ந்", "ந", "நா", "நி", "நீ", "நெ", "நே", "நை", "நொ", "நோ", "நு", "நூ", "நௌ"],
            ["ன்", "ன", "னா", "னி", "னீ", "னெ", "னே", "னை", "னொ", "னோ", "னு", "னூ", "னௌ"],
            ["ண்", "ண", "ணா", "ணி", "ணீ", "ணெ", "ணே", "ணை", "ணொ", "ணோ", "ணு", "ணூ", "ணௌ"]
          ],
          syllables: ["ஔ", "கௌ", "சௌ", "தௌ", "பௌ", "மௌ", "வௌ", "லௌ", "ரௌ", "நௌ", "கௌட்", "கௌப்", "கௌம்", "கௌன்", "கௌல்", "சௌட்", "சௌப்", "சௌம்", "சௌன்", "சௌல்", "தௌட்", "தௌப்", "தௌம்", "தௌன்", "தௌல்", "பௌட்", "பௌப்", "பௌம்", "பௌன்", "பௌல்", "மௌட்", "மௌப்", "மௌம்", "மௌன்", "மௌல்", "வௌட்", "வௌப்", "வௌம்", "வௌன்", "வௌல்", "லௌட்", "லௌப்", "லௌம்", "லௌன்", "லௌல்", "ரௌட்", "ரௌப்", "ரௌம்", "ரௌன்", "ரௌல்", "ஔட்", "ஔப்", "ஔம்", "ஔன்", "ஔல்", "ஔவை", "ஔரி", "கௌவை", "கௌளி", "கௌல்", "சௌடம்", "தௌவை", "மௌலி", "மௌவல்", "வௌவால்", "வௌவு", "வௌவல்", "கௌரவம்", "மௌனம்", "கௌ கௌ", "சௌ சௌ", "தௌ தௌ", "பௌ பௌ", "மௌ மௌ", "வௌ வௌ", "ஔவை ஔவை", "மௌனம் மௌனம்", "வௌவால் வௌவால்", "கௌரவம் கௌரவம்", "பௌர்ணமி பௌர்ணமி", "சௌக்கியம் சௌக்கியம்"],
          sampleWords: [
            { word: "ஔவை", meaning: "Wise Elder / Mother", icon: "👵" },
            { word: "ஔவையார்", meaning: "Revered Poetess Avvaiyar", icon: "📜" },
            { word: "ஔடதம்", meaning: "Healing Medicine", icon: "💊" },
            { word: "ஔவியம்", meaning: "Envy / Conceit", icon: "😒" },
            { word: "ஔரி", meaning: "Indigo Dye Plant", icon: "🌿" },
            { word: "ஔகாரம்", meaning: "The Sacred Letter Au", icon: "🔤" },
            { word: "ஔதாரியம்", meaning: "Generosity / Magnanimity", icon: "🎁" },
            { word: "ஔன்னத்தியம்", meaning: "Loftiness / Nobility", icon: "🏔️" },
            { word: "கௌரவம்", meaning: "Honor / Dignity", icon: "👑" },
            { word: "கௌமாரம்", meaning: "Youthful Valor / Murugan", icon: "🏹" },
            { word: "கௌதமன்", meaning: "Sage Gautama", icon: "🧘" },
            { word: "கௌதமை", meaning: "Gautami River", icon: "🌊" },
            { word: "கௌளி", meaning: "House Gecko / Lizard", icon: "🦎" },
            { word: "கௌவை", meaning: "Affliction / Village Echo", icon: "🗣️" },
            { word: "கௌல்", meaning: "Solemn Accord / Treaty", icon: "🤝" },
            { word: "கௌரவர்", meaning: "The Kaurava Dynasty", icon: "⚔️" },
            { word: "கௌரி", meaning: "Goddess Gauri", icon: "🌺" },
            { word: "சௌக்கியம்", meaning: "Good Health / Wellbeing", icon: "😊" },
            { word: "சௌந்தரியம்", meaning: "Radiant Natural Beauty", icon: "🌸" },
            { word: "சௌகரியம்", meaning: "Comfort / Convenience", icon: "🛋️" },
            { word: "சௌடம்", meaning: "Brilliant Luster", icon: "✨" },
            { word: "சௌபாக்கியம்", meaning: "Bountiful Fortune", icon: "💰" },
            { word: "சௌரம்", meaning: "Solar Power / Radiance", icon: "☀️" },
            { word: "தௌவை", meaning: "Elder Goddess / Sister", icon: "👩" },
            { word: "தௌசம்", meaning: "Luminosity / Radiance", icon: "🌟" },
            { word: "பௌர்ணமி", meaning: "Full Moon Night", icon: "🌕" },
            { word: "பௌதிகம்", meaning: "Physical Nature / Material", icon: "⚛️" },
            { word: "பௌத்தம்", meaning: "Peaceful Buddhist Path", icon: "☸️" },
            { word: "பௌத்தர்", meaning: "Peaceful Buddhist Monk", icon: "🧘" },
            { word: "பௌவம்", meaning: "Vast Ocean Deep", icon: "🌊" },
            { word: "மௌனம்", meaning: "Sacred Silence", icon: "🤫" },
            { word: "மௌலி", meaning: "Diadem / Crown", icon: "👑" },
            { word: "மௌவல்", meaning: "Fragrant Jasmine Blossom", icon: "🌼" },
            { word: "மௌரியர்", meaning: "The Maurya Dynasty", icon: "🏛️" },
            { word: "வௌவால்", meaning: "Nocturnal Bat", icon: "🦇" },
            { word: "வௌவு", meaning: "Seize / Grasp Firmly", icon: "🦅" },
            { word: "வௌவல்", meaning: "Catching / Snatching", icon: "🎣" },
            { word: "லௌகிகம்", meaning: "Worldly Wisdom", icon: "🌍" },
            { word: "ரௌத்திரம்", meaning: "Righteous Fiery Valor", icon: "🔥" }
          ]
        },
        {
          id: '7-5',
          name: 'லளழ',
          vowels: ["அ", "ஆ", "இ", "ஈ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "உ", "ஊ", "ஔ"],
          rows: [
            ["ல்", "ல", "லா", "லி", "லீ", "லெ", "லே", "லை", "லொ", "லோ", "லு", "லூ", "லௌ"],
            ["ள்", "ள", "ளா", "ளி", "ளீ", "ளெ", "ளே", "ளை", "ளொ", "ளோ", "ளு", "ளூ", "ளௌ"],
            ["ழ்", "ழ", "ழா", "ழி", "ழீ", "ழெ", "ழே", "ழை", "ழொ", "ழோ", "ழு", "ழூ", "ழௌ"]
          ],
          syllables: ["ஔ", "கௌ", "சௌ", "தௌ", "பௌ", "மௌ", "வௌ", "லௌ", "ரௌ", "நௌ", "கௌட்", "கௌப்", "கௌம்", "கௌன்", "கௌல்", "சௌட்", "சௌப்", "சௌம்", "சௌன்", "சௌல்", "தௌட்", "தௌப்", "தௌம்", "தௌன்", "தௌல்", "பௌட்", "பௌப்", "பௌம்", "பௌன்", "பௌல்", "மௌட்", "மௌப்", "மௌம்", "மௌன்", "மௌல்", "வௌட்", "வௌப்", "வௌம்", "வௌன்", "வௌல்", "லௌட்", "லௌப்", "லௌம்", "லௌன்", "லௌல்", "ரௌட்", "ரௌப்", "ரௌம்", "ரௌன்", "ரௌல்", "ஔட்", "ஔப்", "ஔம்", "ஔன்", "ஔல்", "ஔவை", "ஔரி", "கௌவை", "கௌளி", "கௌல்", "சௌடம்", "தௌவை", "மௌலி", "மௌவல்", "வௌவால்", "வௌவு", "வௌவல்", "கௌரவம்", "மௌனம்", "கௌ கௌ", "சௌ சௌ", "தௌ தௌ", "பௌ பௌ", "மௌ மௌ", "வௌ வௌ", "ஔவை ஔவை", "மௌனம் மௌனம்", "வௌவால் வௌவால்", "கௌரவம் கௌரவம்", "பௌர்ணமி பௌர்ணமி", "சௌக்கியம் சௌக்கியம்"],
          sampleWords: [
            { word: "ஔவை", meaning: "Wise Elder / Mother", icon: "👵" },
            { word: "ஔவையார்", meaning: "Revered Poetess Avvaiyar", icon: "📜" },
            { word: "ஔடதம்", meaning: "Healing Medicine", icon: "💊" },
            { word: "ஔவியம்", meaning: "Envy / Conceit", icon: "😒" },
            { word: "ஔரி", meaning: "Indigo Dye Plant", icon: "🌿" },
            { word: "ஔகாரம்", meaning: "The Sacred Letter Au", icon: "🔤" },
            { word: "ஔதாரியம்", meaning: "Generosity / Magnanimity", icon: "🎁" },
            { word: "ஔன்னத்தியம்", meaning: "Loftiness / Nobility", icon: "🏔️" },
            { word: "கௌரவம்", meaning: "Honor / Dignity", icon: "👑" },
            { word: "கௌமாரம்", meaning: "Youthful Valor / Murugan", icon: "🏹" },
            { word: "கௌதமன்", meaning: "Sage Gautama", icon: "🧘" },
            { word: "கௌதமை", meaning: "Gautami River", icon: "🌊" },
            { word: "கௌளி", meaning: "House Gecko / Lizard", icon: "🦎" },
            { word: "கௌவை", meaning: "Affliction / Village Echo", icon: "🗣️" },
            { word: "கௌல்", meaning: "Solemn Accord / Treaty", icon: "🤝" },
            { word: "கௌரவர்", meaning: "The Kaurava Dynasty", icon: "⚔️" },
            { word: "கௌரி", meaning: "Goddess Gauri", icon: "🌺" },
            { word: "சௌக்கியம்", meaning: "Good Health / Wellbeing", icon: "😊" },
            { word: "சௌந்தரியம்", meaning: "Radiant Natural Beauty", icon: "🌸" },
            { word: "சௌகரியம்", meaning: "Comfort / Convenience", icon: "🛋️" },
            { word: "சௌடம்", meaning: "Brilliant Luster", icon: "✨" },
            { word: "சௌபாக்கியம்", meaning: "Bountiful Fortune", icon: "💰" },
            { word: "சௌரம்", meaning: "Solar Power / Radiance", icon: "☀️" },
            { word: "தௌவை", meaning: "Elder Goddess / Sister", icon: "👩" },
            { word: "தௌசம்", meaning: "Luminosity / Radiance", icon: "🌟" },
            { word: "பௌர்ணமி", meaning: "Full Moon Night", icon: "🌕" },
            { word: "பௌதிகம்", meaning: "Physical Nature / Material", icon: "⚛️" },
            { word: "பௌத்தம்", meaning: "Peaceful Buddhist Path", icon: "☸️" },
            { word: "பௌத்தர்", meaning: "Peaceful Buddhist Monk", icon: "🧘" },
            { word: "பௌவம்", meaning: "Vast Ocean Deep", icon: "🌊" },
            { word: "மௌனம்", meaning: "Sacred Silence", icon: "🤫" },
            { word: "மௌலி", meaning: "Diadem / Crown", icon: "👑" },
            { word: "மௌவல்", meaning: "Fragrant Jasmine Blossom", icon: "🌼" },
            { word: "மௌரியர்", meaning: "The Maurya Dynasty", icon: "🏛️" },
            { word: "வௌவால்", meaning: "Nocturnal Bat", icon: "🦇" },
            { word: "வௌவு", meaning: "Seize / Grasp Firmly", icon: "🦅" },
            { word: "வௌவல்", meaning: "Catching / Snatching", icon: "🎣" },
            { word: "லௌகிகம்", meaning: "Worldly Wisdom", icon: "🌍" },
            { word: "ரௌத்திரம்", meaning: "Righteous Fiery Valor", icon: "🔥" }
          ]
        }
      ]
    }
  };

  // Word Meaning & Phonetics Map
  const DICTIONARY = {
    "ஔவை": { trans: "auvai", meaning: "Wise Elder / Mother", icon: "👵" },
    "ஔவையார்": { trans: "auvaiyār", meaning: "Revered Poetess Avvaiyar", icon: "📜" },
    "ஔடதம்": { trans: "auḍadham", meaning: "Healing Medicine", icon: "💊" },
    "ஔவியம்": { trans: "auviyam", meaning: "Envy / Conceit", icon: "😒" },
    "ஔரி": { trans: "auri", meaning: "Indigo Dye Plant", icon: "🌿" },
    "ஔகாரம்": { trans: "aukāram", meaning: "The Sacred Letter Au", icon: "🔤" },
    "ஔதாரியம்": { trans: "audhāriyam", meaning: "Generosity / Magnanimity", icon: "🎁" },
    "ஔன்னத்தியம்": { trans: "aunnathiyam", meaning: "Loftiness / Nobility", icon: "🏔️" },
    "கௌரவம்": { trans: "gauravam", meaning: "Honor / Dignity", icon: "👑" },
    "கௌமாரம்": { trans: "kaumāram", meaning: "Youthful Valor / Murugan", icon: "🏹" },
    "கௌதமன்": { trans: "gauthaman", meaning: "Sage Gautama", icon: "🧘" },
    "கௌதமை": { trans: "gauthamai", meaning: "Gautami River", icon: "🌊" },
    "கௌளி": { trans: "gauḷi", meaning: "House Gecko / Lizard", icon: "🦎" },
    "கௌவை": { trans: "kauvai", meaning: "Affliction / Village Echo", icon: "🗣️" },
    "கௌல்": { trans: "kaul", meaning: "Solemn Accord / Treaty", icon: "🤝" },
    "கௌரவர்": { trans: "kauravar", meaning: "The Kaurava Dynasty", icon: "⚔️" },
    "கௌரி": { trans: "gauri", meaning: "Goddess Gauri", icon: "🌺" },
    "சௌக்கியம்": { trans: "saukkiyam", meaning: "Good Health / Wellbeing", icon: "😊" },
    "சௌந்தரியம்": { trans: "saundhariyam", meaning: "Radiant Natural Beauty", icon: "🌸" },
    "சௌகரியம்": { trans: "saugariyam", meaning: "Comfort / Convenience", icon: "🛋️" },
    "சௌடம்": { trans: "sauḍam", meaning: "Brilliant Luster", icon: "✨" },
    "சௌபாக்கியம்": { trans: "saubāggiyam", meaning: "Bountiful Fortune", icon: "💰" },
    "சௌரம்": { trans: "sauram", meaning: "Solar Power / Radiance", icon: "☀️" },
    "தௌவை": { trans: "thauvai", meaning: "Elder Goddess / Sister", icon: "👩" },
    "தௌசம்": { trans: "dhausam", meaning: "Luminosity / Radiance", icon: "🌟" },
    "பௌர்ணமி": { trans: "paurnami", meaning: "Full Moon Night", icon: "🌕" },
    "பௌதிகம்": { trans: "pauthigam", meaning: "Physical Nature / Material", icon: "⚛️" },
    "பௌத்தம்": { trans: "pauttham", meaning: "Peaceful Buddhist Path", icon: "☸️" },
    "பௌத்தர்": { trans: "pautthar", meaning: "Peaceful Buddhist Monk", icon: "🧘" },
    "பௌவம்": { trans: "pauvam", meaning: "Vast Ocean Deep", icon: "🌊" },
    "மௌனம்": { trans: "maunam", meaning: "Sacred Silence", icon: "🤫" },
    "மௌலி": { trans: "mauli", meaning: "Diadem / Crown", icon: "👑" },
    "மௌவல்": { trans: "mauval", meaning: "Fragrant Jasmine Blossom", icon: "🌼" },
    "மௌரியர்": { trans: "mauriyar", meaning: "The Maurya Dynasty", icon: "🏛️" },
    "வௌவால்": { trans: "vauvāl", meaning: "Nocturnal Bat", icon: "🦇" },
    "வௌவு": { trans: "vauvu", meaning: "Seize / Grasp Firmly", icon: "🦅" },
    "வௌவல்": { trans: "vauval", meaning: "Catching / Snatching", icon: "🎣" },
    "லௌகிகம்": { trans: "laugigam", meaning: "Worldly Wisdom", icon: "🌍" },
    "ரௌத்திரம்": { trans: "rautthiram", meaning: "Righteous Fiery Valor", icon: "🔥" },
    "ஒலி": { trans: "oli", meaning: "Sound / Voice", icon: "🔊" },
    "ஒளி": { trans: "oḷi", meaning: "Bright Light / Beam", icon: "💡" },
    "ஒப்பனை": { trans: "oppanai", meaning: "Makeover / Ornament", icon: "💄" },
    "ஒட்டகம்": { trans: "oṭṭagam", meaning: "Desert Camel", icon: "🐪" },
    "ஒற்றை": { trans: "oṟṟai", meaning: "Single / Odd Number", icon: "1️⃣" },
    "ஒப்பந்தம்": { trans: "oppandham", meaning: "Agreement / Treaty", icon: "📜" },
    "ஒத்திகை": { trans: "otthigai", meaning: "Rehearsal / Practice", icon: "🎭" },
    "ஓட்டம்": { trans: "ōṭṭam", meaning: "Fast Run / Sprint", icon: "🏃" },
    "ஓலை": { trans: "ōlai", meaning: "Palm Leaf Scroll", icon: "📜" },
    "ஓவியம்": { trans: "ōviyam", meaning: "Artistic Painting", icon: "🎨" },
    "ஓசை": { trans: "ōsai", meaning: "Melodious Sound", icon: "🎶" },
    "ஓரமாய்": { trans: "ōramāy", meaning: "By the Edge", icon: "🛣️" },
    "ஓடை": { trans: "ōḍai", meaning: "Flowing Stream", icon: "🏞️" },
    "பொன்": { trans: "pon", meaning: "Pure Gold", icon: "🪙" },
    "பொறி": { trans: "poṟi", meaning: "Spark of Fire", icon: "✨" },
    "பொங்கல்": { trans: "pongal", meaning: "Pongal Festival / Rice", icon: "🍲" },
    "பொம்மை": { trans: "pommai", meaning: "Play Doll / Toy", icon: "🪆" },
    "பொறை": { trans: "poṟai", meaning: "Patience / Forbearance", icon: "🧘" },
    "போர்": { trans: "pōr", meaning: "Battle / War", icon: "⚔️" },
    "போட்டி": { trans: "pōṭṭi", meaning: "Contest / Game", icon: "🏆" },
    "போதனை": { trans: "pōdhanai", meaning: "Teaching / Sermon", icon: "📖" },
    "போதை": { trans: "pōdhai", meaning: "Intoxication / Bliss", icon: "✨" },
    "கொடி": { trans: "koḍi", meaning: "National Flag / Vine", icon: "🚩" },
    "கொடை": { trans: "koḍai", meaning: "Bountiful Donation", icon: "🎁" },
    "கொன்றை": { trans: "kondrai", meaning: "Golden Shower Tree", icon: "🌼" },
    "கொப்பரை": { trans: "kopparai", meaning: "Dried Coconut Copra", icon: "🥥" },
    "கொள்கை": { trans: "koḷgai", meaning: "Guiding Principle", icon: "📜" },
    "கொண்டல்": { trans: "koṇḍal", meaning: "Eastern Raincloud", icon: "🌧️" },
    "கோட்டை": { trans: "kōṭṭai", meaning: "Historic Fort", icon: "🏰" },
    "கோலம்": { trans: "kōlam", meaning: "Floor Rangoli Art", icon: "🌸" },
    "கோடை": { trans: "kōḍai", meaning: "Hot Summer Time", icon: "☀️" },
    "கோரை": { trans: "kōrai", meaning: "Reed Grass", icon: "🌾" },
    "கோழி": { trans: "kōzhi", meaning: "Domestic Hen", icon: "🐔" },
    "கோவில்": { trans: "kōvil", meaning: "Holy Temple", icon: "🛕" },
    "கோணல்": { trans: "kōṇal", meaning: "Crooked / Bent", icon: "〰️" },
    "கோரல்": { trans: "kōral", meaning: "Plea / Demand", icon: "🗣️" },
    "சொல்": { trans: "sol", meaning: "Spoken Word", icon: "💬" },
    "சொத்தை": { trans: "sotthai", meaning: "Asset / Wealth", icon: "🏛️" },
    "சொர்க்கம்": { trans: "sorkkam", meaning: "Heaven / Paradise", icon: "🌈" },
    "சோலை": { trans: "sōlai", meaning: "Lush Grove / Garden", icon: "🌴" },
    "சோளம்": { trans: "sōḷam", meaning: "Sweet Corn Maize", icon: "🌽" },
    "சோம்பல்": { trans: "sōmbal", meaning: "Lethargy / Rest", icon: "🛋️" },
    "சோதனை": { trans: "sōdhanai", meaning: "Trial / Experiment", icon: "🧪" },
    "சோகமாய்": { trans: "sōgamāy", meaning: "With Melancholy", icon: "🥺" },
    "தொட்டி": { trans: "thoṭṭi", meaning: "Water Basin / Tank", icon: "🛁" },
    "தொட்டில்": { trans: "thoṭṭil", meaning: "Baby Cradle", icon: "👶" },
    "தொப்பி": { trans: "thoppi", meaning: "Head Cap", icon: "🧢" },
    "தொடை": { trans: "thoḍai", meaning: "Thigh / Verse Garland", icon: "🦵" },
    "தொல்லை": { trans: "thollai", meaning: "Trouble / Nuisance", icon: "😫" },
    "தோட்டம்": { trans: "thōṭṭam", meaning: "Green Garden Farm", icon: "🏡" },
    "தோல்": { trans: "thōl", meaning: "Skin / Leather", icon: "🧥" },
    "தோழன்": { trans: "thōzhan", meaning: "Dear Comrade", icon: "🤝" },
    "தோழி": { trans: "thōzhi", meaning: "Dear Female Friend", icon: "👭" },
    "தோகை": { trans: "thōgai", meaning: "Peacock Plumage", icon: "🦚" },
    "தோசை": { trans: "thōsai", meaning: "Crispy Dosa Crepe", icon: "🥞" },
    "தோரணம்": { trans: "thōraṇam", meaning: "Festive Festoon Garland", icon: "🎊" },
    "நொடி": { trans: "noḍi", meaning: "Split Second / Instant", icon: "⏱️" },
    "நோய்": { trans: "nōy", meaning: "Ailment / Illness", icon: "🩹" },
    "நோக்கம்": { trans: "nōkkam", meaning: "Noble Purpose", icon: "🎯" },
    "நோட்டம்": { trans: "nōṭṭam", meaning: "Perception / View", icon: "👀" },
    "மொட்டை": { trans: "moṭṭai", meaning: "Shaved Head / Balcony", icon: "👨‍🦲" },
    "மொச்சை": { trans: "mochchai", meaning: "Broad Field Beans", icon: "🫘" },
    "மோதிரம்": { trans: "mōdhiram", meaning: "Finger Ring", icon: "💍" },
    "மோகம்": { trans: "mōgam", meaning: "Deep Passion / Craving", icon: "💖" },
    "மோப்பம்": { trans: "mōppam", meaning: "Scent Tracking", icon: "👃" },
    "மோதல்": { trans: "mōdhal", meaning: "Clash / Impact", icon: "💥" },
    "ரோமம்": { trans: "rōmam", meaning: "Body Hair / Fur", icon: "🦁" },
    "லோகம்": { trans: "lōgam", meaning: "Realm / World", icon: "🌍" },
    "யோசனை": { trans: "yōsanai", meaning: "Idea / Consideration", icon: "💡" },
    "யோகம்": { trans: "yōgam", meaning: "Good Fortune / Yoga", icon: "🧘" },
    "குடை": { trans: "kuḍai", meaning: "Rain Umbrella", icon: "☂️" },
    "குதிரை": { trans: "kudhirai", meaning: "Galloping Horse", icon: "🐎" },
    "குரங்கு": { trans: "kurangu", meaning: "Playful Monkey", icon: "🐒" },
    "குருவி": { trans: "kuruvi", meaning: "Sparrow Bird", icon: "🐦" },
    "குளம்": { trans: "kuḷam", meaning: "Lotus Pond", icon: "🏞️" },
    "கூடை": { trans: "kūḍai", meaning: "Woven Basket", icon: "🧺" },
    "கூண்டு": { trans: "kūṇḍu", meaning: "Bird Cage / Aviary", icon: "🪺" },
    "கூட்டம்": { trans: "kūṭṭam", meaning: "Crowd / Gathering", icon: "👥" },
    "கூரை": { trans: "kūrai", meaning: "Thatch Roof", icon: "🏠" },
    "சுண்டல்": { trans: "suṇḍal", meaning: "Steamed Spiced Chickpeas", icon: "🍲" },
    "சுவர்": { trans: "suvar", meaning: "Brick Wall", icon: "🧱" },
    "சூடம்": { trans: "sūḍam", meaning: "Camphor Light", icon: "🪔" },
    "சூறை": { trans: "sūṟai", meaning: "Whirlwind / Gale", icon: "🌪️" },
    "துணை": { trans: "thuṇai", meaning: "Companion / Support", icon: "🤝" },
    "துணி": { trans: "thuṇi", meaning: "Cloth / Fabric", icon: "🧵" },
    "துளசி": { trans: "thuḷasi", meaning: "Holy Basil Herb", icon: "🌿" },
    "துள்ளி": { trans: "thuḷḷi", meaning: "Skipping with Joy", icon: "🏃" },
    "தூண்டில்": { trans: "thūṇḍil", meaning: "Fishing Hook / Line", icon: "🎣" },
    "தூண்": { trans: "thūṇ", meaning: "Pillar / Column", icon: "🏛️" },
    "தூக்கம்": { trans: "thūkkam", meaning: "Peaceful Slumber", icon: "😴" },
    "புறா": { trans: "puṟā", meaning: "White Dove / Pigeon", icon: "🕊️" },
    "புல்": { trans: "pul", meaning: "Green Grass Meadow", icon: "🌱" },
    "புகை": { trans: "pugai", meaning: "Incense Smoke", icon: "💨" },
    "புதுமை": { trans: "pudhumai", meaning: "Novelty / Innovation", icon: "💡" },
    "பூனை": { trans: "pūnai", meaning: "Friendly Cat", icon: "🐱" },
    "பூண்டு": { trans: "pūṇḍu", meaning: "Garlic Bulb", icon: "🧄" },
    "பூங்கா": { trans: "pūngā", meaning: "Flower Garden Park", icon: "🌳" },
    "பூமி": { trans: "pūmi", meaning: "Planet Earth", icon: "🌍" },
    "முடி": { trans: "muḍi", meaning: "Royal Crown / Hair", icon: "👑" },
    "முத்து": { trans: "mutthu", meaning: "Ocean Pearl", icon: "🦪" },
    "முல்லை": { trans: "mullai", meaning: "Wild Jasmine Flower", icon: "🌼" },
    "முட்டை": { trans: "muṭṭai", meaning: "Egg", icon: "🥚" },
    "மூங்கில்": { trans: "mūngil", meaning: "Bamboo Cane", icon: "🎋" },
    "மூளை": { trans: "mūḷai", meaning: "Sharp Intellect / Brain", icon: "🧠" },
    "மூடி": { trans: "mūḍi", meaning: "Lid / Cover", icon: "🏺" },
    "ரூபாய்": { trans: "rūbāy", meaning: "Indian Rupee Currency", icon: "🪙" },
    "உரல்": { trans: "ural", meaning: "Stone Mortar", icon: "🥣" },
    "உலக்கை": { trans: "ulakkai", meaning: "Pounding Pestle", icon: "🪵" },
    "உதவி": { trans: "udhavi", meaning: "Helping Hand", icon: "🤝" },
    "உரிமை": { trans: "urimai", meaning: "Sacred Right", icon: "📜" },
    "உண்மை": { trans: "uṇmai", meaning: "Pure Truth", icon: "⭐" },
    "உயிர்": { trans: "uyir", meaning: "Life Breath", icon: "💓" },
    "ஊசி": { trans: "ūsi", meaning: "Sewing Needle", icon: "🪡" },
    "ஊர்": { trans: "ūr", meaning: "Town / Village", icon: "🏡" },
    "ஊற்றல்": { trans: "ūṟṟal", meaning: "Pouring Water Stream", icon: "🚰" },
    "காடு": { trans: "kāḍu", meaning: "Jungle / Forest", icon: "🌲" },
    "முயல்": { trans: "muyal", meaning: "Gentle Rabbit", icon: "🐇" },
    "குழல்": { trans: "kuzhal", meaning: "Bamboo Flute", icon: "🪈" },
    'ஐவர்': { trans: 'aivar', meaning: 'The Five Heroes', icon: '👥' },
    'ஐயம்': { trans: 'aiyam', meaning: 'Doubt / Wonder', icon: '❓' },
    'மை': { trans: 'mai', meaning: 'Black Kohl / Ink', icon: '✒️' },
    'தை': { trans: 'thai', meaning: 'Tamil Harvest Month / Sew', icon: '🌾' },
    'யானை': { trans: 'yānai', meaning: 'Elephant', icon: '🐘' },
    'மாலை': { trans: 'mālai', meaning: 'Flower Garland / Twilight', icon: '💐' },
    'காலை': { trans: 'kālai', meaning: 'Early Morning', icon: '🌅' },
    'வலை': { trans: 'valai', meaning: 'Fishing Net / Web', icon: '🕸️' },
    'தலை': { trans: 'thalai', meaning: 'Head / Crown', icon: '🗣️' },
    'மலை': { trans: 'malai', meaning: 'High Mountain / Hill', icon: '⛰️' },
    'அலை': { trans: 'alai', meaning: 'Ocean Sea Wave', icon: '🌊' },
    'இலை': { trans: 'ilai', meaning: 'Green Plant Leaf', icon: '🍃' },
    'சிலை': { trans: 'silai', meaning: 'Carved Statue', icon: '🗿' },
    'விலை': { trans: 'vilai', meaning: 'Price / Value', icon: '🏷️' },
    'நிலை': { trans: 'nilai', meaning: 'State / Steadfastness', icon: '🏛️' },
    'கலை': { trans: 'kalai', meaning: 'Fine Art / Skill', icon: '🎨' },
    'பாவை': { trans: 'pāvai', meaning: 'Traditional Puppet / Maiden', icon: '🎎' },
    'மழை': { trans: 'mazhai', meaning: 'Falling Rain', icon: '🌧️' },
    'நடை': { trans: 'naḍai', meaning: 'Walking Gait / Pace', icon: '🚶' },
    'விடை': { trans: 'viḍai', meaning: 'Correct Answer', icon: '✅' },
    'தடை': { trans: 'thaḍai', meaning: 'Obstacle / Shield', icon: '🛑' },
    'படை': { trans: 'paḍai', meaning: 'Troops / Legion', icon: '⚔️' },
    'அடை': { trans: 'aḍai', meaning: 'Crispy Lentil Pancake', icon: '🥞' },
    'ஆடை': { trans: 'āḍai', meaning: 'Woven Garment', icon: '👗' },
    'வாடை': { trans: 'vāḍai', meaning: 'Pleasant Aroma / Breeze', icon: '🌬️' },
    'மேடை': { trans: 'mēḍai', meaning: 'Public Stage / Platform', icon: '🎭' },
    'வடை': { trans: 'vaḍai', meaning: 'Golden Crispy Vada', icon: '🍘' },
    'நகை': { trans: 'nagai', meaning: 'Joyous Smile / Jewelry', icon: '💎' },
    'பகை': { trans: 'pagai', meaning: 'Hostility / Rivalry', icon: '⚡' },
    'வகை': { trans: 'vagai', meaning: 'Category / Sort', icon: '📂' },
    'கைப்பை': { trans: 'kaippai', meaning: 'Handbag / Tote', icon: '👜' },
    'கைத்தறி': { trans: 'kaitthaṟi', meaning: 'Traditional Handloom', icon: '🧵' },
    'கைவண்டி': { trans: 'kaivaṇḍi', meaning: 'Handcart', icon: '🛒' },
    'பச்சை': { trans: 'pachchai', meaning: 'Vibrant Green Leaf', icon: '🟢' },
    'ஆசை': { trans: 'āsai', meaning: 'Fond Wish / Longing', icon: '🌟' },
    'திசை': { trans: 'dhisai', meaning: 'Cardinal Direction', icon: '🧭' },
    'இசை': { trans: 'isai', meaning: 'Classical Music', icon: '🎵' },
    'அசை': { trans: 'asai', meaning: 'Rhythmic Syllable', icon: '🎼' },
    'விசை': { trans: 'visai', meaning: 'Physical Force / Switch', icon: '🔘' },
    'நத்தை': { trans: 'natthai', meaning: 'Spiral Shell Snail', icon: '🐌' },
    'விதை': { trans: 'vidhai', meaning: 'Sprouting Seed', icon: '🌱' },
    'கதை': { trans: 'kadhai', meaning: 'Folktale / Story', icon: '📖' },
    'சிதை': { trans: 'sidhai', meaning: 'Ancient Cairn / Relic', icon: '🏺' },
    'மெத்தை': { trans: 'metthai', meaning: 'Plush Cushion / Mattress', icon: '🛏️' },
    'சேனை': { trans: 'sēnai', meaning: 'Army Battalion', icon: '🛡️' },
    'சேலை': { trans: 'sēlai', meaning: 'Silk Sari', icon: '🥻' },
    'வேலை': { trans: 'vēlai', meaning: 'Productive Work', icon: '💼' },
    'வேளை': { trans: 'vēḷai', meaning: 'Auspicious Time', icon: '⌛' },
    'மேற்கை': { trans: 'mēṟkai', meaning: 'Forearm', icon: '💪' },
    'நெல்லை': { trans: 'nellai', meaning: 'Paddy Town', icon: '🌾' },
    'எல்லை': { trans: 'ellai', meaning: 'Boundary Marker', icon: '📍' },
    'மல்லிகை': { trans: 'malligai', meaning: 'Fragrant Jasmine', icon: '🌼' },
    'நம்பிக்கை': { trans: 'nambikkai', meaning: 'Deep Faith / Trust', icon: '🤝' },
    'சேர்க்கை': { trans: 'sērkkai', meaning: 'Harmonious Blend', icon: '✨' },
    'வேர்க்கடலை': { trans: 'vērkkadalai', meaning: 'Roasted Peanut', icon: '🥜' },
    'தவளை': { trans: 'thavaḷai', meaning: 'Green Pond Frog', icon: '🐸' },
    'பிள்ளை': { trans: 'piḷḷai', meaning: 'Beloved Child', icon: '🧒' },
    'வெள்ளை': { trans: 'veḷḷai', meaning: 'Pure White', icon: '⚪' },
    'கிளை': { trans: 'kiḷai', meaning: 'Bough / Tree Branch', icon: '🌿' },
    'வளை': { trans: 'vaḷai', meaning: 'Curved Arch / Burrow', icon: '🌈' },
    'வளையல்': { trans: 'vaḷaiyal', meaning: 'Glass Bangle', icon: '💫' },
    'இளை': { trans: 'iḷai', meaning: 'Take Respite', icon: '🧘' },
    'கீரை': { trans: 'kīrai', meaning: 'Garden Greens / Spinach', icon: '🥬' },
    'நாரை': { trans: 'nārai', meaning: 'White Crane Bird', icon: '🪿' },
    'தாமரை': { trans: 'thāmarai', meaning: 'Pink Sacred Lotus', icon: '🪷' },
    'திரை': { trans: 'dhirai', meaning: 'Stage Curtain', icon: '🎬' },
    'சிறை': { trans: 'siṟai', meaning: 'Fortress Bastion', icon: '🏰' },
    'கறை': { trans: 'kaṟai', meaning: 'Ink Tint / Mark', icon: '💧' },
    'பறை': { trans: 'paṟai', meaning: 'Resonant Beat Drum', icon: '🥁' },
    'மறை': { trans: 'maṟai', meaning: 'Sacred Wisdom / Veda', icon: '📜' },
    'நிறை': { trans: 'niṟai', meaning: 'Abundance / Plenty', icon: '🏺' },
    'இறை': { trans: 'iṟai', meaning: 'Supreme Lord / Sovereign', icon: '👑' },
    'விதைக்க': { trans: 'vidhaikka', meaning: 'To Scatter Seeds', icon: '🌾' },
    'அன்னை': { trans: 'annai', meaning: 'Nurturing Mother', icon: '🤱' },
    'பின்னை': { trans: 'pinnai', meaning: 'Subsequent Hour', icon: '⏳' },
    'சென்னை': { trans: 'chennai', meaning: 'Chennai Metropolis', icon: '🏙️' },
    'மென்மை': { trans: 'menmai', meaning: 'Soft Tenderness', icon: '🧸' },
    'தன்மை': { trans: 'thanmai', meaning: 'True Nature / Essence', icon: '💎' },
    'பன்மை': { trans: 'panmai', meaning: 'Plural Harmony', icon: '👥' },
    'மேன்மை': { trans: 'mēnmai', meaning: 'Supreme Majesty', icon: '🌟' },
    'நேர்மை': { trans: 'nērmai', meaning: 'Truthful Integrity', icon: '⚖️' },
    'எளிமை': { trans: 'eḷimai', meaning: 'Humble Grace', icon: '🕊️' },
    'இனிமை': { trans: 'inimai', meaning: 'Honey Sweetness', icon: '🍯' },
    'தனிமை': { trans: 'thanimai', meaning: 'Quiet Solitude', icon: '🌙' },
    'பச்சைக்கிளி': { trans: 'pachchaikkiḷi', meaning: 'Vivid Green Parrot', icon: '🦜' },
    'வெண்டைக்காய்': { trans: 'veṇḍaikkāy', meaning: 'Okra Pod', icon: '🥒' },
    'தலைமை': { trans: 'thalaimai', meaning: 'Supreme Leadership', icon: '🎖️' },
    'வெள்ளையன்': { trans: 'veḷḷaiyan', meaning: 'Pure Hearted One', icon: '🤍' },
    'கற்றாழை': { trans: 'kaṟṟāzhai', meaning: 'Medicinal Aloe Plant', icon: '🪴' },
    'வாழைக்காய்': { trans: 'vāzhaikkāy', meaning: 'Green Plantain', icon: '🍌' },
    'வாழைமரம்': { trans: 'vāzhaimaram', meaning: 'Plantain Tree', icon: '🌴' },
    'மாலைவேளை': { trans: 'mālaivēḷai', meaning: 'Gentle Dusk', icon: '🌆' },
    'ஏர்': { trans: 'ēr', meaning: 'Plow', icon: '🌾' },
    'ஏரி': { trans: 'ēri', meaning: 'Freshwater Lake', icon: '🏞️' },
    'ஏலக்காய்': { trans: 'ēlakkāy', meaning: 'Cardamom', icon: '🌿' },
    'ஏனம்': { trans: 'ēnam', meaning: 'Vessel / Utensil', icon: '🏺' },
    'ஏற்றம்': { trans: 'ēṟṟam', meaning: 'Elevation / Lift', icon: '📈' },
    'ஏவல்': { trans: 'ēval', meaning: 'Command / Bidding', icon: '📜' },
    'எலி': { trans: 'eli', meaning: 'Mouse / Rat', icon: '🐁' },
    'எரி': { trans: 'eri', meaning: 'Burn / Flame', icon: '🔥' },
    'எண்': { trans: 'eṇ', meaning: 'Number / Count', icon: '🔢' },
    'எண்ணம்': { trans: 'eṇṇam', meaning: 'Thought / Intention', icon: '💭' },
    'எதிரி': { trans: 'edhiri', meaning: 'Opponent / Rival', icon: '🤺' },
    'எதிர்': { trans: 'edhir', meaning: 'Opposite / Front', icon: '↔️' },
    'எச்சில்': { trans: 'echchil', meaning: 'Saliva / Food crumb', icon: '💧' },
    'எட்டி': { trans: 'eṭṭi', meaning: 'Reach / Peek', icon: '👀' },
    'எளிதாய்': { trans: 'eḷidhāy', meaning: 'Easily / Effortlessly', icon: '✨' },
    'எறி': { trans: 'eṟi', meaning: 'Throw / Hurl', icon: '⚾' },
    'பெண்': { trans: 'peṇ', meaning: 'Woman / Girl', icon: '👩' },
    'பெட்டி': { trans: 'peṭṭi', meaning: 'Box / Trunk', icon: '📦' },
    'பெரிய': { trans: 'periya', meaning: 'Big / Grand', icon: '🐘' },
    'பெயர்': { trans: 'peyar', meaning: 'Name / Identity', icon: '🏷️' },
    'பெரியார்': { trans: 'periyār', meaning: 'Venerable Elder', icon: '👴' },
    'பேனா': { trans: 'pēnā', meaning: 'Writing Pen', icon: '🖊️' },
    'பேரன்': { trans: 'pēran', meaning: 'Grandson', icon: '👦' },
    'பேர்த்தி': { trans: 'pērththi', meaning: 'Granddaughter', icon: '👧' },
    'பேரிடர்': { trans: 'pēriḍar', meaning: 'Disaster / Calamity', icon: '⚡' },
    'பேரதிர்ச்சி': { trans: 'pēradhirchhi', meaning: 'Great Shock / Surprise', icon: '😲' },
    'செடி': { trans: 'seḍi', meaning: 'Plant / Shrub', icon: '🌱' },
    'செங்கல்': { trans: 'sengal', meaning: 'Red Brick', icon: '🧱' },
    'செம்மண்': { trans: 'semmaṇ', meaning: 'Red Clay Soil', icon: '🪴' },
    'செவ்வாய்': { trans: 'sevvāy', meaning: 'Tuesday / Planet Mars', icon: '🪐' },
    'செம்மரி': { trans: 'semmari', meaning: 'Red Fleece Sheep', icon: '🐑' },
    'செம்பட்டி': { trans: 'sembaṭṭi', meaning: 'Red Ribbon / Cloth', icon: '🎗️' },
    'செல்லம்': { trans: 'sellam', meaning: 'Darling / Pet', icon: '🥰' },
    'சேவல்': { trans: 'sēval', meaning: 'Rooster / Cock', icon: '🐓' },
    'சேதி': { trans: 'sēdhi', meaning: 'News / Message', icon: '📰' },
    'சேரி': { trans: 'sēri', meaning: 'Hamlet / Settlement', icon: '🏡' },
    'சேவகன்': { trans: 'sēvagan', meaning: 'Servant / Warrior', icon: '🛡️' },
    'சேமிக்க': { trans: 'sēmikka', meaning: 'To Save / Treasure', icon: '🪙' },
    'சேவடி': { trans: 'sēvaḍi', meaning: 'Sacred Feet', icon: '👣' },
    'கெட்டி': { trans: 'keṭṭi', meaning: 'Firm / Solid / Clever', icon: '💪' },
    'கெட்ட': { trans: 'keṭṭa', meaning: 'Bad / Unhealthy', icon: '🚫' },
    'கேசரி': { trans: 'kēsari', meaning: 'Sweet Kesari Halwa', icon: '🍮' },
    'கேள்வி': { trans: 'kēḷvi', meaning: 'Question / Query', icon: '❓' },
    'கேடயம்': { trans: 'kēḍayam', meaning: 'Defensive Shield', icon: '🛡️' },
    'தெப்பம்': { trans: 'theppam', meaning: 'Water Raft / Float', icon: '🛶' },
    'தென்றல்': { trans: 'thendral', meaning: 'Gentle Breeze', icon: '🍃' },
    'தெரி': { trans: 'theri', meaning: 'To Shine / Appear', icon: '💡' },
    'தெளி': { trans: 'theḷi', meaning: 'Crystal Clear / Pure', icon: '💧' },
    'தெப்பல்': { trans: 'theppal', meaning: 'Floating Raft', icon: '⛵' },
    'தெறி': { trans: 'theṟi', meaning: 'Splash / Scatter', icon: '💦' },
    'தேனீ': { trans: 'thēnī', meaning: 'Honeybee', icon: '🐝' },
    'தேர்': { trans: 'thēr', meaning: 'Temple Chariot', icon: '🛞' },
    'தேசம்': { trans: 'dhēsam', meaning: 'Nation / Homeland', icon: '🗺️' },
    'தேவன்': { trans: 'dhēvan', meaning: 'Divine Lord', icon: '👑' },
    'தேவி': { trans: 'dhēvi', meaning: 'Goddess / Empress', icon: '👸' },
    'தேதி': { trans: 'thēdhi', meaning: 'Calendar Date', icon: '📅' },
    'தேங்காய்': { trans: 'thēngāy', meaning: 'Coconut', icon: '🥥' },
    'தேள்': { trans: 'thēḷ', meaning: 'Scorpion', icon: '🦂' },
    'தேம்பல்': { trans: 'thēmbal', meaning: 'Gentle Weep / Sigh', icon: '🥺' },
    'தேற்றல்': { trans: 'thēṟṟal', meaning: 'Consolation / Comfort', icon: '🤝' },
    'வெள்ளம்': { trans: 'veḷḷam', meaning: 'Water Flood', icon: '🌊' },
    'வெள்ளி': { trans: 'veḷḷi', meaning: 'Silver / Friday', icon: '🪙' },
    'வெப்பம்': { trans: 'veppam', meaning: 'Warm Heat', icon: '🌡️' },
    'வெட்கம்': { trans: 'veṭkam', meaning: 'Modesty / Shyness', icon: '🙈' },
    'வெட்டி': { trans: 'veṭṭi', meaning: 'Cut Out / Dug', icon: '✂️' },
    'வெல்லம்': { trans: 'vellam', meaning: 'Sweet Jaggery', icon: '🍬' },
    'வெங்காயம்': { trans: 'vengāyam', meaning: 'Onion', icon: '🧅' },
    'வெடி': { trans: 'veḍi', meaning: 'Firecracker / Burst', icon: '💥' },
    'வேல்': { trans: 'vēl', meaning: 'Sacred Spear', icon: '🗡️' },
    'வேர்': { trans: 'vēr', meaning: 'Plant Root', icon: '🌱' },
    'வேப்பமரம்': { trans: 'vēppamaram', meaning: 'Neem Tree', icon: '🌳' },
    'வேகம்': { trans: 'vēgam', meaning: 'Speed / Velocity', icon: '⚡' },
    'வேடன்': { trans: 'vēḍan', meaning: 'Hunter of the Wild', icon: '🏹' },
    'வேலி': { trans: 'vēli', meaning: 'Protective Fence', icon: '🚧' },
    'வேனில்': { trans: 'vēnil', meaning: 'Summer Season', icon: '☀️' },
    'நெல்': { trans: 'nel', meaning: 'Paddy Harvest', icon: '🌾' },
    'நெற்றி': { trans: 'neṟṟi', meaning: 'Forehead', icon: '🧘' },
    'நெய்தல்': { trans: 'neydhal', meaning: 'Seashore Landscape', icon: '🏖️' },
    'நெஞ்சம்': { trans: 'nenjam', meaning: 'Affectionate Heart', icon: '❤️' },
    'நெய்த': { trans: 'neydha', meaning: 'Woven / Spun', icon: '🧵' },
    'நெளி': { trans: 'neḷi', meaning: 'Wiggle / Curve', icon: '〰️' },
    'நேரம்': { trans: 'nēram', meaning: 'Time / Hour', icon: '⏰' },
    'நேசம்': { trans: 'nēsam', meaning: 'True Friendship', icon: '💖' },
    'நேர்த்தி': { trans: 'nērththi', meaning: 'Neatness / Order', icon: '✨' },
    'நேர்': { trans: 'nēr', meaning: 'Straight / Upright', icon: '📏' },
    'நேர்பட': { trans: 'nērpada', meaning: 'Honestly / Plainly', icon: '🎯' },
    'மெலிந்த': { trans: 'melindha', meaning: 'Slender / Slim', icon: '🏃' },
    'மெல்ல': { trans: 'mella', meaning: 'Gently / Slowly', icon: '🐢' },
    'மேளம்': { trans: 'mēḷam', meaning: 'Classical Drum', icon: '🥁' },
    'மேகம்': { trans: 'mēgam', meaning: 'Rain Cloud', icon: '☁️' },
    'மேனி': { trans: 'mēni', meaning: 'Graceful Complexion', icon: '✨' },
    'மேல்': { trans: 'mēl', meaning: 'Above / Zenith', icon: '⬆️' },
    'மேற்கண்ட': { trans: 'mēṟkaṇḍa', meaning: 'Aforementioned', icon: '👆' },
    'எண்ணி': { trans: 'eṇṇi', meaning: 'Having Counted', icon: '🧮' },
    'செம்மீன்': { trans: 'semmīn', meaning: 'Red Shrimp / Prawn', icon: '🦐' },
    'தெவிட்டாத': { trans: 'theviṭṭādha', meaning: 'Sweet Delight', icon: '🍯' },
    'டெல்டா': { trans: 'ḍelṭā', meaning: 'Fertile River Delta', icon: '🏞️' },
    'கேரி': { trans: 'kēri', meaning: 'Rail Coach / Car', icon: '🚃' },
    'பாயாசம்': { trans: 'pāyāsam', meaning: 'Sweet Kheer', icon: '🥣' },
    'அகரம்': { trans: 'agaram', meaning: 'First Letter A', icon: '🅰️' },
    'தங்கச்சி': { trans: 'thangachhi', meaning: 'Little Sister', icon: '👧' },
    'நாடி': { trans: 'nāḍi', meaning: 'Pulse / Nerve', icon: '💓' },
    'நாணயம்': { trans: 'nāṇayam', meaning: 'Coin / Integrity', icon: '🪙' },
    'பணம்': { trans: 'paṇam', meaning: 'Money / Coins', icon: '💰' },
    'கப்பல்': { trans: 'kappal', meaning: 'Ship', icon: '🚢' },
    'இடி': { trans: 'iḍi', meaning: 'Thunder / Strike', icon: '⚡' },
    'பிடி': { trans: 'piḍi', meaning: 'Catch / Hold', icon: '✊' },
    'மடி': { trans: 'maḍi', meaning: 'Lap / Fold', icon: '🧎' },
    'படி': { trans: 'paḍi', meaning: 'Study / Step', icon: '📚' },
    'அடி': { trans: 'aḍi', meaning: 'Foot / Base / Beat', icon: '👣' },
    'ஆடி': { trans: 'āḍi', meaning: 'Mirror / Tamil Month', icon: '🪞' },
    'மாடி': { trans: 'māḍi', meaning: 'Terrace / Balcony', icon: '🏢' },
    'தாடி': { trans: 'thāḍi', meaning: 'Beard', icon: '🧔' },
    'பாடி': { trans: 'pāḍi', meaning: 'Singing / Camp', icon: '🎶' },
    'பாட்டி': { trans: 'pāṭṭi', meaning: 'Grandmother', icon: '👵' },
    'பட்டி': { trans: 'paṭṭi', meaning: 'Rural Village / Pen', icon: '🏡' },
    'ஈட்டி': { trans: 'īṭṭi', meaning: 'Spear / Javelin', icon: '🗡️' },
    'ஈரம்': { trans: 'īram', meaning: 'Moisture / Wet', icon: '💧' },
    'ஈயம்': { trans: 'īyam', meaning: 'Lead Metal', icon: '🪙' },
    'பீடம்': { trans: 'pīḍam', meaning: 'Altar / Pedestal', icon: '🏛️' },
    'இடம்': { trans: 'iḍam', meaning: 'Place / Position', icon: '📍' },
    'மிட்டாய்': { trans: 'miṭṭāy', meaning: 'Candy / Sweet', icon: '🍬' },
    'மாமி': { trans: 'māmi', meaning: 'Aunt', icon: '👩' },
    'வண்டி': { trans: 'vaṇḍi', meaning: 'Cart / Vehicle', icon: '🛒' },
    'ஆப்பிள்': { trans: 'āppiḷ', meaning: 'Apple', icon: '🍎' },
    'பித்தம்': { trans: 'pittham', meaning: 'Bile / Passion', icon: '🧪' },
    'வீதி': { trans: 'vīthi', meaning: 'Street / Avenue', icon: '🛣️' },
    'விண்': { trans: 'viṇ', meaning: 'Sky / Outer Space', icon: '🌌' },
    'வில்': { trans: 'vil', meaning: 'Archer Bow', icon: '🏹' },
    'விரல்': { trans: 'viral', meaning: 'Finger', icon: '☝️' },
    'விடி': { trans: 'viḍi', meaning: 'Dawn / Awaken', icon: '🌅' },
    'சிங்கம்': { trans: 'singam', meaning: 'Lion', icon: '🦁' },
    'கீதம்': { trans: 'gītham', meaning: 'Sacred Song', icon: '🎶' },
    'சிற்பம்': { trans: 'siṟpam', meaning: 'Sculpture / Statue', icon: '🗿' },
    'விவாதம்': { trans: 'vivātham', meaning: 'Debate / Discussion', icon: '🗣️' },
    'ஆதி': { trans: 'ādhi', meaning: 'Origin / Primeval', icon: '🌅' },
    'சிப்பம்': { trans: 'sippam', meaning: 'Parcel / Bundle', icon: '📦' },
    'சிப்பி': { trans: 'sippi', meaning: 'Seashell / Oyster', icon: '🐚' },
    'கிண்ணம்': { trans: 'kiṇṇam', meaning: 'Metal Bowl', icon: '🥣' },
    'வீரம்': { trans: 'vīram', meaning: 'Courage / Bravery', icon: '🛡️' },
    'தீபம்': { trans: 'dīpam', meaning: 'Oil Lamp / Light', icon: '🪔' },
    'கவி': { trans: 'kavi', meaning: 'Poet / Verse', icon: '📜' },
    'ரவி': { trans: 'ravi', meaning: 'Bright Sun', icon: '☀️' },
    'சீவி': { trans: 'sīvi', meaning: 'To Comb / Slice', icon: '🪮' },
    'சீதா': { trans: 'sīthā', meaning: 'Custard Apple / Sita', icon: '🍈' },
    'சீரம்': { trans: 'sīram', meaning: 'Fluid / Essence', icon: '💧' },
    'அரி': { trans: 'ari', meaning: 'Harvest Grain / Lion', icon: '🌾' },
    'நரி': { trans: 'nari', meaning: 'Jackal / Fox', icon: '🦊' },
    'பரி': { trans: 'pari', meaning: 'Swift Horse', icon: '🐎' },
    'கரி': { trans: 'kari', meaning: 'Charcoal / Black', icon: '⚫' },
    'வரி': { trans: 'vari', meaning: 'Line / Stripe / Tax', icon: '📝' },
    'விரி': { trans: 'viri', meaning: 'Spread Open', icon: '📖' },
    'சரி': { trans: 'sari', meaning: 'Right / Correct', icon: '✅' },
    'கீரி': { trans: 'kīri', meaning: 'Mongoose', icon: '🦦' },
    'திரி': { trans: 'thiri', meaning: 'Lamp Wick', icon: '🕯️' },
    'அறி': { trans: 'aṟi', meaning: 'Wisdom / Knowledge', icon: '🧠' },
    'பறி': { trans: 'paṟi', meaning: 'Pluck / Snatch', icon: '🌸' },
    'பன்றி': { trans: 'panṟi', meaning: 'Boar / Pig', icon: '🐖' },
    'மறி': { trans: 'maṟi', meaning: 'Young Goat / Shield', icon: '🐐' },
    'அரிசி': { trans: 'arisi', meaning: 'Uncooked Rice', icon: '🍚' },
    'கிரீடம்': { trans: 'kirīḍam', meaning: 'Royal Crown', icon: '👑' },
    'விசிறி': { trans: 'visiṟi', meaning: 'Handheld Fan', icon: '🪭' },
    'பத்திரம்': { trans: 'pathiram', meaning: 'Safety / Document', icon: '📄' },
    'சித்திரம்': { trans: 'sithiram', meaning: 'Painting / Artwork', icon: '🖼️' },
    'ராத்திரி': { trans: 'rāthiri', meaning: 'Night Time', icon: '🌙' },
    'மந்திரி': { trans: 'mandhiri', meaning: 'Minister / Counselor', icon: '👔' },
    'ரீங்காரம்': { trans: 'rīṅgāram', meaning: 'Humming of Bees', icon: '🐝' },
    'நீர்': { trans: 'nīr', meaning: 'Water', icon: '💧' },
    'கனி': { trans: 'kani', meaning: 'Ripe Sweet Fruit', icon: '🍎' },
    'பனி': { trans: 'pani', meaning: 'Snow / Morning Dew', icon: '❄️' },
    'நனி': { trans: 'nani', meaning: 'Abundantly / Very', icon: '✨' },
    'தனி': { trans: 'thani', meaning: 'Solitary / Unique', icon: '🧍' },
    'இனி': { trans: 'ini', meaning: 'Henceforth / Sweetness', icon: '🍬' },
    'அணி': { trans: 'aṇi', meaning: 'Ornament / Lineup', icon: '🏅' },
    'மணி': { trans: 'maṇi', meaning: 'Chime Bell / Gem', icon: '🔔' },
    'பணி': { trans: 'paṇi', meaning: 'Duty / Work', icon: '💼' },
    'கன்னி': { trans: 'kanni', meaning: 'Young Maiden', icon: '👧' },
    'நிமிடம்': { trans: 'nimiḍam', meaning: 'Minute / Second', icon: '⏱️' },
    'நிலம்': { trans: 'nilam', meaning: 'Land / Earth', icon: '🏞️' },
    'நீளம்': { trans: 'nīḷam', meaning: 'Length / Blue', icon: '📏' },
    'நீச்சல்': { trans: 'nīchal', meaning: 'Swimming', icon: '🏊' },
    'பன்னீர்': { trans: 'pannīr', meaning: 'Scented Rosewater', icon: '🌹' },
    'கண்ணீர்': { trans: 'kaṇṇīr', meaning: 'Tears', icon: '😢' },
    'வினா': { trans: 'vinā', meaning: 'Inquiry / Question', icon: '❓' },
    'தினசரி': { trans: 'dhinasari', meaning: 'Daily Journal', icon: '📰' },
    'மனிதன்': { trans: 'manidhan', meaning: 'Human Being', icon: '👨' },
    'அனில்': { trans: 'anil', meaning: 'Striped Squirrel', icon: '🐿️' },
    'தாலி': { trans: 'thāli', meaning: 'Sacred Necklace', icon: '📿' },
    'பள்ளி': { trans: 'paḷḷi', meaning: 'School', icon: '🏫' },
    'வழி': { trans: 'vazhi', meaning: 'Path / Gateway', icon: '🛣️' },
    'விழி': { trans: 'vizhi', meaning: 'Watchful Eye', icon: '👁️' },
    'கழி': { trans: 'kazhi', meaning: 'Bamboo Staff', icon: '🦯' },
    'அலி': { trans: 'ali', meaning: 'Gentle Friend', icon: '🤝' },
    'வலி': { trans: 'vali', meaning: 'Strength / Ache', icon: '🩹' },
    'பலி': { trans: 'bali', meaning: 'Sacred Tribute', icon: '🕊️' },
    'விரலி': { trans: 'virali', meaning: 'Turmeric Finger', icon: '🌿' },
    'காலி': { trans: 'kāli', meaning: 'Vacant / Empty', icon: '📭' },
    'சாலி': { trans: 'sāli', meaning: 'Fine Silk Weaver', icon: '🌾' },
    'வாலி': { trans: 'vāli', meaning: 'Water Bucket', icon: '🪣' },
    'பாலி': { trans: 'pāli', meaning: 'Ancient Pali Language', icon: '📜' },
    'நிழல்': { trans: 'nizhal', meaning: 'Cool Shade / Shadow', icon: '👥' },
    'தில்': { trans: 'dhil', meaning: 'Courage / Guts', icon: '🦁' },
    'மல்லி': { trans: 'malli', meaning: 'White Jasmine', icon: '🌼' },
    'பல்லி': { trans: 'palli', meaning: 'Wall Gecko', icon: '🦎' },
    'வில்லி': { trans: 'villi', meaning: 'Sharp Archeress', icon: '🎯' },
    'கிள்ளி': { trans: 'kiḷḷi', meaning: 'Gentle Pinch / Chola King', icon: '🤏' },
    'மார்கழி': { trans: 'mārgazhi', meaning: 'Winter Margazhi Month', icon: '❄️' },
    'அப்பா': { trans: 'appā', meaning: 'Father', icon: '👨' },
    'அம்மா': { trans: 'ammā', meaning: 'Mother', icon: '👩' },
    'படம்': { trans: 'paḍam', meaning: 'Picture', icon: '🖼️' },
    'பட்டம்': { trans: 'paṭṭam', meaning: 'Kite', icon: '🪁' },
    'பாப்பா': { trans: 'pāppā', meaning: 'Baby', icon: '👶' },
    'பாய்': { trans: 'pāy', meaning: 'Mat', icon: '🧶' },
    'மாமா': { trans: 'māmā', meaning: 'Uncle', icon: '🧔' },
    'ஆப்பம்': { trans: 'āppam', meaning: 'Appam', icon: '🥞' },
    'ஆட்டம்': { trans: 'āṭṭam', meaning: 'Dance / Play', icon: '💃' },
    'பாடம்': { trans: 'pāḍam', meaning: 'Lesson', icon: '📖' },
    'மட்டம்': { trans: 'maṭṭam', meaning: 'Level', icon: '📏' },
    'பம்பரம்': { trans: 'pambaram', meaning: 'Spinning Top', icon: '🪀' },
    'அக்கா': { trans: 'akkā', meaning: 'Elder Sister', icon: '👧' },
    'தாத்தா': { trans: 'thāthā', meaning: 'Grandfather', icon: '👴' },
    'காகம்': { trans: 'kāgam', meaning: 'Crow', icon: '🐦‍⬛' },
    'வாய்': { trans: 'vāy', meaning: 'Mouth', icon: '👄' },
    'காய்': { trans: 'kāy', meaning: 'Vegetable / Raw Fruit', icon: '🥦' },
    'சட்டம்': { trans: 'saṭṭam', meaning: 'Rule / Frame', icon: '📜' },
    'வா': { trans: 'vā', meaning: 'Come', icon: '👋' },
    'வாத்து': { trans: 'vāththu', meaning: 'Duck', icon: '🦆' },
    'சாதம்': { trans: 'sātham', meaning: 'Cooked Rice', icon: '🍚' },
    'காவல்': { trans: 'kāval', meaning: 'Guard / Security', icon: '👮' },
    'அத்தை': { trans: 'atthai', meaning: 'Aunt', icon: '👩' },
    'தீ': { trans: 'tī', meaning: 'Fire', icon: '🔥' },
    'தம்பி': { trans: 'thambi', meaning: 'Brother', icon: '👦' },
    'நாய்': { trans: 'nāy', meaning: 'Dog', icon: '🐕' },
    'நிலா': { trans: 'nilā', meaning: 'Moon', icon: '🌙' },
    'தாய்': { trans: 'thāy', meaning: 'Mother', icon: '🤱' },
    'மீன்': { trans: 'mīn', meaning: 'Fish', icon: '🐟' },
    'கிளி': { trans: 'kiḷi', meaning: 'Parrot', icon: '🦜' },
    'கத்தி': { trans: 'katthi', meaning: 'Knife', icon: '🔪' },
    'பந்து': { trans: 'pandhu', meaning: 'Ball', icon: '⚽' },
    'அத்தி': { trans: 'atthi', meaning: 'Fig', icon: '🌳' },
    'நீதி': { trans: 'nīdhi', meaning: 'Justice', icon: '⚖️' },
    'உப்பு': { trans: 'uppu', meaning: 'Salt', icon: '🧂' },
    'ஊஞ்சல்': { trans: 'ūñjal', meaning: 'Swing', icon: '🪢' },
    'பசு': { trans: 'pasu', meaning: 'Cow', icon: '🐄' },
    'பூ': { trans: 'pū', meaning: 'Flower', icon: '🌸' },
    'சூரியன்': { trans: 'sūriyan', meaning: 'Sun', icon: '☀️' },
    'மயில்': { trans: 'mayil', meaning: 'Peacock', icon: '🦚' },
    'புலி': { trans: 'puli', meaning: 'Tiger', icon: '🐅' },
    'ரசம்': { trans: 'rasam', meaning: 'Soup', icon: '🍲' },
    'பால்': { trans: 'pāl', meaning: 'Milk', icon: '🥛' },
    'தமிழ்': { trans: 'tamizh', meaning: 'Tamil', icon: '📖' },
    'வாழை': { trans: 'vāzhai', meaning: 'Banana', icon: '🍌' },
    'மாம்பழம்': { trans: 'māmpazham', meaning: 'Mango', icon: '🥭' },
    'எறும்பு': { trans: 'eṟumbu', meaning: 'Ant', icon: '🐜' },
    'ஏணி': { trans: 'ēṇi', meaning: 'Ladder', icon: '🪜' },
    'கை': { trans: 'kai', meaning: 'Hand', icon: '✋' },
    'பை': { trans: 'pai', meaning: 'Bag', icon: '🎒' },
    'வீடு': { trans: 'vīdu', meaning: 'House', icon: '🏠' },
    'ஒன்று': { trans: 'ondru', meaning: 'One', icon: '1️⃣' },
    'ஓடம்': { trans: 'ōḍam', meaning: 'Boat', icon: '⛵' },
    'எஃகு': { trans: 'eḥgu', meaning: 'Steel', icon: '🛡️' },
    'கண்': { trans: 'kaṇ', meaning: 'Eye', icon: '👁️' },
    'பறவை': { trans: 'paṟavai', meaning: 'Bird', icon: '🦜' },
    'அன்னம்': { trans: 'annam', meaning: 'Swan', icon: '🦢' },
    'மான்': { trans: 'mān', meaning: 'Deer', icon: '🦌' },
    'ரோஜா': { trans: 'rōjā', meaning: 'Rose', icon: '🌹' },
    'புஷ்பம்': { trans: 'puṣpam', meaning: 'Flower', icon: '💐' },
    'சந்தோஷம்': { trans: 'sandhōṣam', meaning: 'Happiness', icon: '😊' },
    'ஹாக்கி': { trans: 'hākki', meaning: 'Hockey', icon: '🏑' },
    'வணக்கம்': { trans: 'vaṇakkam', meaning: 'Greetings', icon: '🙏' },
    'நன்றி': { trans: 'naṉṟi', meaning: 'Thank you', icon: '💐' },
    'அன்பு': { trans: 'anbu', meaning: 'Love', icon: '❤️' },
    'வெற்றி': { trans: 'veṟṟi', meaning: 'Victory', icon: '🏆' },
    'கல்வி': { trans: 'kalvi', meaning: 'Education', icon: '🎓' },
    'நண்டு': { trans: 'naṇṭu', meaning: 'Crab', icon: '🦀' },
    'நாடு': { trans: 'nāḍu', meaning: 'Country', icon: '🌏' },
    'நாம்': { trans: 'nām', meaning: 'We', icon: '👥' },
    'அண்ணன்': { trans: 'aṇṇan', meaning: 'Elder Brother', icon: '👦' },
    'மணம்': { trans: 'maṇam', meaning: 'Fragrance', icon: '🌸' },
    'கண்ணன்': { trans: 'kaṇṇan', meaning: 'Krishna', icon: '🦚' },
    'நன்மை': { trans: 'nanmai', meaning: 'Goodness', icon: '✨' },
    'மனம்': { trans: 'manam', meaning: 'Mind / Heart', icon: '🧠' },
    'பண்': { trans: 'paṇ', meaning: 'Melody / Music', icon: '🎵' },
    'தண்ணீர்': { trans: 'taṇṇīr', meaning: 'Water', icon: '💧' },
    'மண்': { trans: 'maṇ', meaning: 'Earth / Soil', icon: '🌍' },
    'மலர்': { trans: 'malar', meaning: 'Flower', icon: '🌺' },
    'வாழை': { trans: 'vāzhai', meaning: 'Banana', icon: '🍌' },
    'வெள்ளாடு': { trans: 'veḷḷāḍu', meaning: 'Goat', icon: '🐐' },
    'மாழை': { trans: 'māzhai', meaning: 'Rain', icon: '🌧️' },
    'ஆழ்': { trans: 'āzh', meaning: 'Depth', icon: '🌊' },
    'மள்ளிகை': { trans: 'maḷḷikai', meaning: 'Jasmine / Bell', icon: '🌼' },
    'இல்லம்': { trans: 'illam', meaning: 'Home', icon: '🏡' },
    'ஆலமரம்': { trans: 'ālamaram', meaning: 'Banyan Tree', icon: '🌳' },
    'பயம்': { trans: 'bayam', meaning: 'Fear', icon: '😨' },
    'பாவம்': { trans: 'pāvam', meaning: 'Pity / Innocence', icon: '🥺' },
    'தாகம்': { trans: 'thāgam', meaning: 'Thirst', icon: '🥤' },
    'வட்டம்': { trans: 'vaṭṭam', meaning: 'Circle', icon: '⭕' },
    'சத்தம்': { trans: 'sattham', meaning: 'Sound / Noise', icon: '🔊' },
    'மரம்': { trans: 'maram', meaning: 'Tree', icon: '🌳' },
    'தங்கம்': { trans: 'thangam', meaning: 'Gold', icon: '🪙' },
    'சங்கம்': { trans: 'sangam', meaning: 'Academy / Sangam', icon: '🏛️' },
    'பஞ்சம்': { trans: 'pañjam', meaning: 'Scarcity / Famine', icon: '🌾' },
    'காரம்': { trans: 'kāram', meaning: 'Spicy', icon: '🌶️' },
    'வானம்': { trans: 'vānam', meaning: 'Sky', icon: '🌤️' },
    'வண்ணம்': { trans: 'vaṇṇam', meaning: 'Color', icon: '🎨' },
    'சந்தனம்': { trans: 'sandhanam', meaning: 'Sandalwood', icon: '🪵' },
    'கல்': { trans: 'kal', meaning: 'Stone', icon: '🪨' },
    'கால்': { trans: 'kāl', meaning: 'Leg / Foot', icon: '🦶' },
    'பாலம்': { trans: 'pālam', meaning: 'Bridge', icon: '🌉' },
    'காலம்': { trans: 'kālam', meaning: 'Time', icon: '⏰' },
    'வாள்': { trans: 'vāḷ', meaning: 'Sword', icon: '⚔️' },
    'நாள்': { trans: 'nāḷ', meaning: 'Day / Date', icon: '📅' },
    'தாளம்': { trans: 'thāḷam', meaning: 'Rhythm / Beat', icon: '🥁' },
    'பள்ளம்': { trans: 'paḷḷam', meaning: 'Pit / Trench', icon: '🕳️' },
    'பழம்': { trans: 'pazham', meaning: 'Fruit', icon: '🍎' },
    'யாழ்': { trans: 'yāzh', meaning: 'Tamil Harp (Yazh)', icon: '🎵' },
    'மாடம்': { trans: 'māḍam', meaning: 'Attic / Balcony / Niche', icon: '🏛️' },
    'ஆயா': { trans: 'āyā', meaning: 'Grandmother / Nanny', icon: '👵' },
    'மாயா': { trans: 'māyā', meaning: 'Illusion / Wonder', icon: '🔮' },
    'மாயம்': { trans: 'māyam', meaning: 'Magic / Trick', icon: '🪄' },
    'பட்டா': { trans: 'paṭṭā', meaning: 'Title Deed / Record', icon: '📜' },
    'பாட்டா': { trans: 'pāṭṭā', meaning: 'Folk Song / Grandfather', icon: '🎵' },
    'அப்பம்': { trans: 'appam', meaning: 'Sweet Rice Cake', icon: '🥮' },
    'பாப்பம்': { trans: 'pāppam', meaning: 'Snack / Cake', icon: '🍰' },
    'பப்படம்': { trans: 'pappaḍam', meaning: 'Crisp Papadum', icon: '🍘' },
    'மடம்': { trans: 'maḍam', meaning: 'Hermitage / Monastery', icon: '🛕' },
    'ஆயம்': { trans: 'āyam', meaning: 'Measurement / Toll', icon: '⚖️' },
    'மாய்': { trans: 'māy', meaning: 'Fade / Vanish', icon: '✨' },
    'பாயா': { trans: 'pāyā', meaning: 'Spreading flow', icon: '🌊' },
    'அடா': { trans: 'aḍā', meaning: 'Hey you (friendly)', icon: '🗣️' },
    'ஆடா': { trans: 'āḍā', meaning: 'Dance / Play', icon: '🕺' },
    'பாடா': { trans: 'pāḍā', meaning: 'Song line', icon: '🎤' },
    'வாசம்': { trans: 'vāsam', meaning: 'Fragrance / Scent', icon: '🌸' },
    'பக்கம்': { trans: 'pakkam', meaning: 'Side / Page', icon: '📄' },
    'தவம்': { trans: 'thavam', meaning: 'Penance / Meditation', icon: '🧘' },
    'தாயம்': { trans: 'thāyam', meaning: 'Dice Game', icon: '🎲' },
    'சாயம்': { trans: 'sāyam', meaning: 'Dye / Color', icon: '🎨' },
    'கவசம்': { trans: 'kavasam', meaning: 'Armor / Shield', icon: '🛡️' },
    'காக்கா': { trans: 'kākkā', meaning: 'Crow (baby talk)', icon: '🐦' },
    'தடம்': { trans: 'thaḍam', meaning: 'Footprint / Track', icon: '👣' },
    'வடம்': { trans: 'vaḍam', meaning: 'Rope / Cable', icon: '🪢' },
    'கடம்': { trans: 'kaḍam', meaning: 'Clay Pot / Ghatam', icon: '🏺' },
    'ஆக்கம்': { trans: 'ākkam', meaning: 'Creation / Wealth', icon: '🌟' },
    'கப்பம்': { trans: 'kappam', meaning: 'Tribute / Tax', icon: '💰' },
    'மச்சம்': { trans: 'macham', meaning: 'Beauty Mole', icon: '✨' },
    'வாடா': { trans: 'vāḍā', meaning: 'Come here, buddy', icon: '🤝' },
    'தப்பம்': { trans: 'thappam', meaning: 'Error / Mistake', icon: '⚠️' },
    'தட்டாம்': { trans: 'thaṭṭām', meaning: 'We tap / Flatness', icon: '🥞' },
    'சடம்': { trans: 'saḍam', meaning: 'Inert body / Matter', icon: '🗿' },
    'கசாயம்': { trans: 'kasāyam', meaning: 'Herbal Tea / Tonic', icon: '☕' },
    'அக்கம்': { trans: 'akkam', meaning: 'Neighborhood', icon: '🏘️' },
    'அச்சம்': { trans: 'acham', meaning: 'Fear / Dread', icon: '😨' },
    'அச்சா': { trans: 'achā', meaning: 'Print / Good work', icon: '🖨️' },
    'வாதம்': { trans: 'vātham', meaning: 'Debate / Discussion', icon: '🗣️' },
    'தாதா': { trans: 'thāthā', meaning: 'Benefactor / Giver', icon: '🤲' },
    'சாகசம்': { trans: 'sāgasam', meaning: 'Adventure / Stunt', icon: '🧗' },
    'வாசகம்': { trans: 'vāsagam', meaning: 'Sentence / Motto', icon: '💬' },
    'ரத்தம்': { trans: 'rattham', meaning: 'Blood', icon: '🩸' },
    'அறம்': { trans: 'aṟam', meaning: 'Virtue / Moral Duty', icon: '⚖️' },
    'மாங்காய்': { trans: 'māngāy', meaning: 'Raw Mango', icon: '🥭' },
    'ஞாபகம்': { trans: 'ñābagam', meaning: 'Memory', icon: '🧠' },
    'தரம்': { trans: 'tharam', meaning: 'Quality / Standard', icon: '🏅' },
    'பாரம்': { trans: 'pāram', meaning: 'Heavy Burden / Weight', icon: '🏋️' },
    'மாற்றம்': { trans: 'māṟṟam', meaning: 'Change / Transition', icon: '🔄' },
    'வரம்': { trans: 'varam', meaning: 'Boon / Blessing', icon: '✨' },
    'சரம்': { trans: 'saram', meaning: 'Garland / String', icon: '📿' },
    'கரம்': { trans: 'karam', meaning: 'Hand', icon: '✋' },
    'ஆரம்': { trans: 'āram', meaning: 'Necklace', icon: '📿' },
    'தாரம்': { trans: 'thāram', meaning: 'Spouse / Star', icon: '⭐' },
    'பாய்மரம்': { trans: 'pāymaram', meaning: 'Sailboat Mast', icon: '⛵' },
    'சக்கரம்': { trans: 'sakkaram', meaning: 'Wheel', icon: '🎡' },
    'அற்றம்': { trans: 'aṟṟam', meaning: 'End / Destruction', icon: '🛑' },
    'பற்றா': { trans: 'paṟṟā', meaning: 'Shortage / Deficit', icon: '📉' },
    'கங்கா': { trans: 'gangā', meaning: 'Holy Ganga River', icon: '🌊' },
    'வங்கம்': { trans: 'vangam', meaning: 'Bengal / Vessel', icon: '🚢' },
    'பங்கம்': { trans: 'pangam', meaning: 'Damage / Blemish', icon: '⚡' },
    'ரதம்': { trans: 'ratham', meaning: 'Chariot', icon: '🛞' },
    'சாரம்': { trans: 'sāram', meaning: 'Essence / Core', icon: '🧪' },
    'மார்க்கம்': { trans: 'mārkkam', meaning: 'Path / Way', icon: '🛣️' },
    'சாம்பார்': { trans: 'sāmbār', meaning: 'Lentil Stew / Sambar', icon: '🍲' },
    'ஆவாரம்': { trans: 'āvāram', meaning: 'Avaram Shrub Flower', icon: '🌼' },
    'அஞ்சா': { trans: 'añjā', meaning: 'Fearless / Bold', icon: '🦁' },
    'அஞ்சாம்': { trans: 'añjām', meaning: 'Fifth', icon: '5️⃣' },
    'ராகம்': { trans: 'rāgam', meaning: 'Musical Raga', icon: '🎵' },
    'ராசா': { trans: 'rāsā', meaning: 'King / Sovereign', icon: '👑' },
    'வராதா': { trans: 'varāthā', meaning: 'Will it not come?', icon: '❓' },
    'பந்தம்': { trans: 'pandham', meaning: 'Bond / Relationship / Torch', icon: '🔥' },
    'பந்தா': { trans: 'pandhā', meaning: 'Grandeur / Swagger', icon: '🕶️' },
    'தானம்': { trans: 'dhānam', meaning: 'Charity / Giving', icon: '🎁' },
    'கானம்': { trans: 'gānam', meaning: 'Forest Melody / Song', icon: '🎶' },
    'நாதம்': { trans: 'nādham', meaning: 'Sacred Sound / Tone', icon: '🔔' },
    'நாணம்': { trans: 'nāṇam', meaning: 'Modesty / Shyness', icon: '🙈' },
    'நாட்டம்': { trans: 'nāṭṭam', meaning: 'Desire / Focus', icon: '🎯' },
    'நந்தனம்': { trans: 'nandhanam', meaning: 'Flower Garden', icon: '🌺' },
    'கணம்': { trans: 'kaṇam', meaning: 'Weight / Moment', icon: '⚖️' },
    'அன்னான்': { trans: 'annān', meaning: 'That Gentleman', icon: '🙋' },
    'அண்ணா': { trans: 'aṇṇā', meaning: 'Elder Brother (call)', icon: '🤝' },
    'பண்ணா': { trans: 'paṇṇā', meaning: 'Farm / Estate', icon: '🚜' },
    'பண்டம்': { trans: 'paṇḍam', meaning: 'Good / Commodity', icon: '📦' },
    'மண்டபம்': { trans: 'maṇḍabam', meaning: 'Pavilion / Assembly Hall', icon: '🏛️' },
    'அந்தம்': { trans: 'andham', meaning: 'Conclusion / End', icon: '🏁' },
    'நந்தா': { trans: 'nandhā', meaning: 'Everlasting Light', icon: '🪔' },
    'கந்தன்': { trans: 'kandhan', meaning: 'Lord Murugan', icon: '🪶' },
    'மாந்தர்': { trans: 'māndhar', meaning: 'Human Beings / Mortals', icon: '🧑‍🤝‍🧑' },
    'சாந்தம்': { trans: 'sāndham', meaning: 'Peace / Serenity', icon: '🕊️' },
    'காந்தம்': { trans: 'gāndham', meaning: 'Magnet', icon: '🧲' },
    'பந்தயம்': { trans: 'pandhayam', meaning: 'Race / Competition', icon: '🏇' },
    'நார்': { trans: 'nār', meaning: 'Coir / Fiber', icon: '🧶' },
    'தந்தம்': { trans: 'thandham', meaning: 'Elephant Tusk / Ivory', icon: '🐘' },
    'மன்னன்': { trans: 'mannan', meaning: 'King / Emperor', icon: '👑' },
    'கன்னம்': { trans: 'kannam', meaning: 'Cheek', icon: '😊' },
    'வனம்': { trans: 'vanam', meaning: 'Lush Forest', icon: '🌲' },
    'பன்னம்': { trans: 'pannam', meaning: 'Leaves / Foliage', icon: '🌿' },
    'வால்': { trans: 'vāl', meaning: 'Tail', icon: '🐒' },
    'பல்': { trans: 'pal', meaning: 'Tooth', icon: '🦷' },
    'பலம்': { trans: 'balam', meaning: 'Physical Strength / Power', icon: '💪' },
    'வலம்': { trans: 'valam', meaning: 'Clockwise / Right Side', icon: '↪️' },
    'கலம்': { trans: 'kalam', meaning: 'Vessel / Ship', icon: '🚢' },
    'சால்': { trans: 'sāl', meaning: 'Furrow / Shawl', icon: '🧣' },
    'பாழ்': { trans: 'pāzh', meaning: 'Ruin / Desolation', icon: '🏚️' },
    'தாழ்': { trans: 'thāzh', meaning: 'Door Latch / Low', icon: '🔒' },
    'வாழ்': { trans: 'vāzh', meaning: 'To Live / Prosper', icon: '🌱' },
    'ஆழம்': { trans: 'āzham', meaning: 'Depth / Ocean Deep', icon: '🌊' },
    'ஆள': { trans: 'āḷa', meaning: 'To Rule / Administer', icon: '👑' },
    'களம்': { trans: 'kaḷam', meaning: 'Field / Arena', icon: '🏟️' },
    'வளம்': { trans: 'vaḷam', meaning: 'Prosperity / Wealth', icon: '🌾' },
    'காளான்': { trans: 'kāḷān', meaning: 'Mushroom', icon: '🍄' },
    'கழகம்': { trans: 'kazhagam', meaning: 'Federation / Society', icon: '🏛️' },
    'வழக்கம்': { trans: 'vazhakkam', meaning: 'Custom / Tradition', icon: '📜' },
    'தள்ளா': { trans: 'thaḷḷā', meaning: 'Staggering / To Push', icon: '🚶' },
    'வல்லம்': { trans: 'vallam', meaning: 'Strength / Fortress', icon: '🏰' },
    'பல்லம்': { trans: 'pallam', meaning: 'Lowland / Basin', icon: '🏞️' },
    'கல்லா': { trans: 'kallā', meaning: 'Shop Cash Box', icon: '💵' },
    'சாம்பல்': { trans: 'sāmbal', meaning: 'Sacred Ash', icon: '🌋' },
    'ஆவல்': { trans: 'āval', meaning: 'Eagerness / Zeal', icon: '✨' },
    'அள்ளல்': { trans: 'aḷḷal', meaning: 'Scooping / Bounty', icon: '🤲' },
    'சன்னல்': { trans: 'sannal', meaning: 'Window', icon: '🪟' },
    'கண்ணா': { trans: 'kaṇṇā', meaning: 'Beloved Child / Krishna', icon: '💙' },
    'நல்': { trans: 'nal', meaning: 'Good / Noble', icon: '🌟' },
    'நற்காலம்': { trans: 'naṟkālam', meaning: 'Good Times / Golden Era', icon: '☀️' },
    'சவால்': { trans: 'savāl', meaning: 'Challenge / Duel', icon: '🥊' },
    'தபால்': { trans: 'thabāl', meaning: 'Post / Postal Mail', icon: '✉️' },
    'கழல்': { trans: 'kazhal', meaning: 'Warrior Anklet', icon: '🔔' },
    'பளபள': { trans: 'paḷapaḷa', meaning: 'Glistening / Sparkling', icon: '✨' },
    'சலசல': { trans: 'salasala', meaning: 'Babbling Stream Sound', icon: '🌊' },
    'படபட': { trans: 'paḍapaḍa', meaning: 'Fluttering Heart Sound', icon: '💓' },
};

  // =========================================================================
  // 2. STATE
  // =========================================================================

  const state = {
    currentLevel: 1,
    currentText: '',
    speechRate: 1.0,
    currentAudio: null,
    isAnimating: false,
    viewMode: 'list', // 'buttons' or 'list'
    activeTab: 'words',
    mode: 'practice', // 'practice' or 'test'
    practiceTarget: null, // target word for user to try typing on keypad
    testTarget: null,
    testSession: {
      isActive: false,
      questions: [],
      currentIndex: 0,
      score: 0,
      userAnswers: []
    },
    testConfig: {
      questionCount: 5,
      minWordLength: 2
    }
  };

  // =========================================================================
  // 3. DOM ELEMENTS
  // =========================================================================

  const el = {
    levelPills: document.querySelectorAll('.level-pill'),
    displayScreen: document.getElementById('displayScreen'),
    displayPlaceholder: document.getElementById('displayPlaceholder'),
    displayText: document.getElementById('displayText'),
    phoneticsText: document.getElementById('phoneticsText'),
    meaningText: document.getElementById('meaningText'),
    modeToggleBtn: document.getElementById('modeToggleBtn'),
    modeToggleText: document.getElementById('modeToggleText'),
    clearBtn: document.getElementById('clearBtn'),
    readBtn: document.getElementById('readBtn'),
    backspaceBtn: document.getElementById('backspaceBtn'),
    spaceBtn: document.getElementById('spaceBtn'),
    keypadTitle: document.getElementById('keypadTitle'),
    letterGridWrapper: document.getElementById('letterGridWrapper'),
    syllableChipsList: document.getElementById('syllableChipsList'),
    wordChipsList: document.getElementById('wordChipsList'),
    audioWaveToast: document.getElementById('audioWaveToast'),
    waveText: document.getElementById('waveText'),
    speedSlow: document.getElementById('speedSlow'),
    speedNormal: document.getElementById('speedNormal'),
    speedFast: document.getElementById('speedFast'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    toastContainer: document.getElementById('toastContainer'),
    tabWordsBtn: document.getElementById('tabWordsBtn'),
    tabSyllablesBtn: document.getElementById('tabSyllablesBtn'),
    wordsCountBadge: document.getElementById('wordsCountBadge'),
    syllablesCountBadge: document.getElementById('syllablesCountBadge'),
    wordsTabContent: document.getElementById('wordsTabContent'),
    syllablesTabContent: document.getElementById('syllablesTabContent'),
    viewModeTabsBar: document.getElementById('viewModeTabsBar'),
    viewModeButtonsBtn: document.getElementById('viewModeButtonsBtn'),
    viewModeListBtn: document.getElementById('viewModeListBtn'),
    keypadCard: document.getElementById('keypadCard'),
    listCard: document.getElementById('listCard'),
    listTotalCountBadge: document.getElementById('listTotalCountBadge'),
    displayResult: document.getElementById('displayResult'),
    testHeaderBar: document.getElementById('testHeaderBar'),
    testQuestionCounter: document.getElementById('testQuestionCounter'),
    testScorePill: document.getElementById('testScorePill'),
    testListenBtn: document.getElementById('testListenBtn'),
    testSubmitBtn: document.getElementById('testSubmitBtn'),
    testScoreModal: document.getElementById('testScoreModal'),
    scoreBadgeIcon: document.getElementById('scoreBadgeIcon'),
    scoreTitle: document.getElementById('scoreTitle'),
    scoreBig: document.getElementById('scoreBig'),
    scorePercent: document.getElementById('scorePercent'),
    scorePraise: document.getElementById('scorePraise'),
    scoreReviewContainer: document.getElementById('scoreReviewContainer'),
    retakeTestBtn: document.getElementById('retakeTestBtn'),
    scoreExitBtn: document.getElementById('scoreExitBtn'),
    listSetPillsRow: document.getElementById('listSetPillsRow'),
    appLayout: document.querySelector('.app-layout'),
    questionCountSlider: document.getElementById('questionCountSlider'),
    questionCountValue: document.getElementById('questionCountValue'),
    wordLengthSlider: document.getElementById('wordLengthSlider'),
    wordLengthValue: document.getElementById('wordLengthValue')
  };

  // =========================================================================
  // 4. TAMIL TOKENIZER & PHONETICS
  // =========================================================================

  function tokenizeTamil(text) {
    if (!text) return [];
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      try {
        const segmenter = new Intl.Segmenter('ta', { granularity: 'grapheme' });
        return Array.from(segmenter.segment(text), s => s.segment);
      } catch (e) {}
    }
    const regex = /[\u0B80-\u0BFF][\u0BBE-\u0BCD\u0BD7]*/g;
    return text.match(regex) || Array.from(text);
  }

  function getTransliteration(text) {
    if (!text) return '—';
    const trimmed = text.trim();
    if (DICTIONARY[trimmed]) return DICTIONARY[trimmed].trans;

    const map = {
      'அ': 'a', 'ஆ': 'ā', 'இ': 'i', 'ஈ': 'ī', 'உ': 'u', 'ஊ': 'ū',
      'எ': 'e', 'ஏ': 'ē', 'ஐ': 'ai', 'ஒ': 'o', 'ஓ': 'ō', 'ஔ': 'au', 'ஃ': 'ḥ',
      'க்': 'k', 'க': 'ka', 'கா': 'kā', 'கி': 'ki', 'கீ': 'kī', 'கு': 'ku', 'கூ': 'kū',
      'ச்': 's', 'ச': 'sa', 'சா': 'sā', 'சி': 'si', 'சீ': 'sī', 'சு': 'su', 'சூ': 'sū',
      'ட்': 'ṭ', 'ட': 'ṭa', 'டா': 'ṭā', 'டி': 'ṭi', 'டீ': 'ṭī', 'டு': 'ṭu',
      'த்': 'th', 'த': 'tha', 'தா': 'thā', 'தி': 'thi', 'தீ': 'thī', 'து': 'thu', 'தூ': 'thū',
      'ந்': 'n', 'ந': 'na', 'நா': 'nā', 'நி': 'ni', 'நீ': 'nī',
      'ப்': 'p', 'ப': 'pa', 'பா': 'pā', 'பி': 'pi', 'பீ': 'pī', 'பு': 'pu', 'பூ': 'pū',
      'ம்': 'm', 'ம': 'ma', 'மா': 'mā', 'மி': 'mi', 'மீ': 'mī', 'மு': 'mu', 'மூ': 'mū',
      'ய்': 'y', 'ய': 'ya', 'யா': 'yā', 'யி': 'yi', 'யீ': 'yī',
      'ர்': 'r', 'ர': 'ra', 'ரா': 'rā', 'ரி': 'ri', 'ரீ': 'rī', 'ரு': 'ru', 'ரூ': 'rū',
      'ல்': 'l', 'ல': 'la', 'லா': 'lā', 'லி': 'li', 'லீ': 'lī', 'லு': 'lu', 'லூ': 'lū',
      'வ்': 'v', 'வ': 'va', 'வா': 'vā', 'வி': 'vi', 'வீ': 'vī',
      'ழ்': 'zh', 'ழ': 'zha', 'ழா': 'zhā', 'ழி': 'zhi', 'ழீ': 'zhī', 'ழு': 'zhu',
      'ள்': 'ḷ', 'ள': 'ḷa', 'ளா': 'ḷā', 'ளி': 'ḷi', 'ளீ': 'ḷī', 'ளு': 'ḷu',
      'ற்': 'ṟ', 'ற': 'ṟa', 'றா': 'ṟā', 'றி': 'ṟi', 'றீ': 'ṟī', 'று': 'ṟu',
      'ன்': 'n', 'ன': 'na', 'னா': 'nā', 'னி': 'ni', 'னீ': 'nī',
      'ண்': 'ṇ', 'ண': 'ṇa', 'ணா': 'ṇā', 'ணி': 'ṇi', 'ணீ': 'ṇī',
      'ஜ்': 'j', 'ஜ': 'ja', 'ஜா': 'jā', 'ஜி': 'ji', 'ஜீ': 'jī',
      'ஷ்': 'sh', 'ஷ': 'sha', 'ஷா': 'shā', 'ஷி': 'shi',
      'ஸ்': 's', 'ஸ': 'sa', 'ஸா': 'sā', 'ஸி': 'si',
      'ஹ்': 'h', 'ஹ': 'ha', 'ஹா': 'hā', 'ஸ்ரீ': 'srī'
    };

    return tokenizeTamil(text).map(t => map[t] || t).join('');
  }

  /**
   * Simple "readable" ASCII transliteration for the word list.
   * Uses common conventions: aa, oo, ii, th, zh, sh, etc.
   * Output examples: maadu, paatti, aappam, thosai
   */
  function getSimpleTranslit(text) {
    if (!text) return '';
    const map = {
      // Pure vowels
      'அ': 'a', 'ஆ': 'aa', 'இ': 'i', 'ஈ': 'ii', 'உ': 'u', 'ஊ': 'uu',
      'எ': 'e', 'ஏ': 'e', 'ஐ': 'ai', 'ஒ': 'o', 'ஓ': 'o', 'ஔ': 'au', 'ஃ': 'ah',
      // க
      'க்': 'k', 'க': 'ka', 'கா': 'kaa', 'கி': 'ki', 'கீ': 'kii', 'கு': 'ku', 'கூ': 'kuu',
      'கெ': 'ke', 'கே': 'ke', 'கை': 'kai', 'கொ': 'ko', 'கோ': 'ko',
      // ச
      'ச்': 's', 'ச': 'sa', 'சா': 'saa', 'சி': 'si', 'சீ': 'sii', 'சு': 'su', 'சூ': 'suu',
      'சை': 'sai', 'சொ': 'so', 'சோ': 'so',
      // ட
      'ட்': 'tt', 'ட': 'ta', 'டா': 'taa', 'டி': 'ti', 'டீ': 'tii', 'டு': 'tu', 'டூ': 'tuu',
      'டை': 'tai', 'டொ': 'to', 'டோ': 'to',
      // த
      'த்': 'th', 'த': 'tha', 'தா': 'thaa', 'தி': 'thi', 'தீ': 'thii', 'து': 'thu', 'தூ': 'thuu',
      'தை': 'thai', 'தொ': 'tho', 'தோ': 'tho',
      // ந
      'ந்': 'n', 'ந': 'na', 'நா': 'naa', 'நி': 'ni', 'நீ': 'nii', 'நு': 'nu',
      // ப
      'ப்': 'pp', 'ப': 'pa', 'பா': 'paa', 'பி': 'pi', 'பீ': 'pii', 'பு': 'pu', 'பூ': 'puu',
      'பை': 'pai', 'பொ': 'po', 'போ': 'po',
      // ம
      'ம்': 'm', 'ம': 'ma', 'மா': 'maa', 'மி': 'mi', 'மீ': 'mii', 'மு': 'mu', 'மூ': 'muu',
      'மை': 'mai', 'மொ': 'mo', 'மோ': 'mo',
      // ய
      'ய்': 'y', 'ய': 'ya', 'யா': 'yaa', 'யி': 'yi', 'யீ': 'yii',
      // ர
      'ர்': 'r', 'ர': 'ra', 'ரா': 'raa', 'ரி': 'ri', 'ரீ': 'rii', 'ரு': 'ru', 'ரூ': 'ruu',
      // ல
      'ல்': 'l', 'ல': 'la', 'லா': 'laa', 'லி': 'li', 'லீ': 'lii', 'லு': 'lu', 'லூ': 'luu',
      // வ
      'வ்': 'v', 'வ': 'va', 'வா': 'vaa', 'வி': 'vi', 'வீ': 'vii',
      // ழ
      'ழ்': 'zh', 'ழ': 'zha', 'ழா': 'zhaa', 'ழி': 'zhi', 'ழீ': 'zhii', 'ழு': 'zhu',
      // ள
      'ள்': 'l', 'ள': 'la', 'ளா': 'laa', 'ளி': 'li', 'ளீ': 'lii', 'ளு': 'lu',
      // ற
      'ற்': 'tr', 'ற': 'ra', 'றா': 'raa', 'றி': 'ri', 'றீ': 'rii', 'று': 'ru',
      // ன
      'ன்': 'n', 'ன': 'na', 'னா': 'naa', 'னி': 'ni', 'னீ': 'nii',
      // ண
      'ண்': 'n', 'ண': 'na', 'ணா': 'naa', 'ணி': 'ni', 'ணீ': 'nii',
      // ங
      'ங்': 'ng', 'ங': 'nga', 'ங்க': 'nga',
      // ஞ
      'ஞ்': 'ny', 'ஞ': 'nya', 'ஞா': 'nyaa',
      // Grantha
      'ஜ்': 'j', 'ஜ': 'ja', 'ஜா': 'jaa', 'ஜி': 'ji',
      'ஷ்': 'sh', 'ஷ': 'sha', 'ஷா': 'shaa', 'ஷி': 'shi',
      'ஸ்': 's', 'ஸ': 'sa', 'ஸா': 'saa',
      'ஹ்': 'h', 'ஹ': 'ha', 'ஹா': 'haa',
      ' ': ' '
    };
    return tokenizeTamil(text).map(t => map[t] || t).join('');
  }

  // =========================================================================
  // 5. GOOGLE TTS AUDIO (CONSONANT 'இ' PREFIX HANDLING)
  // =========================================================================

  /**
   * Prefixes 'இ' when reading pure consonants (e.g. ப் -> இப், ச் -> இச், க் -> இக்)
   * Exact implementation from Learning App
   */
  const TAMIL_MEI_PRONUNCIATION = {
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

  function getTamilPhoneticSpokenText(text) {
    if (!text) return '';
    const trimmed = text.trim();
    if (TAMIL_MEI_PRONUNCIATION[trimmed]) {
      return TAMIL_MEI_PRONUNCIATION[trimmed];
    }
    const graphemes = trimmed.match(/[\u0B80-\u0BFF][\u0BBE-\u0BD7]*/g);
    if (graphemes && graphemes.length === 1 && graphemes[0].endsWith('\u0BCD')) {
      return 'இ' + graphemes[0];
    }
    return trimmed;
  }

  // Pre-load voices for browser speech synthesis (from Learning App)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      try { window.speechSynthesis.getVoices(); } catch (e) {}
    };
  }

  // Browser Native Speech Synthesis Offline / Fallback Engine (from Learning App)
  function speakWithBrowserTTS(text, rate = 1.0, onEndCallback = null) {
    if (!('speechSynthesis' in window)) {
      if (typeof onEndCallback === 'function') onEndCallback();
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ta-IN';
      utterance.rate = Math.max(0.6, Math.min(1.6, rate || 1.0));

      const voices = window.speechSynthesis.getVoices() || [];
      const tamilVoice = voices.find(v => (v.lang && (v.lang.startsWith('ta') || v.lang.toLowerCase().includes('tamil')))) ||
                         voices.find(v => v.name && v.name.toLowerCase().includes('tamil'));
      if (tamilVoice) {
        utterance.voice = tamilVoice;
      }

      let completed = false;
      const done = () => {
        if (!completed) {
          completed = true;
          if (typeof onEndCallback === 'function') onEndCallback();
        }
      };

      utterance.onend = done;
      utterance.onerror = (e) => {
        console.warn('SpeechSynthesis error:', e);
        done();
      };

      window.speechSynthesis.speak(utterance);

      const safetyTimeout = Math.max(1200, (text || '').length * 150 + 800);
      setTimeout(done, safetyTimeout);
    } catch (err) {
      console.warn('SpeechSynthesis exception:', err);
      if (typeof onEndCallback === 'function') onEndCallback();
    }
  }

  function speakTamil(text, onComplete) {
    if (!text || !String(text).trim()) {
      if (onComplete) onComplete();
      return Promise.resolve();
    }
    stopAudio();
    const cleanText = String(text).trim();
    const spokenText = getTamilPhoneticSpokenText(cleanText);
    const isSlow = state.speechRate < 0.9;
    const ttsUrl = `/api/tts?text=${encodeURIComponent(spokenText)}&slow=${isSlow ? 'true' : 'false'}`;

    setSpeakingVisual(true, spokenText);
    const audio = new Audio(ttsUrl);
    state.currentAudio = audio;
    audio.playbackRate = state.speechRate || 1.0;

    let hasEnded = false;
    const done = () => {
      if (!hasEnded) {
        hasEnded = true;
        setSpeakingVisual(false);
        state.currentAudio = null;
        if (onComplete) onComplete();
      }
    };

    audio.onended = done;
    audio.onerror = () => {
      console.warn('Online TTS failed on audio element, falling back to Browser TTS');
      speakWithBrowserTTS(cleanText, state.speechRate || 1.0, done);
    };

    return audio.play().catch(err => {
      console.warn('Direct online TTS play failed, falling back to Browser TTS:', err);
      speakWithBrowserTTS(cleanText, state.speechRate || 1.0, done);
    });
  }

  function speakTamilPromise(text) {
    if (!text || !String(text).trim()) return Promise.resolve();
    return new Promise(resolve => {
      stopAudio();
      const cleanText = String(text).trim();
      const spokenText = getTamilPhoneticSpokenText(cleanText);
      const isSlow = state.speechRate < 0.9;
      const ttsUrl = `/api/tts?text=${encodeURIComponent(spokenText)}&slow=${isSlow ? 'true' : 'false'}`;

      setSpeakingVisual(true, spokenText);
      const audio = new Audio(ttsUrl);
      state.currentAudio = audio;
      audio.playbackRate = state.speechRate || 1.0;

      let hasResolved = false;
      const onDone = () => {
        if (!hasResolved) {
          hasResolved = true;
          setSpeakingVisual(false);
          state.currentAudio = null;
          resolve();
        }
      };

      audio.onended = onDone;
      audio.onerror = () => {
        console.warn('Online TTS failed on audio element, falling back to Browser TTS');
        speakWithBrowserTTS(cleanText, state.speechRate || 1.0, onDone);
      };

      const fallbackMs = Math.max(900, spokenText.length * 110 + 650);
      const timer = setTimeout(onDone, fallbackMs);

      audio.play().catch(err => {
        console.warn('Audio TTS play error, falling back to Browser TTS:', err);
        clearTimeout(timer);
        speakWithBrowserTTS(cleanText, state.speechRate || 1.0, onDone);
      });
    });
  }


  function stopAudio() {
    if (state.currentAudio) {
      state.currentAudio.pause();
      state.currentAudio.currentTime = 0;
      state.currentAudio = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingVisual(false);
  }

  function setSpeakingVisual(isSpeaking, text = '') {
    if (isSpeaking) {
      el.audioWaveToast.classList.add('speaking');
      el.waveText.textContent = `Google TTS: "${text}"`;
      el.readBtn.classList.add('is-playing');
      el.displayText.classList.add('reading');
    } else {
      el.audioWaveToast.classList.remove('speaking');
      el.readBtn.classList.remove('is-playing');
      el.displayText.classList.remove('reading');
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // =========================================================================
  // 6. UI ACTIONS & INTERACTIVE ANIMATION
  // =========================================================================

  async function addLetter(char) {
    state.currentText += char;
    updateDisplay();
    triggerButtonAnimation(char);

    const typed = state.currentText.trim();
    const target = state.practiceTarget ? state.practiceTarget.trim() : null;
    const isTargetMatched = target && state.mode === 'practice' && !state.isAnimating && (typed === target);

    if (isTargetMatched) {
      await handlePracticeSuccess(char, typed);
    } else {
      speakTamil(char);
      // Update next-button hint so user knows which arrow to press
      updateNextBtnPracticeHint();
    }
  }

  function updateDisplay() {
    const text = state.currentText;

    if (state.mode === 'test') {
      // In Test Mode: NEVER show clues or word text while dictating!
      el.phoneticsText.textContent = '—';
      el.meaningText.textContent = '—';

      if (!text || text.length === 0) {
        if (!el.displayResult || el.displayResult.classList.contains('hidden')) {
          el.displayPlaceholder.classList.remove('hidden');
        }
        el.displayText.classList.add('hidden');
        el.displayText.textContent = '';
      } else {
        el.displayPlaceholder.classList.add('hidden');
        if (el.displayResult) el.displayResult.classList.add('hidden');
        el.displayText.classList.remove('hidden');
        el.displayText.textContent = text;
      }
      return;
    }

    // In Practice Mode: Standard display with phonetics and meaning
    if (!text || text.length === 0) {
      if (state.practiceTarget) {
        el.displayPlaceholder.innerHTML = `<span>🎯 Try typing: <strong class="practice-target-highlight">${state.practiceTarget}</strong></span>`;
        el.phoneticsText.textContent = getTransliteration(state.practiceTarget);
        if (DICTIONARY[state.practiceTarget]) {
          const d = DICTIONARY[state.practiceTarget];
          el.meaningText.innerHTML = `<span class="target-badge">Goal: <strong>${d.icon} ${d.meaning}</strong></span>`;
        } else {
          el.meaningText.innerHTML = `<span class="target-badge">Goal: <strong>${state.practiceTarget}</strong></span>`;
        }
      } else {
        el.displayPlaceholder.innerHTML = `<span>Click any letter or sample item to write &amp; speak</span>`;
        el.phoneticsText.textContent = '—';
        el.meaningText.textContent = '—';
      }
      el.displayPlaceholder.classList.remove('hidden');
      el.displayText.classList.add('hidden');
      el.displayText.textContent = '';
      return;
    }

    el.displayPlaceholder.classList.add('hidden');
    if (el.displayResult) el.displayResult.classList.add('hidden');
    el.displayText.classList.remove('hidden');
    el.displayText.textContent = text;

    el.phoneticsText.textContent = getTransliteration(text);

    const trimmed = text.trim();
    if (state.practiceTarget) {
      const d = DICTIONARY[state.practiceTarget];
      const meaningStr = d ? `${d.icon} ${d.meaning}` : state.practiceTarget;
      el.meaningText.innerHTML = `<span class="target-badge">Target: <strong>${state.practiceTarget}</strong> (${meaningStr})</span>`;
    } else if (DICTIONARY[trimmed]) {
      const d = DICTIONARY[trimmed];
      el.meaningText.textContent = `${d.icon} ${d.meaning}`;
    } else {
      el.meaningText.textContent = '—';
    }
  }

  function handleRead() {
    const text = state.currentText.trim();
    if (state.mode === 'test' && state.testSession.isActive) {
      if (!text) {
        if (state.testTarget) {
          showToast(`🎧 Dictation: "${state.testTarget}"`);
          speakTamil(state.testTarget);
        } else {
          showToast('Listen and type on the keypad!');
        }
        return;
      }
      submitDictationAnswer();
      return;
    }

    if (!text) {
      showToast('Click letter buttons to write first!');
      return;
    }

    speakTamil(text, () => {
      // After read clear the display in 2 seconds (2000ms)
      setTimeout(() => {
        handleClear();
      }, 2000);
    });
  }

  function handleClear() {
    stopAudio();
    state.currentText = '';
    state.practiceTarget = null;
    if (!state.testSession || !state.testSession.isActive) {
      state.testTarget = null;
    }
    document.querySelectorAll('.active-testing, .active-typing').forEach(c => {
      c.classList.remove('active-testing', 'active-typing');
    });
    // Clear practice hints
    document.querySelectorAll('.nav-arrow-btn').forEach(b => b.classList.remove('practice-next-hint'));
    document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('practice-next-letter'));
    document.querySelectorAll('.set-pill-btn').forEach(b => b.classList.remove('practice-next-set'));
    hidePracticeListenBar();
    updateDisplay();
  }

  function handleBackspace() {
    if (!state.currentText) return;
    const tokens = tokenizeTamil(state.currentText);
    tokens.pop();
    state.currentText = tokens.join('');
    updateDisplay();
    // Re-evaluate practice hint after backspace
    updateNextBtnPracticeHint();
  }

  // =========================================================================
  // DICTATION TEST MODE (HIDES RIGHT PANE, DICTATES WORDS, SCORES ON EXIT)
  // =========================================================================

  function startDictationTest() {
    stopAudio();
    handleClear();

    state.mode = 'test';

    // Hide right pane and center layout
    if (el.appLayout) el.appLayout.classList.add('test-mode');

    // Update mode button to Test Mode
    if (el.modeToggleBtn) {
      el.modeToggleBtn.classList.add('is-test-mode');
      el.modeToggleBtn.title = 'Current: Test Mode (Click to return to Practice Mode & View Score)';
      const icon = el.modeToggleBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-pen-ruler';
    }
    if (el.modeToggleText) el.modeToggleText.textContent = 'Test Mode';

    // Update Action Button 3 to Check
    if (el.readBtn) {
      const icon = el.readBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-circle-check';
      const label = el.readBtn.querySelector('span');
      if (label) label.textContent = 'Check';
      el.readBtn.title = 'Check typed word';
    }

    if (el.testScoreModal) el.testScoreModal.classList.add('hidden');
    if (el.testHeaderBar) el.testHeaderBar.classList.remove('hidden');

    // Collect and randomize ONLY full words:
    // In Level 1: CUMULATIVELY take the list of words till current set (0 up to currentSetIndex)
    // In Levels 2-7: Take words belonging to the current level
    const lvl = LEVEL_DATA[state.currentLevel] || LEVEL_DATA[1];
    const currentSetIndex = lvl.currentSetIndex || 0;
    let pool = [];
    const seenWords = new Set();

    if (state.currentLevel === 1) {
      const maxSet = Math.min(currentSetIndex, (lvl.sets || []).length - 1);
      for (let s = 0; s <= maxSet; s++) {
        const setObj = lvl.sets[s];
        if (setObj && setObj.sampleWords) {
          setObj.sampleWords.forEach(item => {
            if (item && item.word && !seenWords.has(item.word)) {
              const tokens = tokenizeTamil(item.word);
              if (tokens.length >= 2) {
                seenWords.add(item.word);
                pool.push(item);
              }
            }
          });
        }
      }
    } else {
      (lvl.sets || []).forEach(setObj => {
        if (setObj && setObj.sampleWords) {
          setObj.sampleWords.forEach(item => {
            if (item && item.word && !seenWords.has(item.word)) {
              const tokens = tokenizeTamil(item.word);
              if (tokens.length >= 2) {
                seenWords.add(item.word);
                pool.push(item);
              }
            }
          });
        }
      });
    }

    if (pool.length === 0 && lvl.sets && lvl.sets[0] && lvl.sets[0].sampleWords) {
      pool = [...lvl.sets[0].sampleWords];
    }

    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const maxQ = state.testConfig ? state.testConfig.questionCount : 5;
    const minLen = state.testConfig ? state.testConfig.minWordLength : 2;
    // Filter by minimum word length
    const filteredPool = minLen > 2 ? pool.filter(item => {
      const w = item.word || '';
      const chars = tokenizeTamil(w).length;
      return chars >= minLen;
    }) : pool;
    const sourcePool = filteredPool.length > 0 ? filteredPool : pool;
    const testQuestions = sourcePool.slice(0, Math.min(maxQ, sourcePool.length));

    state.testSession = {
      isActive: true,
      isEvaluating: false,
      questions: testQuestions,
      currentIndex: 0,
      score: 0,
      userAnswers: []
    };

    if (el.testScorePill) {
      el.testScorePill.textContent = 'Score: 0';
    }

    switchViewMode('buttons');
    if (el.viewModeTabsBar) el.viewModeTabsBar.classList.add('hidden');

    showToast('📝 Word Dictation Test Started! Listen to words & spell on keypad.');
    presentDictationQuestion();
  }

  function presentDictationQuestion() {
    if (!state.testSession.isActive) return;

    if (state.testSession.currentIndex >= state.testSession.questions.length) {
      // All questions completed! Return to practice mode and show score!
      exitTestMode(true);
      return;
    }

    state.testSession.isEvaluating = false;
    state.currentText = '';

    // Clear previous results in display
    if (el.displayResult) {
      el.displayResult.classList.add('hidden');
      el.displayResult.innerHTML = '';
    }
    updateDisplay();

    const currentQ = state.testSession.questions[state.testSession.currentIndex];
    state.testTarget = currentQ.word;

    const qNum = state.testSession.currentIndex + 1;
    const qTotal = state.testSession.questions.length;

    if (el.testQuestionCounter) {
      el.testQuestionCounter.textContent = `Word ${qNum} of ${qTotal}`;
    }

    // Strict dictation: DO NOT show target text or clue on screen!
    el.displayPlaceholder.innerHTML = `<span><i class="fa-solid fa-volume-high"></i> <strong>Word ${qNum} dictated:</strong> Listen and type on keypad</span>`;
    el.displayPlaceholder.classList.remove('hidden');
    el.displayText.classList.add('hidden');

    el.phoneticsText.textContent = '—';
    el.meaningText.textContent = '—';

    // Dictate word automatically via Google TTS
    speakTamil(currentQ.word);
  }

  function submitDictationAnswer() {
    if (!state.testSession.isActive || state.testSession.isEvaluating) return;

    const typed = state.currentText.trim();
    if (!typed) {
      showToast('⚠️ Please type your answer on keypad before checking!');
      if (state.testTarget) speakTamil(state.testTarget);
      return;
    }

    state.testSession.isEvaluating = true;

    const target = (state.testTarget || (state.testSession.questions[state.testSession.currentIndex] ? state.testSession.questions[state.testSession.currentIndex].word : '')).trim();
    const isCorrect = (typed === target);

    if (isCorrect) {
      state.testSession.score++;
      state.testSession.userAnswers.push({ word: target, answer: typed, correct: true });
    } else {
      state.testSession.userAnswers.push({ word: target, answer: typed, correct: false });
    }

    if (el.testScorePill) {
      el.testScorePill.textContent = `Score: ${state.testSession.score}`;
    }

    // Show result right inside the display screen itself!
    el.displayText.classList.add('hidden');
    el.displayPlaceholder.classList.add('hidden');
    
    if (el.displayResult) {
      el.displayResult.classList.remove('hidden');
      if (isCorrect) {
        el.displayResult.innerHTML = `
          <div class="dictation-result-box correct">
            <div class="result-headline">
              <i class="fa-solid fa-circle-check"></i>
              <span>Correct! சரியானது!</span>
            </div>
            <div class="result-word-large">${target}</div>
            <div class="result-sub-note">+1 Point • Next word coming automatically...</div>
          </div>
        `;
      } else {
        el.displayResult.innerHTML = `
          <div class="dictation-result-box incorrect">
            <div class="result-headline">
              <i class="fa-solid fa-circle-xmark"></i>
              <span>Incorrect! தவறானது</span>
            </div>
            <div class="result-comparison">
              <span>Dictated: <strong class="correct-word">${target}</strong></span>
              <span>•</span>
              <span>You wrote: <span class="typed-word">${typed || '(empty)'}</span></span>
            </div>
            <div class="result-sub-note">Next word coming automatically...</div>
          </div>
        `;
      }
    }

    // Spoken feedback for the result
    speakTamil(target);

    // After showing the result in display itself, dictate the next word automatically!
    setTimeout(() => {
      if (!state.testSession.isActive) return;
      if (el.displayResult) {
        el.displayResult.classList.add('hidden');
        el.displayResult.innerHTML = '';
      }
      state.testSession.currentIndex++;
      if (state.testSession.currentIndex < state.testSession.questions.length) {
        presentDictationQuestion(); // Dictates next word automatically!
      } else {
        // Test complete: change mode back to Practice and show score!
        exitTestMode(true);
      }
    }, 2200);
  }

  function exitTestMode(showScore = false) {
    const wasActive = state.testSession && state.testSession.isActive;
    const answeredCount = state.testSession && state.testSession.userAnswers ? state.testSession.userAnswers.length : 0;
    const score = state.testSession ? state.testSession.score : 0;
    const total = state.testSession && state.testSession.questions ? state.testSession.questions.length : 5;

    state.mode = 'practice';
    state.testTarget = null;
    state.testSession.isActive = false;
    state.testSession.isEvaluating = false;
    stopAudio();

    // 1. Restore layout & controls
    if (el.appLayout) el.appLayout.classList.remove('test-mode');
    if (el.testHeaderBar) el.testHeaderBar.classList.add('hidden');
    if (el.viewModeTabsBar) el.viewModeTabsBar.classList.remove('hidden');

    // 2. Restore mode toggle button
    if (el.modeToggleBtn) {
      el.modeToggleBtn.classList.remove('is-test-mode');
      el.modeToggleBtn.title = 'Current: Practice Mode (Click to switch to Test Mode)';
      const icon = el.modeToggleBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-graduation-cap';
    }
    if (el.modeToggleText) el.modeToggleText.textContent = 'Practice Mode';

    // 3. Restore Action Button 3 to Read
    if (el.readBtn) {
      const icon = el.readBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-volume-high';
      const label = el.readBtn.querySelector('span');
      if (label) label.textContent = 'Read';
      el.readBtn.title = 'Read Display Content (Google TTS)';
    }

    // 4. Show score when changing mode back!
    if (showScore && answeredCount > 0) {
      const pct = Math.round((score / answeredCount) * 100);

      if (el.scoreBig) el.scoreBig.textContent = score;
      if (el.scorePercent) el.scorePercent.textContent = `(${pct}%)`;

      if (pct === 100) {
        if (el.scoreBadgeIcon) el.scoreBadgeIcon.textContent = '🏆';
        if (el.scoreTitle) el.scoreTitle.textContent = 'Perfect Score! (முழு மதிப்பெண்)';
        if (el.scorePraise) el.scorePraise.textContent = 'Outstanding! You spelled every word perfectly! அற்புதம்!';
        speakTamil('அற்புதம்! முழு மதிப்பெண்! மிக நன்று!');
      } else if (pct >= 80) {
        if (el.scoreBadgeIcon) el.scoreBadgeIcon.textContent = '🌟';
        if (el.scoreTitle) el.scoreTitle.textContent = 'Great Job! (மிக நன்று)';
        if (el.scorePraise) el.scorePraise.textContent = 'Excellent performance! You know these letters well!';
        speakTamil('மிக நன்று! அருமை!');
      } else if (pct >= 50) {
        if (el.scoreBadgeIcon) el.scoreBadgeIcon.textContent = '👍';
        if (el.scoreTitle) el.scoreTitle.textContent = 'Good Effort! (நன்று)';
        if (el.scorePraise) el.scorePraise.textContent = 'Good attempt! Practice a little more to score 100%!';
        speakTamil('நன்று! தொடர்ந்து பயிற்சி செய்யுங்கள்!');
      } else {
        if (el.scoreBadgeIcon) el.scoreBadgeIcon.textContent = '💪';
        if (el.scoreTitle) el.scoreTitle.textContent = 'Keep Practicing! (பயிற்சி தேவை)';
        if (el.scorePraise) el.scorePraise.textContent = 'Review the words in practice mode and test again!';
        speakTamil('தொடர்ந்து பயிற்சி செய்யுங்கள்!');
      }

      if (el.scoreReviewContainer) {
        el.scoreReviewContainer.innerHTML = state.testSession.userAnswers.map((u, i) => `
          <div class="score-review-row ${u.correct ? 'correct' : 'incorrect'}">
            <div>
              <span class="review-target">${i + 1}. ${u.word}</span>
              <span class="review-typed">&nbsp;&nbsp;(${u.correct ? 'Typed: ' + u.answer : 'Typed: ' + (u.answer || '—')})</span>
            </div>
            <span class="review-badge">${u.correct ? '✅ 1/1' : '❌ 0/1'}</span>
          </div>
        `).join('');
      }

      if (el.testScoreModal) el.testScoreModal.classList.remove('hidden');
    } else {
      if (el.testScoreModal) el.testScoreModal.classList.add('hidden');
    }

    handleClear();
    showToast('🎓 Practice Mode: Right pane restored!');
  }

  function handleModeToggle() {
    if (state.mode === 'practice') {
      startDictationTest();
    } else {
      const answered = state.testSession && state.testSession.userAnswers && state.testSession.userAnswers.length > 0;
      exitTestMode(answered);
    }
  }

  function handleSampleItemClick(itemText, elementEl) {
    if (state.mode === 'practice') {
      playSampleAnimation(itemText, elementEl);
    }
  }

  async function handleSpace() {
    state.currentText += ' ';
    updateDisplay();

    const typed = state.currentText.trim();
    const target = state.practiceTarget ? state.practiceTarget.trim() : null;
    const isTargetMatched = target && state.mode === 'practice' && !state.isAnimating && (typed === target);

    if (isTargetMatched) {
      await handlePracticeSuccess(' ', typed);
    }
  }

  async function handlePracticeSuccess(lastChar, matchedWord) {
    state.practiceTarget = null; // Clear so it cannot re-trigger while animating
    state.isAnimating = true;

    // Step 1: Read the last letter and wait for its audio to finish
    if (lastChar && lastChar.trim()) {
      await speakTamilPromise(lastChar);
    }

    // Step 2: 500ms gap after typing and reading the last letter
    await sleep(500);

    // Step 3: Visual praise on display and read the full word
    el.displayText.classList.add('practice-success');
    showToast(`🎉 Superb! You typed "${matchedWord}" correctly!`);
    await speakTamilPromise(matchedWord);

    // Step 4: Pause, clear display and switch back to list
    await sleep(1000);
    el.displayText.classList.remove('practice-success');
    handleClear();
    state.isAnimating = false;

    // Clear next-button hint
    document.querySelectorAll('.nav-arrow-btn').forEach(b => b.classList.remove('practice-next-hint'));
    document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('practice-next-letter'));
    document.querySelectorAll('.set-pill-btn').forEach(b => b.classList.remove('practice-next-set'));
    hidePracticeListenBar();

    // Switch back to list!
    switchViewMode('list');
    showToast('🌟 Pick another word or syllable to practice!');
  }

  function triggerButtonAnimation(char) {
    const btns = document.querySelectorAll(`.letter-btn[data-char="${char}"]`);
    btns.forEach(b => {
      b.classList.add('pressed');
      setTimeout(() => b.classList.remove('pressed'), 250);
    });
  }

  /**
   * Helper to find which set index within lvlData contains a specific Tamil letter
   */
  function findSetIndexForChar(char, lvlData) {
    if (!lvlData || !lvlData.sets || lvlData.sets.length === 0) return 0;
    const currentIdx = lvlData.currentSetIndex || 0;

    function setHasChar(setObj) {
      if (!setObj) return false;
      if (setObj.vowels && setObj.vowels.includes(char)) return true;
      if (setObj.meiHeader && setObj.meiHeader.includes(char)) return true;
      if (setObj.rows) {
        for (const row of setObj.rows) {
          if (row.includes(char)) return true;
        }
      }
      return false;
    }

    // 1. If currently displayed set already has this char, keep it! (no navigation needed)
    if (setHasChar(lvlData.sets[currentIdx])) {
      return currentIdx;
    }

    // 2. Otherwise search all sets in order
    for (let i = 0; i < lvlData.sets.length; i++) {
      if (setHasChar(lvlData.sets[i])) {
        return i;
      }
    }

    return currentIdx;
  }

  /**
   * Simulates pressing the < or > nav arrow button to step towards targetSetIndex
   */
  async function simulateNavArrowStep(delta, lvlData) {
    const arrowId = delta < 0 ? 'prevSetBtn' : 'nextSetBtn';
    const arrowBtn = document.getElementById(arrowId) || (delta < 0 ? document.querySelector('.nav-arrow-btn') : document.querySelectorAll('.nav-arrow-btn')[1]);

    if (arrowBtn) {
      arrowBtn.classList.add('pressed');
    }
    await sleep(200);
    if (arrowBtn) {
      arrowBtn.classList.remove('pressed');
    }

    const setsCount = lvlData.sets.length;
    let nextIdx = (lvlData.currentSetIndex || 0) + delta;
    if (nextIdx < 0) nextIdx = setsCount - 1;
    if (nextIdx >= setsCount) nextIdx = 0;

    lvlData.currentSetIndex = nextIdx;
    const activeSet = lvlData.sets[nextIdx] || lvlData.sets[0];

    updateKeypadHeaderTitle(lvlData, nextIdx);
    renderKeypad(lvlData, activeSet);
    await sleep(180);
  }

  /**
   * Updates only the keypad header title and set pills without touching the right pane
   */
  function updateKeypadHeaderTitle(lvlData, currentSetIndex) {
    const sets = lvlData.sets || [];
    if (sets.length > 1) {
      let pillsHtml = `<div class="set-pills-container">`;
      sets.forEach((s, idx) => {
        const isActive = idx === currentSetIndex ? 'active' : '';
        pillsHtml += `<button class="set-pill-btn ${isActive}" type="button" data-set-idx="${idx}">${s.name}</button>`;
      });
      pillsHtml += `</div>`;

      el.keypadTitle.innerHTML = `
        <span>${lvlData.title}</span>
        ${pillsHtml}
      `;

      const pillBtns = el.keypadTitle.querySelectorAll('.set-pill-btn');
      pillBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const sIdx = parseInt(btn.getAttribute('data-set-idx'), 10);
          setDirectSet(sIdx);
        });
      });
    } else {
      el.keypadTitle.textContent = lvlData.title;
    }
  }

  /**
   * Sequentially types letters on the keypad with audio, simulating < and > set navigation,
   * then triggers the Read button, and clears the display 1 second after reading!
   */
  async function playSampleAnimation(itemText, elementEl) {
    if (state.isAnimating) return;
    state.isAnimating = true;

    // Switch to buttons mode so user can see the keypad buttons typing
    switchViewMode('buttons');
    await sleep(220);

    const lvlData = LEVEL_DATA[state.currentLevel] || LEVEL_DATA[1];
    const initialSetIndex = lvlData.currentSetIndex || 0;

    // Highlight clicked card/chip
    if (elementEl) elementEl.classList.add('active-typing');

    // Clear display first
    stopAudio();
    state.currentText = '';
    updateDisplay();
    await sleep(200);

    const tokens = tokenizeTamil(itemText);

    // Step 1: Type each letter sequentially, navigating with < / > if necessary
    for (let i = 0; i < tokens.length; i++) {
      const char = tokens[i];

      // Handle space between doubled syllables (e.g. 'டம் டம்')
      if (char === ' ') {
        if (el.spaceBtn) el.spaceBtn.classList.add('pressed');
        state.currentText += ' ';
        updateDisplay();
        await sleep(180);
        if (el.spaceBtn) el.spaceBtn.classList.remove('pressed');
        await sleep(120);
        continue;
      }

      // Determine which set contains this character
      const targetSetIndex = findSetIndexForChar(char, lvlData);
      const currentIdx = lvlData.currentSetIndex || 0;

      // If the letter is on a different set, simulate pressing < or > repeatedly until reached
      if (targetSetIndex !== currentIdx && lvlData.sets && lvlData.sets.length > 1) {
        const delta = targetSetIndex < currentIdx ? -1 : 1;
        while (lvlData.currentSetIndex !== targetSetIndex) {
          await simulateNavArrowStep(delta, lvlData);
        }
      }

      // Now on the target set, simulate pressing the letter button on the keypad
      const btn = document.querySelector(`.letter-btn[data-char="${char}"]`);
      if (btn) btn.classList.add('pressed');

      state.currentText += char;
      updateDisplay();

      // Speak this letter and wait for audio completion
      await speakTamilPromise(char);
      if (btn) btn.classList.remove('pressed');
      if (i < tokens.length - 1) {
        await sleep(150);
      }
    }

    // Step 2: 500ms gap after reading last letter, then read the word
    await sleep(500);

    // Step 3: Animate Read Button press
    el.readBtn.classList.add('pressed');
    await sleep(200);
    el.readBtn.classList.remove('pressed');

    // Step 4: Read the complete composed item out loud with Google TTS
    await speakTamilPromise(itemText);

    // Step 5: After demonstration reading, prepare keypad for the user to try!
    await sleep(1200);

    // Step 6: Smoothly restore keypad back to initialSetIndex where the word started
    if (lvlData.sets && lvlData.sets.length > 1 && lvlData.currentSetIndex !== initialSetIndex) {
      const returnDelta = initialSetIndex < lvlData.currentSetIndex ? -1 : 1;
      while (lvlData.currentSetIndex !== initialSetIndex) {
        await simulateNavArrowStep(returnDelta, lvlData);
      }
    }

    // Set practiceTarget so user can try typing it now!
    state.practiceTarget = itemText.trim();
    state.currentText = '';
    updateDisplay();

    // Cleanup demo highlight
    if (elementEl) elementEl.classList.remove('active-typing');
    state.isAnimating = false;

    showToast(`🎯 Now your turn! Type "${state.practiceTarget}" on the keypad.`);
    // After animation, highlight which button to press first
    updateNextBtnPracticeHint();
    // Show listen bar so user can re-hear the word anytime
    showPracticeListenBar(state.practiceTarget);
    // Stays in keypad mode for the user to try that word!
  }

    // =========================================================================
  // 7. LEVEL & SET MANAGEMENT
  // =========================================================================

  function switchLevel(levelNum) {
    state.currentLevel = parseInt(levelNum, 10);
    const lvlData = LEVEL_DATA[state.currentLevel] || LEVEL_DATA[1];
    
    // Reset set index if needed
    if (lvlData.currentSetIndex === undefined) {
      lvlData.currentSetIndex = 0;
    }

    el.levelPills.forEach(p => {
      const pLvl = parseInt(p.getAttribute('data-level'), 10);
      if (pLvl === state.currentLevel) p.classList.add('active');
      else p.classList.remove('active');
    });

    renderActiveLevelAndSet();

    if (state.mode === 'test') {
      startDictationTest();
    }
  }

  function switchSet(delta) {
    const lvlData = LEVEL_DATA[state.currentLevel];
    if (!lvlData || !lvlData.sets || lvlData.sets.length <= 1) return;

    const setsCount = lvlData.sets.length;
    let newIndex = (lvlData.currentSetIndex || 0) + delta;
    
    // Wrap around or clamp
    if (newIndex < 0) newIndex = setsCount - 1;
    if (newIndex >= setsCount) newIndex = 0;

    lvlData.currentSetIndex = newIndex;
    renderActiveLevelAndSet();

    // Re-evaluate which nav arrow to highlight (if in practice mode)
    updateNextBtnPracticeHint();
  }

  function setDirectSet(index) {
    const lvlData = LEVEL_DATA[state.currentLevel];
    if (!lvlData || !lvlData.sets || index < 0 || index >= lvlData.sets.length) return;
    lvlData.currentSetIndex = index;
    renderActiveLevelAndSet();
    // Re-evaluate practice hints so letter highlight stays on after set navigation
    updateNextBtnPracticeHint();
  }

  function renderActiveLevelAndSet() {
    const lvlData = LEVEL_DATA[state.currentLevel] || LEVEL_DATA[1];
    const sets = lvlData.sets || [];
    const currentSetIndex = lvlData.currentSetIndex || 0;
    const activeSet = sets[currentSetIndex] || sets[0];

    // Header Title & Set Pills Switcher
    if (sets.length > 1) {
      let pillsHtml = `<div class="set-pills-container">`;
      sets.forEach((s, idx) => {
        const isActive = idx === currentSetIndex ? 'active' : '';
        pillsHtml += `<button class="set-pill-btn ${isActive}" type="button" data-set-idx="${idx}">${s.name}</button>`;
      });
      pillsHtml += `</div>`;

      el.keypadTitle.innerHTML = `
        <span>${lvlData.title}</span>
        ${pillsHtml}
      `;

      // Attach event listeners to set pills
      const pillBtns = el.keypadTitle.querySelectorAll('.set-pill-btn');
      pillBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const sIdx = parseInt(btn.getAttribute('data-set-idx'), 10);
          setDirectSet(sIdx);
        });
      });
    } else {
      el.keypadTitle.textContent = lvlData.title;
    }

    renderKeypad(lvlData, activeSet);
    renderSyllables(activeSet.syllables || []);
    renderSampleWords(activeSet.sampleWords || []);
    if (el.listTotalCountBadge) {
      el.listTotalCountBadge.textContent = activeSet.sampleWords ? activeSet.sampleWords.length : 0;
    }

    // Render set pills inside the list view too
    if (el.listSetPillsRow) {
      if (sets.length > 1) {
        let listPillsHtml = '';
        sets.forEach((s, idx) => {
          const isActive = idx === currentSetIndex ? 'active' : '';
          listPillsHtml += `<button class="set-pill-btn ${isActive}" type="button" data-set-idx="${idx}" title="Show words from ${s.name}">${s.name}</button>`;
        });
        el.listSetPillsRow.innerHTML = listPillsHtml;
        el.listSetPillsRow.querySelectorAll('.set-pill-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const sIdx = parseInt(btn.getAttribute('data-set-idx'), 10);
            setDirectSet(sIdx);
          });
        });
        el.listSetPillsRow.style.display = 'flex';
      } else {
        el.listSetPillsRow.innerHTML = '';
        el.listSetPillsRow.style.display = 'none';
      }
    }
  }

  function renderKeypad(lvlData, activeSet) {
    el.letterGridWrapper.innerHTML = '';
    const sets = lvlData.sets || [];
    const hasMultipleSets = sets.length > 1;
    const currentSetIndex = lvlData.currentSetIndex || 0;

    // Row 1: Vowels (with < and > buttons)
    const row1Div = document.createElement('div');
    row1Div.className = 'letter-row';

    if (hasMultipleSets) {
      // Prev Set Button (<)
      const prevBtn = document.createElement('button');
      prevBtn.className = 'nav-arrow-btn';
      prevBtn.id = 'prevSetBtn';
      prevBtn.setAttribute('type', 'button');
      prevBtn.innerHTML = '&lt;';
      prevBtn.title = 'Previous Set (<)';
      prevBtn.onclick = () => switchSet(-1);
      row1Div.appendChild(prevBtn);
    }

    // Vowels in Row 1 (e.g. அ, ஆ)
    const vowels = activeSet.vowels || ['அ', 'ஆ'];
    vowels.forEach(char => {
      const btn = document.createElement('button');
      btn.className = 'letter-btn';
      btn.setAttribute('data-char', char);
      btn.setAttribute('type', 'button');
      btn.innerHTML = `<span class="letter-char">${char}</span>`;
      btn.addEventListener('click', () => addLetter(char));
      row1Div.appendChild(btn);
    });

    if (hasMultipleSets) {
      // Next Set Button (>)
      const nextBtn = document.createElement('button');
      nextBtn.className = 'nav-arrow-btn';
      nextBtn.id = 'nextSetBtn';
      nextBtn.setAttribute('type', 'button');
      nextBtn.innerHTML = '&gt;';
      nextBtn.title = 'Next Set (>)';
      nextBtn.onclick = () => switchSet(1);
      row1Div.appendChild(nextBtn);
    }

    el.letterGridWrapper.appendChild(row1Div);

    // Rows 2 through 5: Consonants / Uyirmei rows for active set
    (activeSet.rows || []).forEach(rowArr => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'letter-row';

      rowArr.forEach(char => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.setAttribute('data-char', char);
        btn.setAttribute('type', 'button');
        btn.innerHTML = `<span class="letter-char">${char}</span>`;
        btn.addEventListener('click', () => addLetter(char));
        rowDiv.appendChild(btn);
      });

      el.letterGridWrapper.appendChild(rowDiv);
    });
  }

  function renderSyllables(syllables) {
    el.syllableChipsList.innerHTML = '';
    const count = syllables ? syllables.length : 0;
    if (el.syllablesCountBadge) {
      el.syllablesCountBadge.textContent = count;
    }

    if (!syllables || syllables.length === 0) {
      el.syllableChipsList.innerHTML = '<span style="color: var(--text-muted); font-size: 0.72rem;">No syllables</span>';
      return;
    }

    syllables.forEach(syl => {
      const chip = document.createElement('button');
      chip.className = 'syllable-chip';
      chip.setAttribute('type', 'button');
      chip.textContent = syl;
      chip.title = `Click to animate & read: "${syl}"`;

      chip.addEventListener('click', () => {
        handleSampleItemClick(syl, chip);
      });

      el.syllableChipsList.appendChild(chip);
    });
  }

  function renderSampleWords(words) {
    el.wordChipsList.innerHTML = '';
    const count = words ? words.length : 0;
    if (el.wordsCountBadge) {
      el.wordsCountBadge.textContent = count;
    }

    if (!words || words.length === 0) {
      el.wordChipsList.innerHTML = '<span style="color: var(--text-muted); font-size: 0.72rem;">No sample words</span>';
      return;
    }

    words.forEach(item => {
      const card = document.createElement('div');
      card.className = 'word-item-card';
      card.title = `Click to animate & read: "${item.word}" (${item.meaning})`;
      const translit = getSimpleTranslit(item.word);
      card.innerHTML = `
        <div class="word-card-left">
          <span class="word-card-icon">${item.icon || '📝'}</span>
          <div>
            <span class="word-card-tamil">${item.word}</span>
            <div class="word-card-translit">${translit}</div>
          </div>
        </div>
        <span class="word-card-meaning">${item.meaning}</span>
      `;

      card.addEventListener('click', () => {
        handleSampleItemClick(item.word, card);
      });

      el.wordChipsList.appendChild(card);
    });
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    el.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  // =========================================================================
  // 8. INITIALIZATION & EVENTS
  // =========================================================================

  /**
   * In practice mode, highlight the EXACT next letter button to press (green glow).
   * If that character is on a different set, pulse the nav arrow (blue) instead.
   */
  function updateNextBtnPracticeHint() {
    // 1. Clear all existing hints
    document.querySelectorAll('.nav-arrow-btn').forEach(b => b.classList.remove('practice-next-hint'));
    document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('practice-next-letter'));
    document.querySelectorAll('.set-pill-btn').forEach(b => b.classList.remove('practice-next-set'));

    if (!state.practiceTarget || state.isAnimating) return;

    const lvlData = LEVEL_DATA[state.currentLevel] || LEVEL_DATA[1];
    const sets = lvlData.sets || [];

    const typedSoFar = state.currentText || '';
    const tokens = tokenizeTamil(state.practiceTarget);
    const typedTokens = tokenizeTamil(typedSoFar);
    const nextIdx = typedTokens.length;

    if (nextIdx >= tokens.length) return;

    const nextChar = tokens[nextIdx];
    if (!nextChar || nextChar === ' ') return;

    const currentSetIdx = lvlData.currentSetIndex || 0;

    if (sets.length > 1) {
      const targetSetIdx = findSetIndexForChar(nextChar, lvlData);

      // Always highlight the TARGET set pill (amber) — even when already on the right set
      const targetPill = el.keypadTitle.querySelector(`.set-pill-btn[data-set-idx="${targetSetIdx}"]`);
      if (targetPill) targetPill.classList.add('practice-next-set');

      if (targetSetIdx !== currentSetIdx) {
        // Wrong set showing — also pulse the nav arrow (blue) so user knows which way to go
        const delta = targetSetIdx > currentSetIdx ? 1 : -1;
        const btnId = delta > 0 ? 'nextSetBtn' : 'prevSetBtn';
        const btn = document.getElementById(btnId);
        if (btn) btn.classList.add('practice-next-hint');
        return; // Letter button isn't rendered on a different set's keypad
      }
    }

    // On the correct set — ALSO highlight the SPECIFIC letter button (green)
    const letterBtns = document.querySelectorAll(`.letter-btn[data-char="${CSS.escape(nextChar)}"]`);
    letterBtns.forEach(b => b.classList.add('practice-next-letter'));
  }

  /** Show the practice listen bar with the target word */
  function showPracticeListenBar(word) {
    const bar = document.getElementById('practiceListenBar');
    const target = document.getElementById('practiceListenTarget');
    if (bar) bar.classList.remove('hidden');
    if (target) target.textContent = word || '—';
  }

  /** Hide the practice listen bar */
  function hidePracticeListenBar() {
    const bar = document.getElementById('practiceListenBar');
    if (bar) bar.classList.add('hidden');
  }

  /** Toggle fullscreen for the app */
  function toggleFullscreen() {
    const fsIcon = document.getElementById('fullscreenIcon');
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      const el2 = document.documentElement;
      if (el2.requestFullscreen) {
        el2.requestFullscreen();
      } else if (el2.webkitRequestFullscreen) {
        el2.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }

    // Update icon
    document.addEventListener('fullscreenchange', updateFullscreenIcon);
    document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
  }

  function updateFullscreenIcon() {
    const fsIcon = document.getElementById('fullscreenIcon');
    if (!fsIcon) return;
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
    fsIcon.className = isFs ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
    const btn = document.getElementById('fullscreenBtn');
    if (btn) btn.title = isFs ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)';
  }

  function switchViewMode(mode) {
    state.viewMode = mode;
    if (mode === 'buttons') {
      if (el.viewModeButtonsBtn) {
        el.viewModeButtonsBtn.classList.add('active');
        el.viewModeButtonsBtn.setAttribute('aria-selected', 'true');
      }
      if (el.viewModeListBtn) {
        el.viewModeListBtn.classList.remove('active');
        el.viewModeListBtn.setAttribute('aria-selected', 'false');
      }
      if (el.keypadCard) el.keypadCard.classList.add('active');
      if (el.listCard) el.listCard.classList.remove('active');
    } else {
      state.practiceTarget = null;
      updateDisplay();
      if (el.viewModeListBtn) {
        el.viewModeListBtn.classList.add('active');
        el.viewModeListBtn.setAttribute('aria-selected', 'true');
      }
      if (el.viewModeButtonsBtn) {
        el.viewModeButtonsBtn.classList.remove('active');
        el.viewModeButtonsBtn.setAttribute('aria-selected', 'false');
      }
      if (el.listCard) el.listCard.classList.add('active');
      if (el.keypadCard) el.keypadCard.classList.remove('active');
    }
  }

  function switchTab(tabName) {
    state.activeTab = tabName;
    if (tabName === 'words') {
      if (el.tabWordsBtn) {
        el.tabWordsBtn.classList.add('active');
        el.tabWordsBtn.setAttribute('aria-selected', 'true');
      }
      if (el.tabSyllablesBtn) {
        el.tabSyllablesBtn.classList.remove('active');
        el.tabSyllablesBtn.setAttribute('aria-selected', 'false');
      }
      if (el.wordsTabContent) el.wordsTabContent.classList.add('active');
      if (el.syllablesTabContent) el.syllablesTabContent.classList.remove('active');
    } else {
      if (el.tabSyllablesBtn) {
        el.tabSyllablesBtn.classList.add('active');
        el.tabSyllablesBtn.setAttribute('aria-selected', 'true');
      }
      if (el.tabWordsBtn) {
        el.tabWordsBtn.classList.remove('active');
        el.tabWordsBtn.setAttribute('aria-selected', 'false');
      }
      if (el.syllablesTabContent) el.syllablesTabContent.classList.add('active');
      if (el.wordsTabContent) el.wordsTabContent.classList.remove('active');
    }
  }

  function setupEvents() {
    el.levelPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const lvl = pill.getAttribute('data-level');
        switchLevel(lvl);
      });
    });

    if (el.viewModeButtonsBtn) {
      el.viewModeButtonsBtn.addEventListener('click', () => switchViewMode('buttons'));
    }
    if (el.viewModeListBtn) {
      el.viewModeListBtn.addEventListener('click', () => switchViewMode('list'));
    }

    if (el.tabWordsBtn) {
      el.tabWordsBtn.addEventListener('click', () => switchTab('words'));
    }
    if (el.tabSyllablesBtn) {
      el.tabSyllablesBtn.addEventListener('click', () => switchTab('syllables'));
    }

    if (el.modeToggleBtn) el.modeToggleBtn.addEventListener('click', handleModeToggle);
    el.clearBtn.addEventListener('click', handleClear);
    el.readBtn.addEventListener('click', handleRead);
    el.backspaceBtn.addEventListener('click', handleBackspace);
    if (el.spaceBtn) el.spaceBtn.addEventListener('click', handleSpace);

    // Practice Mode: Listen Again button
    const practiceListenAgainBtn = document.getElementById('practiceListenAgainBtn');
    if (practiceListenAgainBtn) {
      practiceListenAgainBtn.addEventListener('click', () => {
        if (state.practiceTarget) {
          speakTamil(state.practiceTarget);
        }
      });
    }

    // Practice Mode: Skip (Give Up) button
    const practiceGiveUpBtn = document.getElementById('practiceGiveUpBtn');
    if (practiceGiveUpBtn) {
      practiceGiveUpBtn.addEventListener('click', () => {
        handleClear();
        switchViewMode('list');
        showToast('⏭ Skipped. Pick another word to practice!');
      });
    }

    // Test Mode Dictation Controls
    if (el.testListenBtn) {
      el.testListenBtn.addEventListener('click', () => {
        if (state.testTarget) {
          speakTamil(state.testTarget);
          showToast(`🎧 Dictation: "${state.testTarget}"`);
        }
      });
    }

    if (el.testSubmitBtn) {
      el.testSubmitBtn.addEventListener('click', submitDictationAnswer);
    }

    if (el.retakeTestBtn) {
      el.retakeTestBtn.addEventListener('click', () => {
        startDictationTest();
      });
    }

    if (el.retakeTestBtn) {
      el.retakeTestBtn.addEventListener('click', () => {
        if (el.testScoreModal) el.testScoreModal.classList.add('hidden');
        startDictationTest();
      });
    }

    if (el.scoreExitBtn) {
      el.scoreExitBtn.addEventListener('click', () => {
        if (el.testScoreModal) el.testScoreModal.classList.add('hidden');
        if (state.testSession) {
          state.testSession.userAnswers = [];
          state.testSession.score = 0;
          state.testSession.isActive = false;
        }
        exitTestMode(false);
      });
    }

    if (el.testScoreModal) {
      el.testScoreModal.addEventListener('click', (e) => {
        if (e.target === el.testScoreModal) {
          el.testScoreModal.classList.add('hidden');
          if (state.testSession) {
            state.testSession.userAnswers = [];
            state.testSession.score = 0;
            state.testSession.isActive = false;
          }
          exitTestMode(false);
        }
      });
    }

    // Slider: Question Count
    if (el.questionCountSlider) {
      el.questionCountSlider.addEventListener('input', () => {
        const val = parseInt(el.questionCountSlider.value, 10);
        state.testConfig.questionCount = val;
        if (el.questionCountValue) el.questionCountValue.textContent = val;
      });
    }

    // Slider: Min Word Length
    if (el.wordLengthSlider) {
      el.wordLengthSlider.addEventListener('input', () => {
        const val = parseInt(el.wordLengthSlider.value, 10);
        state.testConfig.minWordLength = val;
        if (el.wordLengthValue) el.wordLengthValue.textContent = val;
      });
    }

    // Speed Controls
    const speedButtons = [el.speedSlow, el.speedNormal, el.speedFast];
    speedButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        speedButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.speechRate = parseFloat(btn.getAttribute('data-speed'));
      });
    });

    // Theme Toggle
    el.themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      el.themeToggleBtn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });

    // Fullscreen button
    const fullscreenBtnEl = document.getElementById('fullscreenBtn');
    if (fullscreenBtnEl) {
      fullscreenBtnEl.addEventListener('click', toggleFullscreen);
      document.addEventListener('fullscreenchange', updateFullscreenIcon);
      document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === ' ') {
        e.preventDefault();
        handleSpace();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleRead();
      } else if (e.key === 'ArrowLeft' && e.altKey) {
        switchSet(-1);
      } else if (e.key === 'ArrowRight' && e.altKey) {
        switchSet(1);
      } else if (e.key === 'Escape') {
        stopAudio();
      } else if (e.key === 'f' || e.key === 'F') {
        // F key = fullscreen (only if not typing in an input)
        if (document.activeElement.tagName !== 'INPUT') {
          toggleFullscreen();
        }
      }
    });
  }

  function init() {
    setupEvents();
    switchLevel(1);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
