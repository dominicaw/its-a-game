import addButton from '../utils/addButton'

scene('name', () => {
  loadCrew('sprite', 'bean')

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
    go('guidance', username)
  })
})

scene('guidance', (name) => {
  loadCrew('sprite', 'bean')
  const centerCoords = center()
  console.log(name, 'name')

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  const guidanceOption = add([
    text(`${name.text}, what are you seeking?`),
    pos(centerCoords),
    anchor('center'),
  ])

  const guidanceAnswer = add([
    text(''),
    textInput(true, 20),
    pos(centerCoords.x, centerCoords.y + 100),
    anchor('center'),
  ])

  onKeyPress('enter', () => {
    go('guidance', username)
  })
})
