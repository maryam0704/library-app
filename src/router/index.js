
import { createRouter, createWebHistory } from "vue-router";
// import MainView from "@/views/MainView.vue";
import UserPageView from "@/views/UserPageView.vue";
import AdminPageView from "@/views/AdminPageView.vue";
import UserOne from "@/views/UserOne.vue";



const routes = [
  // { path: "/", component: MainView },
  { path: "/", component: UserPageView },
  { path: "/admin", component: AdminPageView },
  { path: "/userOne", component: UserOne },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
