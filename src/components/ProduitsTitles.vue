<template>
  <div class="titre-produits">
    <div class="products">
      <div class="days">
        <span id="day-name">{{ topTitle }}</span>
      </div>

      <div id="Promo">
        {{ mainTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topTitle: String,
    mainTitle: {
      type: String,
      default: "mets le titre ici",
    },
  },
  name: "ProduitsTitles",
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/container.scss";
@import "@/assets/sass/_colors.scss";
.products {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .days {
    align-items: center;
    gap: 16px;
    display: flex;
    margin-bottom: 20px;
    #day-name {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: $primary-color;
    }

    &::before {
      content: "";
      background-color: $primary-color;
      height: 40px;
      width: 20px;
      border-radius: 4px;
    }
  }

  #Promo {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 1.44px;
    color: #000;
  }
}
</style>