<template>
  <div class="sectionOffre grid-container">
    <div class="offres">
      <div class="grid-x align-center align-middle">
        <div class="cell small-12 medium-12 large-6">
          <div class="partie-gauche">
            <div class="title">
              <span class="category">Categories</span>
            </div>

            <div class="Slogan">
              Enhance Your<br />
              Music Experience
            </div>
            <div class="dateline"></div>
            <div class="btn-buy">
              <router-link to="#" class="btnBuyNow">
                <span>Buy Now</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="cell small-12 medium-12 large-6">
          <div class="partie-droite">
            <img src="@/assets/images/radio.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SectionOffre",
};
</script>


<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
.sectionOffre {
  background: #000;
  color: white;
  // margin: 14px;
  padding: 0;
  .offres {
    padding: 70px;
    margin: 28px;

    .partie-gauche {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      gap: 16px;

      .title {
        .category {
          color: $green-color;
          font-size: 20px;
          font-weight: 600;
          line-height: 20px;
        }
      }
      .Slogan {
        font-size: 40px;
        font-weight: 600;
        line-height: 60px;
        letter-spacing: 1.92px;
        text-align: start;
        padding-top: 30px;
      }
      .btn-buy {
        padding-top: 30px;
        .btnBuyNow {
          background: $green-color;
          color: white;
          display: inline-flex;
          padding: 16px 48px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }
}
</style>