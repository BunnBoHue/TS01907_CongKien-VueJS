import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import Profile from '../view/Profile.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import NotFound from '../view/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },

    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
  ],
})

export default router
