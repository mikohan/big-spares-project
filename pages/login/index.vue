<template>
  <!-- site__body -->
  <div class="site__body">
    <div class="block-space block-space--layout--after-header"></div>
    <div class="block">
      <div class="container container--max--lg">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="card flex-grow-1 mb-md-0 mr-0 mr-lg-3 ml-0 ml-lg-4">
              <div class="card-body card-body--padding--2">
                <h3 class="card-title">Login</h3>
                <form>
                  <div class="form-group">
                    <label
                      class="login__error"
                      v-if="validUsername == 3"
                      for="signup-email"
                      >{{ msg.usernameLogin }}</label
                    >
                    <label v-else for="signup-email">Usename</label>
                    <input
                      @blur="validateLoginUserName"
                      v-model="user.username"
                      id="signup-email"
                      type="text"
                      class="form-control"
                      :class="
                        validUsername === 1
                          ? ''
                          : validUsername === 2
                          ? 'is-valid'
                          : 'is-invalid'
                      "
                      placeholder="customer@example.com"
                    />
                  </div>
                  <div class="form-group">
                    <label for="signin-password">Password</label>
                    <input
                      v-model="user.password"
                      id="signin-password"
                      type="password"
                      class="form-control"
                      placeholder="Secret word"
                    />
                    <small class="form-text text-muted">
                      <a href="">Forgot password?</a>
                    </small>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <span class="input-check form-check-input">
                        <span class="input-check__body">
                          <input
                            class="input-check__input"
                            type="checkbox"
                            id="signin-remember"
                          />
                          <span class="input-check__box"></span>
                          <span class="input-check__icon"
                            ><svg width="9px" height="7px">
                              <path
                                d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z"
                              />
                            </svg>
                          </span>
                        </span>
                      </span>
                      <label class="form-check-label" for="signin-remember"
                        >Remember Me</label
                      >
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <button
                      type="submit"
                      class="btn btn-primary mt-3"
                      @click.prevent="loginSubmit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex mt-4 mt-md-0">
            <div class="card flex-grow-1 mb-0 ml-0 ml-lg-3 mr-0 mr-lg-4">
              <div class="card-body card-body--padding--2">
                <h3 class="card-title">Register</h3>
                <form>
                  <div class="form-group">
                    <label
                      class="login__error"
                      v-if="validUsernameRegister == 3"
                      for="signup-email"
                      >{{ msg.usernameRegister }}</label
                    >
                    <label v-else for="signup-email">Usename</label>
                    <input
                      @blur="validateRegisterUserName"
                      v-model="userRegister.username"
                      id="signup-email"
                      type="text"
                      class="form-control"
                      :class="
                        validUsernameRegister === 1
                          ? ''
                          : validUsernameRegister === 2
                          ? 'is-valid'
                          : 'is-invalid'
                      "
                      placeholder="customer@example.com"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      class="login__error"
                      v-if="msg.email"
                      for="signup-email"
                      >{{ msg.email }}</label
                    >
                    <label v-else for="signup-email">Email address</label>
                    <input
                      @blur="validateEmail(userRegister.email)"
                      v-model="userRegister.email"
                      id="signup-email"
                      type="email"
                      class="form-control"
                      :class="
                        validEmail === 1
                          ? ''
                          : validEmail === 2
                          ? 'is-valid'
                          : 'is-invalid'
                      "
                      placeholder="customer@example.com"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      class="login__error"
                      v-if="!validPasswordRegister"
                      for="signup-password"
                      >{{ msg.passwordRegister }}</label
                    >
                    <label v-else for="signup-password">Password min 8 chars</label>
                    <input
                      v-model="userRegister.password1"
                      id="signup-password"
                      type="password"
                      class="form-control"
                      placeholder="Secret word"
                    />
                  </div>
                  <div class="form-group">
                    <label for="signup-confirm">Repeat password</label>
                    <input
                      v-model="userRegister.password2"
                      id="signup-confirm"
                      type="password"
                      class="form-control"
                      placeholder="Secret word"
                    />
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <div class="login__capcha-show">
                        <div @click="capchaRefresh" class="login__capcha-refresh">
                          <svg viewBox="0 0 360 360">
                            <g>
                              <path
                                id="Selection"
                                
                                d="M 27.22,125.00
           C 51.04,58.99 113.40,17.19 183.00,18.00
             183.00,18.00 192.00,19.00 192.00,19.00
             192.00,19.00 200.00,19.00 200.00,19.00
             208.25,19.99 224.13,23.76 232.00,26.54
             232.00,26.54 248.00,32.93 248.00,32.93
             250.16,33.89 253.64,35.85 256.00,35.34
             259.01,34.69 264.66,28.40 266.83,26.00
             272.46,19.78 286.08,2.57 293.00,0.00
             293.00,0.00 296.09,37.00 296.09,37.00
             296.09,37.00 298.00,51.00 298.00,51.00
             298.00,51.00 298.00,61.00 298.00,61.00
             298.00,61.00 300.96,83.00 300.96,83.00
             300.96,83.00 300.96,92.00 300.96,92.00
             300.96,92.00 303.00,106.00 303.00,106.00
             303.00,106.00 286.00,107.00 286.00,107.00
             286.00,107.00 273.00,108.04 273.00,108.04
             273.00,108.04 262.00,108.04 262.00,108.04
             262.00,108.04 251.00,109.00 251.00,109.00
             251.00,109.00 225.00,109.00 225.00,109.00
             225.00,109.00 213.00,109.96 213.00,109.96
             213.00,109.96 202.00,109.96 202.00,109.96
             202.00,109.96 189.00,111.00 189.00,111.00
             190.63,105.55 197.98,99.18 201.96,95.00
             201.96,95.00 228.00,67.00 228.00,67.00
             214.12,61.82 200.03,57.18 185.00,57.00
             185.00,57.00 175.00,57.00 175.00,57.00
             166.22,57.01 157.62,58.96 149.17,61.17
             114.60,70.20 83.23,95.17 68.31,128.00
             62.67,140.43 57.02,160.39 57.00,174.00
             57.00,174.00 57.00,189.09 57.00,189.09
             57.00,189.09 42.00,189.09 42.00,189.09
             42.00,189.09 18.00,191.00 18.00,191.00
             18.00,167.83 19.24,147.10 27.22,125.00 Z
           M 329.00,169.91
           C 331.81,169.56 337.94,168.12 340.26,169.91
             342.66,171.93 342.03,179.99 342.00,183.00
             342.00,183.00 340.96,193.00 340.96,193.00
             340.96,193.00 340.96,201.00 340.96,201.00
             337.91,230.18 323.19,261.64 304.59,284.00
             299.50,290.12 296.21,294.32 290.00,299.56
             264.08,321.44 235.99,336.28 202.00,340.90
             202.00,340.90 191.00,340.90 191.00,340.90
             191.00,340.90 180.00,342.00 180.00,342.00
             180.00,342.00 158.00,340.56 158.00,340.56
             144.44,338.45 134.86,335.85 122.00,331.05
             118.65,329.80 107.23,324.20 105.00,324.38
             101.26,324.70 95.74,331.22 93.28,334.00
             87.86,340.16 73.77,357.49 67.00,360.00
             67.00,360.00 65.91,346.00 65.91,346.00
             65.91,346.00 64.04,332.00 64.04,332.00
             64.04,332.00 64.04,322.00 64.04,322.00
             64.04,322.00 62.00,308.00 62.00,308.00
             62.00,308.00 62.00,298.00 62.00,298.00
             62.00,298.00 59.17,277.00 59.17,277.00
             59.17,277.00 57.00,254.00 57.00,254.00
             57.00,254.00 74.00,253.00 74.00,253.00
             74.00,253.00 87.00,251.96 87.00,251.96
             87.00,251.96 98.00,251.96 98.00,251.96
             98.00,251.96 109.00,251.00 109.00,251.00
             109.00,251.00 134.00,251.00 134.00,251.00
             134.00,251.00 146.00,250.04 146.00,250.04
             146.00,250.04 158.00,250.04 158.00,250.04
             158.00,250.04 171.00,249.00 171.00,249.00
             169.49,254.06 161.82,261.00 158.03,265.00
             158.03,265.00 132.00,293.00 132.00,293.00
             145.88,298.18 159.97,302.82 175.00,303.00
             175.00,303.00 185.00,303.00 185.00,303.00
             193.78,302.99 202.38,301.04 210.83,298.83
             245.22,289.85 275.87,265.43 291.11,233.00
             296.97,220.53 302.98,199.71 303.00,186.00
             303.00,186.00 303.00,171.00 303.00,171.00
             303.00,171.00 329.00,169.91 329.00,169.91 Z"
                              />
                            </g>
                          </svg>
                        </div>
                        <div class="login__capcha-first">{{ capchaFirst }}</div>
                        <div class="login__capcha-sign">-</div>
                        <div class="login__capcha-second">{{ capchaSecond }}</div>
                        <div class="login__capcha-equal">=</div>
                      </div>
                    </div>
                    <div class="col">
                      <input
                        class="form-control login__capcha-input"
                        type="text"
                        v-model="capchaInput"
                      />
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <button
                      @click.prevent="registerSubmit"
                      type="submit"
                      class="btn btn-primary mt-3"
                    >
                      Register
                    </button>
                  </div>
                  <div class="login__error">{{ msg.generic }}</div>
                </form> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-space block-space--layout--before-footer"></div>
  </div>
  <!-- site__body / end -->
