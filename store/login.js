import Cookie from 'js-cookie'
export const state = function() {
  return {
    token: null
  }
}

export const mutations = {
  setToken(state, token) {
    return (state.token = token)
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  fetchToken(vuexContext, context) {
    vuexContext.commit('setToken', context.key)
    localStorage.setItem('token', context.key)
    Cookie.set('jwt', context.key, { expires: 1000 })
  },
  initAuth(vuexContext, req) {
    let token = null
    if (req) {
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) {
        vuexContext.dispatch('logOut')
        return
      }
      token = jwtCookie.split('=')[1]
    } else {
      token = localStorage.getItem('token')
      if (!token) {
        vuexContext.dispatch('logOut')
        return
      }
    }
    vuexContext.commit('setToken', token)
  },
  logOut(vuexContext) {
    vuexContext.commit('clearToken')
    Cookie.remove('jwt')
    localStorage.removeItem('token')
  }
}

export const getters = {
  getToken(state) {
    return state.token
  },
  isAuthenticated(state) {
    return state.token != null
  }
}

