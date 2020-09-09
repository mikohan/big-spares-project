<template>
  <div class="header__indicators">
    <!-- <div class="indicator indicator--trigger--click"> -->
    <div
      class="indicator indicator--trigger--click"
      :class="{ 'indicator--open-car': carShow }"
      v-click-outside="closeWindow"
    >
      <a href="/cars" class="indicator__button" @click.prevent="carShow = !carShow">
        <span class="indicator__icon">
          <svg width="32" height="32" viewBox="0 0 512 512">
            <path
              id="Selection"
              fill="blue"
              stroke="black"
              stroke-width="1"
              d="M 90.00,137.96
           C 90.00,137.96 116.00,112.83 116.00,112.83
             116.00,112.83 128.00,101.52 128.00,101.52
             138.47,93.28 153.70,88.02 167.00,88.00
             167.00,88.00 345.00,88.00 345.00,88.00
             358.30,88.02 373.53,93.28 384.00,101.52
             384.00,101.52 396.00,112.83 396.00,112.83
             396.00,112.83 422.00,137.96 422.00,137.96
             422.00,137.96 433.00,148.00 433.00,148.00
             433.06,141.03 434.03,135.49 440.17,131.13
             445.54,127.32 451.78,127.99 458.00,128.00
             466.62,128.01 479.10,130.03 485.96,135.53
             494.46,142.35 494.21,152.61 488.21,161.00
             485.69,164.53 482.55,167.33 479.00,169.78
             474.25,173.06 468.61,175.68 463.00,177.00
             473.86,187.86 489.95,202.25 497.55,215.00
             505.48,228.31 511.98,245.37 512.00,261.00
             512.00,261.00 512.00,333.00 512.00,333.00
             511.98,343.24 509.61,351.04 504.69,360.00
             500.83,367.02 496.15,369.90 496.00,378.00
             496.00,378.00 496.00,396.00 496.00,396.00
             495.78,413.94 483.24,423.97 466.00,424.00
             466.00,424.00 444.00,424.00 444.00,424.00
             444.00,424.00 434.00,424.00 434.00,424.00
             421.04,423.84 410.75,416.62 407.04,404.00
             405.70,399.43 406.00,395.68 406.00,391.00
             406.00,391.00 106.00,391.00 106.00,391.00
             106.00,395.68 106.30,399.43 104.96,404.00
             98.30,426.66 78.53,424.00 60.00,424.00
             42.35,424.00 24.23,426.05 17.36,405.00
             15.90,400.53 16.01,398.58 16.00,394.00
             16.00,394.00 16.00,379.00 16.00,379.00
             15.94,369.43 11.79,368.15 7.31,360.00
             2.39,351.04 0.02,343.24 0.00,333.00
             0.00,333.00 0.00,261.00 0.00,261.00
             0.02,245.37 6.52,228.31 14.45,215.00
             22.05,202.25 38.14,187.86 49.00,177.00
             43.39,175.68 37.75,173.06 33.00,169.78
             29.45,167.33 26.31,164.53 23.79,161.00
             17.79,152.61 17.54,142.35 26.04,135.53
             34.85,128.46 49.21,127.87 60.00,128.00
             64.49,128.06 68.03,128.43 71.83,131.13
             77.97,135.49 78.94,141.03 79.00,148.00
             79.00,148.00 90.00,137.96 90.00,137.96 Z
           M 399.00,153.96
           C 382.21,137.90 367.52,116.04 342.00,116.00
             342.00,116.00 170.00,116.00 170.00,116.00
             144.16,116.04 129.00,138.70 112.00,154.96
             103.48,163.11 90.72,173.61 84.00,183.00
             84.00,183.00 428.00,183.00 428.00,183.00
             421.21,173.52 407.66,162.24 399.00,153.96 Z
           M 33.04,277.70
           C 39.28,282.37 44.51,282.99 52.00,283.00
             52.00,283.00 84.00,283.00 84.00,283.00
             90.74,282.99 101.90,281.80 108.00,279.03
             111.38,277.50 114.53,274.99 114.75,271.00
             115.13,264.24 106.63,256.84 102.00,252.87
             88.32,241.14 62.70,224.28 44.00,226.32
             19.52,231.88 13.68,263.22 33.04,277.70 Z
           M 408.00,254.72
           C 403.20,258.94 393.68,267.82 398.60,274.90
             401.93,279.68 410.54,281.23 416.00,282.00
             428.82,283.81 446.62,283.02 460.00,283.00
             466.56,282.99 471.22,282.65 477.00,279.05
             501.29,263.90 491.17,222.80 459.00,226.32
             441.00,230.35 421.71,242.66 408.00,254.72 Z
           M 139.00,263.00
           C 139.35,278.94 145.41,301.02 161.00,308.46
             166.01,310.85 169.62,310.99 175.00,311.00
             175.00,311.00 337.00,311.00 337.00,311.00
             363.17,310.96 372.51,285.41 373.00,263.00
             373.00,263.00 139.00,263.00 139.00,263.00 Z
           M 104.15,332.00
           C 97.14,324.03 96.91,320.02 86.00,320.00
             86.00,320.00 45.00,320.00 45.00,320.00
             43.63,320.03 41.65,319.99 40.39,320.57
             35.96,322.64 34.82,331.68 35.04,336.00
             35.68,348.19 46.94,354.62 57.00,358.60
             65.88,362.11 74.58,361.00 84.00,361.00
             84.00,361.00 129.00,361.00 129.00,361.00
             129.00,361.00 104.15,332.00 104.15,332.00 Z
           M 426.00,361.00
           C 441.03,361.00 448.00,362.79 462.00,355.63
             467.59,352.77 474.01,347.01 476.18,341.00
             477.96,336.08 476.93,324.20 472.36,320.99
             470.59,319.75 467.12,320.00 465.00,320.00
             465.00,320.00 426.00,320.00 426.00,320.00
             415.33,320.02 414.71,324.21 407.85,332.00
             407.85,332.00 383.00,361.00 383.00,361.00
             383.00,361.00 426.00,361.00 426.00,361.00 Z
           M 149.00,332.00
           C 149.41,350.76 163.13,360.79 181.00,361.00
             181.00,361.00 329.00,361.00 329.00,361.00
             347.57,360.97 362.56,352.22 363.00,332.00
             363.00,332.00 149.00,332.00 149.00,332.00 Z"
            />
          </svg>
        </span>

        <span v-if="selectedCarModel" class="indicator__title">Моя Машина</span>
        <span v-else class="indicator__title">Выберите машину</span>
        <span
          v-if="selectedCarModel"
          class="indicator__value"
        >{{ selectedCarModel.name | capitalize }}</span>
        <span v-else class="indicator__value">Моя Машина</span>
      </a>
      <transition name="slide">
        <div class="indicator__content-car">
          <div class="indicator__content--x" @click="carShow = false">x</div>
          <div class="account-menu">
            <form class="account-menu__form">
              <div class="account-menu__form-title">Выберите Машину</div>
              <div class="account-menu__form--car-input">
                <label class="accont-menu__form--car-label">Выберите Марку</label>
                <v-select
                  @input="selectedCarModel = ''"
                  v-model="selectedCarMake"
                  label="name"
                  :options="carMakes"
                  :placement="placement"
                ></v-select>
              </div>
              <div class="account-menu__form--car-input">
                <label class="accont-menu__form--car-label">Выберите Модель</label>
                <v-select
                  @input="selectCarState"
                  v-model="selectedCarModel"
                  label="name"
                  :options="filteringCarModel(selectedCarMake.id)"
                  :placement="placement"
                ></v-select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-xs" @click.prevent="selectCarState">Выбрать</button>
              </div>
            </form>
            <div class="account-menu__divider"></div>
          </div>
        </div>
      </transition>
    </div>

    <div
      class="indicator indicator--trigger--click"
      :class="{ 'indicator--open': loginShow }"
      v-click-outside="closeLogin"
    >
      <a href="/login" class="indicator__button" @click.prevent="loginShow = !loginShow">
        <span class="indicator__icon">
          <svg width="30" height="30" viewBox="0 0 350 350">
            <path
              id="Selection"
              fill="blue"
              stroke="black"
              stroke-width="1"
              d="M 138.00,337.00
           C 138.00,337.00 123.00,336.00 123.00,336.00
             96.04,335.96 67.00,333.54 41.00,326.14
             23.48,321.16 0.35,310.17 0.00,289.00
             0.00,289.00 0.00,282.00 0.00,282.00
             0.02,267.15 8.97,254.99 20.00,245.75
             35.77,232.54 49.68,225.13 68.00,216.26
             79.55,210.67 97.64,207.10 103.10,195.00
             108.96,182.01 100.23,174.45 93.43,165.00
             87.98,157.43 83.53,149.57 79.85,141.00
             60.78,96.59 59.40,31.51 110.00,7.78
             116.96,4.52 127.32,2.09 135.00,2.00
             150.01,1.83 157.66,1.59 172.00,7.45
             221.03,27.48 222.30,92.79 205.55,135.00
             201.32,145.66 196.57,154.60 189.96,164.00
             183.57,173.10 175.81,180.42 178.52,193.00
             181.37,206.25 190.23,206.64 201.00,210.81
             201.00,210.81 225.00,221.27 225.00,221.27
             225.00,221.27 238.00,228.00 238.00,228.00
             235.63,233.25 231.52,237.56 227.88,241.98
             226.65,243.48 225.07,245.78 222.91,245.81
             220.94,245.83 210.67,238.23 207.96,236.61
             200.16,231.95 189.13,228.22 180.00,228.01
             158.06,227.52 148.24,239.13 137.00,256.00
             131.50,264.25 126.50,273.68 127.32,284.00
             128.44,298.10 135.71,309.95 148.00,317.12
             155.97,321.78 171.77,327.87 176.00,336.00
             176.00,336.00 138.00,337.00 138.00,337.00 Z
           M 333.00,199.75
           C 318.35,212.02 305.14,226.04 293.28,241.00
             273.90,265.45 262.95,287.96 250.30,316.00
             250.30,316.00 241.42,336.00 241.42,336.00
             239.28,340.92 237.39,345.94 232.00,348.15
             227.55,349.96 222.69,348.49 219.18,345.47
             219.18,345.47 199.00,321.00 199.00,321.00
             190.22,312.29 180.96,305.78 170.00,300.11
             161.62,295.77 152.04,292.60 153.20,281.00
             153.70,276.02 156.64,272.04 159.33,268.00
             161.87,264.20 165.23,258.65 169.09,256.34
             175.16,252.42 184.72,253.90 191.00,256.34
             205.31,262.28 219.52,278.39 228.00,291.00
             230.75,281.37 239.10,269.15 245.01,261.00
             263.32,235.78 289.65,214.13 317.00,199.31
             317.00,199.31 348.00,185.00 348.00,185.00
             347.94,189.41 336.64,196.71 333.00,199.75 Z"
            />
          </svg>
        </span>
        <span class="indicator__title">Hello, Log In</span>
        <span class="indicator__value">My Account</span>
      </a>
      <div class="indicator__content">
        <div class="account-menu">
          <form class="account-menu__form">
            <div
              v-if="loginMessage"
              class="account-menu__form-title login__error"
            >{{ loginMessage }}</div>
            <div v-else class="account-menu__form-title">Log In to Your Account</div>
            <div class="form-group">
              <label for="header-signin-email" class="sr-only">Email address</label>
              <input
                v-model="username"
                id="header-signin-email"
                type="text"
                class="form-control form-control-sm"
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <label for="header-signin-password" class="sr-only">Password</label>
              <div class="account-menu__form-forgot">
                <input
                  v-model="password"
                  id="header-signin-password"
                  type="password"
                  class="form-control form-control-sm"
                  placeholder="Password"
                />
                <nuxt-link to="/login" class="account-menu__form-forgot-link">Forgot?</nuxt-link>
              </div>
            </div>
            <div class="form-group account-menu__form-button">
              <button type="submit" class="btn btn-primary btn-sm" @click.prevent="logIn">Login</button>
            </div>
            <div class="account-menu__form-link">
              <nuxt-link to="/login">Create An Account</nuxt-link>
            </div>
          </form>
          <div class="account-menu__divider"></div>
          <a href class="account-menu__user">
            <div class="account-menu__user-avatar">
              <img :src="require('~/static/images/avatars/avatar-4.jpg')" alt />
            </div>
            <div class="account-menu__user-info">
              <div class="account-menu__user-name">Ryan Ford</div>
              <div class="account-menu__user-email">red-parts@example.com</div>
            </div>
          </a>
          <div class="account-menu__divider"></div>
          <ul class="account-menu__links">
            <li>
              <nuxt-link to="/account/dashboard" @click.native="toggleLoginShow">Dashboard</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/account/garage" @click.native="toggleLoginShow">Garage</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/account/profile" @click.native="toggleLoginShow">Edit Profile</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/account/orders" @click.native="toggleLoginShow">Order History</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/account/addresses" @click.native="toggleLoginShow">Addresses</nuxt-link>
            </li>
          </ul>
          <div class="account-menu__divider"></div>
          <ul class="account-menu__links">
            <li>
              <a href="/account/logout" @click.prevent="logOut">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="indicator">
      <a href="wishlist.html" class="indicator__button indicator__button--small-padding">
        <span class="indicator__icon indicator__icon--heart">
          <svg class="indicator__svg--heart" viewBox="0 -28 512.001 512">
            <path
              d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"
            />
          </svg>
        </span>
      </a>
    </div>
    <div class="indicator indicator--trigger--click">
      <a href="cart.html" class="indicator__button">
        <span class="indicator__icon">
          <svg width="32" height="32">
            <circle cx="10.5" cy="27.5" r="2.5" />
            <circle cx="23.5" cy="27.5" r="2.5" />
            <path
              d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
	l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
	c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"
            />
          </svg>
          <span class="indicator__counter">3</span>
        </span>
        <span class="indicator__title">Shopping Cart</span>
        <span class="indicator__value">$250.00</span>
      </a>
      <div class="indicator__content">
        <div class="dropcart">
          <ul class="dropcart__list">
            <li class="dropcart__item">
              <div class="dropcart__item-image">
                <a href="product-full.html">
                  <img src="images/products/product-4-70x70.jpg" alt />
                </a>
              </div>
              <div class="dropcart__item-info">
                <div class="dropcart__item-name">
                  <a href="product-full.html">Glossy Gray 19" Aluminium Wheel AR-19</a>
                </div>
                <ul class="dropcart__item-features">
                  <li>Color: Yellow</li>
                  <li>Material: Aluminium</li>
                </ul>
                <div class="dropcart__item-meta">
                  <div class="dropcart__item-quantity">2</div>
                  <div class="dropcart__item-price">$699.00</div>
                </div>
              </div>
              <button type="button" class="dropcart__item-remove">
                <svg width="10" height="10">
                  <path
                    d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
              c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
              C9.2,7.8,9.2,8.4,8.8,8.8z"
                  />
                </svg>
              </button>
            </li>
            <li class="dropcart__divider" role="presentation"></li>
            <li class="dropcart__item">
              <div class="dropcart__item-image">
                <a href="product-full.html">
                  <img src="images/products/product-2-70x70.jpg" alt />
                </a>
              </div>
              <div class="dropcart__item-info">
                <div class="dropcart__item-name">
                  <a href="product-full.html">Brandix Brake Kit BDX-750Z370-S</a>
                </div>
                <div class="dropcart__item-meta">
                  <div class="dropcart__item-quantity">1</div>
                  <div class="dropcart__item-price">$849.00</div>
                </div>
              </div>
              <button type="button" class="dropcart__item-remove">
                <svg width="10" height="10">
                  <path
                    d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
	C9.2,7.8,9.2,8.4,8.8,8.8z"
                  />
                </svg>
              </button>
            </li>
            <li class="dropcart__divider" role="presentation"></li>
            <li class="dropcart__item">
              <div class="dropcart__item-image">
                <a href="product-full.html">
                  <img src="images/products/product-5-70x70.jpg" alt />
                </a>
              </div>
              <div class="dropcart__item-info">
                <div class="dropcart__item-name">
                  <a href="product-full.html">Twin Exhaust Pipe From Brandix Z54</a>
                </div>
                <ul class="dropcart__item-features">
                  <li>Color: True Red</li>
                </ul>
                <div class="dropcart__item-meta">
                  <div class="dropcart__item-quantity">3</div>
                  <div class="dropcart__item-price">$1210.00</div>
                </div>
              </div>
              <button type="button" class="dropcart__item-remove">
                <svg width="10" height="10">
                  <path
                    d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
	C9.2,7.8,9.2,8.4,8.8,8.8z"
                  />
                </svg>
              </button>
            </li>
            <li class="dropcart__divider" role="presentation"></li>
          </ul>
          <div class="dropcart__totals">
            <table>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>$5877.00</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>$25.00</td>
                </tr>
                <tr>
                  <th>Tax</th>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$5902.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="dropcart__actions">
            <a href="cart.html" class="btn btn-secondary">View Cart</a>
            <a href="checkout.html" class="btn btn-primary">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import { endpointBase } from '~/config'
