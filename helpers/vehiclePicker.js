export const vehicle = function () {

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
     // vehicle-picker-modal
     */
    $(function () {
      $('.vehicle-picker-modal').closest('.modal').each(function () {
        const modal = $(this);

        modal.on('hidden.bs.modal', function () {
          modal.find('[data-panel]')
            .removeClass('vehicle-picker-modal__panel--active')
            .first()
            .addClass('vehicle-picker-modal__panel--active');
        });

        modal.find('[data-to-panel]').on('click', function (event) {
          event.preventDefault();
          console.log("in vehicle")
          const toPanel = $(this).data('to-panel');
          const currentPanel = modal.find('.vehicle-picker-modal__panel--active');
          const nextPanel = modal.find('[data-panel="' + toPanel + '"]');

          currentPanel.removeClass('vehicle-picker-modal__panel--active');
          nextPanel.addClass('vehicle-picker-modal__panel--active');
        });

        modal.find('.vehicle-picker-modal__close, .vehicle-picker-modal__close-button').on('click', function () {
          modal.modal('hide');
        });
      });
    });

    /*
    // header vehicle
    */
    $(function () {
      const input = $('.search__input');
      const suggestions = $('.search__dropdown--suggestions');
      const vehiclePicker = $('.search__dropdown--vehicle-picker');
      const vehiclePickerButton = $('.search__button--start');

      input.on('focus', function () {
        suggestions.addClass('search__dropdown--open');
      });
      input.on('blur', function () {
        suggestions.removeClass('search__dropdown--open');
      });

      vehiclePickerButton.on('click', function () {
        vehiclePickerButton.toggleClass('search__button--hover');
        vehiclePicker.toggleClass('search__dropdown--open');
      });

      vehiclePicker.on('transitionend', function (event) {
        if (event.originalEvent.propertyName === 'visibility' && vehiclePicker.is(event.target)) {
          vehiclePicker.find('.vehicle-picker__panel:eq(0)').addClass('vehicle-picker__panel--active');
          vehiclePicker.find('.vehicle-picker__panel:gt(0)').removeClass('vehicle-picker__panel--active');
        }
        if (event.originalEvent.propertyName === 'height' && vehiclePicker.is(event.target)) {
          vehiclePicker.css('height', '');
        }
      });

      $(document).on('click', function (event) {
        if (!$(event.target).closest('.search__dropdown--vehicle-picker, .search__button--start').length) {
          vehiclePickerButton.removeClass('search__button--hover');
          vehiclePicker.removeClass('search__dropdown--open');
        }
      });

      $('.vehicle-picker [data-to-panel]').on('click', function (event) {
        event.preventDefault();

        const toPanel = $(this).data('to-panel');
        const currentPanel = vehiclePicker.find('.vehicle-picker__panel--active');
        const nextPanel = vehiclePicker.find('[data-panel="' + toPanel + '"]');

        currentPanel.removeClass('vehicle-picker__panel--active');
        nextPanel.addClass('vehicle-picker__panel--active');
      });
    });


  })(jQuery);

}