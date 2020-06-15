<template>
  <!-- site__body -->
  <div class="site__body">
    <BradcrumbsNoTitle :crumbs="crumbs" />
    <div class="block-split block-split--has-sidebar">
      <div class="container">
        <div class="block-split__row row no-gutters">
          <!-- Side Bar Component -->
          <SideBarContent />
          <div class="block-split__item block-split__item-content col-auto">
            <div class="site__body">
              <div
                class="block-space block-space--layout--spaceship-ledge-height"
              ></div>
              <div class="block faq">
                <div class="container container-xl">
                  <div class="faq__section">
                    <h1 class="faq__section-title">
                      {{ getCar.carmake.name }} {{ getCar.name | capitalize }}
                    </h1>
                    <div class="faq__section-body">
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          What shipping methods are available?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          Do you ship internationally?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          How might I obtain an estimated date of delivery?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          Can I split my order to ship to different locations?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="faq__section">
                    <h3 class="faq__section-title">Payment Information</h3>
                    <div class="faq__section-body">
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          What payments methods are available?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          Can I split my payment?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="faq__section">
                    <h3 class="faq__section-title">Orders and Returns</h3>
                    <div class="faq__section-body">
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          How do I return or exchange an item?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="faq__question">
                        <h5 class="faq__question-title">
                          How do I cancel an order?
                        </h5>
                        <div class="faq__question-answer">
                          <div class="typography">
                            <p>
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="faq__footer">
                    <div class="faq__footer-title">Still Have A Questions?</div>
                    <div class="faq__footer-subtitle">
                      We will be happy to answer any questions you may have.
                    </div>
                    <a href="contact-us-v1.html" class="btn btn-primary"
                      >Contact Us</a
                    >
                  </div>
                </div>
              </div>
              <div class="block-space block-space--layout--before-footer"></div>
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
import BradcrumbsNoTitle from '~/components/body/BradcrumbsNoTitle'

export default {
  
  components: {
    SideBarContent,
    ProductViewOptions,
    ProductListOptionsHeader,
    ProductListItem,
    ListPagination,
    BradcrumbsNoTitle
  },
  data() {
    return {
      carSlug: this.$route.params.car
    }
  },
  computed: {
    getCar() {
      return this.$store.getters.getSingleCar(this.carSlug)
    },
    crumbs() {
      return [
        {
          name: 'Home',
          url: '/'
        },
        { name: 'Cars', url: '/cars' },
        {
          name: this.getCar.name,
          url: `/cars/${this.getCar.slug}`
        }
      ]
    }
  },
  mounted() {}
}
</script>
