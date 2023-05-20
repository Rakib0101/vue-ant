import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MidNav from '../components/MidNav.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/nav',
      name: 'navbar',
      component: MidNav
    },{
      path: '/bread',
      name: 'breadcrumb',
      component: BreadCrumb
    }
    
  ]
})

export default router
