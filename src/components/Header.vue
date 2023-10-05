<template>
  <header class="grid-container">
    <nav class="navbar">
      <div class="barre-menu">
        <router-link to="/" id="Exclusive">Exclusive</router-link>

        <div class="route-link">
          <router-link to="/" class="menu">Home</router-link>
          <router-link to="/products" class="menu">Products</router-link>
          <router-link to="/about" class="menu">A propos</router-link>
          <router-link to="/contact" class="menu">Contact</router-link>

          <router-link to="/login" class="menu" v-if="!getLogginState"
            >Se connecter</router-link
          >
        </div>
      </div>
      <div class="Recherche">
        <button id="btn-recherche">
          <input type="text" placeholder="What are you looking for?" />
          <img src="@/assets/images/Button-recherche.svg" alt="" />
        </button>
        <div class="Cart1">
          <div class="likes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="panier">
            <router-link to="/cart">
              <img src="@/assets/images/Cart1.svg" alt="" />
            </router-link>
            <span class="quantity">{{ getCartItemCount }}</span>
          </div>
        </div>

        <div v-if="getLogginState">
          <div class="account">
            <img src="@/assets/images/svg/user.svg" alt="" />
            <div class="list">
              <div class="params">
                <button class="icons">
                  <img src="@/assets/images/svg/users.svg" alt="" />
                </button>

                <router-link to="/account" class="text"
                  >Manage My Account</router-link
                >
              </div>

              <div class="params">
                <button class="icons">
                  <img src="@/assets/images/svg/mallbag.svg" alt="" />
                </button>

                <router-link to="/" class="text">My Order</router-link>
              </div>

              <div class="params">
                <button class="icons">
                  <img src="@/assets/images/svg/iconCancel.svg" alt="" />
                </button>

                <router-link to="/" class="text">My Cancellations</router-link>
              </div>

              <div class="params">
                <button class="icons">
                  <img src="@/assets/images/svg/iconReviews.svg" alt="" />
                </button>

                <router-link to="/" class="text">My Reviews</router-link>
              </div>

              <div class="params">
                <button class="icons" @click="logOut">
                  <img src="@/assets/images/svg/iconLogout.svg" alt="" />
                  <div class="text">Logout</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="mobile-menu">
      <div class="menu-burger">
        <button class="btn-menu" @click="isMenuOpen = !isMenuOpen">
          <img
            src="@/assets/images/barre-de-menu.png"
            height="29px"
            width="29px"
          />
        </button>
      </div>
      <div class="side-menu" :class="isMenuOpen ? 'open' : ''">
        <div class="overlay" @click="isMenuOpen = false"></div>
        <div class="list">
          <div class="submenu">
            <span class="title">MENU</span>
            <div class="menu-vertical">
              <router-link to="/" class="menu">Home</router-link>
              <router-link to="/products" class="menu">Products</router-link>
              <router-link to="/about" class="menu">A propos</router-link>
              <router-link to="/contact" class="menu">Contact</router-link>
              <router-link to="/login" class="menu">Se connecter</router-link>
            </div>
          </div>

          <div class="categories">
            <span class="category">Categories</span>
            <!-- <button class="dropbtn">
              <img src="@/assets/images/expand-arrow.png" />
            </button> -->
            <div>
              <img src="" />
            </div>
            <ul class="exclusives">
              <li
                class="exclusivite"
                v-for="(categories, index) in categoriesProducts"
                :key="index"
                :categories-products="categories"
              >
                <router-link
                  :to="`/products/categorie/${categories.slug}`"
                  class="exclusivite_menuName"
                  >{{ categories.name }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- <nav class="navbar-vertical container">
    <div class="barre-menu-vertical">
      <div id="Exclusive">Exlusive</div>
      <div class="route-link-vertical">
        <router-link to="/" class="menu">Home</router-link>
        <router-link to="/contact" class="menu">Contact</router-link>
        <router-link to="/about" class="menu">About</router-link>
        <router-link to="/sign-up" class="menu">Sign Up</router-link>
      </div>
    </div>
    <div class="Recherche-vertical">
      <button id="btn-recherche">
        <input type="text" placeholder="What are you looking for?" />
        <img src="@/assets/images/Button-recherche.svg" alt="" />
      </button>
      <div class="Cart1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <img src="@/assets/images/Cart1.svg" alt="" />
      </div>
    </div>
  </nav> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["getCartItemCount", "getCartTotalPrice", "getLogginState"]),
  },
  data() {
    return {
      categoriesProducts: [],
      isMenuOpen: false,
      isUserLogged: false,
    };
  },
  created() {
    this.getCategoriesProducts();
  },
  methods: {
    handleLogout() {
      console.log("I am disconnected");
    },
    logOut() {
      this.clearAuthUser();
      this.$router.push("/");
    },
    ...mapActions(["clearAuthUser"]),
    async getCategoriesProducts() {
      try {
        const { data } = await this.$axios.get("/product_category/menu");
        this.categoriesProducts = data.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_breakspoints.scss";
@import "@/assets/sass/container.scss";
@import "@/assets/sass/_colors.scss";

header {
  border-bottom: 1px solid #00000024;
  padding: 22px;
  position: relative;

  .navbar {
    display: flex;
    align-items: center;
    gap: 50px;
    // margin: 83px 83px;

    @include breakpoint(mobileonly) {
      // margin: 40px 20px;
      justify-content: space-between;
      margin: 16px 5px;
      // gap: 89px;
    }
    @include breakpoint(tablet) {
      gap: 0;
      justify-content: space-between;
    }

    .barre-menu {
      display: flex;
      gap: 190px;
      @include breakpoint(tablet) {
        display: flex;
        gap: 15px;
        align-items: center;
        padding-left: 60px;
      }
      @include breakpoint(mobileonly) {
        display: flex;
        gap: 15px;
        align-items: center;
        padding-left: 60px;
      }

      #Exclusive {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.72px;
        color: #000;
        order: 1;
        text-decoration: none;

        // [listes-exclusivites] &:hover {
        //   display: block;
        // }
      }

      .route-link {
        gap: 45px;
        display: inline-flex;
        align-items: flex-start;
        order: 2;
        @include breakpoint(mobileonly) {
          display: none;
        }
        @include breakpoint(tablet) {
          display: none;
        }
      }
    }

    .menu {
      color: #000;
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      text-decoration: none;
      padding: 8px;

      &:hover {
        background: $primary-color-300;
        color: #fff;
        border-radius: 4px;
      }
      &:focus {
        background: $primary-color-400;
        color: #fff;
        border-radius: 4px;
      }
    }
    .Recherche {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      order: 3;

      .Cart1 {
        gap: 16px;
        display: flex;
        align-items: center;
        .likes {
          opacity: 0;
        }
      }
    }
    #btn-recherche {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: #f5f5f5;
      border: 0;
      padding: 7px 12px 7px 20px;

      @include breakpoint(mobileonly) {
        display: none;
      }
      @include breakpoint(tablet) {
        display: none;
      }
    }
    .Recherche #btn-recherche input {
      border: 0;
      outline: none;
      background: #f5f5f5;
      cursor: pointer;
    }
    ::-webkit-input-placeholder {
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: #000;
      opacity: 0.5;
    }
  }
  .mobile-menu {
    display: none;
    @include breakpoint(mobileonly) {
      display: flex;
      //position: relative;
    }
    @include breakpoint(tablet) {
      display: flex;
      // position: relative;
    }
    .menu-burger {
      // width: 29px;
      // height: 29px;
      display: none;
      order: 1;
      cursor: pointer;
      .btn-menu {
        background: none;
        border: 0;
        cursor: pointer;
        position: absolute;
        top: 20px;

        &:hover {
          border-radius: 50%;
          padding: -1px;
          background: $secondary-color;
        }
      }
      img {
        width: 35px;
        height: 40px;
      }

      @include breakpoint(mobileonly) {
        display: flex;
      }
      @include breakpoint(tablet) {
        display: flex;
      }
    }

    .side-menu {
      // .overlay {
      // }
      .list {
        position: fixed;
        z-index: 10;
        background: white;
        // min-height: 400px;
        // max-height: 530px;
        overflow-x: hidden;
        overflow-y: scroll;
        display: none;
        pointer-events: none;
        top: 0px;
        left: 0px;
        overflow-x: hidden;
        transition: 1s;
        width: 18rem;
        height: 100vh;

        .submenu {
          text-align: left;
          margin-top: 20px;
          .title {
            font-size: 18px;
            font-weight: 500;
            color: rgb(122, 122, 122);
            text-transform: uppercase;
            padding-left: 20px;
          }
          .menu-vertical {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 30px;
          }
        }
        .categories {
          text-align: left;
          padding-left: 20px;
          margin-top: 20px;
          .category {
            font-size: 18px;
            font-weight: 500;
            color: rgb(122, 122, 122);
            text-transform: uppercase;
          }
        }

        .exclusives {
          list-style: none;
          text-align: left;
          padding: 15px 11px;
          margin-top: -33px;
          .exclusivite {
            display: flex;
            justify-content: space-between;
            width: 100%;
            // padding-bottom: 10px;
            margin-bottom: 10px;
            padding: 10px 0 10px 10px;
            &:hover {
              background: rgba($primary-color, 0.7);
              border-radius: 10px;
              cursor: pointer;
              .exclusivite_menuName {
                color: #fff;
              }
            }
            .exclusivite_menuName {
              text-decoration: none;
              color: #000;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px;
            }
          }
        }
      }
      &.open {
        .overlay {
          cursor: not-allowed;
          background: #00000033;
          height: 100%;
          width: 100%;
          position: fixed;
          z-index: 5;
          top: 0;
          left: 0;
        }
        .list {
          display: block;
          pointer-events: all;
        }
      }
    }
    // &:hover {
    //   //background: $primary-color;
    //   //border-radius: 30px;
    //   // padding: 5px;

    //   // width: 100%;
    //   .list {
    //     opacity: 1;
    //     pointer-events: all;
    //   }
    // }
  }

  .panier {
    position: relative;
    .quantity {
      position: absolute;
      border-radius: 50%;
      background: $primary-color;
      width: 20px;
      height: 17px;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: #fff;
      top: -5px;
      left: 28px;
      padding: 1px;
    }
  }
  .account {
    position: relative;

    .list {
      position: absolute;
      top: 40px;
      right: 10px;
      z-index: 10;
      width: 235px;
      //  background: red;
      // padding: 10px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(75px);
      opacity: 0;
      padding: 18px 12px 10px 20px;
      pointer-events: none;

      .params {
        display: flex;
        align-items: center;
        gap: 10px;
        .icons {
          border: 0;
          background: none;
          //   img {

          //   }
        }
        .text {
          color: #fafafa;
          text-align: center;

          font-family: Poppins;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 21px;
          text-decoration: none;
        }
      }
    }
    &:hover {
      background: $primary-color;
      border-radius: 50%;
      padding: 2px;
      width: 35px;
      height: 35px;
      cursor: pointer;
      .list {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
}
</style>
