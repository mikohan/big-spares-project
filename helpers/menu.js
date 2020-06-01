export const menu = function () {


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
    // .menu
    */
    /*
        // main menu / megamenu
        */
    $(function () {
      const megamenuArea = $('.megamenu-area');

      $('.main-menu__item--submenu--megamenu').on('mouseenter', function () {
        const megamenu = $(this).children('.main-menu__submenu');
        const offsetParent = megamenu.offsetParent();

        if (isRTL()) {
          const position = Math.max(
            megamenuArea.offset().left,
            Math.min(
              $(this).offset().left + $(this).outerWidth() - megamenu.outerWidth(),
              megamenuArea.offset().left + megamenuArea.outerWidth() - megamenu.outerWidth()
            )
          ) - offsetParent.offset().left;

          megamenu.css('left', position + 'px');
        } else {
          const position = Math.max(
            0,
            Math.min(
              $(this).offset().left,
              megamenuArea.offset().left + megamenuArea.outerWidth() - megamenu.outerWidth()
            )
          ) - offsetParent.offset().left;

          megamenu.css('left', position + 'px');
        }
      });
    });

  })(jQuery);
}
