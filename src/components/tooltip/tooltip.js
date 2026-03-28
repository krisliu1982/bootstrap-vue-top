import Tooltip from 'bootstrap/js/dist/tooltip'

export default {
  mounted(el) {
    new Tooltip(el)
  },
  unmounted(el) {
    Tooltip.getInstance(el).dispose()
  }
}
