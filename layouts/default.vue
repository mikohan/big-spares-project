<template>
  <div>
    <HeaderRed />
    <nuxt />
    <FooterRed />
  </div>
</template>

<script>
import HeaderRed from '~/components/header/HeaderRed'
import FooterRed from '~/components/FooterRed'
export default {
  components: {
    HeaderRed,
    FooterRed
  },
  

  mounted() {
    
  }
}
</script>

<style>
</style>
