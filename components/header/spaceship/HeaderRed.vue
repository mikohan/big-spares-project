<template>
  <div>
    <!-- site__mobile-header / start -->
    <MobileHeader />
    <!-- site__mobile-header / end -->
    <!-- site__header -->
    <header class="site__header">
      <div class="header">
        <div class="header__megamenu-area megamenu-area"></div>
        <div class="header__topbar-start-bg"></div>
        <TopbarStart />
        <div class="header__topbar-end-bg"></div>
        <TopbarEnd />
        <div class="header__navbar">
          <!-- Navbar Departments -->
          <Departments />
          <!-- Navbar Menu -->
          <Menu />
        </div>
        <HeaderLogo />
        <HeaderSearch />
        <!-- Indicators component -->
        <Indicators />
      </div>
    </header>
    <!-- site__header / end -->
  </div>
</template>

<script>
import MobileHeader from '~/components/header/MobileHeader'
import TopbarStart from '~/components/header/spaceship/TopbarStart'
import TopbarEnd from '~/components/header/spaceship/TopbarEnd'
import HeaderLogo from '~/components/header/HeaderLogo'
import Departments from '~/components/header/Departments'
import Menu from '~/components/header/Menu'
import Indicators from '~/components/header/Indicators'
import HeaderSearch from '~/components/header/HeaderSearch'
export default {
  components: {
    MobileHeader,
    TopbarStart,
    TopbarEnd,
    HeaderLogo,
    HeaderSearch,
    Departments,
    Menu,
    Indicators
  }
}
</script>
