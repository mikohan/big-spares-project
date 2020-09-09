<template>
  <!-- site__body -->
  <div class="site__body">
    <BradcrumbsNoTitle :crumbs="crumbs" />
    <div class="block block-split">
      <div class="container">
        <div class="block-split__row row no-gutters">
          <div class="block-split__item block-split__item-content col-auto">
            <div class="block block-brands block-brands--layout--columns-8-full">
              <div class="container">
                <ul class="block-brands__list">
                  <li class="block-brands__item" v-for="car in getCars" :key="car.id">
                    <nuxt-link :to="'/cars/' + car.slug" class="block-brands__item-link">
                      <img src="images/brands/brand-1.png" alt />
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
import BradcrumbsNoTitle from '~/components/body/BradcrumbsNoTitle'
export default {
  components: {
    BradcrumbsNoTitle
  },
  computed: {
    getCars() {
      return this.$store.getters.getCarModels
    },
    crumbs() {
      return [
        {
          name: 'Home',
          url: '/'
        },
        { name: 'Cars', url: '/cars' }
      ]
    }
  }
}
</script>
