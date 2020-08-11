import Cookie from 'js-cookie'
import { compare } from '~/helpers/sort'
// import { findBySlug } from '~/helpers/recursiveFinder'
import { res } from './zapchasti.tmp'
import { endpointBase } from '../config' // Endpoint switcher server remote or local

const categoryEndpoint = `${endpointBase}/api/product/categorytree/`
const categoryFirstEndpoint = `${endpointBase}/api/product/categoryfirst/`
// const productEndpoint = `${endpointBase}/api/product/singleproduct/`
const productEndpoint = `http://localhost:8000/api/product/singleproduct`
const carModelList = `http://localhost:8000/api/product/getcarmodelsiteall/` // Dont forget use it tomorrow
const carMakesUrl = `http://localhost:8000/api/product/getcarmakes/` // Endpoint for Getting All Car Makers

export const state = () => ({
  categories: [],
  categoriesFirstLevel: [],
  singleProduct: {},
  carModels: [],
  carMakes: [],
  selectedCar: {}
})

export const mutations = {
  setSelectedCar(state, selectedCar) {
    state.selectedCar = selectedCar
  },
  setCarMakes(state, carMakes) {
    state.carMakes = carMakes
  },
  setCarModels(state, carModels) {
    state.carModels = carModels
  },
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

// Helper function for setting Car Vuex

export const actions = {
  // Initalization action
  nuxtServerInit(vuexContext) {
    // Trying to get carMakes

    vuexContext.dispatch('fetchCarMakes')
    // Trying to get carModels
    vuexContext.dispatch('fetchCarModels')
    // Fetching First Level of Categories and depth == 1
    return (
      this.$axios
        .$get(categoryFirstEndpoint)
        .then(data => {
          vuexContext.commit('setCategoriesFirstLevel', data.results)
        })
        // .then(() => {
        //   vuexContext.dispatch('fetchCarModels')
        // })
        .catch(e => {
          console.error('Error in State Has Occured', e.message)
        })
    )
  },
  getCarInit(vuexContext, req) {
    let car
    if (req) {
      const carCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('car='))
      // console.log('IN SPLIT', decodeURIComponent(carCookie.split('=')[1]))
      if (!carCookie) {
        return
      }
      car = JSON.parse(decodeURIComponent(carCookie.split('=')[1]))
    } else {
      car = JSON.parse(localStorage.getItem('car'))
      if (!car) {
        return
      }
    }
    vuexContext.commit('setSelectedCar', car)
  },
  // Getting Car Model from Server
  fetchCarModels(vuexContext) {
    return this.$axios
      .$get(`${carModelList}`)
      .then(result => {
        vuexContext.commit('setCarModels', result.results)
      })
      .catch(e => console.error('Error while loading carModels from Server', e))
  },
  fetchSelectedCar(vuexContext, context) {
    const car = JSON.stringify(context)
    localStorage.setItem('car', car)
    Cookie.set('car', context, { expires: 1000 })
    vuexContext.commit('setSelectedCar', car)
  },
  // Getting Car Makes from Server
  fetchCarMakes(vuexContext) {
    return this.$axios
      .$get(`${carMakesUrl}`)
      .then(result => {
        vuexContext.commit('setCarMakes', result.results)
      })
      .catch(e => console.error('Error while loading carMakes from Server', e))
  },
  fetchSingleProduct(vuexContext) {
    const id = 6515
    return this.$axios
      .$get(`${productEndpoint}/${id}/`)
      .then(product => {
        console.log(`${productEndpoint}/${id}/`)
        vuexContext.commit('setSingleProduct', product)
        //console.log(product)
      })
      .catch(e =>
        console.error(
          'Error from Store trying to fetch single product from the server ',
          e
        )
      )
  },

  fetchCategories(vuexContext) {
    return this.$axios
      .$get(categoryEndpoint)
      .then(data => {
        vuexContext.commit('setCategories', data.results)
      })
      .catch(e => {
        console.error('Error in State has occured', e.message)
      })
  },
  fetchCategoriesFirstLevel(vuexContext) {
    // Fetching First Level of Categories and depth == 1
    return this.$axios
      .$get(categoryFirstEndpoint)
      .then(data => {
        vuexContext.commit('setCategoriesFirstLevel', data.results)
      })
      .catch(e => {
        console.error('Error in State Has Occured', e.message)
      })
  }
}

export const getters = {
  getSelectedCar(state) {
    return state.selectedCar
  },
  getCarModels(state) {
    return state.carModels
  },
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
      return res
    }
  },
  getCarMakes(state) {
    return state.carMakes
  },
  getSelectedCar(state) {
    if (typeof state.selectedCar === 'string') {
      return JSON.parse(state.selectedCar)
    }
    return state.selectedCar
  },
  getSingleCar(state) {
    return function (slug) {
      return state.carModels.find(el => {
        return el.slug === slug
      })
    }
  }
}
