<template>
  <div>
    <!-- site__mobile-header -->
    <MobileHeader />
    <!-- site__mobile-header / end -->
    <!-- site__header -->
    <header class="site__header">
      <div class="header">
        <div class="header__megamenu-area megamenu-area"></div>
        <div class="header__topbar-classic-bg"></div>
        <TopbarClassic />
        <div class="header__navbar">
          <!-- Departments Blue -->
          <Departments />
          <!-- Menu Blue -->
          <Menu />
          <div class="header__navbar-phone phone">
            <a href="" class="phone__body">
              <div class="phone__title">Call Us:</div>
              <div class="phone__number">800 060-0730</div>
            </a>
          </div>
        </div>
        <!-- Header Logo component -->
        <HeaderLogo />
        <!-- header search component -->
        <HeaderSerach />
        <!-- header indicators -->
        <Indicators />
      </div>
    </header>
    <!-- site__header / end -->
    <!-- vehicle-picker-modal -->
    <VehiclePickerModal />
    <!-- vehicle-picker-modal / end -->
  </div>
</template>

<script>
import { vehicle } from '~/helpers/vehiclePicker'
// import { shoppingCart } from '~/helpers/shoppingCart'
import HeaderLogo from '~/components/header/HeaderLogo'
import Departments from '~/components/header/Departments'
import VehiclePickerModal from '~/components/header/VehiclePickerModal'
import Menu from '~/components/header/Menu'
import Indicators from '~/components/header/Indicators'
import MobileHeader from '~/components/header/MobileHeader'
import TopbarClassic from '~/components/header/classic/TopbarClassic'
import HeaderSerach from '~/components/header/HeaderSearch'

export default {
  components: {
    MobileHeader,
    TopbarClassic,
    HeaderLogo,
    HeaderSerach,
    Departments,
    Menu,
    VehiclePickerModal,
    Indicators
  },
  mounted() {
    vehicle()
   // shoppingCart()
  }
}
</script>


