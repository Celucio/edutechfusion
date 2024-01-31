import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/LoginIndex.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'hash',
    routes
})

export default router