</template>

<script>
import { endpointBase } from '~/config'
import { getRandInt } from '~/helpers/validators'
export default {
  data() {
    return {
      user: {},
      userRegister: {},
      msg: [],
      validUsername: 1,
      validUsernameRegister: 1,
      validEmail: 1,
      validPasswordRegister: true,
      capchaInput: null,
      capchaFirst: 0,
      capchaSecond: 0,
    }
  },
  computed: {
  },
  methods: {
    capchaRefresh(){
      this.capchaFirst = getRandInt(4, 9)
      this.capchaSecond =  getRandInt(1, 4)
      
    },
    capchaCheck() {
      if (parseInt(this.capchaFirst - this.capchaSecond) == parseInt(this.capchaInput)) {
        return true
      }
      return false
    },
    loginSubmit() {
      if (this.validUsername === 2 && this.validatePasswordLogin()) {
        this.$axios
          .$post(`${endpointBase}/api/rest-auth/login/`, this.user)
          .then(result => {
            // console.log(result)
            this.$store.dispatch('login/fetchToken', result)
            this.user = {}
            this.validUsername = 1
            this.$router.replace({ path: '/account/dashboard'})
          })
          .catch(e => console.error('Login Page Error: ', e))
      }
    },
    registerSubmit() {
      if (
        this.validEmail === 2 &&
        this.validUsernameRegister === 2 &&
        this.validatePasswordRegister() &&
        this.capchaCheck()
      ) {
        this.$axios
          .$post(
            `${endpointBase}/api/rest-auth/registration/`,
            this.userRegister
          )
          .then(result => {
            console.log(result)
            this.userRegister = {}
            this.validUsernameRegister = 1
            this.validEmail = 1
            this.validPasswordRegister = false
            this.msg['generic'] = ''
          })
          .catch(e => console.error('Login Page Error: ', e))
      }
      else {
        this.msg['generic'] = 'Проверте правильность заполнения полей пожалуйста!'
        this.capchaRefresh()
      }
    },
    validateLoginUserName() {
      // working stuff
      if (Object.keys(this.user).length !== 0) {
        if (this.user.username.length < 3) {
          this.msg['usernameLogin'] = 'Username Must Be More then 4 chars'
          this.validUsername = 3
        } else {
          this.msg['usernameLogin'] = ''
          this.validUsername = 2
        }
        if (this.user.username.length === 0) {
          this.validUsername = 1
        }
      }
    },
    validatePasswordLogin() {
      if (this.user) {
        if (!this.user.hasOwnProperty('password')) {
          return false
        }
      }
      return true
    },

    validateEmail(value) {
      const re2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (re2.test(value)) {
        this.msg['email'] = ''
        this.validEmail = 2
        return true
      } else {
        this.msg['email'] = 'Invalid Email Address'
        this.validEmail = 3
      }
      if (this.userRegister.hasOwnProperty('email')) {
        if (this.userRegister.email.length === 0) {
          this.msg['email'] = "Email Can't be empty"
          this.validEmail = 3
        }
      }
    },

    validateRegisterUserName() {
      // working stuff
      if (Object.keys(this.userRegister).length !== 0) {
        if (this.userRegister.username.length < 3) {
          this.msg['usernameRegister'] = 'Username Must Be More then 4 chars'
          this.validUsernameRegister = 3
        } else {
          this.msg['usernameRegister'] = ''
          this.validUsernameRegister = 2
        }
        if (this.userRegister.username.length === 0) {
          this.validUsernameRegister = 1
        }
      }
      if (this.userRegister.hasOwnProperty('username')) {
        if (this.userRegister.username.length === 0) {
          this.msg['usernameRegister'] = "Username Can't be empty"
          this.validUsernameRegister = 3
        }
      }
    },

    validatePasswordRegister() {
      if (Object.keys(this.userRegister).length !== 0) {
        if (
          !this.userRegister.hasOwnProperty('password1') ||
          !this.userRegister.hasOwnProperty('password2')
        ) {
          this.validPasswordRegister = false
          this.msg['passwordRegister'] = "Password can't be empty"
          this.validPasswordRegister = false
          return false
        }
        if (this.userRegister.password1.length < 8){
          this.msg['passwordRegister'] = 'Password must contain at least 8 caracters!'
          this.validPasswordRegister = false
          return false
        }
        if (
          this.userRegister.password1 === this.userRegister.password2 &&
          this.userRegister.password1.length !== 0 &&
          this.userRegister.password2.length !== 0
        ) {
          this.msg['passwordRegister'] = ''
          this.validPasswordRegister = true
          return true
        } else {
          this.msg['passwordRegister'] = 'Passwords didnt match!'
          this.validPasswordRegister = false
          return false
        }
        
      } else {
        this.validPasswordRegister = false
        return false
      }
      return false
    }
  },
  mounted() {
    this.capchaRefresh()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';
.form-control {
  &::placeholder {
    color: $font-gray;
    font-weight: 200;
  }
}
.login__error {
  color: $font-error;
}
.login__capcha-show {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
}
.login__capcha-refresh svg {
  height: 1.6rem;
  width: 1.6rem;
  margin-left: 0;
  flex-shrink: 1;
  fill: blue;
  transition: 0.3s linear;
  &:hover {
    cursor: pointer;
    transform: rotate(180deg);
  }
}

</style>
