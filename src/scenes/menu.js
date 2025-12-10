import addButton from '../utils/addButton'

scene('menu', () => {
  loadCrew('sprite', 'mark')
  loadCrew('sound', 'mark_voice')

  const centerCoords = center()

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  addButton('Start', centerCoords, () => {
    play('mark_voice'), go('game')
  })
})
