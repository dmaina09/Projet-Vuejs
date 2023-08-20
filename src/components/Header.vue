<template>
  <header class="grid-container">
    <nav class="navbar">
      <div class="barre-menu">
        <div id="Exclusive">Exclusive</div>

        <div class="route-link">
          <router-link to="/" class="menu">Home</router-link>
          <router-link to="/contact" class="menu">Contact</router-link>
          <router-link to="/about" class="menu">About</router-link>
          <router-link to="/sign-up" class="menu">Sign Up</router-link>
        </div>
      </div>
      <div class="Recherche">
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
          <div class="menu-burger">
            <img
              src="@/assets/images/menu-burger.png"
              height="29px"
              width="29px"
            />
          </div>
        </div>
      </div>
    </nav>
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
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_breakspoints.scss";
@import "@/assets/sass/container.scss";

header {
  border-bottom: 1px solid #00000024;
  padding: 22px;

  .navbar {
    display: flex;
    align-items: center;
    gap: 148px;
    // margin: 83px 83px;

    @include breakpoint(mobileonly) {
      // margin: 40px 20px;
      justify-content: space-between;
      margin: 16px 5px;
      gap: 89px;
    }
    @include breakpoint(tablet) {
      gap: 0;
      justify-content: space-between;
    }

    .barre-menu {
      display: flex;
      gap: 190px;

      #Exclusive {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.72px;
        color: #000;
        order: 1;

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
  .menu-burger {
    width: 29px;
    height: 29px;
    display: none;
    order: 4;

    @include breakpoint(mobileonly) {
      display: flex;
    }
    @include breakpoint(tablet) {
      display: flex;
    }
  }
}
</style>