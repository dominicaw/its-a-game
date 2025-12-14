import kaplay from 'kaplay'
import { crew } from '@kaplayjs/crew'
import colors from './utils/colors'

const k = kaplay({
  width: 256,
  height: 256,
  letterbox: true,
  background: colors.PURPLE_LIGHT,
  scale: 4,
  canvas: document.getElementById('game'),
  global: false,
  debug: true,
  debugKey: 'd',
})

export default k
