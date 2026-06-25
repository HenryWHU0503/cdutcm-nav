import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpdateView from '../views/UpdateView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { section: 0 }
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateView,
      meta: { section: 1 }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/LearnView.vue'),
      meta: { section: 2 }
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue'),
      meta: { section: 3 }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
