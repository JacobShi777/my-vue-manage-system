const state = {
  isCollapse: false
}

const mutations = {
  TOGGLE_MENU: state => {
    state.isCollapse = !state.isCollapse
  }
}

export default {
  namespaced: true,
  state,
  mutations
//   actions
}
