import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "view-home" */  '@/views/Home');
const Login = () => import(/* webpackChunkName: "view-login" */  '@/views/Login');
const Schedule = () => import(/* webpackChunkName: "view-schedule" */  '@/views/Schedule');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
  ]
})
