<template>
  <div>
    <HeaderComponent />
    <nuxt />
    <FooterRed />
    <VehiclePickerModal
     />
     
  </div>
</template>

<script>
import VehiclePickerModal from '~/components/modals/VehiclePickerModal'
import Vodal from 'vodal'

import { headerType } from '../config.logic/header.loader.js'
const HeaderComponent = () => {
  if (headerType.component === 'classic') {
    return import('~/components/header/classic/HeaderBlue')
  } else {
    return import('~/components/header/spaceship/HeaderRed')
  }
}

import FooterRed from '~/components/FooterRed'
export default {
  middleware: ['selectedCar'],
  components: {
    // HeaderRed,
    HeaderComponent,
    FooterRed,
    VehiclePickerModal,
    Vodal,
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    vehiclePicker() {
      // console.log(this.$store.getters['events/getVehiclePickerModal'])
      return this.$store.getters['events/getVehiclePickerModal']
    }
  },
 

  mounted() {}
}
</script>

<style>

</style>
