import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("../views/welcome.vue"),
    meta: {
      layout: "empty",
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/register.vue"),
    meta: {
      layout: "empty",
      requiresAuth: false,
    },
  },
  {
    path: "/confirm",
    name: "confirm",
    component: () => import("../views/auth/confirm.vue"),
    meta: {
      layout: "empty",
      requiresAuth: false,
    },
  },
  {
    path: "/start-game",
    name: "start",
    component: () => import("../views/StartGame.vue"),
    meta: {
      layout: "empty",
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("user");
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next({ path: "/register" });
  } else if (to.path === "/register" && isAuthenticated) {
    next({ path: "/start-game" });
  } else {
    next();
  }
});

export default router;
