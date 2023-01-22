import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../components/MainBanner/MainBanner.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/Contect/Contect.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
