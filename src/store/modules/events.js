import highlight from '@/data/events/artup19.js'

export default {
  state: {
    showHighlight: false,
    highlight,
    list: []
  },
  getters: {
    appEvents: state => state
  }
}
