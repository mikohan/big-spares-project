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
              <nuxt-link :to="crumbs[0].url" class="breadcrumb__item-link">{{
                crumbs[0].name
              }}</nuxt-link>
            </li>

            <li
              class="breadcrumb__item breadcrumb__item--parent"
              v-for="(crumb, i) in crumbsBody"
              :key="i"
            >
              <nuxt-link :to="crumb.url" class="breadcrumb__item-link">{{ crumb.name }}</nuxt-link>
            </li>

            <li
              class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last"
              aria-current="page"
            >
              <span class="breadcrumb__item-link">{{
                crumbs[crumbs.length - 1].name
              }}</span>
            </li>

            <li class="breadcrumb__title-safe-area" role="presentation"></li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  },
  computed: {
    crumbsBody() {
      console.log(this.crumbs.slice(1, -1))
      return this.crumbs.slice(1, -1)
    }
  }
}
</script>
