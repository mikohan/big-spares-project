
export const topbar = function () {
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
        // .topbar__menu
        */
    $(function () {
      $('.topbar__menu-button').on('click', function () {
        $(this)
          .closest('.topbar__menu')
          .toggleClass('topbar__menu--open')
      })

      $(document).on('click', function (event) {
        $('.topbar__menu')
          .not($(event.target).closest('.topbar__menu'))
          .removeClass('topbar__menu--open')
      })
    })

  })(jQuery)
}


