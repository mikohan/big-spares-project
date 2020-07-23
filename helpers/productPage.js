export const productPage = function () {
  (function ($) {
    "use strict";

    let DIRECTION = null;

    function direction() {
      if (DIRECTION === null) {
        DIRECTION = getComputedStyle(document.body).direction;
      }

      return DIRECTION;
    }

    function isRTL() {
      return direction() === 'rtl';
    }


    /*
     // .product-gallery
     */
    const initProductGallery = function (element, layout) {
      layout = layout !== undefined ? layout : 'standard';

      const options = {
        dots: false,
        margin: 10,
        rtl: isRTL(),
      };
      const layoutOptions = {
        'product-sidebar': {
          responsive: {
            1400: { items: 8, margin: 10 },
            1200: { items: 6, margin: 10 },
            992: { items: 8, margin: 10 },
            768: { items: 8, margin: 10 },
            576: { items: 6, margin: 10 },
            420: { items: 5, margin: 8 },
            0: { items: 4, margin: 8 }
          },
        },
        'product-full': {
          responsive: {
            1400: { items: 6, margin: 10 },
            1200: { items: 5, margin: 8 },
            992: { items: 7, margin: 10 },
            768: { items: 5, margin: 8 },
            576: { items: 6, margin: 8 },
            420: { items: 5, margin: 8 },
            0: { items: 4, margin: 8 }
          }
        },
        quickview: {
          responsive: {
            992: { items: 5 },
            520: { items: 6 },
            440: { items: 5 },
            340: { items: 4 },
            0: { items: 3 }
          }
        },
      };

      const gallery = $(element);

      const image = gallery.find('.product-gallery__featured .owl-carousel');
      const carousel = gallery.find('.product-gallery__thumbnails .owl-carousel');

      image
        .owlCarousel({ items: 1, dots: false, rtl: isRTL() })
        .on('changed.owl.carousel', syncPosition);

      carousel
        .on('initialized.owl.carousel', function () {
          carousel.find('.product-gallery__thumbnails-item').eq(0).addClass('product-gallery__thumbnails-item--active');
        })
        .owlCarousel($.extend({}, options, layoutOptions[layout]));

      carousel.on('click', '.owl-item', function (e) {
        e.preventDefault();

        image.data('owl.carousel').to($(this).index(), 300, true);
      });

      gallery.find('.product-gallery__zoom').on('click', function () {
        openPhotoSwipe(image.find('.owl-item.active').index());
      });

      image.on('click', '.owl-item > a', function (event) {
        event.preventDefault();

        openPhotoSwipe($(this).closest('.owl-item').index());
      });

      function openPhotoSwipe(index) {
        const photoSwipeImages = image.find('.owl-item > a').toArray().map(function (element) {
          return {
            src: element.href,
            msrc: element.href,
            w: 1280,
            h: 854
          };
        });

        const photoSwipeOptions = {
          getThumbBoundsFn: index => {
            const imageElement = image.find('.owl-item img')[index];
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            const rect = imageElement.getBoundingClientRect();

            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          },
          index: index,
          bgOpacity: .9,
          history: false
        };

        const photoSwipeGallery = new PhotoSwipe($('.pswp')[0], PhotoSwipeUI_Default, photoSwipeImages, photoSwipeOptions);

        photoSwipeGallery.listen('beforeChange', () => {
          image.data('owl.carousel').to(photoSwipeGallery.getCurrentIndex(), 0, true);
        });

        photoSwipeGallery.init();
      }

      function syncPosition(el) {
        let current = el.item.index;

        carousel
          .find('.product-gallery__thumbnails-item')
          .removeClass('product-gallery__thumbnails-item--active')
          .eq(current)
          .addClass('product-gallery__thumbnails-item--active');
        const onscreen = carousel.find('.owl-item.active').length - 1;
        const start = carousel.find('.owl-item.active').first().index();
        const end = carousel.find('.owl-item.active').last().index();

        if (current > end) {
          carousel.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
          carousel.data('owl.carousel').to(current - onscreen, 100, true);
        }
      }
    };

    $(function () {
      $('.product').each(function () {
        const gallery = $(this).find('.product-gallery');

        if (gallery.length > 0) {
          initProductGallery(gallery[0], gallery.data('layout'));
        }
      });
    });

    /*
    // .product-tabs
    */
    $(function () {
      $('.product-tabs').each(function (i, element) {
        $('.product-tabs__list', element).on('click', '.product-tabs__item a', function (event) {
          event.preventDefault();

          const tab = $(this).closest('.product-tabs__item');
          const content = $('.product-tabs__pane' + $(this).attr('href'), element);

          if (content.length) {
            $('.product-tabs__item').removeClass('product-tabs__item--active');
            tab.addClass('product-tabs__item--active');

            $('.product-tabs__pane').removeClass('product-tabs__pane--active');
            content.addClass('product-tabs__pane--active');
          }
        });

        const currentTab = $('.product-tabs__item--active', element);
        const firstTab = $('.product-tabs__item:first', element);

        if (currentTab.length) {
          currentTab.trigger('click');
        } else {
          firstTab.trigger('click');
        }
      });
    });

    // /*
    // // .block-products-carousel
    // */
    $(function () {
      const carouselOptions = {
        'grid-4': {
          items: 4,
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
            0: { items: 1 },
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
            0: { items: 1 },
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
            0: { items: 1 },
          }
        },
        'horizontal': {
          items: 4,
          responsive: {
            1400: { items: 4, margin: 14 },
            992: { items: 3, margin: 14 },
            768: { items: 2, margin: 14 },
            0: { items: 1, margin: 14 },
          }
        },
        'horizontal-sidebar': {
          items: 3,
          responsive: {
            1400: { items: 3, margin: 14 },
            768: { items: 2, margin: 14 },
            0: { items: 1, margin: 14 },
          }
        }
      };

      $('.block-products-carousel').each(function () {
        const block = $(this);
        const layout = $(this).data('layout');
        const owlCarousel = $(this).find('.owl-carousel');

        owlCarousel.owlCarousel(Object.assign({}, {
          dots: false,
          margin: 20,
          loop: true,
          rtl: isRTL()
        }, carouselOptions[layout]));

        $(this).find('.section-header__arrow--prev').on('click', function () {
          owlCarousel.trigger('prev.owl.carousel', [500]);
        });
        $(this).find('.section-header__arrow--next').on('click', function () {
          owlCarousel.trigger('next.owl.carousel', [500]);
        });

        let cancelPreviousGroupChange = function () { };

        $(this).find('.section-header__groups-button').on('click', function () {
          const carousel = block.find('.block-products-carousel__carousel');

          if ($(this).is('.section-header__groups-button--active')) {
            return;
          }

          cancelPreviousGroupChange();

          $(this).closest('.section-header__groups').find('.section-header__groups-button').removeClass('section-header__groups-button--active');
          $(this).addClass('section-header__groups-button--active');

          carousel.addClass('block-products-carousel__carousel--loading');

          // timeout ONLY_FOR_DEMO! you can replace it with an ajax request
          let timer;
          timer = setTimeout(function () {
            let items = block.find('.owl-carousel .owl-item:not(".cloned") .block-products-carousel__column');

            //         /*** this is ONLY_FOR_DEMO! / start */
            //         /**/ const itemsArray = items.get();
            //         /**/ const newItemsArray = [];
            //         /**/
            //         /**/ while (itemsArray.length > 0) {
            //             /**/     const randomIndex = Math.floor(Math.random() * itemsArray.length);
            //             /**/     const randomItem = itemsArray.splice(randomIndex, 1)[0];
            //             /**/
            //             /**/     newItemsArray.push(randomItem);
            //   /**/
            // }
            //         /**/ items = $(newItemsArray);
            // /*** this is ONLY_FOR_DEMO! / end */

            block.find('.owl-carousel')
              .trigger('replace.owl.carousel', [items])
              .trigger('refresh.owl.carousel')
              .trigger('to.owl.carousel', [0, 0]);

            $('.product-card__action--quickview', block).on('click', function () {
              quickview.clickHandler.apply(this, arguments);
            });

            carousel.removeClass('block-products-carousel__carousel--loading');
          }, 1000);
          cancelPreviousGroupChange = function () {
            // timeout ONLY_FOR_DEMO!
            clearTimeout(timer);
            cancelPreviousGroupChange = function () { };
          };
        });
      });
    });

    /*
   // .block-slideshow
   */
    $(function () {
      $('.block-slideshow__carousel').each(function () {
        const owlCarousel = $(this).find('.owl-carousel');

        owlCarousel.owlCarousel({
          items: 1,
          dots: true,
          loop: true,
          rtl: isRTL()
        });
      });
    });


  })(jQuery);
}