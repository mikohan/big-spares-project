<template>
  <div>
    <HeaderRed />
    <nuxt />
    <FooterRed />
  </div>
</template>

<script>
import HeaderRed from '~/components/HeaderRed'
import FooterRed from '~/components/FooterRed'
export default {
  components: {
    HeaderRed,
    FooterRed
  }
}
</script>

<style>
</style>
