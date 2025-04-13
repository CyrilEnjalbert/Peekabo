import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import BirdListPage from "@/pages/BirdListPage.vue";
import BirdLocationPage from "@/pages/BirdLocationPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import { isAuthenticated } from "../auth/ authState"; // Import shared state

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/birdlist", name: "BirdList", component: BirdListPage },
  { path: "/birdlocation", name: "BirdLocation", component: BirdLocationPage },
  { path: "/login", name: "Login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuthenticated.value) {
    // Redirect to login if not authenticated
    next({ name: "Login" });
  } else {
    // Allow navigation
    next();
  }
});

export default router;