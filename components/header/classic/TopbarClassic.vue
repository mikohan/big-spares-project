<template>
  <div class="header__topbar-classic">
    <div class="topbar topbar--classic">
      <div class="topbar__item-text">
        <a class="topbar__link" href="about-us.html">About Us</a>
      </div>
      <div class="topbar__item-text">
        <a class="topbar__link" href="contact-us-v1.html">Contacts</a>
      </div>
      <div class="topbar__item-text">
        <a class="topbar__link" href="">Store Location</a>
      </div>
      <div class="topbar__item-text">
        <a class="topbar__link" href="track-order.html">Track Order</a>
      </div>
      <div class="topbar__item-text">
        <a class="topbar__link" href="blog-classic-right-sidebar.html">Blog</a>
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
