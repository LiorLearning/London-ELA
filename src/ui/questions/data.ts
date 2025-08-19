import { BlendingQuestion, SpeechQuestion, Question } from './types';

export const blendingQuestions: BlendingQuestion[] = [
  {
    id: 1,
    word: 'London',
    imageUrl: '🍪✨',
    phonemes: ['L', 'on', 'don'],
    explanation: "Blend the sounds L-on-don to make 'London'!",
  },
];

export const speechQuestions: SpeechQuestion[] = [
  {
    id: 1,
    text:
      "London discovered a secret baking chamber hidden in her cosmic cookie cave on the moon. Her alien teammates gathered around with huge glowing eyes, ready to help. 'You must bake the perfect cosmic cookies,' her best friend explained sweetly. 'Mix the stardust flour and watch it shine with sparkly light.' London smiled brightly, touched the magical mixing bowl gently, and whispered the secret recipe. Suddenly, the dough began to shine brilliantly, transforming into cookies that tasted like stars.",
    imageUrl: '🍪🌙👽✨🌟',
    expectedWords: ['bake', 'shine', 'like', 'huge'],
    explanation: 'Amazing reading! You found all the silent e words in London\'s cosmic cookie adventure.',
  },
];

export const longAQuestions: Question[] = [
  {
    id: 1,
    word: 'name',
    imageUrl: '🍪✨',
    isSpelling: true,
    correctAnswer: 'name',
    explanation: 'London\'s magical "name" sparkles on the cosmic cookie recipe - the long a sound with silent e at the end!',
    aiHook: {
      targetWord: 'name',
      intent: 'spelling',
      baseLine: 'London discovers her identity written in stardust letters on a magical cookie recipe scroll.',
      questionLine: 'Listen and type the long a word with silent e for what you are called.',
      validationWord: 'name',
      imagePrompt: 'Magical glowing cookie recipe showing London\'s NAME written in sparkling stardust letters in her cosmic cookie cave, alien teammates and floating flour visible; clearly shows the name on the recipe.'
    }
  },
  {
    id: 2,
    word: 'bake',
    imageUrl: '🍪✨',
    isSpelling: true,
    correctAnswer: 'bake',
    explanation: 'London loves to "bake" cosmic cookies that taste like stardust - the long a sound with silent e at the end!',
    aiHook: {
      targetWord: 'bake',
      intent: 'spelling',
      baseLine: 'London uses the magical sun rays as her cosmic oven to create the most delicious cookies in the galaxy.',
      questionLine: 'Listen and type the long a word with silent e for cooking cookies.',
      validationWord: 'bake',
      imagePrompt: 'London BAKING cosmic cookies using magical sun rays as an oven on the moon, alien teammates watching with glowing eyes, flour floating like cosmic dust; composition highlights the baking action clearly.'
    }
  },
];

export const questions: Question[] = [
  {
    id: 1,
    word: 'cake',
    imageUrl: '🎂✨',
    isSpelling: true,
    correctAnswer: 'cake',
    explanation: 'A cosmic "cake" made of stardust and moonbeams - the long a sound with silent e at the end!',
    aiHook: {
      targetWord: 'cake',
      intent: 'spelling',
      baseLine: 'London creates a special birthday celebration on the moon with a glowing cosmic dessert.',
      questionLine: 'Listen and type the long a word with silent e for the sweet treat.',
      validationWord: 'cake',
      imagePrompt: 'Magical cosmic CAKE made of stardust with sparkly candles on the moon, London and alien teammates celebrating, sugar crystals shimmering around; clearly shows a decorated cake with cosmic properties.'
    }
  },
  {
    id: 2,
    word: 'make',
    imageUrl: '🍪✨',
    isSpelling: true,
    correctAnswer: 'make',
    explanation: 'London can "make" the most delicious cosmic cookies - the long a sound with silent e at the end!',
    aiHook: {
      targetWord: 'make',
      intent: 'spelling',
      baseLine: 'London crafts amazing cookies using cosmic ingredients and magical baking tools.',
      questionLine: 'Listen and type the long a word with silent e for creating something.',
      validationWord: 'make',
      imagePrompt: 'London using magical baking tools to MAKE cosmic cookies in her moon cave, sparkling ingredients floating around; composition shows the act of creating delicious treats.'
    }
  },
  {
    id: 3,
    word: 'take',
    imageUrl: '🍪✨',
    isSpelling: true,
    correctAnswer: 'take',
    explanation: 'London will "take" a cosmic cookie from her secret stash - the long a sound with silent e at the end!',
    aiHook: {
      targetWord: 'take',
      intent: 'spelling',
      baseLine: 'London reaches for a glowing stardust cookie from her secret crater stash on the moon.',
      questionLine: 'Listen and type the long a word with silent e for grabbing something.',
      validationWord: 'take',
      imagePrompt: 'London reaching to TAKE a glowing cosmic cookie from her secret moon crater stash, magical sparkles emanating from the cookie; focus on the action of taking.'
    }
  },
  {
    id: 4,
    word: 'game',
    imageUrl: '🎲✨',
    isSpelling: true,
    correctAnswer: 'game',
    explanation: 'London plays a fun cookie-decorating "game" with her alien friends - the long a sound with silent e at the end!',
    aiHook: {
      targetWord: 'game',
      intent: 'spelling',
      baseLine: 'Floating cookie shapes and decorating tools surround London as she plays with her alien teammates.',
      questionLine: 'Listen and type the long a word with silent e for a fun activity.',
      validationWord: 'game',
      imagePrompt: 'Magical floating cookie decorating GAME pieces around London and alien teammates on the moon, glowing sprinkles and icing visible; composition highlights the fun game elements.'
    }
  },
];

export const options: string[] = ['th', 'ch', 'fr'];


