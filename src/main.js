import kaplay from 'kaplay'
import { crew } from '@kaplayjs/crew'
import 'kaplay/global'
import addButton from './utils/addButton'

kaplay({
  background: '#d46eb3',
  scale: 1,
  canvas: document.getElementById('canvas'),
  plugins: [crew],
})

loadRoot('./')

scene('menu', () => {
  loadCrew('sprite', 'play')
  loadCrew('sound', 'mark_voice')

  addButton('Start', vec2(200, 100), () => {
    play('mark_voice'), go('nonsense')
  })
  addButton('Quit', vec2(200, 200), () => {
    play('mark_voice')
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

  const movements = [
    ['right', 200, 0],
    ['d', 200, 0],
    ['left', -200, 0],
    ['a', -200, 0],
    ['up', 0, -200],
    ['s', 0, -200],
    ['down', 0, 200],
    ['w', 0, 200],
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
