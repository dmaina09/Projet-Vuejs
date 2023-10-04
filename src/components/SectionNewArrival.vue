<template>
  <div></div>
  <!-- <section id="newArrivals">
    <div class="arrivals-container">
      <div class="partie-gauche">
        <div class="section-texte">
          <div class="title">Playstation 5</div>
          <div class="description">dhhdddd</div>
          <div class="shop">Shop Now</div>
        </div>
      </div>
      <div class="partie-droite">
        <div class="partie-droite-haut">
          <div class="section-texte">
            <div class="title">Playstation 5</div>
            <div class="description">dhhdddd</div>
            <div class="shop">Shop Now</div>
          </div>
        </div>
        <div class="partie-droite-bas">
          <div class="bas-gauche">
            <div class="section-texte">
              <div class="title">Playstation 5</div>
              <div class="description">dhhdddd</div>
              <div class="shop">Shop Now</div>
            </div>
          </div>
          <div class="bas-droite">
            <div class="section-texte">
              <div class="title">Playstation 5</div>
              <div class="description">dhhdddd</div>
              <div class="shop">Shop Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
export default {
  name: "SectionNewArrival",
};
</script>


<style lang="scss" scoped>
#newArrivals {
  margin: 25px;
  .arrivals-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    .partie-gauche {
      background: url("@/assets/images/playstation.png") #000 50% no-repeat;
    }
    .partie-droite {
      .partie-droite-haut {
        background: url("@/assets/images/attractive-Woman.png") #000 50%
          no-repeat;
      }
      .partie-droite-bas {
        gap: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 30px;
        .bas-gauche {
          background: url("@/assets/images/Speakers.png") #000 50% no-repeat;
        }
        .bas-droite {
          background: url("@/assets/images/parfume.png") #000 50% no-repeat;
        }
      }
    }
  }
}
</style>








