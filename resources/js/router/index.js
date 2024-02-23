import { createRoute, createWebHistory } from "vue-router";
import AppComponent from '.layouts/App.vue'

const routes = [
  {
    path: '/',
    component: AppComponent
  },
  {
    path: '/about',
    component: AppComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;