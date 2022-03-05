import highlight from '@/data/events/artup19.js'

export const state = () => ({
  showHighlight: false,
  highlight,
  list: [],
})

export const getters = {
  appEvents: (state) => state,
  getShowHighlight: (state) => state.showHighlight,
  getHighlight: (state) => state.highlight,
  getList: (state) => state.list,
}
