import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Guide from "@/views/guide/Index.vue";
import BasicExample from "@/views/guide/BasicExample.vue";
import WithIcons from "@/views/guide/WithIcons.vue";
import WithMetaInfo from "@/views/guide/WithMetaInfo.vue";
import DefaultOpenExample from "@/views/guide/DefaultOpenExample.vue";
import OpenAll from "@/views/guide/OpenAll.vue";

import { createWebHistory, createRouter } from "vue-router";


export const routes = [
  {
    path: "/", name: "Home", component: Home,
    meta: {
      exludedOnSidebar: true
    }
  },
  {
    path: "/about", name: "About", component: About, meta: {
      exludedOnSidebar: true
    }
  },
  {
    path: "/guide", name: "Guide", component: Guide, children: [

      {
        path: 'basic-example',
        name: 'Basic Example',
        component: BasicExample
      },
      {
        path: 'with-icons',
        name: 'Render items with icons',
        component: WithIcons
      },
      {
        path: 'with-meta-info',
        name: 'Render items with meta info',
        component: WithMetaInfo
      },
      
      {
        path: 'default-open-item',
        name: 'Default Open one item',
        component: DefaultOpenExample
      },
      {
        path: 'expand-all',
        name: 'Expand all items',
        component: OpenAll
      }
    ]
  },


];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;