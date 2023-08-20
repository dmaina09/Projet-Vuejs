<template>
  <!-- <div class="NewProduct">
    <div class="playstation">
      <div class="imageUn">
         <img :src="img" />
        <img src="@/assets/images/playstation.png" alt="" />
      </div>
      <div class="section-texte">
        <div class="nom-produit">Playstation 5</div>
        <div class="description-produit">
          Black and White version of the PS5 coming out on sale.
        </div>
        <div class="Shop-now">Shop Now</div>
      </div>
    </div>
  </div> -->

  <div class="NewProduct">
    <div class="playstation">
      <div class="imageUn">
        <img :src="img" />
      </div>
      <div class="section-texte" :style="`top:${top}%`">
        <div class="nom-produit">{{ name }}</div>
        <div class="description-produit">
          {{ description }}
        </div>
        <div class="Shop-now">Shop Now</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArrivalProduct",
  props: {
    name: String,
    description: String,
    img: Image,
    top: { type: Number, default: 61 },
  },
};
</script>

<style lang="scss" scoped>
.NewProduct {
  .playstation {
    position: relative;
    background: #000;

    color: #fff;
    padding: 30px;
    border-radius: 5px;
    .section-texte {
      position: absolute;
      //   top: 61%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 36px 0px 0px 0px;
      gap: 16px;

      .nom-produit {
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.72px;
      }
      .description-produit {
        font-size: 15px;
        font-weight: 300;
        line-height: 21px;
        text-align: start;
        //opacity: 0.5;
      }
      .Shop-now {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        border-bottom: 1px solid #ffffffa1;
        // opacity: 0.75;
      }
    }
  }
}
</style>