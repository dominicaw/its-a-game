import addButton from '../utils/addButton'
import fortunes from '../data/options'

scene('name', () => {
  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  const name = add([
    text('what is your name?'),
    pos(centerCoords),
    anchor('center'),
  ])

  const username = add([
    text(''),
    textInput(true, 20),
    pos(centerCoords.x, centerCoords.y + 100),
    anchor('center'),
  ])

  onKeyPress('enter', () => {
    go('categorySelect', username)
  })
})

scene('categorySelect', (name) => {
  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  add([
    text(`${name.text}, what are you seeking?`),
    pos(centerCoords.x, centerCoords.y - 20),
    anchor('center'),
  ])

  // Create buttons for the four categories
  const categories = ['love', 'fortune', 'guidance', 'surprise']
  const buttonSpacing = 80

  categories.forEach((category, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(category, (centerCoords.x, yPos), 'center', () => {
      go(category, name)
    })
  })
})

// Create scenes for each category
scene('love', (name) => {
  loadCrew('sprite', 'bean')
  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  // Randomly select one of the two followUpQuestions
  const questions = fortunes.categories.love.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  add([
    text(randomQuestion.question.replace('{NAME}', name.text)),
    pos(centerCoords.x, centerCoords.y - 20),
    anchor('center'),
  ])

  // Add buttons for choices
  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      go('fortuneResult', { name, category: 'love', choice })
    })
  })
})

scene('fortune', (name) => {
  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  const questions = fortunes.categories.fortune.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  add([
    text(randomQuestion.question.replace('{NAME}', name.text)),
    pos(centerCoords.x, centerCoords.y - 20),
    anchor('center'),
  ])

  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      go('fortuneResult', { name, category: 'fortune', choice })
    })
  })
})

scene('guidance', (name) => {
  loadCrew('sprite', 'bean')
  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  const questions = fortunes.categories.guidance.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  add([
    text(randomQuestion.question.replace('{NAME}', name.text)),
    pos(centerCoords.x, centerCoords.y - 20),
    anchor('center'),
  ])

  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      go('fortuneResult', { name, category: 'guidance', choice })
    })
  })
})

scene('surprise', (name) => {
  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  const questions = fortunes.categories.surprise.followUpQuestions
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  add([
    text(randomQuestion.question.replace('{NAME}', name.text)),
    pos(centerCoords.x, centerCoords.y - 20),
    anchor('center'),
  ])

  const buttonSpacing = 70
  randomQuestion.choices.forEach((choice, index) => {
    const yPos = centerCoords.y + 40 + index * buttonSpacing

    addButton(choice, (centerCoords.x, yPos), 'center', () => {
      go('fortuneResult', { name, category: 'surprise', choice })
    })
  })
})

// Fortune result scene - displays the final fortune
scene('fortuneResult', (data) => {
  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

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

  add([
    text(fortuneText, {
      width: 320,
    }),
    pos(centerCoords.x, centerCoords.y),
    anchor('center'),
  ])
})
