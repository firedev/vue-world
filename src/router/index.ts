import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventShow from '@/views/EventShow.vue'
import EventCreate from '@/views/EventCreate.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/create',
    name: 'EventCreate',
    component: EventCreate,
  },
  {
    path: '/event/:id',
    name: 'EventShow',
    component: EventShow,
    props: true,
  },
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
