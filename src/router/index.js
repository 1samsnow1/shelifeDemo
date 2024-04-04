import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/:catchAll(.*)',
      name:'notFound',
      component: () => import('../views/notFound.vue')
    },
    {
      path : '/',
      name : 'welcome',
      component: () => import('../views/welcomePage.vue')
    },
    {
      path : '/landing',
      name : 'landing',
      component: () =>import('../views/landing.vue')
    },
    {
      path: '/consultationForm',
      name : 'consultationForm',
      component: ()=>import('../views/consultationForm.vue')
    },
    {
      path:'/blogList',
      name: 'blogList',
      component: ()=>import('../views/blogList.vue')
    },
    {
      path:'/blog',
      name :'blog',
      component: ()=>import('../views/blogView.vue')
    },
    {
      path:'/blog/:id',
      name :'blog',
      component: ()=>import('../views/blogView.vue')
    },
    {
      path : '/login',
      name: 'login',
      component: ()=>import('../views/loginPage.vue')
    },
    {
      path: '/requestKit',
      name : 'requestKit',
      component : ()=>import('../views/requestKit.vue')
    },
    {
      path: '/sendKit',
      name: 'sendKit',
      component : ()=>import('../views/sendKit.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('../views/HomeView.vue')
    },
    {
      path:'/aboutUs',
      name: 'aboutUs',
      component: ()=>import('../views/aboutUs.vue')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ()=>import('../views/contactUs.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: ()=>import('../views/terms.vue')
    },
    {
      path:'/profile',
      name: 'profile',
      component: ()=>import('../views/profile.vue')
    },
    {
      path : '/profile/editProfile',
      name: 'editProfile',
      component:()=>import('../views/editProfile.vue')
    },
    {
      path: '/history',
      name: 'history',
      component:()=>import('../views/history.vue')
    }

  ]
})

export default router
