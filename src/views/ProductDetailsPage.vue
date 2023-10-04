<template>
  <section id="product-details">
    <div class="grid-container">
      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell small-12 medium-12 large-2">
          <div class="scrollableContent">
            <div class="imageGallery-content">
              <div
                class="imageGalleryItem"
                v-for="(imgGalleryItem, index) in currentProduct.images_url"
                :key="index"
              >
                <div class="carre" @click="changeCurrentImg(imgGalleryItem)">
                  <div
                    class="partie-gauche"
                    :style="{ background: imgGalleryItem }"
                  >
                    <img class="img" :src="imgGalleryItem" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cell small-12 medium-12 large-6">
          <div class="carre-centre">
            <div class="img-centre" :style="`background: ${isImageSelected}`">
              <img :src="isImageSelected" alt="" />
            </div>
          </div>
        </div>

        <div class="cell small-12 medium-12 large-4">
          <div class="partie-droite">
            <div class="grid-x grd-margin-x">
              <div class="cell small-12 medium-12 large-12">
                <div class="top-title">{{ currentProduct.name }}</div>
              </div>
              <div class="cell small-12 medium-12 large-12">
                <div class="avis-votes">
                  <div class="etoile" v-for="i in avisProduit.rate" :key="i">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                  </div>
                  <div class="avis">({{ avisProduit.rate }})</div>
                  <p class="line">|</p>
                  <div class="stockage" v-if="currentProduct.inStock">
                    In Stock
                  </div>
                </div>
              </div>

              <div class="cell small-12 medium-12 large-12">
                <p class="price">{{ currentProduct.price }}</p>
              </div>

              <div class="cell small-12 medium-12 large-12">
                <div class="description">
                  {{ currentProduct.shortDescription }}
                  <!-- <p>
                     PlayStation 5 Controller Skin High quality vinyl with air
                    channel adhesive for easy bubble free install & mess free
                    removal Pressure sensitive.
                  </p> -->
                </div>
                <hr />
              </div>

              <!-- <div class="cell small-12 medium-12 large-12">
                <div class="colors">
                  <p>Colours:</p>
                  <div
                    class="colors_container"
                    v-for="(color, index) in product.variantColors"
                    :key="index"
                  >
                    <label for="" class="product-color">
                      <input
                        type="radio"
                        name="radio"
                        class="couleurs blue"
                        checked
                        id="cb1"
                        :style="{ accentColor: color }"
                      />
                    </label>
                  </div>
                </div>
              </div> -->

              <!-- <div class="cell small-12 medium-12 large-12">
                <div class="sizes">
                  <p class="size-product">
                    Size:
                    <input
                      type="radio"
                      name="taille"
                      class="size"
                      id="taille-xs"
                      checked
                    />
                    <label for="taille-xs">XS</label>

                    <input
                      type="radio"
                      name="taille"
                      class="size"
                      id="taille-s"
                    />
                    <label for="taille-s">S</label>
                    <input
                      type="radio"
                      name="taille"
                      class="size"
                      id="taille-m"
                    />
                    <label for="taille-m">M</label>
                    <input
                      type="radio"
                      name="taille"
                      class="size"
                      id="taille-l"
                    />
                    <label for="taille-l">L</label>
                    <input
                      type="radio"
                      name="taille"
                      class="size"
                      id="taille-xl"
                    />
                    <label for="taille-l">XL</label>
                  </p>
                </div>
              </div> -->

              <div class="cell small-12 medium-12 large-12">
                <div class="choix">
                  <!-- <div class="nombre-articles">
                    <div class="moins">
                      <button v-on:click="diminuerNombre" class="btn-moins">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 12H4"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div class="nombre">{{ nombre }}</div>
                    <div class="plus">
                      <button v-on:click="augmenterNombre" class="btn-plus">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 17V9M9 9V1M9 9H17M9 9H1"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>

                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 20V12M12 12V4M12 12H20M12 12H4"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div> -->
                  <div>
                    <button class="btn-buy">Buy Now</button>
                  </div>
                  <div class="wishlist">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="cell small-12 medium-12 large-12">
                <div class="livraison-Remboursement">
                  <div class="livraison">
                    <div class="livraison-img">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_261_4843)">
                          <path
                            d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 11.8182H11.6667"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.81836 15.4545H8.48503"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 19.0909H11.6667"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_261_4843">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="text">
                      <div class="top">Free Delivery</div>
                      <div class="postal-code">
                        Enter your postal code for Delivery Availability
                      </div>
                    </div>
                  </div>

                  <div class="remboursement">
                    <div class="remboursement-img">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_261_4865)">
                          <path
                            d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_261_4865">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="text">
                      <div class="top">Return Delivery</div>
                      <div class="return-product">
                        Free 30 Days Delivery Returns.
                        <span class="details">Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RelatedItem />
  </section>
