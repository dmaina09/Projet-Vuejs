<template>
  <section class="container" id="aboutPage">
    <div class="navbar">
      <router-link to="/" class="accueil">Home /</router-link>
      <router-link to="/about" class="about"> About</router-link>
    </div>
    <div class="aboutPageStory">
      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell small-12 medium-12 large-6">
          <div class="paragraph">
            <h2>Our Story</h2>
            <div class="text">
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
        </div>
        <div class="cell small-12 medium-12 large-6">
          <div class="imageStory">
            <img src="@/assets/images/twoAfrican.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="fullServices">
      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell small-6 medium-6 large-3" v-for="i in 4" :key="i">
          <div class="service">
            <div class="services">
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell small-12 medium-12 large-12">
                  <div class="support-image">
                    <img src="@/assets/images/svg/saleProduct.svg" />
                  </div>
                </div>
                <div class="cell small-12 medium-12 large-12">
                  <div class="numberReview">10.5K</div>
                </div>
                <div class="cell small-12 medium-12 large-12">
                  <div class="sale">Sallers active our site</div>
                </div>
              </div>
            </div>
            <!-- <div class="services">
              <div class="support-image">
                <img src="@/assets/images/svg/saleProduct.svg" />
              </div>
              <div class="numberReview">10.5K</div>
              <div class="sale">Sallers active our site</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="cell-small-12 medium-12 large-3">
            <div class="services">
              <div class="support-image">
                <img src="@/assets/images/svg/saleProduct.svg" />
              </div>
              <div class="numbers">
                <span class="nomberReview">10.5K</span>
              </div>
              <div class="sale">
                <span class="sallers">Sallers active our site</span>
              </div>
            </div>
          </div> -->

    <div id="personnages">
      <div class="grid-container">
        <div class="grid-x grid-margin-x grid-margin-y">
          <div
            class="cell small-12 medium-12 large-4"
            v-for="(persons, index) in person"
            :key="index"
          >
            <div class="grid-x grid-margin-x grid-margin-y">
              <!-- Partie image -->
              <div class="cell small-12 medium-12 large-12">
                <div class="partie-image">
                  <img :src="persons.img" />
                </div>
              </div>
              <!-- Partie du texte -->
              <div class="cell small-12 medium-12 large-12">
                <div class="partie-texte">
                  <div class="nom">{{ persons.name }}</div>
                  <div class="fonction">{{ persons.fonction }}</div>

                  <div class="social-media">
                    <div class="twitter">
                      <img src="@/assets/images/iconTwitter.png" alt="" />
                    </div>

                    <div class="insta">
                      <img src="@/assets/images/icon-insta.png" alt="" />
                    </div>
                    <div class="linkedin">
                      <img src="@/assets/images/iconLinkedin.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="services">
      <FullService />
    </div>
  </section>
</template>

<script>
import FullService from "@/components/FullService.vue";
export default {
  name: "About",
  components: {
    FullService,
  },

  data() {
    return {
      person: [
        {
          id: 1,
          img: require("@/assets/images/tomCruse.png"),
          name: "Tom Cruse",
          fonction: "Founder & Chairman",
        },
        {
          id: 2,
          img: require("@/assets/images/emma.png"),
          name: "Emma Watson",
          fonction: "Managing Director",
        },
        {
          id: 3,
          img: require("@/assets/images/will.png"),
          name: "Will Smith",
          fonction: "Product Designer",
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
@import "@/assets/sass/_breakspoints.scss";

#aboutPage {
  .navbar {
    text-align: left;
    margin: 40px 0px;
    .accueil {
      text-decoration: none;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      opacity: 0.5;
    }
    .about {
      text-decoration: none;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }
  }
  .aboutPageStory {
    .paragraph {
      text-align: left;
      h2 {
        color: #000;
        text-align: justify;
        font-size: 54px;
        font-style: normal;
        font-weight: 600;
        line-height: 64px;
        letter-spacing: 3.24px;
      }
      .text {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        display: flex;
        flex-direction: column;
        text-align: start;
      }
    }
    .imageStory {
      img {
        width: 100%;
      }
    }
  }
}

.fullServices {
  margin: 80px 0;
  .service {
    // display: flex;
    padding: 10px 0px;
    // justify-content: center;
    // align-items: center;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    .services {
      // .support-image {
      //   // margin-bottom: 10px;
      //   // background-image: url("@/assets/images/svg/saleProduct.svg");
      // }
      .numberReview {
        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 1.28px;
        //  margin-bottom: 5px;
      }
      .sale {
        color: #000;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
    &:hover {
      background: $primary-color;
      .services {
        .numberReview {
          color: #fff;
        }
        .sale {
          color: #fff;
        }
      }
    }
  }
}

#service-container {
  margin-bottom: 50px;

  .services {
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px 0px;

    .nomberReview {
      color: #000;
      font-size: 32px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 1.28px;
    }
    .sale {
      .sallers {
        color: #000;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }

    &:hover {
      background: $primary-color;
      color: #fff;
      box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);

      img {
        background: #fff;
        border-radius: 44px;
      }
      .numberReview {
        color: #fff;
      }
      .sale {
        .sallers {
          color: #fff;
        }
      }
    }
  }
}

#personnages {
  .partie-image {
    background: $secondary-color;
    padding: 20px;
  }
  .partie-texte {
    text-align: left;
    color: #000;
    .nom {
      font-size: 28px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 1.28px;
      margin-bottom: 10px;
    }
    .fonction {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    .social-media {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 20px;
    }
  }
}
#services {
  margin-top: 30px;
}
</style>