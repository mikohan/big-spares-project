<template>
  <div class="widget-filters__item">
    <div class="filter filter--opened" data-collapse-item>
      <button type="button" class="filter__title" data-collapse-trigger>
        Vehicle
        <span class="filter__arrow"
          ><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="7px">
            <path
              d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z"
            /></svg
        ></span>
      </button>
      <div class="filter__body" data-collapse-content>
        <div class="filter__container">
          <div class="filter-vehicle">
            <ul class="filter-vehicle__list">
              <li class="filter-vehicle__item ">
                <label class="filter-vehicle__item-label">
                  <span class="filter-list__input input-radio">
                    <span class="input-radio__body">
                      <input
                        class="input-radio__input"
                        name="filter_vehicle"
                        type="radio"
                      />
                      <span class="input-radio__circle"></span>
                    </span>
                  </span>
                  <span class="filter-vehicle__item-title">
                    All Parts
                  </span>
                  <span class="filter-vehicle__item-counter">57</span>
                </label>
              </li>
              <li class="filter-vehicle__item ">
                <label class="filter-vehicle__item-label">
                  <span class="filter-list__input input-radio">
                    <span class="input-radio__body">
                      <input
                        class="input-radio__input"
                        name="filter_vehicle"
                        type="radio"
                        checked
                      />
                      <span class="input-radio__circle"></span>
                    </span>
                  </span>
                  <span class="filter-vehicle__item-title">
                    2011 Ford Focus S
                  </span>
                  <span class="filter-vehicle__item-counter">12</span>
                </label>
              </li>
              <li class="filter-vehicle__item ">
                <label class="filter-vehicle__item-label">
                  <span class="filter-list__input input-radio">
                    <span class="input-radio__body">
                      <input
                        class="input-radio__input"
                        name="filter_vehicle"
                        type="radio"
                      />
                      <span class="input-radio__circle"></span>
                    </span>
                  </span>
                  <span class="filter-vehicle__item-title">
                    2015 Audi A3
                  </span>
                  <span class="filter-vehicle__item-counter">51</span>
                </label>
              </li>
            </ul>
            <div class="filter-vehicle__button">
              <button type="button" class="btn btn-xs btn-secondary">
                Add Vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
