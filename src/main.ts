import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app
import App from './App.vue'

// layouts
import Admin from './layouts/Admin.vue'

// views for Admin layout
import Events from "@/views/Events.vue";

// routes
const routes = [
  {
    path: "/",
    component: Admin,
    children: [
      {
        path: "/",
        component: Events,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
