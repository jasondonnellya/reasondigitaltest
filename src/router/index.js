import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage';

const routes = [
  { path: '/', component: HomePage }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;