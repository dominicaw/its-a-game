import k from '../kaplay'
import addButton from '../utils/addButton'
import fortunes from '../data/options'

k.scene('name', () => {
  const centerCoords = k.center()

  const name = k.add([
    k.text('what is your name?'),
    k.pos(centerCoords),
    k.anchor('center'),
  ])

  const username = k.add([
    k.text(''),
    k.textInput(true, 20),
    k.pos(centerCoords.x, centerCoords.y + 100),
    k.anchor('center'),
  ])

  k.onKeyPress('enter', () => {
    k.go('categorySelect', username)
  })
})

k.scene('categorySelect', (name) => {
  const centerCoords = k.center()

  k.add([
    k.text(`${name.text}, what are you seeking?`),
    k.pos(centerCoords.x, centerCoords.y - 20),
    k.anchor('center'),
  ])

  // Create buttons for the four categories
  const categories = ['love', 'fortune', 'guidance', 'surprise']
  const buttonSpacing = 80

  categories.forEach((category, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(category, (centerCoords.x, yPos), 'center', () => {
      k.go(category, name)
    })
  })
})

// Create scenes for each category
k.scene('love', (name) => {
  const centerCoords = k.center()

  // Randomly select one of the two followUpQuestions
  const questions = fortunes.categories.love.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  k.add([
    k.text(randomQuestion.question.replace('{NAME}', name.text)),
    k.pos(centerCoords.x, centerCoords.y - 20),
    k.anchor('center'),
  ])

  // Add buttons for choices
  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      k.go('fortuneResult', { name, category: 'love', choice })
    })
  })
})

k.scene('fortune', (name) => {
  const centerCoords = k.center()

  const questions = fortunes.categories.fortune.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  k.add([
    k.text(randomQuestion.question.replace('{NAME}', name.text)),
    k.pos(centerCoords.x, centerCoords.y - 20),
    k.anchor('center'),
  ])

  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      go('fortuneResult', { name, category: 'fortune', choice })
    })
  })
})

k.scene('guidance', (name) => {
  const centerCoords = k.center()

  const questions = fortunes.categories.guidance.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  k.add([
    k.text(randomQuestion.question.replace('{NAME}', name.text)),
    k.pos(centerCoords.x, centerCoords.y - 20),
    k.anchor('center'),
  ])

  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      k.go('fortuneResult', { name, category: 'guidance', choice })
    })
  })
})

k.scene('surprise', (name) => {
  const centerCoords = k.center()

  const questions = fortunes.categories.surprise.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  k.add([
    k.text(randomQuestion.question.replace('{NAME}', name.text)),
    k.pos(centerCoords.x, centerCoords.y - 20),
    k.anchor('center'),
  ])

  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      k.go('fortuneResult', { name, category: 'surprise', choice })
    })
  })
})

k.scene('fortuneResult', (data) => {
  const centerCoords = k.center()

  // Get the fortune for this category
  const categoryData = fortunes.categories[data.category]
  const randomFortune =
    categoryData.fortunes[
      Math.floor(Math.random() * categoryData.fortunes.length)
    ]

  // Replace placeholders in the fortune text
  const fortuneText = randomFortune
    .replace('{NAME}', data.name.text)
    .replace('{ANSWER}', data.choice)

  k.add([
    k.text(fortuneText, {
      width: 320,
    }),
    k.pos(centerCoords.x, centerCoords.y),
    k.anchor('center'),
  ])
})
