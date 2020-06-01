const categoryEndpoint = 'http://localhost:8000/api/product/categorytree/'

export const state = () => ({
  categories: {}
})

export const actions = {
  getCategories(vuexContext, context) {

    return this.axios.$get(categoryEndpoint)
  }
}

