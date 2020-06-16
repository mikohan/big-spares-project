export const state = function () {
  return {
    vehiclePickerModal: false
  }
}

export const mutations = {
  setVehiclePickerModal(state, value) {
    state.vehiclePickerModal = value
  }
}

export const getters = {
  getVehiclePickerModal(state) {
    return state.vehiclePickerModal
  }
}