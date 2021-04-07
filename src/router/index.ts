import Vue from "vue";
import VueRouter, { Route, RouteConfig, NavigationGuard } from "vue-router";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

/**
 * Protects the routes and makes sure that only 
 * authorized users are allowed to access specific pages
 * @param to 
 * @param from 
 * @param next 
 */
const guardRoute = (to: Route, from: Route, next: Parameters<NavigationGuard>[2]) => {
    console.log(`the user is logged in: ` + store.state.user.loggedIn);
    (!store.getters.user.loggedIn) ? next("/login") : next();
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    beforeEnter: guardRoute,
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: guardRoute,
    component: Profile
  },
  {
     path: "/login",
     name: "Login",
     component: Login 
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
