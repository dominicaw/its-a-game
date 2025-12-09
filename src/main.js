import kaplay from 'kaplay'
import { crew } from '@kaplayjs/crew'
import 'kaplay/global'

kaplay({
  background: '#d46eb3',
  scale: 1,
  canvas: document.getElementById('canvas'),
  plugins: [crew],
})

loadRoot('./')

scene('menu', () => {
  add([
    pos(24, 24),
    text('hej', {
      size: 48,
      width: 320,
      font: 'sans-serif',
    }),
  ])

  loadCrew('sprite', 'play')
  loadCrew('sound', 'mark_voice')

  const playButton = add([sprite('play'), pos(100, 100)])

  playButton.onClick(go('nonsense'))
})

go('menu')

scene('nonsense', () => {
  loadCrew('sprite', 'bean')
  loadCrew('sprite', 'gigagantrum')

  const enemy = add([
    pos(120, 80),
    sprite('gigagantrum'),
    area(),
    body(),
    'enemy',
  ])

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
    ['left', -200, 0],
    ['up', 0, -200],
    ['down', 0, 200],
  ]

  movements.forEach(([key, x, y]) => {
    onKeyDown(key, () => player.move(x, y))
  })

  player.onCollide('enemy', () => {
    player.hurt(1)
    shake(5)
    flash('#cc425e', 0.2)
    addKaboom(player.worldPos())
  })

  onClick(() => addKaboom(mousePos()))
})
