import { createApp } from "vue";
import { createWebHistory, createRouter, type Router, type RouteRecordRaw } from "vue-router";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app
import App from './App.vue'

// layouts
import Admin from '@/layouts/Admin.vue'

// views for Admin layout
import Events from "@/views/Events.vue";
import EventDetail from "@/views/EventDetail.vue";

// routes
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Admin as any,
        children: [
            {
                path: "/",
                component: Events,
            },
            {
                path: "/create",
                component: EventDetail,
            },
            {
                path: "/edit/:id",
                component: EventDetail,
            },
        ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
