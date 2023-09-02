// import Vue from "vue";
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import UserPageView from "@/views/UserPageView.vue";
import AdminPageView from "@/views/AdminPageView.vue";

// Vue.use(VueRouter);

const routes = [
  { path: "/", component: MainView},
  { path: "/user", component: UserPageView },
  { path: "/admin", component: AdminPageView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
