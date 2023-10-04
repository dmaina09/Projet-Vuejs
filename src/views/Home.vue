<template>
  <div class="home-partie1 grid-container">
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell small-3 medium-3 large-3">
        <div class="listes-exclusivites">
          <ul class="exclusives">
            <li
              class="exclusivite"
              v-for="(categories, index) in categoriesProducts"
              :key="index"
              :categories-products="categories"
            >
              <router-link
                :to="`/products/categories/${categories.slug}`"
                class="exclusivite_menuName"
                >{{ categories.name }}</router-link
              >
              <!-- <div class="exclusivite_img" v-if="menuItem.hasSubmenu">
                <img src="@/assets/images/DropDown.png" alt="" />
               <img :src="menuItem.imgUrl" alt="" /> 
              </div> -->
              <div class="submenu" v-if="categories.children.length > 0">
                <div class="submenuList">
                  <div class="grid-x grid-margin-x grid-margin-y">
                    <div
                      class="cell small-12 medium-12 large-3"
                      v-for="(submenu, index) in categories.children"
                      :key="index"
                    >
                      <div class="menu">
                        <router-link to="#" class="submenu-name"
                          ><h3>
                            {{ submenu.name }}
                          </h3></router-link
                        >

                        <router-link
                          to="#"
                          class="submenuChildName"
                          v-for="(subChild, index) in submenu.children"
                          :key="index"
                        >
                          {{ subChild.name }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="cell small-12 medium-12 large-9">
        <section id="sliders">
          <div class="swiper">
            <swiper
              :spaceBetween="30"
              :centeredSlides="true"
              :pagination="{
                clickable: true,
              }"
              :autoplay="true"
              :navigation="mainHeroOptions.navigation"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(banners, index) in banner"
                :key="index"
                :banner="banner"
              >
                <div class="partie-deux">
                  <img :src="banners.image_url" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </section>
      </div>
    </div>
  </div>

  <section id="product-for-flash-sales">
    <ProductForFlashSales
      v-for="(category, index) in categoryProduct"
      :key="index"
      :category-product="category"
    />
  </section>

  <!-- <section id="Categories">
    <BrowseByCategory />
  </section> -->

  <!-- <section id="Best-seller">
    <BestSeller :allProducts="allProducts" />
  </section> -->

  <section id="Offre">
    <SectionOffre />
  </section>

  <section id="ourProduct">
    <SectionOurProduct
      :desktop-product="desktopProduct"
      :sport-product="sportProduct"
    />
  </section>

  <section id="New">
    <SectionNewArrival />
  </section>

  <section id="Services">
    <FullService />
  </section>
</template>



