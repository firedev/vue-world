import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EventList from "../views/EventList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
