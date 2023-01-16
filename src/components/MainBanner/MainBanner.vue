<template>
  <div class="MainBanner">
    <div class="w-100 h-100 d-flex justify-center top-section">
      <div class="black-container">
        <v-card color="transparent">
          <div class="white--text main-heading">Divi Data Science</div>
          <div class="white--text main-span">
            We process complex data into plain and simple information graphics
            and understandable sheet.
          </div>
          <div class="w-100 d-flex justify-center">
            <div class="top-banner-btn">Get Stared</div>
          </div>
        </v-card>
      </div>
    </div>
    <!-----------section 2----------------------------->
    <div class="section-two w-100 mt-14">
      <div class="d-flex justify-center">
        <div class="container">
          <v-row class="my-14">
            <v-col cols="12" md="6" style="display: grid; align-items: center">
              <div>
                <div class="heading-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sapien massa, convallis a pellentesque nec.
                </div>
                <div class="heading-2 my-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sapien massa, convallis a pellentesque nec.
                </div>
                <div class="d-flex">
                  <div class="top-banner-btn">Get Stared</div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="../../assets/images/pic1.jpg" contain></v-img>
            </v-col>
          </v-row>
          <v-row style="margin-top: 12%">
            <v-col cols="12" md="6">
              <v-img src="../../assets/images/pic2.png" contain></v-img>
            </v-col>
            <v-col cols="12" md="6" style="display: grid; align-items: center">
              <div>
                <div class="heading-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sapien massa, convallis a pellentesque nec.
                </div>
                <div class="heading-2 my-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sapien massa, convallis a pellentesque nec.
                </div>
                <div class="d-flex">
                  <div class="top-banner-btn">Learn More</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <!--------------Listen to the numbers---------------------->
    <div class="ListenToTheNumber container" style="margin-top: 8%">
      <div class="heading1">Listen to the numbers</div>
      <v-row class="mt-9">
        <v-col cols="12" md="6" class="py-0">
          <div class="img-1">
            <div class="heading2">
              We process complex data into plain and simple information
              graphics.
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" style="height: 100%" class="py-0">
          <div class="img-2">
            <div class="heading2">
              We process complex data into plain and simple information
              graphics.
            </div>
          </div>
          <div class="img-2 mt-9">
            <div class="heading2">
              We process complex data into plain and simple information
              graphics.
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!--------------section 3------------------------>
    <div class="section-three w-100 mt-14">
      <div class="container">
        <div class="heading-1">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </div>
        <div class="w-100">
          <div class="box">
            <div class="box1"></div>
            <div class="box2">
              <v-card max-width="50" flat color="transparent">
                <v-img src="../../assets/images/lab-icon.png"></v-img>
              </v-card>
              <div class="heading-1 mt-4">Testing</div>
              <div class="detail mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
              <div class="d-flex mt-8">
                <div class="top-banner-btn mt-8">Our process</div>
              </div>
            </div>
            <div class="box3 mx-4">
              <v-card max-width="50" flat color="transparent">
                <v-img src="../../assets/images/chart-icon.png"></v-img>
              </v-card>
              <div class="heading-1 mt-4">Analysis</div>
              <div class="detail mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
            <div class="box4">
              <v-card max-width="50" flat color="transparent">
                <v-img src="../../assets/images/stats-icon.png"></v-img>
              </v-card>
              <div class="heading-1 mt-4">Monitoring</div>
              <div class="detail mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 mt-9">
          <div class="box2">
            <div class="box1 d-flex">
              <v-avatar size="80">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/Jacqueline_Fernandez_at_the_launch_Gillette%27s_new_range_DYK.jpg"
                  alt="John"
                />
              </v-avatar>
              <div class="ml-4 w-100" style="display: grid">
                <div class="heading-1 w-100">Jacqueline fernandez</div>
                <div class="heading-1 w-100">CTO, Extra Space</div>
              </div>
            </div>
            <div class="box2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>
