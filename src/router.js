import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/firstVueComponent',
            name: 'firstCo',
            component: () => import(/* webpackChunkName: "about" */ './views/MyFirstView.vue')
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () => import(/* webpackChunkName: "about" */ './views/Gallery.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import(/* webpackChunkName: "about" */ './views/Blog.vue')
        },
        {
            path: '/newsletter',
            name: 'newsletter',
            component: () => import(/* webpackChunkName: "about" */ './views/Newsletter.vue')
        },
        {
            path: '/slideshow',
            name: 'slideshow',
            component: () => import(/* webpackChunkName: "about" */ './views/Slideshow.vue')
        }

    ]
})
