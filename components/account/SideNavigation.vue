<template>
  <div class="col-12 col-lg-3 d-flex">
    <div class="account-nav flex-grow-1">
      <h4 class="account-nav__title">Navigation</h4>
      <ul class="account-nav__list">
        <li
          class="account-nav__item"
          :class="currentPage.includes('dashboard') ? activeClass : ''"
        >
          <nuxt-link to="/account/dashboard">Dashboard</nuxt-link>
        </li>
        <li
          class="account-nav__item"
          :class="currentPage.includes('garage') ? activeClass : ''"
        >
          <nuxt-link to="/account/garage">Garage</nuxt-link>
        </li>
        <li
          class="account-nav__item"
          :class="currentPage.includes('profile') ? activeClass : ''"
        >
          <nuxt-link to="/account/profile">Edit Profile</nuxt-link>
        </li>
        <li
          class="account-nav__item"
          :class="currentPage.includes('orders') ? activeClass : ''"
        >
          <nuxt-link to="/account/orders">Order History</nuxt-link>
        </li>
        <li
          class="account-nav__item"
          :class="currentPage.includes('addresses') ? activeClass : ''"
        >
          <nuxt-link to="/account/addresses">Addresses</nuxt-link>
        </li>
        <li
          class="account-nav__item"
          :class="currentPage.includes('password') ? activeClass : ''"
        >
          <nuxt-link to="/account/password">Password</nuxt-link>
        </li>
        <li class="account-nav__divider" role="presentation"></li>
        <li
          class="account-nav__item"
          :class="currentPage.includes('logout') ? activeClass : ''"
        >
          <nuxt-link to="/account/logout">Logout</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'account-nav__item--active'
    }
  },
  computed: {
    currentPage() {
      return this.$route.path
    }
  }
}
</script>
