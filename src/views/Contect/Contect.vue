<template>
  <div class="ContactUs">
    <div class="background-img-section">
      <div class="d-flex justify-center">
        <div class="form-section container">
          <v-row>
            <v-col cols="12" md="5">
              <div class="h1">
                Get in <br />
                touch
              </div>
            </v-col>
            <v-col cols="12" md="7">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Name" solo outlined flat></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Email Address"
                    solo
                    flat
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-textarea
                solo
                outlined
                flat
                name="input-7-4"
                label="Outlined textarea"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
              <div class="d-flex justify-end">
                <div class="top-banner-btn">Submit</div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div style="margin-top: 9%">
      <GettingTouchSection></GettingTouchSection>
    </div>
  </div>
</template>

<script>
import GettingTouchSection from "../../components/GernalSection/GettingTouchSection.vue";
export default {
  components: {
    GettingTouchSection,
  },
};
</script>

<style></style>