</template>


<script>
import ProductForFlashSales from "@/components/ProductForFlashSales.vue";
import ProduitsTitles from "@/components/ProduitsTitles.vue";
import ProductCard from "@/components/ProductCard.vue";
import RelatedItem from "@/components/RelatedItem.vue";

export default {
  name: "ProductDetailsPage",
  components: {
    ProductForFlashSales,
    ProduitsTitles,
    ProductCard,
    RelatedItem,
  },
  data() {
    return {
      avisProduit: {
        rate: "5",
      },
      nombre: "0",
      isImageSelected: "",
      product: {
        id: 1,
        img: require("@/assets/images/dogFood.png"),
        imgGallery: [
          {
            img: require("@/assets/images/manette-centre.png"),
          },
          {
            img: require("@/assets/images/manette-white2.png"),
          },
          {
            img: require("@/assets/images/manette-white3.png"),
          },
          {
            img: require("@/assets/images/manette-white4.png"),
          },
          {
            img: require("@/assets/images/manette-white1.png"),
          },
          {
            img: require("@/assets/images/manette-white2.png"),
          },
          {
            img: require("@/assets/images/manette-white3.png"),
          },
          {
            img: require("@/assets/images/manette-white4.png"),
          },
        ],
        variantColors: [
          "#7d60f9",
          "#93959C",
          "#23262B",

          "#58D786",

          "#FF955C",

          "#F57069",

          "#FFC555",
        ],
        // name: "Breed Dry Dog Food",
        // estEnSolde: false,
        // discountValue: null,
        // prixSolde: 260,
        // prixNormal: 360,
        // rate: 3,
      },
      currentProduct: {},
    };
  },
  methods: {
    async getSingleProduct() {
      try {
        const { data } = await this.$axios.get(
          "/product/" + this.$route.params.slug
        );
        console.log(data);
        this.currentProduct = data.data;
        this.isImageSelected = this.currentProduct.image_url;
      } catch (error) {
        console.log(error);
      }
    },
    diminuerNombre() {
      if (this.nombre > 0) {
        this.nombre--;
      }
    },
    augmenterNombre() {
      this.nombre++;
    },
    changeCurrentImg(urlImage) {
      console.log(urlImage);
      this.isImageSelected = urlImage;
    },
  },
  created() {
    this.getSingleProduct();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
@import "@/assets/sass/_breakspoints.scss";
#product-details {
  margin-top: 50px;
  margin-bottom: 40px;
  .scrollableContent {
    min-height: 630px;
    max-height: 630px;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
      @include breakpoint(mobileonly) {
        height: 10px;
        border-radius: 100px;
      }
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f1;

      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: $primary-color;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: $primary-color-600;
      border-radius: 10px;
    }

    @include breakpoint(mobileonly) {
      overflow-x: scroll;
      overflow-y: hidden;
      min-height: 185px;
      max-height: 185px;
    }
    @include breakpoint(tablet) {
      overflow-x: scroll;
      overflow-y: hidden;
      min-height: 185px;
      max-height: 185px;
    }

    .imageGallery-content {
      display: flex;
      flex-direction: column;
      @include breakpoint(mobileonly) {
        display: flex;
        flex-direction: row;
      }
      @include breakpoint(tablet) {
        display: flex;
        flex-direction: row;
      }
      .imageGalleryItem {
        .carre {
          display: flex;
          width: 150px;
          height: 150px;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          // background: #f5f5f5;
          margin: 0px 10px;

          .partie-gauche {
            border-radius: 4px;
            img {
              width: 170px;
              height: 138px;
              object-fit: cover;
            }
            // width: 150px;
            // height: 150px;
            // background: url("@/assets/images/manette-white1.png"),
            //   lightgray -16.207px -17.081px / 121.766% 130.293% no-repeat;
          }
        }
      }
    }
  }
  .carre-centre {
    width: 500px;
    height: 541px;
    padding: 0px 27px 97px 27px;
    border-radius: 4px;
    background: #f5f5f5;
    @include breakpoint(mobileonly) {
      width: 473px;
      height: 504px;
    }
    .img-centre {
      width: 483px;
      height: 535px;
      // background: url("@/assets/images/manette-centre.png"),
      //   lightgray -39.483px -26.603px / 115.266% 122.457% no-repeat;
      border-radius: 4px;
      img {
        width: 500px;
        height: 600px;
        padding-top: 16px;
      }
    }
  }

  .partie-droite {
    @include breakpoint(mobileonly) {
      margin-top: 20px;
    }
    .top-title {
      color: #000;

      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.72px;
      text-align: start;
    }
    .avis-votes {
      display: flex;
      align-items: center;
      gap: 10px;
      .line {
        opacity: 0.5;
      }
      .stockage {
        color: var(--button-1, #0f6);
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
      }
    }
    .price {
      color: #000;
      text-align: start;

      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.72px;
    }
    .description {
      color: #000;
      text-align: start;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }
    // .colors {
    //   display: grid;
    //   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    //   .colors_container {
    //     position: relative;
    //     width: 25px;
    //     height: 25px;
    //     border-radius: 50%;
    //     pointer-events: none;

    //     .product-color {
    //       font-size: 20px;
    //       font-style: normal;
    //       font-weight: 400;
    //       line-height: 20px;
    //       letter-spacing: 0.6px;
    //       text-align: start;
    //       color: #000;

    //       input {
    //         position: absolute;
    //         z-index: -1;
    //         top: -3px;
    //         pointer-events: all;

    //         width: 20px;
    //         height: 26px;
    //         left: -3px;
    //         border-radius: 50%;
    //         cursor: pointer;
    //         border: 2px solid #000;

    //         // .active {
    //         //   &::after {
    //         //     content: "";
    //         //     width: 36px;
    //         //     height: 36px;

    //         //     position: absolute;
    //         //     border-radius: 50%;
    //         //     box-sizing: border-box;
    //         //     left: -5px;
    //         //     top: -5px;
    //         //   }
    //         // }
    //       }
    //     }
    //   }
    // }

    // .sizes {
    //   .size-product {
    //     color: #000;

    //     font-size: 20px;
    //     font-style: normal;
    //     font-weight: 400;
    //     line-height: 20px;
    //     letter-spacing: 0.6px;
    //     text-align: start;
    //     display: flex;
    //     gap: 10px;
    //     align-items: center;
    //     input[type="radio"].size {
    //       display: none;
    //       & + label {
    //         color: var(--text-2, #000);
    //         font-family: Poppins;
    //         font-size: 14px;
    //         font-style: normal;
    //         font-weight: 600;
    //         line-height: 21px;
    //         /* width: 15px; */
    //         // padding: 0.3rem 1rem;
    //         padding: 3px 11px;
    //         border: 1px solid #000;
    //         background-color: white;
    //         border-radius: 4px;
    //         &:hover {
    //           background-color: $primary-color;
    //           border-color: $primary-color-600;
    //           color: #fff;
    //         }
    //         &:checked {
    //           background-color: $primary-color;
    //           border-color: $primary-color-600;
    //         }
    //       }
    //     }
    //   }
    // }

    .choix {
      display: flex;
      align-items: center;
      align-items: center;
      gap: 16px;
      margin-top: 20px;
      // padding: 0px 31px;
      // .nombre-articles {
      //   display: flex;
      //   border-radius: 4px 0px 0px 4px;
      //   border: 1px solid rgba(0, 0, 0, 0.5);

      //   .btn-moins {
      //     background: no-repeat;
      //     border: 0;
      //   }
      //   .nombre {
      //     display: flex;
      //     padding: 4px 24px;
      //     justify-content: center;
      //     align-items: center;
      //     border-left: 1px solid rgba(0, 0, 0, 0.5);
      //     border-right: 1px solid rgba(0, 0, 0, 0.5);
      //   }
      //   .plus {
      //     color: #000;
      //     display: flex;
      //     align-items: center;
      //     &:hover {
      //       background: $primary-color;
      //       color: #fff;
      //     }
      //     .btn-plus {
      //       background: no-repeat;
      //       border: 0;
      //     }
      //   }
      // }
      .btn-buy {
        display: flex;
        background: $primary-color;
        color: #fff;
        text-align: center;
        padding: 20px 60px;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        cursor: pointer;
        &:hover {
          background: $primary-color-600;
        }
      }
      .wishlist {
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }

    .livraison-Remboursement {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 40px;
      border: 1px solid #000;
      padding: 21px;

      .livraison {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 35px;

        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          color: #000;
          .top {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .postal-code {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px;
            text-decoration-line: underline;
          }
        }
      }
      .remboursement {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 35px;
        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          color: #000;
          .top {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .return-product {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px;
            .details {
              text-decoration-line: underline;
            }
          }
        }
      }
    }
  }
}
</style>