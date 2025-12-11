const fortunes = {
  categories: {
    love: {
      followUpQuestions: [
        {
          question:
            'Tell me, {NAME}… which part of your heart feels most like an untidy yarn ball today?',
          choices: ['trust', 'timing', 'connection', 'uncertainty'],
        },
        {
          question: 'What kind of love are you hoping to purr into your life?',
          choices: ['new beginnings', 'reconciliation', 'clarity', 'passion'],
        },
      ],
      fortunes: [
        'Ahh, {NAME}, your heart purrs softly. By speaking of {ANSWER}, you’ve brushed open a door. A warm presence pads toward you — gentle, steady, and ready to curl beside your spirit.',
        'Listen closely, {NAME}… can you hear that soft purring? That’s love stretching awake. Your reflection on {ANSWER} has summoned a bond that will nuzzle its way into your days.',
      ],
    },

    fortune: {
      followUpQuestions: [
        {
          question:
            'Which part of your life feels ready to be paw-sperous, hmm?',
          choices: ['career', 'finances', 'opportunity', 'creativity'],
        },
        {
          question:
            'What precious resource do you wish you could bat closer with your paw?',
          choices: ['time', 'money', 'confidence', 'stability'],
        },
      ],
      fortunes: [
        'Fortune flicks its tail in your direction, {NAME}. By focusing on {ANSWER}, you’ve aligned yourself with an opportunity ready to leap into your lap.',
        'Mmm, I see shiny things in your future, {NAME}. Your thoughts of {ANSWER} attract abundance the way a sunbeam attracts a cat — irresistibly.',
      ],
    },

    guidance: {
      followUpQuestions: [
        {
          question:
            'Which path ahead feels as confusing as a laser pointer on the wall?',
          choices: ['work', 'relationships', 'purpose', 'personal growth'],
        },
        {
          question:
            'What do you feel you’re missing to leap forward with grace?',
          choices: ['courage', 'direction', 'reassurance', 'perspective'],
        },
      ],
      fortunes: [
        'The path ahead settles like a calm tail, {NAME}. Your awareness of {ANSWER} tells the universe where to shine its light — guiding you as surely as moonbeams guide night-prowling paws.',
        'Don’t worry, little wanderer {NAME}. Because you spoke of {ANSWER}, clarity prowls closer. Expect wisdom to appear where you least expect it — perhaps in the form of a message, a moment, or a meow.',
      ],
    },

    surprise: {
      followUpQuestions: [
        {
          question:
            'What sort of surprise makes your whiskers twitch with anticipation?',
          choices: ['good news', 'adventure', 'change', 'recognition'],
        },
        {
          question:
            'Which part of your life has become a bit too… un-stimulating? Like a toy mouse that’s lost its squeak?',
          choices: ['relationships', 'routine', 'career', 'emotions'],
        },
      ],
      fortunes: [
        'Something delightful stalks your future, {NAME} — but fear not, it means no harm. Your desire for {ANSWER} has caught the attention of fate, and it’s preparing a playful pounce.',
        'Ohoho, your whiskers should be tingling, {NAME}. By revealing your wish for {ANSWER}, you’ve tempted the universe into a mischievous mood. A surprise will spring soon — landing softly, but changing your day.',
      ],
    },
  },
}

export default fortunes
