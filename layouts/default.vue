<template>
  <div>
    <HeaderBlue />
    <nuxt />
    <FooterRed />
  </div>
</template>

<script>
// import HeaderRed from '~/components/header/HeaderRed'
import HeaderBlue from '~/components/header/HeaderBlue'
import FooterRed from '~/components/FooterRed'
export default {
  components: {
    // HeaderRed,
    HeaderBlue,
    FooterRed
  },

  mounted() {}
}
</script>

<style></style>
