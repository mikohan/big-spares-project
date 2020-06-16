<template>
  <div class="block-split__item block-split__item-sidebar col-auto">
    <div class="sidebar sidebar--offcanvas--mobile">
      <div class="sidebar__backdrop"></div>
      <div class="sidebar__body">
        <div class="sidebar__header">
          <div class="sidebar__title">Filters</div>
          <button class="sidebar__close" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
	C11.2,9.8,11.2,10.4,10.8,10.8z"
              />
            </svg>
          </button>
        </div>
        <div class="sidebar__content">
          <div
            class="widget widget-filters widget-filters--offcanvas--mobile"
            data-collapse
            data-collapse-opened-class="filter--opened"
          >
            <div class="widget__header widget-filters__header">
              <h4>Categories</h4>
            </div>
            <div class="widget-filters__list">
              
              <!-- Filter Categories Component -->
              <FilterCategories />
              
              

            </div>
            <div class="widget-filters__actions d-flex">
              <button class="btn btn-primary btn-sm">Filter</button>
              <button class="btn btn-secondary btn-sm">Reset</button>
            </div>
          </div>
          
          <!-- Latest Product Sidebar -->
          <LatestProductSidebar />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterSelectVehicle from '~/components/filters/FilterSelectVehicle'
import FilterCategories from '~/components/filters/FilterCategories'
import FilterPrice from '~/components/filters/FilterPrice'
import FilterBrandSquare from '~/components/filters/FilterBrandSquare'
import FilterBrandCircle from '~/components/filters/FilterBrandCircle'
import FilterRating from '~/components/filters/FilterRating'
import FilterColor from '~/components/filters/FilterColor'
import LatestProductSidebar from '~/components/productBlocks/LatestProductSidebar'
export default {
  components: {
    FilterSelectVehicle,
    FilterCategories,
    FilterPrice,
    FilterBrandSquare,
    FilterBrandCircle,
    FilterRating,
    FilterColor,
    LatestProductSidebar,
  }
}
</script>
