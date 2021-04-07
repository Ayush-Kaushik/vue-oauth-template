import Vue from "vue";
import VueRouter, { Route, RouteConfig, NavigationGuard } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store";

Vue.use(VueRouter);

const guardRoute = (to: Route, from: Route, next: Parameters<NavigationGuard>[2]) => {

    if(!store.getters.user.loggedIn) {
        next("/login");
    } else {
        next();
    }
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    beforeEnter: guardRoute,
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    beforeEnter: guardRoute,
    component: () =>
      import("../views/About.vue"),
  },
  {
     path: "/login",
     name: "Login",
     component: Login 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
