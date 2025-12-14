import colors from './colors'
import k from '../kaplay'

export default function addButton(
  txt = 'start game',
  p = k.center(),
  a = 'center',
  f = () => debug.log('hello')
) {
  const btn = k.add([
    k.rect(15, 15, { radius: 2 }),
    k.pos(p),
    k.area(),
    k.scale(0.3),
    k.anchor(a),
    k.color(colors.PURPLE_MID),
  ])

  btn.add([
    k.text(txt, { size: 18 }),
    k.anchor(a),
    k.color(colors.PURPLE_DARKEST),
  ])

  btn.onHoverUpdate(() => {
    k.setCursor('pointer')
  })

  btn.onHoverEnd(() => {
    k.setCursor('inherit')
  })

  btn.onClick(f)

  return btn
}
