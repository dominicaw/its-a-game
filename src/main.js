import kaplay from 'kaplay'
import { crew } from '@kaplayjs/crew'
import 'kaplay/global'
import addButton from './utils/addButton'
import colors from './utils/colors'

kaplay({
  background: colors.PURPLE_DARKEST,
  scale: 1,
  canvas: document.getElementById('game'),
  plugins: [crew],
  font: 'sans-serif',
})

loadRoot('./')
const centerCoords = center()

scene('menu', () => {
  loadCrew('sprite', 'mark')
  loadCrew('sound', 'mark_voice')

  add([
    sprite('mark'),
    pos(centerCoords.x, centerCoords.y - 100),
    anchor('center'),
  ])

  addButton('Start', centerCoords, () => {
    play('mark_voice'), go('nonsense')
  })
})

onLoad(() => {
  go('menu')
})

scene('nonsense', () => {
  loadCrew('sprite', 'bean')
  loadCrew('sprite', 'gigagantrum')
  loadCrew('sound', 'bean_voice')

  add([pos(120, 80), sprite('gigagantrum'), area(), body(), 'enemy'])

  const player = add([
    sprite('bean'),
    pos(10, 20),
    area(),
    body(),
    health(8),
    'player',
  ])

  const SPEED = 200

  const movements = [
    ['right', SPEED, 0],
    ['d', SPEED, 0],
    ['left', -SPEED, 0],
    ['a', -SPEED, 0],
    ['up', 0, -SPEED],
    ['s', 0, -SPEED],
    ['down', 0, SPEED],
    ['w', 0, SPEED],
  ]

  movements.forEach(([key, x, y]) => {
    onKeyDown(key, () => player.move(x, y))
  })

  player.onCollide('enemy', () => {
    player.hurt(1)
    play('bean_voice')
    shake(5)
    flash('#cc425e', 0.2)
    addKaboom(player.worldPos())
  })

  onClick(() => addKaboom(mousePos()))
})
