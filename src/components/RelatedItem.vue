<template>
  <section id="related-item">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-6 medium-6 large-6">
          <ProduitsTitles topTitle="Related Item" mainTitle="" />
        </div>
        <!-- <div class="cell small-6 medium-6 large-6">
          <ButtonSwipper />
        </div> -->
      </div>
      <div class="items">
        <div
          class="product-card"
          v-for="productItem in allProducts"
          :key="productItem.id"
        >
          <ProductCard :product="productItem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProduitsTitles from "@/components/ProduitsTitles.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "RelatedItem",
  components: {
    ProduitsTitles,
    ProductCard,
  },
  data() {
    return {
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
          estEnSolde: true,
          discountValue: 35,
          prixSolde: 960,
          prixNormal: 1160,
          rate: 4,
        },
        {
          id: 3,
          img: require("@/assets/images/television.png"),
          name: "IPS LCD Gaming Monitor",
          estEnSolde: true,
          discountValue: 30,
          prixSolde: 300,
          prixNormal: 400,
          rate: 4,
        },
        {
          id: 4,
          img: require("@/assets/images/baffle.png"),
          name: "RGB liquid CPU Cooler",
          estEnSolde: false,
          discountValue: null,
          prixSolde: 160,
          prixNormal: 170,
          rate: 4,
        },
      ],
    };
  },
};
</script> 

<style lang="scss" scoped>
@import "@/assets/sass/_breakspoints.scss";

#related-item {
  margin-top: 40px;
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-content: space-between;
    gap: 45px;
    @include breakpoint(tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      place-content: space-between;
      gap: 45px;
    }
    @include breakpoint(mobileonly) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-content: space-between;
      gap: 45px;
    }
    .product-card {
      margin-top: 0;
      // display: flex;
      // gap: 14px;
    }
  }
}
</style>