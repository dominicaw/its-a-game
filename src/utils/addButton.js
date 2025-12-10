import colors from './colors'

export default function addButton(
  txt = 'start game',
  p = center(),
  a = 'center',
  f = () => debug.log('hello')
) {
  const btn = add([
    rect(240, 80, { radius: 8 }),
    pos(p),
    area(),
    scale(1),
    anchor(a),
    color(colors.PURPLE_MID),
  ])

  btn.add([text(txt), anchor(a), color(colors.PURPLE_DARKEST)])

  btn.onHoverUpdate(() => {
    btn.scale = vec2(1.1)
    setCursor('pointer')
  })

  btn.onHoverEnd(() => {
    btn.scale = vec2(1)

    setCursor('inherit')
  })

  btn.onClick(f)

  return btn
}
