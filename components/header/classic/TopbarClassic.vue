<template>
  <div class="header__topbar-classic">
    <div class="topbar topbar--classic">
      <div class="topbar__item-text">
        <nuxt-link class="topbar__link" to="/about">О Компании</nuxt-link>
      </div>
      <div class="topbar__item-text">
        <nuxt-link class="topbar__link" to="/contacts">Contacts</nuxt-link>
      </div>
      <div class="topbar__item-text">
        <nuxt-link class="topbar__link" to="/contacts">Store Location</nuxt-link>
      </div>
      <div class="topbar__item-text">
        <nuxt-link class="topbar__link" to="/trackorder">Track Order</nuxt-link>
      </div>
      <div class="topbar__item-text">
        <nuxt-link class="topbar__link" to="/blog">Blog</nuxt-link>
      </div>
      <div class="topbar__item-spring"></div>
      <TopbarEndButtons />
    </div>
  </div>
</template>
<script>
import TopbarEndButtons from '~/components/header/TopbarEndButtons'
export default {
  components: {
    TopbarEndButtons
  }
}
</script>
