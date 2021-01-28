import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
    import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/conversion",
    name: "Conversion.vue",
    component: () =>
      import(/* webpackChunkName: "sel-c" */ "../views/Conversion.vue")
  },
  {
    path: "/result",
    name: "Result",
    component: () =>
      import(/* webpackChunkName: "sel-c" */ "../views/Result.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
