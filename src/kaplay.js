import kaplay from 'kaplay'
import { crew } from '@kaplayjs/crew'
import colors from './utils/colors'

kaplay({
  focus: false,
  font: 'happy',
  background: colors.PURPLE_DARKEST,
  scale: 1,
  canvas: document.getElementById('game'),
  plugins: [crew],
})
