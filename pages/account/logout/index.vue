<template>
  
</template>
<script>
export default {
  created() {
    this.$store.dispatch('login/logOut')
    this.$router.replace({ path: '/login'})
  }
}
</script>
