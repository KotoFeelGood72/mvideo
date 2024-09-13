import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.DEV_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/welcome.vue'),
      meta: {
        layout: 'empty',
        requiresAuth: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/register.vue'),
      meta: {
        layout: 'empty',
        requiresAuth: true,
      },
    },
  ]
})

export default router
