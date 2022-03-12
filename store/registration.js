export const state = () => ({
  isModalVisible: false
})

export const mutations = {
  SET_MODAL_VISBILITY (state, isVisible) {
    state.isModalVisible = isVisible
  }
}
export const actions = {
  setVisibility({commit}, isVisible) {
    commit('SET_MODAL_VISBILITY', isVisible)
  }
}
export const getters = {
  getVisibility: (state) => state.isModalVisible
}
