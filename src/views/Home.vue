<template>
  <div>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center ">
        <v-btn class="ml-8" depressed text to="/"
          ><span class="logo"> Genaric bytes</span></v-btn
        >
      </div>

      <v-spacer></v-spacer>

      <v-btn text  to="contact">
        <span class="mr-2 black--text" style="text-transform: none"
          >Contact</span
        >
      </v-btn>
    </v-app-bar>

    <router-view class="body" />
  </div>
</template>

<script>
//import MainBanner from "../components/MainBanner/MainBanner.vue";
export default {
  name: "Home",

  components: {},
};
</script>

<style scoped>
.body {
  background-color: #fdfdfe;
}
.logo {
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  color: black;
  font-weight: 600;
  background-color: transparent;
}
</style>
