<template>
  <section id="Categories">
    <div class="grid-container">
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
      <div class="">
        <swiper
          :spaceBetween="10"
          :centeredSlides="false"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="mainHeroOptions.breakpoints"
          :slides-per-view="6"
          :autoplay="true"
          :loop="true"
          :navigation="mainHeroOptions.navigation"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="categoryItem in Categories"
            :key="categoryItem.id"
          >
            <CategoryProduct :category="categoryItem" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
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
import CategoryProduct from "./CategoryProduct.vue";
export default {
  name: "browserByCAtegory",
  components: {
    Swiper,
    SwiperSlide,
    ProduitsTitles,
    ProductCard,
    ViewProducts,
    ButtonSwipper,
    CategoryProduct,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
  data() {
    return {
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
        {
          id: 3,
          img: require("@/assets/images/svg/SmartWatch.svg"),
          name: "SmartWatch",
        },
        {
          id: 4,
          img: require("@/assets/images/svg/camera.svg"),
          name: "Camera",
        },
        {
          id: 5,
          img: require("@/assets/images/svg/HeadPhone.svg"),
          name: "HeadPhone",
        },
        {
          id: 6,
          img: require("@/assets/images/svg/gaming.svg"),
          name: "Gaming",
        },
      ],
      mainHeroOptions: {
        loop: true,
        autoplay: true,
        slidesPerView: 6,
        spaceBetween: 10,
        navigation: {
          nextEl: ".hero-slider .hero-slider_arrows__nextbtn",
          prevEl: ".hero-slider .hero-slider_arrows__prevbtn",
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
};
</script>