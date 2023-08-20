<template>
  <div class="categories">
    <div class="categorie-un">
      <div class="image-categorie">
        <img :src="category.img" alt="" />
      </div>
      <div class="nom-categorie">{{ category.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryProduct",
  props: {
    category: {
      type: Object,
      default: {
        img: require("@/assets/images/svg/phones.svg"),
        name: "Phones",
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
.categories {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 30px;
  color: #000;

  .categorie-un {
    // width: 70px;
    // height: 65px;
    padding: 30px 46px 30px 46px;

    .nom-categorie {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  &:hover {
    background: $primary-color;
    color: #fafafa;
  }
}
</style>