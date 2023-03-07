import { createRouter, createWebHistory } from 'vue-router'

const isAuthenticated = true
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('@/views/AuthView.vue'),
            meta: { requiresAuth: false },
            beforeEnter: (to, from, next) => {
                if (isAuthenticated) next({ name: 'home' })
                else next()
            },
        },
        {
            path: '/:pathMatch(.*)',
            name: 'error',
            component: () => import('@/views/ErrorView.vue'),
            meta: { requiresAuth: true },
        },
    ],
})

router.beforeEach((to, from, next) => {
    const { requiresAuth } = to.meta

    if (requiresAuth && !isAuthenticated) next({ name: 'auth' })
    else next()
})

export default router
