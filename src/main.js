import kaplay from 'kaplay'
import { crew } from '@kaplayjs/crew'
import 'kaplay/global'

kaplay({
  background: '#d46eb3',
  scale: 1,
  canvas: document.getElementById('canvas'),
  plugins: [crew],
})

loadRoot('./') // A good idea for Itch.io publishing later
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
