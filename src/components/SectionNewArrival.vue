<template>
  <section>
    <div class="arrivals grid-container">
      <div class="newProducts">
        <div class="grid-x grid-margin-x grid-margin-y">
          <div class="cell small-6 medium-6 large-6">
            <NewArrivalProduct
              name="Playstation 5"
              description=" Black and White version of the PS5  coming out on sale."
              :img="img1"
            />
          </div>
          <div class="cell small-6 medium-6 large-6">
            <div class="grid-x">
              <div class="cell small-12 medium-12 large-12">
                <NewArrivalProduct
                  name="Women's Collections"
                  description=" Featured woman collections that give you another vibe."
                  :img="img2"
                  top="44"
                />
              </div>
              <div class="cell small-12 medium-12 large-12">
                <div class="grid-x grid-margin-x">
                  <div class="cell small-6 medium-6 large-6">
                    <NewArrivalProduct
                      name="Speakers"
                      description="Amazon wireless speakers"
                      :img="img3"
                      top="25"
                    />
                  </div>
                  <div class="cell small-6 medium-6 large-6">
                    <NewArrivalProduct
                      name="Perfume"
                      description=" GUCCI INTENSE OUD EDP"
                      :img="img4"
                      top="25"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewArrivalProduct from "./NewArrivalProduct.vue";
export default {
  name: "SectionNewArrival",
  components: {
    NewArrivalProduct,
  },

  data() {
    return {
      img1: require("@/assets/images/playstation.png"),
      img2: require("@/assets/images/attractiveWoman.png"),
      img3: require("@/assets/images/Speakers.png"),
      img4: require("@/assets/images/parfume.png"),
    };
  },
};
</script>


<style lang="scss" scoped>
.arrivals {
  // .playstation {
  //   position: relative;
  //   background: #000;
  //   color: #fff;
  //   padding: 30px;
  //   border-radius: 5px;
  //   .section-texte {
  //     position: absolute;
  //     top: 61%;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;
  //     align-items: flex-start;
  //     padding: 36px;
  //     gap: 16px;

  //     .nom-produit {
  //       font-size: 25px;
  //       font-style: normal;
  //       font-weight: 700;
  //       line-height: 24px;
  //       letter-spacing: 0.72px;
  //     }
  //     .description-produit {
  //       font-size: 15px;
  //       font-weight: 300;
  //       line-height: 21px;
  //       text-align: start;
  //       //opacity: 0.5;
  //     }
  //     .Shop-now {
  //       font-size: 16px;
  //       font-style: normal;
  //       font-weight: 600;
  //       line-height: 24px;
  //       border-bottom: 1px solid #ffffffa1;
  //       // opacity: 0.75;
  //     }
  //   }
  // }

  // .women-collection {
  //   background: #000;
  //   color: #fff;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: relative;
  //   .partie-texte {
  //     align-items: flex-start;
  //     display: flex;
  //     flex-direction: column;
  //     padding: 23px;
  //     position: absolute;
  //     top: 45%;
  //     left: 12px;
  //     gap: 10px;
  //     .mainTitle {
  //       font-size: 25px;
  //       font-style: normal;
  //       font-weight: 700;
  //       line-height: 24px;
  //       letter-spacing: 0.72px;
  //     }
  //     .description {
  //       font-size: 15px;
  //       font-weight: 300;
  //       line-height: 21px;
  //       text-align: start;
  //     }
  //     .shop {
  //       font-size: 16px;
  //       font-style: normal;
  //       font-weight: 600;
  //       line-height: 24px;
  //       border-bottom: 1px solid #ffffffa1;
  //     }
  //   }
  //   .img-collection {
  //     background: #000;
  //   }
  // }
  .partie-bas {
    padding: 16px 0px 0px 0px;
    display: flex;
    gap: 20px;
    align-items: center;
    .partie-bas-gauche {
      background: #000;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      // .partie-texte-basgauche {
      //   align-items: flex-start;
      //   display: flex;
      //   flex-direction: column;
      //   padding: 23px;
      //   position: absolute;
      //   top: 45%;
      //   left: 12px;
      //   gap: 10px;
      //   .mainTitle {
      //     font-size: 25px;
      //     font-style: normal;
      //     font-weight: 700;
      //     line-height: 24px;
      //     letter-spacing: 0.72px;
      //   }
      //   .description {
      //     font-size: 15px;
      //     font-weight: 300;
      //     line-height: 21px;
      //     text-align: start;
      //   }
      //   .shop {
      //     font-size: 16px;
      //     font-style: normal;
      //     font-weight: 600;
      //     line-height: 24px;
      //     border-bottom: 1px solid #ffffffa1;
      //   }
      // }
    }
  }
}
</style>