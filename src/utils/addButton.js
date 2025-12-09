export default function addButton(
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
