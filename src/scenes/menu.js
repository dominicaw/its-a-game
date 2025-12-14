import k from '../kaplay'
import addButton from '../utils/addButton'

k.scene('menu', () => {
  const centerCoords = k.center()

  addButton('Start', centerCoords, 'center', () => {
    k.go('name')
  })
})
