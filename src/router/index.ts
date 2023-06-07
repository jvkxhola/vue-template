import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";

export const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Gome", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
