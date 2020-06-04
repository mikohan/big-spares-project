<template>
  <div class="header__indicators">
    <div class="indicator">
      <a href="wishlist.html" class="indicator__button">
        <span class="indicator__icon">
          <svg width="32" height="32">
            <path
              d="M23,4c3.9,0,7,3.1,7,7c0,6.3-11.4,15.9-14,16.9C13.4,26.9,2,17.3,2,11c0-3.9,3.1-7,7-7c2.1,0,4.1,1,5.4,2.6l1.6,2l1.6-2
	C18.9,5,20.9,4,23,4 M23,2c-2.8,0-5.4,1.3-7,3.4C14.4,3.3,11.8,2,9,2c-5,0-9,4-9,9c0,8,14,19,16,19s16-11,16-19C32,6,28,2,23,2L23,2
	z"
            />
          </svg>
        </span>
      </a>
    </div>
    <div class="indicator indicator--trigger--click">
      <a href="account-login.html" class="indicator__button">
        <span class="indicator__icon">
          <svg width="32" height="32">
            <path
              d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7
	C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z"
            />
          </svg>
        </span>
        <span class="indicator__title">Hello, Log In</span>
        <span class="indicator__value">My Account</span>
      </a>
      <div class="indicator__content">
        <div class="account-menu">
          <form class="account-menu__form">
            <div class="account-menu__form-title">
              Log In to Your Account
            </div>
            <div class="form-group">
              <label for="header-signin-email" class="sr-only"
                >Email address</label
              >
              <input
                id="header-signin-email"
                type="email"
                class="form-control form-control-sm"
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <label for="header-signin-password" class="sr-only"
                >Password</label
              >
              <div class="account-menu__form-forgot">
                <input
                  id="header-signin-password"
                  type="password"
                  class="form-control form-control-sm"
                  placeholder="Password"
                />
                <a href="" class="account-menu__form-forgot-link">Forgot?</a>
              </div>
            </div>
            <div class="form-group account-menu__form-button">
              <button type="submit" class="btn btn-primary btn-sm">
                Login
              </button>
            </div>
            <div class="account-menu__form-link">
              <a href="account-login.html">Create An Account</a>
            </div>
          </form>
          <div class="account-menu__divider"></div>
          <a href="" class="account-menu__user">
            <div class="account-menu__user-avatar">
              <img src="images/avatars/avatar-4.jpg" alt="" />
            </div>
            <div class="account-menu__user-info">
              <div class="account-menu__user-name">Ryan Ford</div>
              <div class="account-menu__user-email">
                red-parts@example.com
              </div>
            </div>
          </a>
          <div class="account-menu__divider"></div>
          <ul class="account-menu__links">
            <li><a href="account-dashboard.html">Dashboard</a></li>
            <li><a href="account-dashboard.html">Garage</a></li>
            <li><a href="account-profile.html">Edit Profile</a></li>
            <li><a href="account-orders.html">Order History</a></li>
            <li><a href="account-addresses.html">Addresses</a></li>
          </ul>
          <div class="account-menu__divider"></div>
          <ul class="account-menu__links">
            <li><a href="account-login.html">Logout</a></li>
          </ul>
        </div>
      </div>
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
                  <img src="images/products/product-4-70x70.jpg" alt="" />
                </a>
              </div>
              <div class="dropcart__item-info">
                <div class="dropcart__item-name">
                  <a href="product-full.html"
                    >Glossy Gray 19" Aluminium Wheel AR-19</a
                  >
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
                  <img src="images/products/product-2-70x70.jpg" alt="" />
                </a>
              </div>
              <div class="dropcart__item-info">
                <div class="dropcart__item-name">
                  <a href="product-full.html"
                    >Brandix Brake Kit BDX-750Z370-S</a
                  >
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
                  <img src="images/products/product-5-70x70.jpg" alt="" />
                </a>
              </div>
              <div class="dropcart__item-info">
                <div class="dropcart__item-name">
                  <a href="product-full.html"
                    >Twin Exhaust Pipe From Brandix Z54</a
                  >
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
