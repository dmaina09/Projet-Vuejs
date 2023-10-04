<template>
  <section id="contacts">
    <div class="grid-container">
      <div class="navbar">
        <router-link to="/" class="accueil">Home /</router-link>
        <router-link to="/contact" class="contact"> Contact</router-link>
      </div>

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell small-12 medium-12 large-3">
          <div class="partie-gauche">
            <div class="phones">
              <div class="icon-phone">
                <img src="@/assets/images/icons-phone.png" />
              </div>
              <div class="txt">
                <span class="callToUs">Call To Us</span>
              </div>
            </div>

            <div class="">
              <span class="available"
                >We are available 24/7, 7 days a week.</span
              >
            </div>
            <div class="">
              <span class="available">Phone: +8801611112222</span>
            </div>

            <div class="emails">
              <div class="img-email">
                <img src="@/assets/images/icons-mail.png" />
              </div>
              <div class="txt"><span class="texte">Write To US</span></div>
            </div>

            <div class="">
              <span class="available fill">
                Fill out our form and we will contact you within 24 hours.
              </span>
            </div>
            <div class="">
              <span class="available">Emails: customer@exclusive.com</span>
            </div>
            <div class="">
              <span class="available">Emails: support@exclusive.com</span>
            </div>
          </div>
        </div>

        <div class="cell small-12 medium-12 large-9">
          <div class="partie-droite">
            <form class="form-container">
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell small-12 medium-12 large-12">
                  <div class="haut">
                    <div class="grid-x grid-margin-x grid-margin-y">
                      <div class="cell small-4 medium-4 large-4">
                        <div class="name">
                          <input
                            type="text"
                            placeholder="Your Name *"
                            required
                          />
                        </div>
                      </div>
                      <div class="cell small-4 medium-4 large-4">
                        <div class="email">
                          <input
                            type="text"
                            placeholder="Your Email *"
                            required
                          />
                        </div>
                      </div>
                      <div class="cell small-4 medium-4 large-4">
                        <div class="phone">
                          <input
                            type="text"
                            placeholder="Your Phone *"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cell small-12 medium-12 large-12">
                  <div class="bas">
                    <div>
                      <textarea cols="30" rows="10" id="message">
                       Your Massage
                     </textarea
                      >
                    </div>
                  </div>
                  <div class="btns">
                    <button type="submit" class="btns-submit">
                      Send Massage
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ViewProducts from "@/components/ViewProducts";
export default {
  name: "Contact",
  components: {
    ViewProducts,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_colors.scss";
#contacts {
  margin-bottom: 80px;
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
    .contact {
      text-decoration: none;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }
  }
  .partie-gauche {
    // margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    border-radius: 4px;
    background: var(--Primary, #fff);
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    //padding: 40px 35px 51px 35px;
    padding: 30px;
    height: 100%;
    text-align: left;

    .phones {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
      .txt {
        .callToUs {
          color: #000;
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
      }
    }

    .emails {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: left;
      border-top: 1px solid #00000029;
      width: 100%;
      text-align: left;
      .img-email {
        margin-top: 10px;
      }
      .txt {
        margin-top: 10pxq;
        .texte {
          color: #000;
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
      }
    }

    .available {
      color: var(--Text2, #000);
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2 !important;
    }
  }
  .partie-droite {
    border-radius: 4px;
    background: var(--Primary, #fff);
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    padding: 40px 32px 40px 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 30px;
    .form-container {
      padding: 10px 15px;
      .haut {
        input {
          border: 0;
          background: #f5f5f5;
          padding: 14px 0px 14px 15px;
          border-radius: 6px;
          width: 100%;
          outline: none;
          &::placeholder {
            color: #000;

            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;

            opacity: 0.5;
          }
        }
      }
      .bas {
        text-align: left;

        textarea {
          width: 100%;
          border-radius: 4px;
          background: $secondary-color;
          border: 0;
          color: #000;
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          opacity: 0.5;
          outline: none;
        }
      }
      .btns {
        text-align: right;
        margin-top: 30px;
        .btns-submit {
          border-radius: 4px;
          background: $primary-color;
          color: #fafafa;
          border: 0;
          padding: 16px 50px;
          text-decoration: none;
          cursor: pointer;
          line-height: 24px;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>