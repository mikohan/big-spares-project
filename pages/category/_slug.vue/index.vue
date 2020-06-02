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
          <h1 class="block-header__title">{{ getCategory.name }}</h1>
        </div>
      </div>
    </div>
    <div class="block block-split">
      <div class="container">
        <div class="block-split__row row no-gutters">
          <div class="block-split__item block-split__item-content col-auto">
            <div class="block-categories__list">
              <div
                v-for="cat in getCategory.children"
                :key="cat.id"
                class="block-categories__item category-card category-card--layout--classic"
              >
                <div class="category-card__body">
                  <div class="category-card__content">
                    <div class="category-card__image">
                      <a href="">
                        <img
                          :src="
                            require('~/static/images/categories/category-1-160x160.jpg')
                          "
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="category-card__info">
                      <div class="category-card__name">
                        <a href="">{{ cat.name }}</a>
                      </div>
                      <ul class="category-card__children">
                        <li v-for="sub in cat.children" :key="sub.id">
                          <a href="">{{ sub.name }}</a>
                        </li>
                      </ul>
                      <div class="category-card__actions">
                        <a href="" class="category-card__link">Shop All</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- BestSeller component -->
            <BestSellers />
            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- FeaturedProduct component -->
            <FeaturedProduct />
            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- BrandsBlock -->
            <BrandsBlock />
          </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
      </div>
    </div>
  </div>
  <!-- site__body / end -->
</template>

<script>
import { category } from '~/helpers/category'
import BestSellers from '~/components/productBlocks/BestSellers'
import FeaturedProduct from '~/components/productBlocks/FeaturedProduct'
import BrandsBlock from '~/components/productBlocks/BrandsBlock'

export default {
  components: {
    BestSellers,
    FeaturedProduct,
    BrandsBlock
  },
  computed: {
    getCategory() {
      const categories = this.$store.getters.getCatBySlug('vozdushnaja-sistema')
      console.log(categories)
      return categories
    }
  },
  // async fetch(context) {
  //   if (context.store.getters.getCategories.length === 0) {
  //     await context.store.dispatch('fetchCategories')
  //   }
  // },
  // asyncData(context) {
  //   return context.store.getters.getCatBySlug('vozdushnaja-sistema')
  // },
  mounted() {
    category()
  }
}
</script>
