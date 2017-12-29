import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import courseDetail from '@/components/courseDetail'
import entryForm from '@/components/entryForm'
import user from '@/components/user'
import courses from '@/components/courses'
import signin from '@/components/signin'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/course/:id',
      name: 'course',
      component: courseDetail
    },
    {
      path: '/course/:id/entryForm',
      name: 'entryForm',
      component: entryForm
    },
    {
      path: '/me',
      name: 'me',
      component: user
    },
    {
      path: '/me/courses',
      name: 'myCourses',
      component: courses
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user
    },
    {
      path: '/user/:id/courses',
      name: 'courses',
      component: courses
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
