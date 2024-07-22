import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import EventLayout from '../views/event/Layout.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from "@/views/NetworkError.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }else {
      return { top: 0 }
    }

  },
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/event/:id',
      name: 'EventDetails',
      props: true,
      component: EventDetails
    },
    {
      path: '/event/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        { path: '', name: 'EventDetails', component: EventDetails },
        { path: 'register', name: 'EventRegister', component: EventRegister },
        { path: 'edit', name: 'EventEdit', component: EventEdit }
        
      ]
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
