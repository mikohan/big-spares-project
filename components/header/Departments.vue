<template>
  <div class="header__navbar-departments">
    <div class="departments">
      <button class="departments__button" type="button">
        <span class="departments__button-icon"
          ><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="12px">
            <path
              d="M0,7L0,5L16,5L16,7L0,7ZM0,0L16,0L16,2L0,2L0,0ZM12,12L0,12L0,10L12,10L12,12Z"
            />
          </svg>
        </span>
        <span class="departments__button-title">Категории</span>
        <span class="departments__button-arrow"
          ><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="6px">
            <path
              d="M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z"
            />
          </svg>
        </span>
      </button>
      <div class="departments__menu">
        <div class="departments__arrow"></div>
        <div class="departments__body">
          <ul class="departments__list">
            <li class="departments__list-padding" role="presentation"></li>
            <li
              v-for="cat1 in categories"
              :key="cat1.id"
              class="departments__item departments__item--submenu--megamenu departments__item--has-submenu"
            >
              <nuxt-link
                :to="`/category/${cat1.slug}`"
                class="departments__item-link"
              >
                {{ cat1.name }}
                <span class="departments__item-arrow"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                  >
                    <path
                      d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                    />
                  </svg>
                </span>
              </nuxt-link>
              <div class="departments__item-menu">
                <div
                  class="megamenu departments__megamenu departments__megamenu--size--xl"
                >
                  <div class="megamenu__image">
                    <img
                      :src="
                        require('~/static/images/departments/departments-2.jpg')
                      "
                      alt=""
                    />
                  </div>
                  <div class="row">
                    <div
                      v-for="cat2 in cat1.children"
                      :key="cat2.id"
                      class="col-1of5"
                    >
                      <ul
                        class="megamenu__links megamenu-links megamenu-links--root"
                      >
                        <li
                          class="megamenu-links__item megamenu-links__item--has-submenu"
                        >
                          <nuxt-link
                            :to="`/category/${cat2.slug}`"
                            class="megamenu-links__item-link"
                            href=""
                            >{{ cat2.name }}</nuxt-link
                          >
                          <ul class="megamenu-links">
                            <li
                              v-for="cat3 in cat2.children"
                              :key="cat3.id"
                              class="megamenu-links__item"
                            >
                              <nuxt-link
                                class="megamenu-links__item-link"
                                :to="`/category/${cat3.slug}`"
                                >{{ cat3.name }}</nuxt-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="megamenu-links__item">
                          <nuxt-link
                            :to="`/category/${cat2.slug}`"
                            class="megamenu-links__item-link"
                            ><img
                              :src="
                                require('~/static/images/departments/departments-2.jpg')
                              "
                              height="70"
                              whidt="210"
                              alt=""
                          /></nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="departments__item">
              <nuxt-link to="/category" class="departments__item-link">
                Все Категории
              </nuxt-link>
            </li>

            <li class="departments__list-padding" role="presentation"></li>
          </ul>
          <div class="departments__menu-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { departments } from '~/helpers/departments'
export default {
  computed: {
    categories() {
      const categories = this.$store.getters.getCategoriesFirstLevel
      return categories
    }
  },
  mounted() {
    departments()
  }
}
</script>
