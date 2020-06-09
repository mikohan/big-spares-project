export const state = function() {
  return {
    token: ''
  }
}

export const mutations = {
  setToken(state, token) {
    return state.token = token
  }
}

export const actions = {
  fetchToken(vuexContext, context) {
    // console.log(context)
    vuexContext.commit('setToken', context.key)
  }
}

export const getters = {
  getToken(state) {
    return state.token
  }
}