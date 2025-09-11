// Floss Rule and Soft C Spelling Words
// Curated list of words with floss rule patterns (ff, ll, ss, zz) and soft c sounds

export interface CVCSpellingWord {
  id: number;
  word: string;
  vowel: 'a' | 'e' | 'i' | 'o' | 'u' | 'y';
  difficulty: 'easy' | 'medium' | 'hard';
  hint: string;
  category: string;
  questionText: string;
  explanation: string;
  pattern: 'floss_rule' | 'soft_c';
}

export const cvcSpellingWords: CVCSpellingWord[] = [
  // Floss Rule Words - Double consonants after short vowels
  {
    id: 1,
    word: 'buzz',
    vowel: 'u',
    difficulty: 'easy',
    hint: 'The sound a bee makes',
    category: 'sounds',
    questionText: 'Spell the word: The sound a bee makes',
    explanation: 'Great job! BUZZ is spelled B-U-Z-Z with double Z.',
    pattern: 'floss_rule'
  },
  {
    id: 2,
    word: 'jazz',
    vowel: 'a',
    difficulty: 'medium',
    hint: 'A type of music with improvisation',
    category: 'music',
    questionText: 'Spell the word: A type of music that swings',
    explanation: 'Excellent! JAZZ is spelled J-A-Z-Z with double Z.',
    pattern: 'floss_rule'
  },
  {
    id: 3,
    word: 'fizz',
    vowel: 'i',
    difficulty: 'medium',
    hint: 'The bubbling sound in soda',
    category: 'sounds',
    questionText: 'Spell the word: The bubbling sound in a carbonated drink',
    explanation: 'Perfect! FIZZ is spelled F-I-Z-Z with double Z.',
    pattern: 'floss_rule'
  },
  {
    id: 4,
    word: 'fuzz',
    vowel: 'u',
    difficulty: 'easy',
    hint: 'Soft, fluffy hair or fiber',
    category: 'textures',
    questionText: 'Spell the word: Soft, fluffy hair on a peach',
    explanation: 'Well done! FUZZ is spelled F-U-Z-Z with double Z.',
    pattern: 'floss_rule'
  },
  {
    id: 5,
    word: 'bass',
    vowel: 'a',
    difficulty: 'medium',
    hint: 'A type of fish or low musical notes',
    category: 'animals',
    questionText: 'Spell the word: A fish that swimmers catch',
    explanation: 'Great work! BASS is spelled B-A-S-S with double S.',
    pattern: 'floss_rule'
  },
  {
    id: 6,
    word: 'boss',
    vowel: 'o',
    difficulty: 'easy',
    hint: 'The person in charge at work',
    category: 'people',
    questionText: 'Spell the word: The person who leads a team at work',
    explanation: 'Awesome! BOSS is spelled B-O-S-S with double S.',
    pattern: 'floss_rule'
  },
  {
    id: 7,
    word: 'loss',
    vowel: 'o',
    difficulty: 'medium',
    hint: 'The opposite of winning',
    category: 'concepts',
    questionText: 'Spell the word: When your team doesn\'t win the game',
    explanation: 'Fantastic! LOSS is spelled L-O-S-S with double S.',
    pattern: 'floss_rule'
  },
  {
    id: 8,
    word: 'moss',
    vowel: 'o',
    difficulty: 'medium',
    hint: 'Green plant that grows on rocks and trees',
    category: 'nature',
    questionText: 'Spell the word: Green fuzzy plant on tree bark',
    explanation: 'Excellent! MOSS is spelled M-O-S-S with double S.',
    pattern: 'floss_rule'
  },
  {
    id: 9,
    word: 'pass',
    vowel: 'a',
    difficulty: 'easy',
    hint: 'To go by or succeed on a test',
    category: 'actions',
    questionText: 'Spell the word: To succeed on a test',
    explanation: 'Great job! PASS is spelled P-A-S-S with double S.',
    pattern: 'floss_rule'
  },
  {
    id: 10,
    word: 'kiss',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'A gentle touch with lips',
    category: 'actions',
    questionText: 'Spell the word: A gentle touch with your lips',
    explanation: 'Perfect! KISS is spelled K-I-S-S with double S.',
    pattern: 'floss_rule'
  },
  {
    id: 11,
    word: 'miss',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'To fail to hit or to feel sad without someone',
    category: 'actions',
    questionText: 'Spell the word: To fail to catch a ball',
    explanation: 'Well done! MISS is spelled M-I-S-S with double S.',
    pattern: 'floss_rule'
  },
  {
    id: 12,
    word: 'bell',
    vowel: 'e',
    difficulty: 'easy',
    hint: 'Makes a ringing sound',
    category: 'objects',
    questionText: 'Spell the word: It rings to signal the end of class',
    explanation: 'Excellent! BELL is spelled B-E-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 13,
    word: 'cell',
    vowel: 'e',
    difficulty: 'medium',
    hint: 'A small room or basic unit of life',
    category: 'science',
    questionText: 'Spell the word: The basic building block of all living things',
    explanation: 'Great work! CELL is spelled C-E-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 14,
    word: 'fell',
    vowel: 'e',
    difficulty: 'easy',
    hint: 'Past tense of fall',
    category: 'actions',
    questionText: 'Spell the word: What happened when you tripped',
    explanation: 'Fantastic! FELL is spelled F-E-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 15,
    word: 'tell',
    vowel: 'e',
    difficulty: 'easy',
    hint: 'To speak or share information',
    category: 'actions',
    questionText: 'Spell the word: To share a story with someone',
    explanation: 'Perfect! TELL is spelled T-E-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 16,
    word: 'well',
    vowel: 'e',
    difficulty: 'easy',
    hint: 'A deep hole for water or feeling good',
    category: 'objects',
    questionText: 'Spell the word: A deep hole dug to find water',
    explanation: 'Awesome! WELL is spelled W-E-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 17,
    word: 'bill',
    vowel: 'i',
    difficulty: 'medium',
    hint: 'A duck\'s beak or money owed',
    category: 'objects',
    questionText: 'Spell the word: What you pay for electricity',
    explanation: 'Great job! BILL is spelled B-I-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 18,
    word: 'fill',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'To make something full',
    category: 'actions',
    questionText: 'Spell the word: To put water in a glass',
    explanation: 'Excellent! FILL is spelled F-I-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 19,
    word: 'hill',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'A small mountain',
    category: 'nature',
    questionText: 'Spell the word: A small raised area of land',
    explanation: 'Well done! HILL is spelled H-I-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 20,
    word: 'mill',
    vowel: 'i',
    difficulty: 'medium',
    hint: 'A building where grain is ground',
    category: 'buildings',
    questionText: 'Spell the word: Where wheat is ground into flour',
    explanation: 'Perfect! MILL is spelled M-I-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 21,
    word: 'pill',
    vowel: 'i',
    difficulty: 'medium',
    hint: 'Medicine you swallow',
    category: 'medicine',
    questionText: 'Spell the word: Medicine that helps you feel better',
    explanation: 'Great work! PILL is spelled P-I-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 22,
    word: 'will',
    vowel: 'i',
    difficulty: 'medium',
    hint: 'Future tense helper or determination',
    category: 'concepts',
    questionText: 'Spell the word: Shows something will happen in the future',
    explanation: 'Fantastic! WILL is spelled W-I-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 23,
    word: 'doll',
    vowel: 'o',
    difficulty: 'easy',
    hint: 'A toy that looks like a person',
    category: 'toys',
    questionText: 'Spell the word: A toy baby that children play with',
    explanation: 'Awesome! DOLL is spelled D-O-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 24,
    word: 'full',
    vowel: 'u',
    difficulty: 'easy',
    hint: 'Completely filled, not empty',
    category: 'descriptions',
    questionText: 'Spell the word: When a glass has no more room for water',
    explanation: 'Great job! FULL is spelled F-U-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 25,
    word: 'pull',
    vowel: 'u',
    difficulty: 'easy',
    hint: 'To drag something toward you',
    category: 'actions',
    questionText: 'Spell the word: To drag a wagon behind you',
    explanation: 'Perfect! PULL is spelled P-U-L-L with double L.',
    pattern: 'floss_rule'
  },
  {
    id: 26,
    word: 'buff',
    vowel: 'u',
    difficulty: 'medium',
    hint: 'Strong and muscular',
    category: 'descriptions',
    questionText: 'Spell the word: Very strong and muscular',
    explanation: 'Excellent! BUFF is spelled B-U-F-F with double F.',
    pattern: 'floss_rule'
  },
  {
    id: 27,
    word: 'cuff',
    vowel: 'u',
    difficulty: 'medium',
    hint: 'The end of a sleeve',
    category: 'clothing',
    questionText: 'Spell the word: The part of a shirt sleeve at your wrist',
    explanation: 'Well done! CUFF is spelled C-U-F-F with double F.',
    pattern: 'floss_rule'
  },
  {
    id: 28,
    word: 'puff',
    vowel: 'u',
    difficulty: 'easy',
    hint: 'A small cloud or to blow air',
    category: 'actions',
    questionText: 'Spell the word: To blow air out of your mouth',
    explanation: 'Great work! PUFF is spelled P-U-F-F with double F.',
    pattern: 'floss_rule'
  },

  // Soft C Words - C makes "s" sound before e, i, y
  {
    id: 29,
    word: 'city',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'A large town with many buildings',
    category: 'places',
    questionText: 'Spell the word: A large place where many people live',
    explanation: 'Fantastic! CITY is spelled C-I-T-Y with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 30,
    word: 'cent',
    vowel: 'e',
    difficulty: 'medium',
    hint: 'One penny or one hundredth',
    category: 'money',
    questionText: 'Spell the word: One penny is worth one of these',
    explanation: 'Awesome! CENT is spelled C-E-N-T with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 31,
    word: 'cell',
    vowel: 'e',
    difficulty: 'medium',
    hint: 'A small room or basic unit of life',
    category: 'science',
    questionText: 'Spell the word: The basic building block of living things',
    explanation: 'Great job! CELL is spelled C-E-L-L with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 32,
    word: 'mice',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'More than one mouse',
    category: 'animals',
    questionText: 'Spell the word: Many small rodents',
    explanation: 'Perfect! MICE is spelled M-I-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 33,
    word: 'nice',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'Kind and pleasant',
    category: 'descriptions',
    questionText: 'Spell the word: Kind and friendly',
    explanation: 'Excellent! NICE is spelled N-I-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 34,
    word: 'rice',
    vowel: 'i',
    difficulty: 'easy',
    hint: 'White grains you eat with dinner',
    category: 'food',
    questionText: 'Spell the word: White grains often served with chicken',
    explanation: 'Well done! RICE is spelled R-I-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 35,
    word: 'dice',
    vowel: 'i',
    difficulty: 'medium',
    hint: 'Cubes with dots used in games',
    category: 'games',
    questionText: 'Spell the word: Cubes you roll in board games',
    explanation: 'Great work! DICE is spelled D-I-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 36,
    word: 'face',
    vowel: 'a',
    difficulty: 'easy',
    hint: 'The front of your head',
    category: 'body',
    questionText: 'Spell the word: Where your eyes, nose, and mouth are',
    explanation: 'Fantastic! FACE is spelled F-A-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 37,
    word: 'race',
    vowel: 'a',
    difficulty: 'easy',
    hint: 'A competition to see who is fastest',
    category: 'sports',
    questionText: 'Spell the word: A competition to see who runs fastest',
    explanation: 'Awesome! RACE is spelled R-A-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 38,
    word: 'lace',
    vowel: 'a',
    difficulty: 'medium',
    hint: 'Delicate fabric or shoe strings',
    category: 'clothing',
    questionText: 'Spell the word: The strings that tie your shoes',
    explanation: 'Great job! LACE is spelled L-A-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 39,
    word: 'pace',
    vowel: 'a',
    difficulty: 'medium',
    hint: 'The speed of walking or running',
    category: 'actions',
    questionText: 'Spell the word: How fast or slow you walk',
    explanation: 'Perfect! PACE is spelled P-A-C-E with soft C.',
    pattern: 'soft_c'
  },
  {
    id: 40,
    word: 'once',
    vowel: 'o',
    difficulty: 'medium',
    hint: 'One time only',
    category: 'concepts',
    questionText: 'Spell the word: One time, not twice',
    explanation: 'Excellent! ONCE is spelled O-N-C-E with soft C.',
    pattern: 'soft_c'
  }
];

