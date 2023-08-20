<template>
  <div class="home-partie1 grid-container">
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell small-12 medium-12 large-2">
        <div class="listes-exclusivites">
          <ul class="exclusives">
            <li
              class="exclusivite"
              v-for="(menuItem, index) in exclusiviteMenuItems"
              :key="index"
            >
              <div class="exclusivite_menuName">{{ menuItem.name }}</div>
              <div class="exclusivite_img" v-if="menuItem.hasSubmenu">
                <img src="@/assets/images/DropDown.png" alt="" />
                <!-- <img :src="menuItem.imgUrl" alt="" /> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="cell small-12 medium-12 large-10">
        <section id="sliders">
          <div class="swiper">
            <swiper
              :spaceBetween="30"
              :centeredSlides="true"
              :pagination="{
                clickable: true,
              }"
              :autoplay="false"
              :navigation="mainHeroOptions.navigation"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="i in 5" :key="i">
                <div class="Pub">
                  <div class="grid-x grid-margin-x grid-margin-y">
                    <div class="cell small-12 medium-12 large-6">
                      <div class="partie-une">
                        <div class="titre">
                          <img src="@/assets/images/Apple-logo1.png" />
                          <span class="Iphone14">Iphone 14 series</span>
                        </div>

                        <div class="Up-to">
                          Up to 10% <br />
                          Off Voucher
                        </div>

                        <div class="Shop-now">
                          <span> Shop Now</span>
                          <img src="@/assets/images/icon-arrow-right.png" />
                        </div>
                      </div>
                    </div>
                    <div class="cell small-12 medium-12 large-6">
                      <div class="partie-deux">
                        <img src="@/assets/images/hero_endframe.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </section>
      </div>
    </div>
  </div>

  <section id="product-for-flash-sales">
    <ProductForFlashSales />
    <!-- <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-6 medium-6 large-6">
          <ProduitsTitles topTitle="Today's" mainTitle="Flash sales" />
        </div>
        <div class="cell small-6 medium-6 large-6">
          <ButtonSwipper />
        </div>
      </div>
      <div class="">
        <swiper
          :spaceBetween="30"
          :centeredSlides="false"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="mainHeroOptions.breakpoints"
          :slides-per-view="4"
          :autoplay="true"
          :loop="true"
          :navigation="mainHeroOptions.navigation"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="productItem in allProducts"
            :key="productItem.id"
          >
            <ProductCard :product="productItem" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <ViewProducts position="center" title="View All Products" /> -->
  </section>

  <section id="Categories">
    <BrowseByCategory />
    <!-- <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-6 medium-6 large-6">
          <div>
            <ProduitsTitles
              topTitle="Categories"
              mainTitle="Browse By Category"
            />
          </div>
        </div>
        <div class="cell small-6 medium-6 large-6">
          <ButtonSwipper />
        </div>
      </div>
      <div class="grid-x">
        <swiper
          :spaceBetween="30"
          :centeredSlides="false"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="mainHeroOptions.breakpoints"
          :slides-per-view="5"
          :autoplay="true"
          :loop="true"
          :navigation="mainHeroOptions.navigation"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <Categories />
          </swiper-slide>
        </swiper>
        
      </div>
    </div> -->
  </section>

  <section id="Best-seller">
    <BestSeller :allProducts="allProducts" />
    <!-- <div class="grid-container">
      <div class="grid-x">
        <div class="cell small-6 medium-6 large-6">
          <div>
            <ProduitsTitles
              topTitle="This Month"
              mainTitle="Best Selling Products"
            />
          </div>
        </div>
        <div class="cell small-6 medium-6 large-6">
          <ViewProducts position="right" title="View All" />
        </div>
      </div>

      <div class="grid-x grid-margin-x">
        <swiper
          :spaceBetween="30"
          :centeredSlides="false"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="mainHeroOptions.breakpoints"
          :slides-per-view="4"
          :autoplay="true"
          :loop="true"
          :navigation="mainHeroOptions.navigation"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="i in 8" :key="i">
            <ProductCard />
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
  </section>

  <section id="Offre">
    <SectionOffre />
  </section>

  <section id="ourProduct">
    <SectionOurProduct
      :OurProducts="OurProducts"
      :OurProductNew="OurProductNew"
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
        // {
        //   id: 3,
        //   img: require("@/assets/images/television.png"),
        //   name: "IPS LCD Gaming Monitor",
        //   estEnSolde: true,
        //   prixSolde: 120,
        //   prixNormal: 160,
        // },
        // {
        //   id: 4,
        //   img: require("@/assets/images/chaise.png"),
        //   name: "HAVIT G92 Gamepad",
        //   estEnSolde: true,
        //   prixSolde: 120,
        //   prixNormal: 160,
        // },
        // {
        //   id: 5,
        //   img: require("@/assets/images/pullRose.png"),
        //   name: "The north coat",
        //   estEnSolde: true,
        //   prixSolde: 120,
        //   prixNormal: 160,
        // },
        // {
        //   id: 6,
        //   img: require("@/assets/images/sacgucci.png"),
        //   name: "Gucci duffle bag",
        //   estEnSolde: true,
        //   prixSolde: 120,
        //   prixNormal: 160,
        // },
        // {
        //   id: 7,
        //   img: require("@/assets/images/desktop.png"),
        //   name: "Small BookSelf",
        //   estEnSolde: true,
        //   prixSolde: 120,
        //   prixNormal: 160,
        // },
        // {
        //   id: 8,
        //   img: require("@/assets/images/baffle.png"),
        //   name: "RGB liquid CPU Cooler",
        //   estEnSolde: true,
        //   prixSolde: 120,
        //   prixNormal: 160,
        // },
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
    };
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/sass/container.scss";
@import "@/assets/sass/_colors.scss";
.home-partie1 {
  padding: 22px;

  .listes-exclusivites {
    border-right: 1px solid #00000024;
    //   width: 16%;

    &.div1 {
      grid-area: 1 / 1 / 2 / 5;
    }

    .exclusives {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 15px 11px;
      margin-top: 1px;
      .exclusivite {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 10px;
      }
    }
  }
  #sliders {
    // width: 85%;

    .Pub {
      background: #000;
      color: #fafafa;
      margin: 28px;
      padding: 70px;
      display: flex;
      // height: 225px;
      gap: 95px;
      justify-content: center;
      align-items: center;

      .partie-une {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px 76px;
      }

      .titre {
        display: inline-flex;
        align-items: center;
        gap: 24px;
        .Iphone14 {
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          text-align: center;
        }
      }
      .Up-to {
        display: flex;
        font-size: 35px;
        line-height: 45px;
        letter-spacing: 1.97px;
        margin-top: 40px;
        font-weight: 600;
        text-align: start;
      }
      .Shop-now {
        display: flex;
        padding-top: 22px;
        gap: 10px;
        span {
          border-bottom: 3px solid #fafafa63;
          font-weight: 400;
          line-height: 24px;
          text-align: center;
        }
      }
      .partie-deux {
        .ellipse {
          display: flex;
        }
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