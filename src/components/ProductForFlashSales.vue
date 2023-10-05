<template>
  <section id="product-for-flash-sales">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-10 medium-6 large-6">
          <ProduitsTitles
            topTitle="Aujourd'hui"
            :mainTitle="categoryProduct.title"
          />
        </div>
        <div class="cell small-2 medium-6 large-6">
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
            v-for="productItem in categoryProduct.products"
            :key="productItem.id"
          >
            <ProductCardTwo :product="productItem" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <ViewProducts position="center" title="Voir tous les produits" />
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProduitsTitles from "@/components/ProduitsTitles.vue";
import ProductCardTwo from "@/components/ProductCardTwo.vue";
import ViewProducts from "@/components/ViewProducts.vue";
import ButtonSwipper from "@/components/ButtonSwipper.vue";
export default {
  name: "ProduitForFlashSales",
  components: {
    Swiper,
    SwiperSlide,
    ProduitsTitles,
    ProductCardTwo,
    ViewProducts,
    ButtonSwipper,
  },
  props: {
    categoryProduct: {
      type: Object,
    },
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
          img: require("@/assets/images/manette.png"),
          name: "HAVIT HV-G92 Gamepad ",
          estEnSolde: true,
          discountValue: 40,
          prixSolde: 120,
          prixNormal: 160,
          rate: 3,
        },
        {
          id: 2,
          img: require("@/assets/images/clavier.png"),
          name: "AK-900 Wired Keyboard",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 120,
          prixNormal: 160,
          rate: 4,
        },
        {
          id: 3,
          img: require("@/assets/images/television.png"),
          name: "IPS LCD Gaming Monitor",
          estEnSolde: true,
          discountValue: 30,
          prixSolde: 370,
          prixNormal: 400,
          rate: 5,
        },
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
</style>