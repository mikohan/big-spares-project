export const departments = function () {
  /*
    // .departments
    */

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


    $(function () {
      $('.departments__button').on('click', function (event) {
        event.preventDefault();

        $(this).closest('.departments').toggleClass('departments--open');
      });

      $(document).on('click', function (event) {
        $('.departments')
          .not($(event.target).closest('.departments'))
          .removeClass('departments--open');
      });
    });

    /*
    // departments megamenu
    */
    $(function () {
      let currentItem = null;
      const container = $('.departments__menu-container');

      $('.departments__item').on('mouseenter', function () {
        if (currentItem) {
          const megamenu = currentItem.data('megamenu');

          if (megamenu) {
            megamenu.removeClass('departments__megamenu--open');
          }

          currentItem.removeClass('departments__item--hover');
          currentItem = null;
        }

        currentItem = $(this).addClass('departments__item--hover');

        if (currentItem.is('.departments__item--submenu--megamenu')) {
          let megamenu = currentItem.data('megamenu');

          if (!megamenu) {
            megamenu = $(this).find('.departments__megamenu');

            currentItem.data('megamenu', megamenu);

            container.append(megamenu);
          }

          megamenu.addClass('departments__megamenu--open');
        }
      });
      $('.departments__list-padding').on('mouseenter', function () {
        if (currentItem) {
          const megamenu = currentItem.data('megamenu');

          if (megamenu) {
            megamenu.removeClass('departments__megamenu--open');
          }

          currentItem.removeClass('departments__item--hover');
          currentItem = null;
        }
      });
      $('.departments__body').on('mouseleave', function () {
        if (currentItem) {
          const megamenu = currentItem.data('megamenu');

          if (megamenu) {
            megamenu.removeClass('departments__megamenu--open');
          }

          currentItem.removeClass('departments__item--hover');
          currentItem = null;
        }
      });
    });

  })(jQuery);
}
