<template>
  <!-- site__body -->
  <div class="site__body">
    <BradcrumbsHasTitle />
    <div class="block-split block-split--has-sidebar">
      <div class="container">
        <div class="block-split__row row no-gutters">
          <!-- Side Bar Component -->
          <SideBarContent />
          <div class="block-split__item block-split__item-content col-auto">
            <div class="block">
              <div class="products-view">
                <!-- Product View Options Component -->
                <ProductViewOptions @layoutChanges="changeGrid" />
                <div
                  class="products-view__list products-list products-list--grid--4"
                  :data-layout="layout"
                  data-with-features="false"
                >
                  <ProductListOptionsHeader />
                  <div class="products-list__content">
                    <ProductListItem v-for="(product, i) in 20" :key="i" />
                  </div>
                </div>
                <!-- Pagination Component -->
                <ListPagination />
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
import { shop } from '~/helpers/shop'
import SideBarContent from '~/components/body/SideBarContent'
import ProductViewOptions from '~/components/body/ProductViewOptions'
import ProductListOptionsHeader from '~/components/body/ProductListOptionsHeader'
import ProductListItem from '~/components/body/ProductListItem'
import ListPagination from '~/components/body/ListPagination'
import BradcrumbsHasTitle from '~/components/body/BradcrumbsHasTitle'

export default {
  components: {
    SideBarContent,
    ProductViewOptions,
    ProductListOptionsHeader,
    ProductListItem,
    ListPagination,
    BradcrumbsHasTitle
  },
  data() {
    return {
      layout: 'grid'
    }
  },
  methods: {
    changeGrid(value) {
      this.layout = value
    }
  },
  mounted() {
    shop()
  }
}
</script>
