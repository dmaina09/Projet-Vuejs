<template>
  <div class="product-card">
    <div class="produits-soldes">
      <div class="produits">
        <div class="pourcentage-solde" v-if="product.estEnSolde">
          <span class="text">-{{ product.discountValue }}%</span>
        </div>
        <div class="favories">
          <button class="heart_btn">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button class="icone-group-btn">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="img1">
        <img :src="product.img" alt="" />
      </div>

      <div class="button-card">
        <button class="buy-btn">
          <span>Add To Card</span>
        </button>
      </div>
    </div>

    <div class="details-produits">
      <div class="product-name">
        <span>{{ product.name }}</span>
      </div>
      <div class="prix-produit" :class="product.estEnSolde ? 'isSolde' : ''">
        <div class="prix-solde" v-if="product.estEnSolde">
          ${{ calculDiscountPrice(product.discountValue, product.prixNormal) }}
        </div>
        <div class="prix-normal">${{ product.prixNormal }}</div>
      </div>
      <div class="avis">
        <div class="etoile" v-for="i in product.rate" :key="i">
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
        <div class="nbr-avis">({{ product.rate }})</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: {
        img: require("@/assets/images/manette.png"),
        name: "HAVIT HV-G92 Gamepad",
        estEnSolde: true,
        discountValue: 20,
        prixSolde: 120,
        prixNormal: 160,
        rate: 3,
      },
    },
  },
  methods: {
    calculDiscountPrice: (discountValue, prixNormal) => {
      return prixNormal - (prixNormal * discountValue) / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
.product-card {
  margin-bottom: 30px;
  margin-top: 30px;

  .produits-soldes {
    background: $secondary-color;
    padding: 22px 22px;
    overflow: hidden;
    // min-height: 260px;
    .img1 {
      padding-top: 20px;
      margin-bottom: -15px;
    }
    .produits {
      position: relative;

      .pourcentage-solde {
        position: absolute;
        left: 0;

        .text {
          border: 2px solid $primary-color;
          background: $primary-color;
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          color: #fafafa;
          display: inline-flex;
          padding: 5px 15px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 4px;
          height: 12px;
          width: 12px;
        }
      }
      .favories {
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        transition: all 0.2s ease-in-out;
        transform: translateX(100px);
        .heart_btn {
          background: no-repeat;
          border: 0;
        }
        .icone-group-btn {
          background: no-repeat;
          border: 0;
        }

        // .heart {
        //   border-radius: 17px;
        //   background: #fff;
        //   padding: 4px 3px;
        //   align-items: center;
        //   opacity: 15;
        // }
        // .icone-group {
        //   border-radius: 17px;
        //   background: #fff;
        //   padding: 4px 3px;
        //   align-items: center;
        //   opacity: 15;
        // }
      }
    }
    .button-card {
      .buy-btn {
        padding: 1.5em 3.1em;
        border: none;
        border-radius: 0px 0px 4px 4px;
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: 1.3px;
        color: #fff;
        background-color: #000;
        width: 100%;
        transition: all 0.2s ease-in-out;
        transform: translateY(100px);
        cursor: pointer;
        pointer-events: none;
      }
    }
  }

  .details-produits {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
    .product-name {
      color: #000;

      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }

    .prix-produit {
      display: flex;
      align-items: center;
      gap: 15px;
      .prix-normal {
        color: $primary-color;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }

      &.isSolde {
        .prix-solde {
          color: $primary-color;

          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
        .prix-normal {
          color: #000;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          text-decoration: line-through;
          opacity: 0.5;
        }
      }
    }
    .avis {
      display: flex;
      gap: 5px;
      .nbr-avis {
        color: #000;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        opacity: 0.5;
      }
    }
  }

  &:hover {
    .produits-soldes {
      .produits {
        .favories {
          transform: translateY(0);
          pointer-events: all;
        }
      }
      .button-card {
        .buy-btn {
          transform: translateX(0);
          pointer-events: all;
        }
      }
    }
  }
}
</style>
