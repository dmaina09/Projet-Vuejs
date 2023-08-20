<template>
  <section>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-6 medium-6 large-6">
          <ProduitsTitles
            topTitle="Our Products"
            mainTitle="Explore Our Products"
          />
        </div>
        <div class="cell small-6 medium-6 large-6">
          <ButtonSwipper />
        </div>
      </div>
      <div>
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
            v-for="productItem in OurProducts"
            :key="productItem.id"
          >
            <ProductCard :product="productItem" />
          </swiper-slide>
          >
        </swiper>
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
            v-for="productItem in OurProductNew"
            :key="productItem.id"
          >
            <ProductCard :product="productItem" />
          </swiper-slide>
          >
        </swiper>
      </div>
    </div>
    <ViewProducts position="center" title="View All Products" />
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
export default {
  name: "SectionOurProduct",
  components: {
    Swiper,
    SwiperSlide,
    ProduitsTitles,
    ProductCard,
    ViewProducts,
    ButtonSwipper,
  },
  props: {
    OurProducts: {
      type: Array,
      default: [],
    },
    OurProductNew: {
      type: Array,
      default: [],
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

<style lang="scss" scoped></style>