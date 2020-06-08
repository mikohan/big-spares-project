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
                    <label v-if="validUsername == 3" for="signup-email">{{
                      msg.usernameLogin
                    }}</label>
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
                    <label v-if="msg.email" for="signup-email">{{
                      msg.email
                    }}</label>
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
                    <label for="signup-password">Password</label>
                    <input
                      v-model="user.password1"
                      id="signup-password"
                      type="password"
                      class="form-control"
                      placeholder="Secret word"
                    />
                  </div>
                  <div class="form-group">
                    <label for="signup-confirm">Repeat password</label>
                    <input
                      v-model="user.password2"
                      id="signup-confirm"
                      type="password"
                      class="form-control"
                      placeholder="Secret word"
                    />
                  </div>
                  <div class="form-group mb-0">
                    <button type="submit" class="btn btn-primary mt-3">
                      Register
                    </button>
                  </div>
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
import { validChk } from '~/helpers/validators'
import { endpointBase } from '~/config'
export default {
  data() {
    return {
      user: {},
      userRegister: {},
      msg: [],
      validUsername: 1,
      validUsernameRegister: 1,
      validEmail: 1
    }
  },
  computed: {},
  methods: {
    loginSubmit() {
      if (this.validUsername === 2 && this.validatePasswordLogin()) {
        this.$axios
          .$post(`${endpointBase}/api/rest-auth/login/`, this.user)
          .then(result => {
            console.log(result)
            this.user = {}
            this.validUsername = 1
          })
          .catch(e => console.error('Login Page Error: ', e))
      }
    },
    registerSubmit() {
      this.$axios
        .$post(`${endpointBase}/api/rest-auth/registration/`, this.user)
        .then(result => {
          console.log(result)
          this.user = {}
        })
        .catch(e => console.error('Login Page Error: ', e))
    },

    validateEmail(value) {
      const re2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (re2.test(value)) {
        this.msg['email'] = ''
        this.validEmail = validChk(this.msg['email'], value)
        return true
      } else {
        this.msg['email'] = 'Invalid Email Address'
        this.validEmail = validChk(this.msg['email'], value)
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
    },

    validateUsername(flag) {
      let user, valid
      if (flag === 'login') {
        user = 'user'
        valid = 'validUser'
      } else {
        user = 'registerUser'
        valid = 'validUsernameRegister'
      }
      if (this[user]) {
        if (this[user].username.length < 4) {
          this.msg['username'] = 'Username Must Be More then 4 chars'
          this[valid] = validChk(this.msg['username'], this[user].username)
        } else {
          this.msg['username'] = ''
          this[valid] = validChk(this.msg['username'], this[user].username)
          return true
        }
      }
    },
    validatePasswordLogin() {
      if (this.user) {
        if (
          !this.user.hasOwnProperty('password')
        ) {
          return false
        }
      }
      return true
    }
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
</style>
