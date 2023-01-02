import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/dokumentacja',
        name: 'dokumentacja',
        component: () =>
            import ('../views/DocView.vue')
    },
    {
        path: '/aplikacja',
        name: 'aplikacja',
        component: () =>
            import ('../views/AppView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router