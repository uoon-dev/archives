const state = {
  loading: true
}

const mutations = {
  'SET_LOADING' (state) {
    console.log(state)
    setTimeout(() => {
      state.loading = false
    }, 2000)
  }
}

const actions = {
  initLoading: ({ commit }) => {
    commit('SET_LOADING')
  }
}

const getters = {
  loading: state => state.loading
}

export default {
  state,
  mutations,
  actions,
  getters
}
