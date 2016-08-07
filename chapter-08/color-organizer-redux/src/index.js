import storeFactory from './store'
import { addColor, removeColor, rateColor, sortColors } from './actions'

const store = storeFactory()

store.dispatch(addColor("Bonkers Blue", "#1122FF"))
store.dispatch(rateColor("8658c1d0-9eda-4a90-95e1-8001e8eb6036", 5))
store.dispatch(sortColors("title"))
store.dispatch(removeColor("a5685c39-6bdc-4727-9188-6c9a00bf7f95"))

console.log('current state', store.getState())
console.log('Go ahead, dispatch some actions...')

window.store = store
window.addColor = addColor
window.removeColor = removeColor
window.rateColor = rateColor
window.sortColors = sortColors