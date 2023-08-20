<template>
  <div class="grid-container">
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
        <swiper-slide v-for="productItem in allProducts" :key="productItem.id">
          <ProductCard :product="productItem" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
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
export default {
  name: "BestSeller",
  props: {
    allProducts: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ProduitsTitles,
    ProductCard,
    ViewProducts,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
  data() {
    return {
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
</style>