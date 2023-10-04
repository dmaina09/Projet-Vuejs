<template>
  <section id="cart" class="container">
    <div class="navbar">
      <router-link to="/" class="accueil">Home /</router-link>
      <router-link to="/cart" class="cart"> Cart </router-link>
    </div>

    <div class="grid-container">
      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell small-12 medium-12 large-12">
          <!-- <div class="navbar">
            <router-link to="/" class="accueil">Home /</router-link>
            <router-link to="/cart" class="cart"> Cart </router-link>
          </div> -->
        </div>

        <div class="cell small-12 medium-12 large-12">
          <div class="grid-x grid-margin-x grid-margin-y">
            <div class="cell small-3 medium-3 large-3">
              <span class="details">Product </span>
            </div>
            <div class="cell small-3 medium-3 large-3">
              <span class="details">Price </span>
            </div>
            <div class="cell small-3 medium-3 large-3">
              <span class="details">quantity </span>
            </div>
            <div class="cell small-3 medium-3 large-3">
              <span class="details">SubTotal </span>
            </div>
          </div>
        </div>

        <div
          class="cell small-12 medium-12 large-12"
          v-for="(item, index) in getProductInCart"
          :key="index"
        >
          <div class="grid-x grid-margin-x grid-margin-y align-middle">
            <div class="cell small-3 medium-3 large-3">
              <div class="partie-une">
                <div class="imgProduct">
                  <img :src="item.product.image_url" alt="" />
                  <span
                    class="remove-button"
                    @click.prevent="removeProductFromCart(item.product)"
                  >
                    x
                  </span>
                </div>

                <span class="details">{{ item.product.name }}</span>
              </div>
            </div>

            <div class="cell small-3 medium-3 large-3">
              <span class="details">{{ item.product.price }}</span>
            </div>
            <div class="cell small-3 medium-3 large-3">
              <div class="countQuantity">
                <span class="nombre details">{{ item.quantity }}</span>

                <div class="drops">
                  <button @click="increaseQuantity(item.product)" class="drop">
                    <img src="@/assets/images/DropUpSmall.png" alt="" />
                  </button>
                  <button class="drop" @click="decreaseQuantity(item.product)">
                    <img src="@/assets/images/DropDownSmall.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div class="cell small-3 medium-3 large-3">
              <span class="details"
                >{{ item.quantity * item.product.price }} FCFA</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ensemble-btns">
      <div>
        <button class="btns">
          <span class="btn">Return To Shop</span>
        </button>
      </div>
      <!-- <div>
        <button class="btns">
          <span class="btn">Update Cart</span>
        </button>
      </div> -->
    </div>

    <!-- <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell-small-12 medium-12 large-6"></div>
      <div class="cell-small-12 medium-12 large-6"></div>
    </div> -->

    <div class="carts">
      <div class="code-promo">
        <div><input type="text" placeholder="Coupon Code" /></div>

        <div>
          <button type="submit" class="btn-submit">Apply Coupon</button>
        </div>
      </div>
      <div class="recap">
        <div class="totalCart">Cart Total</div>

        <div class="detailsCart">
          <span>Subtotal:</span>
          <span>{{ getCartTotalPrice }} FCFA</span>
        </div>

        <div class="detailsCart">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div class="detailsCart">
          <span>Total:</span>
          <span>{{ getCartTotalPrice }} FCFA</span>
        </div>

        <div class="btn-checkout">
          <ViewProducts position="center" title="Procees to checkout" />
          <!-- <button>
            <span>Procees to checkout</span>
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ViewProducts from "@/components/ViewProducts.vue";
export default {
  name: "Cart",
  components: {
    ViewProducts,
  },
  computed: {
    ...mapGetters(["getProductInCart", "getCartTotalPrice"]),
  },
  methods: {
    ...mapActions(["increaseQuantity", "decreaseQuantity"]),
    ...mapMutations(["INCREASE_QUANTITY", "DECREASE_QUANTITY"]),
    ...mapActions(["removeProductFromCart"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
@import "@/assets/sass/_breakspoints.scss";
#cart {
  margin-bottom: 20px;
  .navbar {
    text-align: left;
    margin-top: 23px;
    .accueil {
      text-decoration: none;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      opacity: 0.5;
    }
    .cart {
      text-decoration: none;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }
  }
  .details {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .partie-une {
    .imgProduct {
      position: relative;
      .remove-button {
        position: absolute;
        border-radius: 50%;
        background: $primary-color;
        width: 17px;
        height: 17px;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        color: #fff;
        top: -10px;
        left: 105px;
        cursor: pointer;
      }
    }
    img {
      width: 65px;
      height: 65px;
    }
  }
  .countQuantity {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    .drops {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      .drop {
        border: 0;
        background: none;
      }
    }
  }
  .ensemble-btns {
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // margin-bottom: 20px;
    justify-content: space-between;
    display: flex;
    // margin-bottom: 50px;
    margin: 25px 0px 50px;
    .btns {
      background: none;
      padding: 10px 20px;

      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      .btn {
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        color: #000;
      }
    }
  }

  .carts {
    display: grid;
    place-content: space-between;
    grid-template-columns: 1fr 1fr;
    @include breakpoint(mobileonly) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
    }
    @include breakpoint(tablet) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
    }
    .code-promo {
      display: flex;

      align-items: flex-start;
      gap: 16px;
      .btn-submit {
        border-radius: 4px;
        background: $primary-color;
        padding: 10px 20px;
        border: 0;
        color: #fafafa;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }

      input {
        display: flex;
        padding: 10px 20px;
        align-items: center;
        border-radius: 4px;
        border: 1px solid #000;

        &::-webkit-input-placeholder {
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          color: #000;
          opacity: 0.5;
          text-align: left;
        }
      }
    }
    .recap {
      border: 1px solid;
      // width: 360px;
      // height: 180px;
      padding: 30px;
      text-align: left;
      .totalCart {
        color: var(--Text2, #000);
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px;
        margin-bottom: 10px;
      }
      .detailsCart {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        color: var(--Text2, #000);

        font-family: Poppins;
        font-size: 16px;

        font-weight: 400;
        line-height: 24px;
      }
      .btn-checkout {
        margin-top: 30px;
      }
    }
  }
}
</style>