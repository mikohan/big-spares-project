<template>
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
        <h1 class="block-header__title">Трансмиссия {{ carModel.name }}</h1>
      </div>
    </div>
      </div>
</template>

<script>
export default {
  computed: {
    carModel() {
      return this.$store.getters.getSelectedCar
    }
  }
}
</script>
