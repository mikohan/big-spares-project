<template>
  <!-- site__body -->
  <div class="site__body">
    <div
      class="block-header block-header--has-breadcrumb block-header--has-title"
    >
      <div class="container">
        <div class="block-header__body">
          <nav
            class="breadcrumb block-header__breadcrumb"
            aria-label="breadcrumb"
          >
            <ol class="breadcrumb__list">
              <li
                class="breadcrumb__spaceship-safe-area"
                role="presentation"
              ></li>
              <li
                class="breadcrumb__item breadcrumb__item--parent breadcrumb__item--first"
              >
                <a href="index.html" class="breadcrumb__item-link">Home</a>
              </li>
              <li class="breadcrumb__item breadcrumb__item--parent">
                <a href="" class="breadcrumb__item-link">Breadcrumb</a>
              </li>
              <li
                class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last"
                aria-current="page"
              >
                <span class="breadcrumb__item-link">Current Page</span>
              </li>
              <li class="breadcrumb__title-safe-area" role="presentation"></li>
            </ol>
          </nav>
          <h1 class="block-header__title">All Cars</h1>
        </div>
      </div>
    </div>
    <div class="block block-split">
      <div class="container">
        <div class="block-split__row row no-gutters">
          <div class="block-split__item block-split__item-content col-auto">
            <div
              class="block block-brands block-brands--layout--columns-8-full"
            >
              <div class="container">
                <ul class="block-brands__list">
                  <li
                    class="block-brands__item"
                    v-for="car in getCars"
                    :key="car.id"
                  >
                    <nuxt-link :to="'/cars/' + car.slug" class="block-brands__item-link">
                      <img src="images/brands/brand-1.png" alt="" />
                      <span class="block-brands__item-name">{{ car.name }}</span>
                    </nuxt-link>
                  </li>

                  <li class="block-brands__divider" role="presentation"></li>
                </ul>
              </div>
            </div>

            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- spaser for product carousel -->
            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- spacer for product some stuff -->
            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- spaser for brands -->
          </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
      </div>
    </div>
  </div>
  <!-- site__body / end -->
</template>

<script>
export default {
  computed: {
    getCars() {
      return this.$store.getters.getCarModels
    }
  }
}
</script>
