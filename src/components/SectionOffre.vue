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
            <div class="dateOffre">
              <ul class="dates">
                <li
                  class="dateline"
                  v-for="(item, index) in datelines"
                  :key="index"
                >
                  <span class="date-limite">{{ item.number }}</span>
                  <span class="heure-limite">{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <div class="btn-buy">
              <router-link to="#" class="btnBuyNow">
                <span>Buy Now !</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="cell small-12 medium-12 large-6">
          <div class="partie-droite">
            <img src="@/assets/images/radio.png" class="image-radio" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SectionOffre",
  data() {
    return {
      datelines: [
        { id: 1, number: 23, text: "Hours" },
        { id: 2, number: 5, text: "Days" },
        { id: 3, number: 59, text: "Minutes" },
        { id: 4, number: 35, text: "Secondes" },
      ],
    };
  },
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
      .dateOffre {
        .dates {
          display: flex;
          text-align: start;
          gap: 10px;
          justify-content: flex-start;

          padding: 0px;
          .dateline {
            align-items: center;
            border-radius: 42px;
            background: white;
            color: #000;
            display: flex;
            flex-direction: column;
            padding: 20px;
            width: 30px;
            height: 30px;
            .date-limite {
              font-family: Poppins;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 20px;
            }
            .heure-limite {
              font-family: Poppins;
              font-size: 11px;
              font-style: normal;
              font-weight: 500;
              line-height: 18px;
            }
          }
        }
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
    .partie-droite {
      .image-radio {
        width: 100%;
      }
    }
  }
}
</style>