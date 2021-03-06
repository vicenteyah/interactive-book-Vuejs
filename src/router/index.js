import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import Analogia from '../views/analogia.vue'
import alphabet from '../views/alphabet.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Dashboard.vue')
    }, 
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/analogia',
        name: 'Analogia',
        component: Analogia
    },
    {
        path: '/alphabet',
        name: 'alphabet',
        component: alphabet
  },
    {
        path: '/Activities',
        name: 'Activities',
        component: () =>
        import ( /* webpackChunkName: "about" */ '../components/Activities.vue')
    } 
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