import { Messages } from '~/config.logic/messages'
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    vSelect
  },
  data() {
    return {
      username: null,
      password: null,
      carShow: false,
      loginShow: false,
      loginMessage: null,
      selectedCarMake: 0,
      selectedCarModel: 0,
      selectedCarButton: null,
      selected: {
        value: 1,
        label: 'option1'
      },
      placement: 'down'
    }
  },
  computed: {
    carModels() {
      // All car models for selecting
      const carModels = this.$store.getters.getCarModels
      return carModels
    },

    carMakes() {
      // All car Makes for selecting
      const carMakes = this.$store.getters.getCarMakes
      return carMakes
    }
  },
  methods: {
    closeWindow(event) {
      // Closing car selection when click outside
      if (this.carShow) {
        this.carShow = false
      }
    },
    closeLogin() {
      // Closing Login Selection when click outside
      if (this.loginShow) {
        this.loginShow = false
      }
    },
    selectedCarInit() {
      const car = this.$store.getters.getSelectedCar
      if (car) {
        this.selectedCarModel = car
        this.selectedCarMake = car.carmake.name
      }
    },
    onChangeSelect(event) {
      // this.selectedCarModel = null
    },

    filteringCarModel(make) {
      // Filtering Car Models By Car Make Have choosen
      const n = this.carModels.filter(elem => {
        return elem.carmake.id === make
      })
      return n
    },
    selectCarState() {
      // Dispatching car by changing model field
      this.$store.dispatch('fetchSelectedCar', this.selectedCarModel)
      this.carShow = false
    },
    logIn() {
      if (this.$store.getters['login/getToken']) {
        this.loginMessage = Messages.LoginMessages.LoginAlready
        return
      }
      if (this.username && this.password) {
        this.username = this.username.replace(/^[^a-z0-9]+$/i, '')
        this.password = this.password.replace(
          /^[^a-z0-9\!\@\#\$\%\^\&\*\(\)]+$/i,
          ''
        )
        this.$axios
          .$post(`${endpointBase}/api/rest-auth/login/`, {
            username: this.username,
            password: this.password
          })
          .then(result => {
            this.$store.dispatch('login/fetchToken', result)
            this.loginShow = false
            this.$router.push('/account/dashboard')
          })
          .catch(e => {
            this.loginMessage = Messages.LoginMessages.LoginError
            console.error('Login Page Error: ', e)
          })
      }
    },
    logOut() {
      this.$store.dispatch('login/logOut')
      this.loginShow = false
    },
    toggleLoginShow() {
      console.log(this.loginShow)
      this.loginShow = !this.loginShow
    }
  },
  mounted() {
    this.selectedCarInit()
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables';
@import '~/node_modules/vue-select/src/scss/vue-select.scss';
.indicator__value {
  font-size: 0.9rem;
}
.indicator__title {
  font-size: 0.7rem;
}

.indicator__button--small-padding {
  padding-right: 8px;
}
.indicator__icon--heart {
  display: flex;
  justify-content: center;
  align-items: center;
}
.indicator__svg--heart {
  height: 1.7rem;
  width: 1.7rem;

  // fill: #1a78ff;
}
.vs__dropdown-toggle {
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
}
.vs__actions {
  &:hover {
    cursor: pointer;
  }
}

.account-menu__form--car-input {
  padding: 1rem 0;
}
.accont-menu__form--car-label {
  font-size: 0.9rem;
  color: $font-gray;
}

.indicator__content-car {
  top: 100%;
  position: absolute;
  visibility: hidden;
  transform-origin: top;
  transform: rotateX(60deg);
  opacity: 0;
  transition: transform 0.2s, opacity 0.2s, visibility 0s 0.2s;
  right: 0;
}
.indicator__content--x {
  width: 1.4rem;
  height: 1.4rem;
  font-size: 1rem;
  text-align: center;

  position: absolute;
  top: 20px;
  right: 20px;

  font-weight: 200;
  color: $font-gray;

  &:hover {
    font-weight: 500;
    background-color: lighten($font-error, 40%);
    border-radius: 2px;
    color: #fff;

    cursor: pointer;
  }
}
.indicator--trigger--click.indicator--open-car .indicator__content-car,
.indicator--trigger--hover:hover .indicator__content-car {
  z-index: 1;
  transition-delay: 0s, 0s, 0s;
  opacity: 1;
  visibility: visible;
  transform: rotateX(0deg);
}
.login__error {
  color: $font-error;
}
</style>