// Helper functions for filtering and selecting spelling words
export const getCVCWordsByVowel = (vowel: 'a' | 'e' | 'i' | 'o' | 'u' | 'y'): CVCSpellingWord[] => {
  return cvcSpellingWords.filter(word => word.vowel === vowel);
};

export const getCVCWordsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): CVCSpellingWord[] => {
  return cvcSpellingWords.filter(word => word.difficulty === difficulty);
};

export const getCVCWordsByCategory = (category: string): CVCSpellingWord[] => {
  return cvcSpellingWords.filter(word => word.category === category);
};

export const getCVCWordsByPattern = (pattern: 'floss_rule' | 'soft_c'): CVCSpellingWord[] => {
  return cvcSpellingWords.filter(word => word.pattern === pattern);
};

export const getFlossRuleWords = (): CVCSpellingWord[] => {
  return getCVCWordsByPattern('floss_rule');
};

export const getSoftCWords = (): CVCSpellingWord[] => {
  return getCVCWordsByPattern('soft_c');
};

export const getRandomCVCWord = (): CVCSpellingWord => {
  const randomIndex = Math.floor(Math.random() * cvcSpellingWords.length);
  return cvcSpellingWords[randomIndex];
};

export const getRandomCVCWordByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): CVCSpellingWord => {
  const filteredWords = getCVCWordsByDifficulty(difficulty);
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

export const getRandomWordByPattern = (pattern: 'floss_rule' | 'soft_c'): CVCSpellingWord => {
  const filteredWords = getCVCWordsByPattern(pattern);
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

// Convert CVC word to SpellingQuestion format for compatibility
export const convertCVCToSpellingQuestion = (cvcWord: CVCSpellingWord) => {
  return {
    id: cvcWord.id,
    topicId: 'CVC-SPELLING',
    topicName: 'CVC_Spelling_Practice',
    word: cvcWord.word,
    questionText: cvcWord.questionText,
    correctAnswer: cvcWord.word,
    audio: cvcWord.word,
    explanation: cvcWord.explanation,
    templateType: 'spelling'
  };
};
