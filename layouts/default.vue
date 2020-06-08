<template>
  <div>
    <HeaderComponent />
    <nuxt />
    <FooterRed />
  </div>
</template>

<script>
import { headerType } from '../config.logic/header.loader.js'
const HeaderComponent = () => {
  if (headerType.component === 'classic') {
    return import('~/components/header/classic/HeaderBlue')
  } else {
    return import ('~/components/header/spaceship/HeaderRed')
  }
}


import FooterRed from '~/components/FooterRed'
export default {
  components: {
    // HeaderRed,
    HeaderComponent,
    FooterRed
  },
  

  mounted() {}
}
</script>

<style></style>
