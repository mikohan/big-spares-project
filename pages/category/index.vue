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
          <h1 class="block-header__title">Все Категории</h1>
        </div>
      </div>
    </div>
    <div class="block block-split">
      <div class="container">
        <!-- <div class="block-categories__list">
          <div
            v-for="cat in getCategories"
            :key="cat.id"
            class="block-categories__item category-card category-card--layout--classic"
          >
            <div class="category-card__body">
              <div class="category-card__content">
                <div class="category-card__image">
                  <nuxt-link :to="`/category/${cat.slug}`">
                    <img
                      src="/images/categories/category-1-160x160.jpg"
                      alt=""
                    />
                  </nuxt-link>
                </div>
                <div class="category-card__info">
                  <div class="category-card__name">
                    <a href="">{{ cat.name }}</a>
                  </div>
                  <ul class="category-card__children">
                    <li v-for="sub in cat.children.slice(0, 10)" :key="sub.id">
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
        </div> -->
        <div class="block-split__row row no-gutters">
          <div class="block-split__item block-split__item-content col-auto">
            <div class="block">
              <div
                class="categories-list categories-list--layout--columns-6-full"
              >
                <ul class="categories-list__body">
                  <li
                    v-for="cat in getCategories"
                    :key="cat.id"
                    class="categories-list__item"
                    v-show="cat.some_count != 0"
                  >
                    <a href="">
                      <img
                        src="/images/categories/category-1-200x200.jpg"
                        alt=""
                      />
                      <div class="categories-list__item-name">
                        {{ cat.name }}
                      </div>
                    </a>
                    <div class="categories-list__item-products">
                      {{ cat.some_count }} Products
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- BestSeller component -->
            <BestSellers />
            <div class="block-space block-space--layout--divider-nl"></div>
            <!-- FeaturedProduct component -->
            <FeaturedProduct />
            <div class="block-space block-space--layout--divider-nl"></div>
            <div
              class="block block-brands block-brands--layout--columns-8-full"
            >
              <div class="container">
                <ul class="block-brands__list">
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-1.png" alt="" />
                      <span class="block-brands__item-name">AimParts</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-2.png" alt="" />
                      <span class="block-brands__item-name">WindEngine</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-3.png" alt="" />
                      <span class="block-brands__item-name">TurboElectric</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-4.png" alt="" />
                      <span class="block-brands__item-name">StartOne</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-5.png" alt="" />
                      <span class="block-brands__item-name">Brandix</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-6.png" alt="" />
                      <span class="block-brands__item-name">ABS-Brand</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-7.png" alt="" />
                      <span class="block-brands__item-name">GreatCircle</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-8.png" alt="" />
                      <span class="block-brands__item-name">JustRomb</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-9.png" alt="" />
                      <span class="block-brands__item-name">FastWheels</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-10.png" alt="" />
                      <span class="block-brands__item-name">Stroyka-X</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-11.png" alt="" />
                      <span class="block-brands__item-name">Mission-51</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-12.png" alt="" />
                      <span class="block-brands__item-name">FuelCorp</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-13.png" alt="" />
                      <span class="block-brands__item-name">RedGate</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-14.png" alt="" />
                      <span class="block-brands__item-name">Blocks</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-15.png" alt="" />
                      <span class="block-brands__item-name">BlackBox</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                  <li class="block-brands__item">
                    <a href="" class="block-brands__item-link">
                      <img src="/images/brands/brand-16.png" alt="" />
                      <span class="block-brands__item-name">SquareGarage</span>
                    </a>
                  </li>
                  <li class="block-brands__divider" role="presentation"></li>
                </ul>
              </div>
            </div>
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
export default {
  components: {
    BestSellers,
    FeaturedProduct
  },
  computed: {
    getCategories() {
      const categories = this.$store.getters.getCategories
      console.log(categories)
      return categories
    }
  },
  async fetch(context) {
    if (context.store.getters.getCategories.length === 0) {
      await context.store.dispatch('fetchCategories')
    }
  },
  mounted() {
    category()
  }
}
</script>
<style lang="scss" scoped>
.categories-list__body {
  justify-content: space-evenly;
}
.categories-list__item {
  border-right: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
</style>
