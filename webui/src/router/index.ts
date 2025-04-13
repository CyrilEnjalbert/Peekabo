import { createRouter, createWebHistory } from 'vue-router'
import homePage from "../pages/HomePage.vue";
import birdListPage from "../pages/BirdListPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'home',
      component: homePage
    },
    { path: '/birdlist', 
      name:'stats',
      component: birdListPage
    }
  ]
})


export default router