<script>
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProduitsTitles from "@/components/ProduitsTitles.vue";
import ProductCard from "@/components/ProductCard.vue";
import ViewProducts from "@/components/ViewProducts.vue";
import ButtonSwipper from "@/components/ButtonSwipper.vue";
import CategoryProduct from "@/components/CategoryProduct.vue";
import BestSeller from "@/components/BestSeller.vue";
import ProductForFlashSales from "@/components/ProductForFlashSales.vue";
import BrowseByCategory from "@/components/BrowseByCategory.vue";
import SectionOffre from "@/components/SectionOffre.vue";
import SectionOurProduct from "@/components/SectionOurProduct.vue";
import SectionNewArrival from "@/components/SectionNewArrival.vue";
import FullService from "@/components/FullService.vue";
export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    ProduitsTitles,
    ProductCard,
    ViewProducts,
    ButtonSwipper,
    CategoryProduct,
    BestSeller,
    ProductForFlashSales,
    BrowseByCategory,
    SectionOffre,
    SectionOurProduct,
    SectionNewArrival,
    FullService,
  },
  mounted() {
    console.log(`the component is now mounted.`);
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },

  data() {
    return {
      text: "aaaa",
      allProducts: [
        {
          id: 1,
          img: require("@/assets/images/pullRose.png"),
          name: "The north coat",
          estEnSolde: true,
          discountValue: 40,
          prixSolde: 260,
          prixNormal: 360,
          rate: 4,
        },
        {
          id: 2,
          img: require("@/assets/images/sacgucci.png"),
          name: "AK-900 Wired Keyboard",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 960,
          prixNormal: 1160,
          rate: 4,
        },
      ],
      Categories: [
        {
          id: 1,
          img: require("@/assets/images/svg/phones.svg"),
          name: "Phones",
        },
        {
          id: 2,
          img: require("@/assets/images/svg/computers.svg"),
          name: "Computers",
        },
      ],
      exclusiviteMenuItems: [
        {
          id: 1,
          name: "Woman 's Fashion",
          hasSubmenu: true,
          submenu: [],
          imgUrl:
            "https://plus.unsplash.com/premium_photo-1673283380425-0f41f67db1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: 2,
          name: "Men's Fashion",
          hasSubmenu: true,
          submenu: [],
          imgUrl:
            "https://plus.unsplash.com/premium_photo-1673283380425-0f41f67db1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: 3,
          name: "Electronics",
          hasSubmenu: false,
        },
        {
          id: 4,
          name: "Home & Lifestyle",
          hasSubmenu: false,
        },
        {
          id: 5,
          name: "Medicine",
          hasSubmenu: false,
        },
        {
          id: 6,
          name: "Sport & Outdoor",
          hasSubmenu: false,
        },
        {
          id: 7,
          name: "Baby's & Toys",
          hasSubmenu: false,
        },
        {
          id: 8,
          name: "Groceries & Pets",
          hasSubmenu: false,
        },
        {
          id: 9,
          name: "Health & Beautys",
          hasSubmenu: false,
        },
      ],

      OurProducts: [
        {
          id: 1,
          img: require("@/assets/images/dogFood.png"),
          name: "Breed Dry Dog Food",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 360,
          rate: 3,
        },
        {
          id: 2,
          img: require("@/assets/images/canonCamera.png"),
          name: "Breed Dry Dog Food",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 360,
          rate: 4,
        },
        {
          id: 3,
          img: require("@/assets/images/laptop.png"),
          name: "Breed Dry Dog Food",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 360,
          rate: 5,
        },
        {
          id: 4,
          img: require("@/assets/images/productSet.png"),
          name: "Breed Dry Dog Food",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 360,
          rate: 4,
        },
      ],
      OurProductNew: [
        {
          id: 1,
          img: require("@/assets/images/newMercedes.png"),
          name: "Kids Electric Car",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 960,
          rate: 4,
        },
        {
          id: 2,
          img: require("@/assets/images/Soccer.png"),
          name: "Jr. Zoom Soccer Cleats",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 1160,
          rate: 4,
        },
        {
          id: 3,
          img: require("@/assets/images/gamepad.png"),
          name: "GP11 Shooter USB Gamepad",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 660,
          rate: 4,
        },
        {
          id: 4,
          img: require("@/assets/images/Jacket.png"),
          name: "Quilted Satin Jacket",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 260,
          prixNormal: 660,
          rate: 4,
        },
      ],
      mainHeroOptions: {
        loop: true,
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
          nextEl: ".hero-slider .hero-slider_arrows__nextbtn",
          prevEl: ".hero-slider .hero-slider_arrows__prevbtn",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
      categoryProduct: [],
      desktopProduct: [],
      sportProduct: [],
      categoriesProducts: [],
      banner: [],
    };
  },
  created() {
    this.getCatSection();
    this.getCategoryDesktop();
    this.getCategorySport();
    this.getCategoriesProducts();
    this.getBanner();
  },
  methods: {
    async getCatSection() {
      try {
        const { data } = await this.$axios.get("/category-section/product");
        this.categoryProduct = data.data;
        //  console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async getCategoryDesktop() {
      try {
        const { data } = await this.$axios.get("/product?category=ordinateur");
        // console.log(data);
        this.desktopProduct = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getCategorySport() {
      try {
        const { data } = await this.$axios.get("/product?category=sports");
        //console.log(data);
        this.sportProduct = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getCategoriesProducts() {
      try {
        const { data } = await this.$axios.get("/product_category/menu");
        this.categoriesProducts = data.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getBanner() {
      try {
        const { data } = await this.$axios.get("/banner");
        this.banner = data.data;
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/sass/container.scss";
@import "@/assets/sass/_colors.scss";
@import "@/assets/sass/_breakspoints.scss";
// * {
//   border: 1px solid red;
// }
.home-partie1 {
  padding: 22px;

  .listes-exclusivites {
    border-right: 1px solid #00000024;
    //   width: 16%;
    min-height: 450px;
    max-height: 450px;
    overflow-x: hidden;
    overflow-y: scroll;
    @include breakpoint(tablet) {
      display: none;
    }
    @include breakpoint(mobileonly) {
      display: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;

      // @include breakpoint(mobileonly) {
      //   height: 10px;
      //   border-radius: 100px;
      // }
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f1;

      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: $primary-color;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: $primary-color-600;
      border-radius: 10px;
    }

    // @include breakpoint(mobileonly) {
    //   overflow-x: scroll;
    //   overflow-y: hidden;
    //   min-height: 185px;
    //   max-height: 185px;
    // }
    // @include breakpoint(tablet) {
    //   overflow-x: scroll;
    //   overflow-y: hidden;
    //   min-height: 185px;
    //   max-height: 185px;
    // }

    // &.div1 {
    //   grid-area: 1 / 1 / 2 / 5;
    // }

    .exclusives {
      list-style: none;
      // display: flex;
      // flex-direction: column;
      // align-items: flex-start;

      text-align: left;
      padding: 15px 11px;
      margin-top: 1px;
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

          // width: 90%;
          .exclusivite_menuName {
            color: white;
          }

          .submenu {
            pointer-events: all;
            opacity: 1;
            @include breakpoint(mobileonly) {
              left: 8.9rem;
            }
            @include breakpoint(tablet) {
              left: 11rem;
            }
          }
        }
        .exclusivite_menuName {
          text-decoration: none;
          color: #000;
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
        }

        .submenu {
          position: absolute;
          left: 20rem;
          top: 105px;
          width: 77%;
          z-index: 10;
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform: translatex(-10px);
          background: $primary-color;
          // margin: 0;
          // padding: 0;
          box-sizing: border-box;
          border-radius: 6px;
          //  width: 72%;
          pointer-events: none;
          opacity: 0;
          min-height: 500px;
          max-height: 500px;
          overflow-x: hidden;
          overflow-y: scroll;

          &::-webkit-scrollbar {
            width: 15px;
            border-radius: 10px;

            @include breakpoint(mobileonly) {
              height: 10px;
              border-radius: 100px;
            }
          }
          &::-webkit-scrollbar-track {
            background: $secondary-color;

            //border-radius: 10px;
          }
          &::-webkit-scrollbar-thumb {
            background: rgba($primary-color, 0.7);
            border-radius: 10px;
            height: 10px;
          }
          &::-webkit-scrollbar-thumb:hover {
            background: $primary-color-600;
            border-radius: 10px;
          }

          // @include breakpoint(mobileonly) {
          //   overflow-x: scroll;
          //   overflow-y: hidden;
          //   min-height: 185px;
          //   max-height: 185px;
          // }
          // @include breakpoint(tablet) {
          //   overflow-x: scroll;
          //   overflow-y: hidden;
          //   min-height: 185px;
          //   max-height: 185px;
          // }
          .submenuList {
            text-align: left;
            list-style: none;
            color: white;
            font-family: poppins;
            padding: 25px;
            .menu {
              .submenu-name {
                color: #fff;
                font-size: 18px;
                // line-height: 24px;
                // font-size: 18px;
                font-weight: 400;
                font-family: poppins;
                text-decoration: none;
              }
              .submenuChildName {
                color: #fff;
                text-decoration: none;
                display: flex;
                flex-direction: column;
                font-size: 16px;

                font-family: poppins;
              }
            }
          }
        }
      }
    }
  }
  #sliders {
    // width: 85%;

    .partie-deux {
      img {
        @include breakpoint(laptoponly) {
          min-height: 450px;
          max-height: 450px;
          width: 100%;
        }
        @include breakpoint(mobileonly) {
          height: auto;
          max-width: 100%;
        }
      }
      .ellipse {
        display: flex;
      }
    }
  }
}

#product-for-flash-sales {
  padding: 22px;

  .button {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    cursor: pointer;

    .btn-prev {
      border: 0;
      background: no-repeat;
    }
    .btn-next {
      border: 0;
      background: no-repeat;
    }

    .mySwiper {
      margin-top: 30px;
    }
  }
}

// #Best-seller {
//   .button-view {
//     display: flex;
//     align-items: flex-end;
//     justify-content: flex-end;
//     height: 100%;

//     .btn-view {
//       border-radius: 4px;
//       background: $primary-color;
//       color: #fafafa;
//       border: 0;
//       padding: 16px 50px;
//       cursor: pointer;
//       .view-all {
//         line-height: 24px;
//         font-size: 16px;
//         font-weight: 500;
//       }
//     }
//   }
// }

#Offre {
  margin-bottom: 40px;
}
#ourProduct {
  margin-bottom: 40px;
}
#New {
  margin-bottom: 40px;
}
</style>