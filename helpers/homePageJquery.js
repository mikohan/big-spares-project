export const mainPageJq = function () {

  ; (function ($) {
    'use strict'

    let DIRECTION = null

    function direction() {
      if (DIRECTION === null) {
        DIRECTION = getComputedStyle(document.body).direction
      }

      return DIRECTION
    }

    function isRTL() {
      return direction() === 'rtl'
    }
    /*
  // .block-products-carousel
  */
    $(function () {
      const carouselOptions = {
        'grid-4': {
          items: 4
        },
        'grid-4-sidebar': {
          items: 4,
          responsive: {
            1400: { items: 4 },
            1200: { items: 3 },
            992: { items: 3, margin: 16 },
            768: { items: 3, margin: 16 },
            576: { items: 2, margin: 16 },
            460: { items: 2, margin: 16 },
            0: { items: 1 }
          }
        },
        'grid-5': {
          items: 5,
          responsive: {
            1400: { items: 5 },
            1200: { items: 4 },
            992: { items: 4, margin: 16 },
            768: { items: 3, margin: 16 },
            576: { items: 2, margin: 16 },
            460: { items: 2, margin: 16 },
            0: { items: 1 }
          }
        },
        'grid-6': {
          items: 6,
          margin: 16,
          responsive: {
            1400: { items: 6 },
            1200: { items: 4 },
            992: { items: 4, margin: 16 },
            768: { items: 3, margin: 16 },
            576: { items: 2, margin: 16 },
            460: { items: 2, margin: 16 },
            0: { items: 1 }
          }
        },
        horizontal: {
          items: 4,
          responsive: {
            1400: { items: 4, margin: 14 },
            992: { items: 3, margin: 14 },
            768: { items: 2, margin: 14 },
            0: { items: 1, margin: 14 }
          }
        },
        'horizontal-sidebar': {
          items: 3,
          responsive: {
            1400: { items: 3, margin: 14 },
            768: { items: 2, margin: 14 },
            0: { items: 1, margin: 14 }
          }
        }
      }

      $('.block-products-carousel').each(function () {
        const block = $(this)
        const layout = $(this).data('layout')
        const owlCarousel = $(this).find('.owl-carousel')

        owlCarousel.owlCarousel(
          Object.assign(
            {},
            {
              dots: false,
              margin: 20,
              loop: true,
              rtl: isRTL()
            },
            carouselOptions[layout]
          )
        )

        $(this)
          .find('.section-header__arrow--prev')
          .on('click', function () {
            owlCarousel.trigger('prev.owl.carousel', [500])
          })
        $(this)
          .find('.section-header__arrow--next')
          .on('click', function () {
            owlCarousel.trigger('next.owl.carousel', [500])
          })

        let cancelPreviousGroupChange = function () { }

        $(this)
          .find('.section-header__groups-button')
          .on('click', function () {
            const carousel = block.find('.block-products-carousel__carousel')

            if ($(this).is('.section-header__groups-button--active')) {
              return
            }

            cancelPreviousGroupChange()

            $(this)
              .closest('.section-header__groups')
              .find('.section-header__groups-button')
              .removeClass('section-header__groups-button--active')
            $(this).addClass('section-header__groups-button--active')

            carousel.addClass('block-products-carousel__carousel--loading')

            // timeout ONLY_FOR_DEMO! you can replace it with an ajax request
            let timer
            timer = setTimeout(function () {
              let items = block.find(
                '.owl-carousel .owl-item:not(".cloned") .block-products-carousel__column'
              )

              /*** this is ONLY_FOR_DEMO! / start */
              /**/ const itemsArray = items.get()
              /**/ const newItemsArray = []
              /**/
              /**/ while (itemsArray.length > 0) {
                /**/ const randomIndex = Math.floor(
                Math.random() * itemsArray.length
              )
                /**/ const randomItem = itemsArray.splice(randomIndex, 1)[0]
                /**/
                /**/ newItemsArray.push(randomItem)
                /**/
              }
              /**/ items = $(newItemsArray)
              /*** this is ONLY_FOR_DEMO! / end */

              block
                .find('.owl-carousel')
                .trigger('replace.owl.carousel', [items])
                .trigger('refresh.owl.carousel')
                .trigger('to.owl.carousel', [0, 0])

              $('.product-card__action--quickview', block).on(
                'click',
                function () {
                  quickview.clickHandler.apply(this, arguments)
                }
              )

              carousel.removeClass(
                'block-products-carousel__carousel--loading'
              )
            }, 1000)
            cancelPreviousGroupChange = function () {
              // timeout ONLY_FOR_DEMO!
              clearTimeout(timer)
              cancelPreviousGroupChange = function () { }
            }
          })
      })
    })

    /*
  // .block-posts-carousel
  */
    $(function () {
      const defaultOptions = {
        dots: false,
        margin: 20,
        loop: true,
        rtl: isRTL()
      }
      const options = {
        grid: {
          items: 4,
          responsive: {
            1400: { items: 4, margin: 20 },
            1200: { items: 3, margin: 20 },
            992: { items: 3, margin: 16 },
            768: { items: 2, margin: 16 },
            0: { items: 1, margin: 16 }
          }
        },
        list: {
          items: 2,
          responsive: {
            1400: { items: 2, margin: 20 },
            992: { items: 2, margin: 16 },
            0: { items: 1, margin: 16 }
          }
        }
      }

      $('.block-posts-carousel').each(function () {
        const owlCarousel = $(this).find('.owl-carousel')
        const layout = $(this).data('layout')

        owlCarousel.owlCarousel(
          Object.assign({}, defaultOptions, options[layout])
        )

        $(this)
          .find('.section-header__arrow--prev')
          .on('click', function () {
            owlCarousel.trigger('prev.owl.carousel', [500])
          })
        $(this)
          .find('.section-header__arrow--next')
          .on('click', function () {
            owlCarousel.trigger('next.owl.carousel', [500])
          })
      })
    })

    /*
  // .block-teammates
  */
    $(function () {
      $('.block-teammates').each(function () {
        const owlCarousel = $(this).find('.owl-carousel')

        owlCarousel.owlCarousel({
          dots: true,
          margin: 20,
          rtl: isRTL(),
          responsive: {
            1200: { items: 5 },
            992: { items: 4 },
            768: { items: 3 },
            440: { items: 2 },
            0: { items: 1 }
          }
        })
      })
    })

    /*
  // .block-reviews
  */
    $(function () {
      $('.block-reviews').each(function () {
        const owlCarousel = $(this).find('.owl-carousel')

        owlCarousel.owlCarousel({
          dots: true,
          margin: 20,
          items: 1,
          loop: true,
          rtl: isRTL()
        })
      })
    })

    /*
  // .block-zone
  */
    $(function () {
      $('.block-zone').each(function () {
        const owlCarousel = $(this).find('.owl-carousel')

        owlCarousel.owlCarousel({
          dots: false,
          margin: 20,
          loop: true,
          items: 4,
          rtl: isRTL(),
          responsive: {
            1400: { items: 4, margin: 20 },
            992: { items: 3, margin: 16 },
            460: { items: 2, margin: 16 },
            0: { items: 1 }
          }
        })

        $(this)
          .find('.block-zone__arrow--prev')
          .on('click', function () {
            owlCarousel.trigger('prev.owl.carousel', [500])
          })
        $(this)
          .find('.block-zone__arrow--next')
          .on('click', function () {
            owlCarousel.trigger('next.owl.carousel', [500])
          })

        let cancelPreviousTabChange = function () { }

        $(this)
          .find('.block-zone__tabs-button')
          .on('click', function () {
            const block = $(this).closest('.block-zone')
            const carousel = block.find('.block-zone__carousel')

            if ($(this).is('.block-zone__tabs-button--active')) {
              return
            }

            cancelPreviousTabChange()

            $(this)
              .closest('.block-zone__tabs')
              .find('.block-zone__tabs-button')
              .removeClass('block-zone__tabs-button--active')
            $(this).addClass('block-zone__tabs-button--active')

            carousel.addClass('block-zone__carousel--loading')

            // timeout ONLY_FOR_DEMO! you can replace it with an ajax request
            let timer
            timer = setTimeout(function () {
              let items = block.find(
                '.owl-carousel .owl-item:not(".cloned") .block-zone__carousel-item'
              )

              /*** this is ONLY_FOR_DEMO! / start */
              /**/ const itemsArray = items.get()
              /**/ const newItemsArray = []
              /**/
              /**/ while (itemsArray.length > 0) {
                /**/ const randomIndex = Math.floor(
                Math.random() * itemsArray.length
              )
                /**/ const randomItem = itemsArray.splice(randomIndex, 1)[0]
                /**/
                /**/ newItemsArray.push(randomItem)
                /**/
              }
              /**/ items = $(newItemsArray)
              /*** this is ONLY_FOR_DEMO! / end */

              block
                .find('.owl-carousel')
                .trigger('replace.owl.carousel', [items])
                .trigger('refresh.owl.carousel')
                .trigger('to.owl.carousel', [0, 0])

              $('.product-card__action--quickview', block).on(
                'click',
                function () {
                  quickview.clickHandler.apply(this, arguments)
                }
              )

              carousel.removeClass('block-zone__carousel--loading')
            }, 1000)
            cancelPreviousTabChange = function () {
              // timeout ONLY_FOR_DEMO!
              clearTimeout(timer)
              cancelPreviousTabChange = function () { }
            }
          })
      })
    })
  })(jQuery)
}