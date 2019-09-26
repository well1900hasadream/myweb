import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home/Home'
import Notes from './pages/Notes/Notes'
import Test from './pages/Test/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
