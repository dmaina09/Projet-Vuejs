<template>
  <section id="section-login">
    <div class="register">
      <div class="partie-image">
        <img src="@/assets/images/img-login.png" alt="" />
      </div>
      <div class="partie-login">
        <h2 class="exclusive">Log in to Exclusive</h2>
        <h3 class="details">Enter your details below</h3>
        <div class="errorMessage" v-if="messageError">
          <ul>
            <li v-for="(error, index) in allErrorMsg" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
        <div class="form_container">
          <form @submit.prevent="sendDatas">
            <div class="grid-y grid-margin-x grid-margin-y">
              <div class="cell small-12 medium-12 large-12">
                <div class="input-container">
                  <input
                    required
                    name="userPseudo"
                    type="text"
                    v-model="userInfosLogin.pseudo"
                    placeholder="Email or phone Number"
                  />
                </div>
              </div>
              <div class="cell small-12 medium-12 large-12">
                <div class="input-container pwd">
                  <input
                    required
                    name="userPassword"
                    :type="isPasswordShow ? 'text' : 'password'"
                    v-model="userInfosLogin.password"
                    placeholder="Password"
                  />
                  <button
                    class="pwd-btn"
                    @click="isPasswordShow = !isPasswordShow"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="cell small-12 medium-12 large-12">
                <div class="gestion-log">
                  <button type="submit" class="btn-submit">Log In</button>
                  <span>Forget Password?</span>
                </div>
              </div>
              <div class="cell small-12 medium-12 large-12">
                <div class="return-signup">
                  <span class="no-account">No Account ?</span>
                  <router-link to="/sign-up" class="signup"
                    >Sign Up</router-link
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LogIn",

  data() {
    return {
      userInfosLogin: {
        pseudo: "priimost@gmail.com",
        password: "priimost@gmail.com",
      },
      messageError: false,
      allErrorMsg: [],
    };
  },
  methods: {
    ...mapActions(["setUserInStore"]),
    async sendDatas() {
      this.messageError = false;
      // if (
      //   this.userInfosLogin.pseudo == "maimouna" &&
      //   this.userInfosLogin.password == "m1289"
      // ) {
      //   // alert("connexion avec succes !");

      //   this.$router.push("/");
      // } else {
      //   setTimeout(() => {
      //     this.messageError = true;
      //   }, 1500);
      // }
      // axios
      //   .post("https://apicac.intech.sn/api/v1/auth", {
      //     email: this.userInfosLogin.pseudo,
      //     password: this.userInfosLogin.password,
      //   })
      //   .then((response) => console.log(response));
      try {
        const { data } = await this.$axios.post("/auth", {
          email: this.userInfosLogin.pseudo,
          password: this.userInfosLogin.password,
        });
        if (data.statusCode == 200) {
          console.log(data.data.access_token);
          localStorage.setItem("token", data.data.access_token);
          // localStorage.setItem("user", JSON.stringify(data.data.user));
          // this.$store.dispatch("setUserInStore", data.data.user);
          this.setUserInStore(data.data.user);
          this.$router.push("/account");
        }
        console.log(data);
      } catch (error) {
        this.messageError = true;
        this.allErrorMsg = error.response.data.message;

        console.log(error);
      }
    },
  },
};
</script>

 <style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
@import "@/assets/sass/_breakspoints.scss";
#section-login {
  margin-bottom: 140px;
  margin-top: 88px;

  .register {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    place-items: center;
    @include breakpoint(mobileonly) {
      display: grid;
      grid-template-columns: 1fr;
      margin: 20px;
      align-items: center;
      gap: 17px;
    }
    @include breakpoint(tablet) {
      display: grid;
      grid-template-columns: 1fr;
      margin: 20px;
      align-items: center;
      gap: 17px;
    }
    .partie-image {
      img {
        @include breakpoint(mobileonly) {
          display: none;
        }
        @include breakpoint(tablet) {
          width: 100%;
        }
      }
    }
    .partie-login {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      .exclusive {
        color: #000;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 1.44px;
      }
      .details {
        color: #000;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
      .form_container {
        // display: flex;
        // flex-direction: column;
        // gap: 40px;
        width: 100%;
        .input-container {
          border-bottom: 1px solid #16161657;
          &.pwd {
            display: flex;
            justify-content: center;
            align-items: center;
            .pwd-btn {
              cursor: pointer;
              border: none;
              background: none;
            }
          }
        }
        input {
          border: 0;
          width: 100%;
          outline: none;
          opacity: 0.5;
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          color: #000;
          align-items: flex-start;
          display: flex;
          // padding: 20px 50px;
        }
        .gestion-log {
          display: flex;
          align-items: center;
          gap: 75px;
          margin-top: 20px;
          .btn-submit {
            display: flex;
            background: $primary-color;
            color: #fff;
            text-align: center;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            cursor: pointer;
            padding: 10px 40px;
            transition: all 0.5ms ease-in-out;

            &:hover {
              background: $primary-color-700;
            }
          }
          span {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            color: $primary-color;
            cursor: pointer;
          }
        }
        .return-signup {
          text-align: left;
          .no-account {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            color: #000;
            opacity: 0.5;
            padding-right: 11px;
          }
          .signup {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            color: #000;
            opacity: 0.7;
            border-bottom: 1px solid;
            cursor: pointer;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>