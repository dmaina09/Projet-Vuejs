<template>
  <section id="products">
    <div class="grid-container">
      <div class="grid-x grid-margin-x grid margin-y">
        <div class="cell small-12 medium-12 large-12">
          <ProduitsTitles
            topTitle="Nos Produits"
            mainTitle="Exploirez nos  produits"
          />
        </div>
        <div class="cell small-12 medium-12 large-12">
          <div class="grid-x grid-margin-x grid-margin-y">
            <div
              class="cell small-12 medium-6 large-4"
              v-for="(singleProduct, index) in allProducts"
              :key="index"
            >
              <ProductCardTwo :product="singleProduct" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
import ProductCardTwo from "../components/ProductCardTwo.vue";
import ProduitsTitles from "../components/ProduitsTitles.vue";

export default {
  name: "Products",
  components: {
    ProductCardTwo,
    ProduitsTitles,
  },
  data() {
    return {
      allProducts: [],
    };
  },

  methods: {
<<<<<<< HEAD
    // async getAllProducts() {
    //   try {
    //     const { data } = await this.$axios.get("/product");
    //     console.log(data);
    //     this.allProducts = data.data.products;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async getAllProductsByCategory() {
      try {
        const { data } = await this.$axios.get(
          "/product/category?" + this.$route.params.categoryName
        );
=======
    async getAllProducts() {
      try {
        const { data } = await this.$axios.get("/product");
>>>>>>> 8a80a23a9a79a128535be62930c0028b7c0f366d
        console.log(data);
        this.allProducts = data.data.products;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
<<<<<<< HEAD
    this.getAllProductsByCategory();
=======
    this.getAllProducts();
>>>>>>> 8a80a23a9a79a128535be62930c0028b7c0f366d
  },
};
</script>