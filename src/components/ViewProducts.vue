<template>
  <div class="button-products" :style="`text-align:${position}`">
    <router-link to="/products" class="btn-view-all">
      <span class="view-all-products">{{ title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    position: { type: String, default: "center" },
    title: { type: String, default: "mettre le texte ici " },
  },
  name: "ViewProducts",
};
</script>



<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
.button-products {
  margin-bottom: 10px;
  .btn-view-all {
    border-radius: 4px;
    background: $primary-color;
    color: #fafafa;
    border: 0;
    padding: 16px 50px;
    text-decoration: none;
    cursor: pointer;
    .view-all-products {
      line-height: 24px;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>