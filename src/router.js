import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        //MODO PER DEFINIRE PATH NOT FOUND, SEMPRE IN FONDO
        // {
        //     path: '/:patchMatch(.*)*',
        //     name: 'not-found',
        //     component: Page404
        // }
    ]
})

export { router }
