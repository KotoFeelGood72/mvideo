import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("../views/welcome.vue"),
    meta: {
      layout: "empty",
      requiresAuth: false,
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
      title: "Как играть",
      layout: "default",
      requiresAuth: true,
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      layout: "game",
      requiresAuth: true,
    },
  },
  {
    path: "/result",
    name: "result",
    component: () => import("../views/Result.vue"),
    meta: {
      layout: "empty",
      requiresAuth: true,
    },
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/Account.vue"),
    meta: {
      layout: "default",
      requiresAuth: true,
      title: 'Личный кабинет'
    },
  },
  {
    path: "/task",
    name: "task",
    component: () => import("../views/task/index.vue"),
    meta: {
      title: "Еженедельные задания",
      layout: "default",
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
    // Если требуется авторизация и пользователь не авторизован
    next({ path: "/register" });
  } else if (
    (to.path === "/register" ||
      to.path === "/login" ||
      to.path === "/confirm") &&
    isAuthenticated
  ) {
    next({ path: "/start-game" });
  } else if (to.path === "/" && isAuthenticated) {
    next({ path: "/start-game" });
  } else {
    next();
  }
});

export default router;
