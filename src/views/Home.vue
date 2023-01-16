<template>
  <div>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
       <div class="logo ml-8">
        Genaric bytes
       </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <div class="body">
      <!------------------Section one------------------------------->
      <MainBanner/>
    </div>
  </div>
</template>

<script>
import MainBanner from "../components/MainBanner/MainBanner.vue";
export default {
  name: "Home",

  components: {
    MainBanner
  },
};
</script>

<style scoped>
.body {
  background-color: #fdfdfe;
}
.logo{
  font-family: 'Poppins',sans-serif;
  font-size: 23px;
  color: black;
  font-weight: 600;
}
</style>
