import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "view-home" */  '@/views/Home');
const Login = () => import(/* webpackChunkName: "view-login" */  '@/views/Login');
const Schedule = () => import(/* webpackChunkName: "view-schedule" */  '@/views/Schedule');

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true,
            },
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: Schedule,
            meta: {
                requiresAuth: true,
            },
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('authenticated') == null) {
            next({
                path: '/login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('authenticated') == null) {
            next()
        } else {
            next({name: 'home'})
        }
    } else {
        next()
    }
});


export default router;
