import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/Home.vue'
import PreviewVue from '@/Preview.vue'
import SnapsVue from '@/Snaps.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/preview/:peripheral",
    name: "Preview",
    component: PreviewVue,
  },
  {
    path: "/snaps",
    name: "Snaps",
    component: SnapsVue,
  },  
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router
