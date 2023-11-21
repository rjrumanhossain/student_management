import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/pages/HomeVue.vue';
import LoginVue from '../views/pages/auth/LoginVue.vue';
import RegisterVue from '../views/pages/auth/RegisterVue.vue'
import store from '../store';
const routes = [
  {
    path:'/',
    name:'Login',
    component:LoginVue,
    meta: {
       guest: true 
    },
  },
  {
    path:'/register',
    name:'Register',
    component:RegisterVue,
    meta: {
      guest: true 
   },
  },
  {
    path:'/home',
    name:'Home',
    component:HomeVue,
    meta: {
      auth: true 
   },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to) => {

  if (to.matched.some(record => record.meta.auth)) {
    if(!store.getters.GET_STATUS){
      return {
        name:'Login'
      }
    }
 
   
  }else if (to.matched.some(record => record.meta.guest)) {
    if(store.getters.GET_STATUS){
      return {
        name:'Home'
      }
    }
  }
})





export default router
