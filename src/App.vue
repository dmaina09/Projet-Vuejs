<template>
  <div>
    <Header />
    <div style="margin-top: 20px;">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {
    this.getUserWithToken();
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    ...mapActions(["setUserInStore"]),
    async getUserWithToken() {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: "Bearer " + token,
      };
      try {
        const { data } = await this.$axios.get("/auth", { headers });
        if (data.statusCode == 200) {
          // console.log(data.data);

          this.setUserInStore(data.data.user);
        }
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
@import "assets/sass/app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
