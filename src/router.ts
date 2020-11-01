import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/demo/Home";
import About from "./components/demo/About";
let routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;