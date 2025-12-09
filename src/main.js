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
  loadCrew('sprite', 'play')
  loadCrew('sound', 'mark_voice')

  function addButton(
    txt = 'start game',
    p = vec2(200, 100),
    f = () => debug.log('hello')
  ) {
    const btn = add([
      rect(240, 80, { radius: 8 }),
      pos(p),
      area(),
      scale(1),
      anchor('center'),
      outline(4),
      color(255, 255, 255),
    ])

    btn.add([text(txt), anchor('center'), color(0, 0, 0)])

    btn.onHoverUpdate(() => {
      const t = time() * 10
      btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
      btn.scale = vec2(1.2)
      setCursor('pointer')
    })

    btn.onHoverEnd(() => {
      btn.scale = vec2(1)
      btn.color = rgb()
    })

    btn.onClick(f)

    return btn
  }

  addButton('Start', vec2(200, 100), () => {
    play('mark_voice'), go('nonsense')
  })
  addButton('Quit', vec2(200, 200), () => {
    play('mark_voice')
  })
})

go('menu')

scene('nonsense', () => {
  loadCrew('sprite', 'bean')
  loadCrew('sprite', 'gigagantrum')
  loadCrew('sound', 'bean_voice')

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
    play('bean_voice')
    shake(5)
    flash('#cc425e', 0.2)
    addKaboom(player.worldPos())
  })

  onClick(() => addKaboom(mousePos()))
})
