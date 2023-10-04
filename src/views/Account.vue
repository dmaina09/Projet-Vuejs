<template>
  <section id="account">
    <div class="left-part">
      <div class="navbar">
        <router-link to="/" class="accueil">Home /</router-link>
        <router-link to="/account" class="compte"> My Account</router-link>
      </div>
    </div>

    <div class="datas-account">
      <div class="grid-container">
        <div class="grid-x grid-margin-x grid margin-y">
          <div class="cell small-12 medium-12 large-3">
            <div class="securite-account">
              <div class="managementAccount">
                <span class="manage">Manage My Account</span>
                <div class="options">
                  <span class="profil">My Profil</span>
                  <span>Address Book</span>
                  <span>My Payment Options</span>
                </div>
              </div>
              <div class="managementAccount">
                <span class="manage">My Orders</span>
                <div class="options">
                  <span>My Returns</span>
                  <span>My Cancellations</span>
                </div>
              </div>

              <div class="managementAccount">
                <span class="manage">My WishList</span>
              </div>
            </div>
          </div>
          <div class="cell small-12 medium-12 large-8">
            <div class="accountPage">
              <div class="info-account">
                <div class="editProfile">
                  <span class="title">Edit Your Profile</span>
                </div>

                <div class="form-container">
                  <form @submit.prevent="sendDatas" class="Infos">
                    <div class="userInfos">
                      <div class="input-infos-perso">
                        <label class="mainTitle"> First Name </label>
                        <div>
                          <input
                            name="userFirstName"
                            required
                            type="text"
                            placeholder="First Name"
                            v-model="userInfos.firstName"
                          />
                        </div>
                      </div>
                      <div class="input-infos-perso">
                        <label class="mainTitle">Last Name </label>
                        <div>
                          <input
                            name="userLastName"
                            required
                            type="text"
                            placeholder="Last Name"
                            v-model="userInfos.lastName"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="userInfos">
                      <div class="input-infos-perso">
                        <label class="mainTitle">Email </label>
                        <div>
                          <input
                            name="userEmail"
                            required
                            type="email"
                            placeholder="Email"
                            v-model="userInfos.email"
                          />
                        </div>
                      </div>
                      <div class="input-infos-perso">
                        <label class="mainTitle">Address </label>
                        <input
                          name="userAddress"
                          required
                          type="text"
                          placeholder="Address"
                          v-model="userInfos.address"
                        />
                      </div>
                    </div>
                    <div class="password">
                      <span>Password Changes</span>
                      <div class="input-container pwd">
                        <div>
                          <input
                            name="userCurrentPassword"
                            required
                            type="password"
                            placeholder="Current Password"
                            v-model="userInfos.currentPassword"
                          />
                        </div>
                      </div>
                      <div class="input-container pwd">
                        <div>
                          <input
                            name="userNewPassword"
                            required
                            type="password"
                            placeholder="New Password"
                            v-model="userInfos.newPassword"
                          />
                        </div>
                      </div>
                      <div class="input-container pwd">
                        <div>
                          <input
                            name="userConfirmNewPasswod"
                            required
                            type="password"
                            placeholder="Confirm New Passwod"
                            v-model="userInfos.confirmNewPassword"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="btns">
                      <span class="cancel">Cancel</span>

                      <button type="submit" class="btn-submit">
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Account",

  computed: {
    ...mapGetters(["getUserInfos"]),
  },

  data() {
    return {
      userInfos: {
        firstName: "",
        lastName: "",
        email: "",
        address: "yoff , 123 ",
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      messageError: false,
      allErrorMsg: [],
    };
  },
  created() {
    this.userInfos;
    this.getUserFromLocalStorage();
  },
  methods: {
    getUserFromLocalStorage() {
      // const user = JSON.parse(localStorage.getItem("user"));
      setTimeout(() => {
        const user = this.getUserInfos;
        console.log(user);
        this.userInfos.firstName = user.firstName;
        this.userInfos.lastName = user.lastName;
        this.userInfos.email = user.email;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
#account {
  .left-part {
    display: flex;
    flex-direction: column;
    gap: 50px;
    .navbar {
      text-align: left;
      padding-left: 75px;
      padding-top: 40px;
      .accueil {
        text-decoration: none;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        opacity: 0.5;
      }
      .compte {
        text-decoration: none;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
      }
    }
  }
  .datas-account {
    margin-top: 60px;
    .securite-account {
      text-align: left;

      .managementAccount {
        padding-bottom: 20px;
        .manage {
          color: #000;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
        .options {
          display: flex;
          flex-direction: column;
          padding-left: 40px;
          padding-top: 20px;
          gap: 12px;
          .profil {
            color: $primary-color;
          }
        }
      }
    }

    .accountPage {
      background: #fff;
      border-radius: 4px;
      border: 1px solid #f5f5f5;
      margin-bottom: 70px;
      text-align: left;

      .info-account {
        padding: 50px 100px 50px 50px;
        .editProfile {
          margin-bottom: 30px;

          .title {
            color: $primary-color;

            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
        }
        .form-container {
          .Infos {
            .userInfos {
              display: flex;
              gap: 140px;
              margin-bottom: 15px;
              margin-top: 25px;
            }
            .password {
              text-align: left;
              margin-top: 30px;
              .pwd {
                margin-top: 20px;
              }
            }

            input {
              border: 0;
              width: 100%;
              outline: none;
              opacity: 0.5;
              font-weight: 400;
              line-height: 24px;

              display: flex;
              border-radius: 4px;
              background: $secondary-color;
              padding: 20px 40px;
              text-align: left;
              &::placeholder {
                text-align: left;
                color: #000;
              }
            }
            .btns {
              // text-align: right;
              // margin-top: 30px;
              margin-top: 30px;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              gap: 30px;
              .cancel {
                color: #000;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
              }
              .btn-submit {
                padding: 16px 48px;
                border-radius: 4px;
                background: $primary-color;
                border: 0;
                color: #fff;
                span {
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 24px;
                }
              }
            }
          }
        }
        .input-infos-perso {
          display: flex;
          flex-direction: column;
          // align-items: center;
          gap: 10px;
          .mainTitle {
            color: #000;

            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>