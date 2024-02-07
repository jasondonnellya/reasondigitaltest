import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage";
import LoremIpsum from "../pages/LoremIpsum"
import NotFound from "../pages/NotFound";

// Could also pull in the route names using the nav-items.json file but would need to define the components for each page also so this is simpler.
const routes = [
  { path: "/", component: HomePage },
  { path: "/what-we-do", component: LoremIpsum },
  { path: "/the-digital-divide", component: LoremIpsum },
  { path: "/get-involved", component: LoremIpsum },
  { path: "/our-network", component: LoremIpsum },
  { path: "/insights", component: LoremIpsum },
  { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;