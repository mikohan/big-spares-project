<template>
  <div class="widget-filters__item">
    <div class="filter filter--opened" data-collapse-item>
      <button type="button" class="filter__title" data-collapse-trigger>
        Price
        <span class="filter__arrow"
          ><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="7px">
            <path
              d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z"
            /></svg
        ></span>
      </button>
      <div class="filter__body" data-collapse-content>
        <div class="filter__container">
          <div
            class="filter-price"
            data-min="500"
            data-max="1500"
            data-from="590"
            data-to="1000"
          >
            <div class="filter-price__slider"></div>
            <div class="filter-price__title-button">
              <div class="filter-price__title">
                $<span class="filter-price__min-value"></span> – $<span
                  class="filter-price__max-value"
                ></span>
              </div>
              <button
                type="button"
                class="btn btn-xs btn-secondary filter-price__button"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// need to implement price slider in vue
export default {
  
}
</script>
