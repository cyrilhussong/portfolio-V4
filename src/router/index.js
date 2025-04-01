import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projet from '../views/Projet.vue'
import Contact from '@/views/Contact.vue'
import Propos from '@/views/Propos.vue'
import Page404 from '@/views/Page404.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    
    
    
  {
    path: '/projet',
    name: 'projet',
    component: Projet,
  },
   

  { path: '/propos', 
    name: 'propos', 
    component: Propos,
  },
  
  {
    path: '/:pathMatch(.*)*',  
    name: '404',
    component: Page404,
  },


  ],
})

export default router
