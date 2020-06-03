
export const shoppingCart = function () {
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
      // .indicator (dropcart, account-menu)
      */
    $(function () {
      $('.indicator--trigger--click .indicator__button').on('click', function (event) {
        event.preventDefault();

        const dropdown = $(this).closest('.indicator');

        if (dropdown.is('.indicator--open')) {
          dropdown.removeClass('indicator--open');
        } else {
          dropdown.addClass('indicator--open');
        }
      });

      $(document).on('click', function (event) {
        $('.indicator')
          .not($(event.target).closest('.indicator'))
          .removeClass('indicator--open');
      });
    });


  })(jQuery);
}