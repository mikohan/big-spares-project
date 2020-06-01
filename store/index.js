const categoryEndpoint = 'http://localhost:8000/api/product/categorytree/'
const categoryFirstEndpoint = 'http://localhost:8000/api/product/categoryfirst/'

export const state = () => ({
  categories: [],
  categoriesFirstLevel: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategoriesFirstLevel(state, categoriesFirstLevel) {
    state.categoriesFirstLevel = categoriesFirstLevel
  }
}

export const actions = {
  fetchCategories(vuexContext, context) {
    return this.$axios.$get(categoryEndpoint)
      .then(data => {
        vuexContext.commit('setCategories', data.results[0])
      })
  },
  fetchCategoriesFirstLevel(vuexContext, context) {
    // Fetching First Level of Categories and depth == 1
    return this.$axios.$get(categoryFirstEndpoint)
      .then(data => {
        vuexContext.commit('setCategoriesFirstLevel', data.results)
      })
  }
}

export const getters = {
  loadedCategories(state) {
    return state.categories
  },
  getCategoriesFirstLevel(state) {
    return state.categoriesFirstLevel
  }
}

