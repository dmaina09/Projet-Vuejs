<template>
  <footer id="footer">
    <div class="sous-footer container">
      <div class="carre1">
        <div class="souscarre1">
          <div class="exclusive">Exclusive</div>
          <div class="subscribe">Subscribe</div>
          <div class="remise">Get 10% off your first order</div>
        </div>
        <div class="souscarre2">
          <button id="email" type="submit">
            <input
              class="inputemail"
              type="text"
              placeholder="Enter your email"
            />
            <!-- <img src="@/assets/images/icon-send.png" /> -->
            <div class="img-send">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div class="carre2">
        <div class="support">Support</div>
        <div class="elts-carre">
          <div class="localisation">
            111 Bijoy sarani, Dhaka , <br />DH 1515, Bangladesh.
          </div>
          <div class="adresse-email">exclusive@gmail.com</div>
          <div class="numero-tel">+88015-88888-9999</div>
        </div>
      </div>

      <div class="carre3">
        <div class="account">Account</div>
        <div class="elts-carre">
          <div class="my-account">My Account</div>
          <div class="log-register">Login / Register</div>
          <div class="cart">Cart</div>
          <div class="wishlist">wishlist</div>
          <div class="shop">Shop</div>
        </div>
      </div>

      <div class="carre4">
        <div class="quick-link">Quick Link</div>
        <div class="terms">
          <div>Privacy Policy</div>
          <div>Terms Of Use</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>
      </div>

      <div class="carre5">
        <div class="download">Download App</div>
        <div class="save">Save $3 with App New User Only</div>

        <div class="images">
          <img src="@/assets/images/QrCode1.png" />
          <div class="store">
            <img src="@/assets/images/google-play.png" alt="" />
            <img src="@/assets/images/AppStore.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="reserved">
      <span class="img-C">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            d="M9.49935 18.3334C14.1017 18.3334 17.8327 14.6025 17.8327 10.0001C17.8327 5.39771 14.1017 1.66675 9.49935 1.66675C4.89698 1.66675 1.16602 5.39771 1.16602 10.0001C1.16602 14.6025 4.89698 18.3334 9.49935 18.3334Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9993 8.14823C11.9993 8.14823 10.9699 6.66675 9.25425 6.66675C7.53856 6.66675 6.16602 8.14823 6.16602 10.0001C6.16602 11.8519 7.53856 13.3334 9.25425 13.3334C10.9699 13.3334 11.9993 11.8519 11.9993 11.8519"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span class="copy-right">Copyright Rimel 2022. All right reserved</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>


<style scoped lang="scss">
@import "@/assets/sass/_breakspoints.scss";
@import "@/assets/sass/container.scss";
@import "@/assets/sass/_colors.scss";
#footer {
  padding-top: 40px;
  // padding-bottom: 40px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  background: #000;
  .sous-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    color: #fafafa;
    padding: 22px 22px;
    align-items: flex-start;
    font-family: poppins;
    font-style: normal;
    gap: 30px;

    @include breakpoint(mobileonly) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @include breakpoint(tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @include breakpoint(desktop) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .carre1 {
      .souscarre1 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;

        .exclusive {
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.72px;
        }
        .subscribe {
          font-family: poppins;
          font-size: 17px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
        }
        .remise {
          font-family: Poppins;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
        }
      }

      .souscarre2 {
        margin-top: 20px;

        #email {
          border: 1.5px solid #fafafa;
          display: flex;
          align-items: center;
          border-radius: 4px;
          // gap: 8px;
          background: #000;
          padding: 8px 0px;

          ::-webkit-input-placeholder {
            font-family: Poppins;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            color: #fafafa;
            background: #000;
            opacity: 0.7;
          }
          .inputemail {
            color: #fafafa;
            border: 0;
            outline: none;
            background: #000;
            padding-left: 10px;
          }
          .img-send {
            padding-right: 8px;
          }
        }
      }
    }

    .carre2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .support {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }
      .localisation {
        font-size: 13px;
        font-weight: 300;
        line-height: 24px;
        margin-top: 10px;
      }
      .adresse-email {
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        margin-top: 5px;
      }
      .numero-tel {
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        margin-top: 15px;
      }
    }
    .carre3 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      .account {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }
    }

    .carre4 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      .quick-link {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }
      .terms {
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        margin-top: 10px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }
    }
    .carre5 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .download {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }
      .save {
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        opacity: 0.7;
        margin-bottom: 8px;
      }
      .images {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .store {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
    }

    .elts-carre {
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      // gap: 12px;
    }
  }
  .reserved {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    opacity: 0.1;
    // margin: 15px 0;
    border-top: 0.5px solid #ffffff5c;
    padding: 10px;

    .copy-right {
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      color: #fff;
    }
  }
}
</style>