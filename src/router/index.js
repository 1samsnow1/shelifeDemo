import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import welcomePage from '../views/welcomePage.vue';
import login from '../views/loginPage.vue';
import requestKit from '../views/requestKit.vue';
import blogList from '../views/blogList.vue';
import blogView from '../views/blogView.vue';
import consultationForm from '../views/consultationForm.vue';
import aboutUs from '../views/aboutUs.vue';
import terms from '../views/terms.vue';
import contactUs from '../views/contactUs.vue';
import profile from '../views/profile.vue';
import editProfile from '../views/editProfile.vue';
import history from '../views/history.vue';
import notFound from '../views/notFound.vue';
import sendKit from '../views/sendKit.vue';
import landing from '../views/landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/:catchAll(.*)',
      name:'notFound',
      component: notFound,
    },
    {
      path : '/',
      name : 'welcome',
      component : welcomePage
    },
    {
      path : '/landing',
      name : 'landing',
      component : landing
    },
    {
      path: '/consultationForm',
      name : 'consultationForm',
      component : consultationForm
    },
    {
      path:'/blogList',
      name: 'blogList',
      component : blogList
    },
    {
      path:'/blog',
      name :'blog',
      component : blogView
    },
    {
      path : '/login',
      name: 'login',
      component : login
    },
    {
      path: '/requestKit',
      name : 'requestKit',
      component : requestKit
    },
    {
      path: '/sendKit',
      name: 'sendKit',
      component: sendKit
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path:'/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component : contactUs
    },
    {
      path: '/terms',
      name: 'terms',
      component: terms
    },
    {
      path:'/profile',
      name: 'profile',
      component: profile
    },
    {
      path : '/profile/editProfile',
      name: 'editProfile',
      component : editProfile
    },
    {
      path: '/history',
      name: 'history',
      component : history
    }

  ]
})

export default router
