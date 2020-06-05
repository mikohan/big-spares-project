import { compare } from '~/helpers/sort'
import { findBySlug } from '~/helpers/recursiveFinder'
import { res } from './zapchasti.tmp'
import { mode } from '../config'


const masterUrl = mode === 'local' ? 'http://localhost:8000' : 'https://partshub.tk' 




const categoryEndpoint = `${masterUrl}/api/product/categorytree/`
const categoryFirstEndpoint = `${masterUrl}/api/product/categoryfirst/`
const productEndpoint = `${masterUrl}/api/product/singleproduct/`

export const state = () => ({
  categories: [],
  categoriesFirstLevel: [],
  singleProduct: {}
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategoriesFirstLevel(state, categoriesFirstLevel) {
    state.categoriesFirstLevel = categoriesFirstLevel.sort(compare)
  },
  setSingleProduct(state, product) {
    state.singleProduct = product
  }

}

export const actions = {
  fetchSingleProduct(vuexContext, context) {
    const id = 2285
    return this.$axios.$get(`${productEndpoint}/${id}/`)
      .then((product) => {
        vuexContext.commit('setSingleProduct', product)
      })
      .catch(e => console.error('Error from Store trying to fetch single product from the server ', e))
  },
  nuxtServerInit(vuexContext, context) {
    // Fetching First Level of Categories and depth == 1
    return this.$axios.$get(categoryFirstEndpoint)
      .then(data => {
        vuexContext.commit('setCategoriesFirstLevel', data.results)
      })
      .catch(e => {
        console.error('Error in State Has Occured', e.message)
      })
  },
  fetchCategories(vuexContext, context) {
    return this.$axios.$get(categoryEndpoint)
      .then(data => {
        vuexContext.commit('setCategories', data.results)
      })
      .catch(e => {
        console.error('Error in State has occured', e.message)
      })
  },
  fetchCategoriesFirstLevel(vuexContext, context) {
    // Fetching First Level of Categories and depth == 1
    return this.$axios.$get(categoryFirstEndpoint)
      .then(data => {
        vuexContext.commit('setCategoriesFirstLevel', data.results)
      })
      .catch(e => {
        console.error('Error in State Has Occured', e.message)
      })
  }
}

export const getters = {
  getSingleProduct(state) {
    return state.singleProduct
  },
  getCategories(state) {
    return state.categories
  },
  getCategoriesFirstLevel(state) {
    return state.categoriesFirstLevel
  },
  getCatBySlug(state) {
    return function (slug) {
      // const res = findBySlug(state.categoriesFirstLevel, slug)
      // console.log(res)

      return res
    }

  }
}

