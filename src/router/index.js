import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import courseDetail from '@/components/courseDetail'
import entryForm from '@/components/entryForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // {
    //   path: '/courses',
    //   name: 'courses',
    //   component: courses
    // },
    {
      path: '/course/:id',
      name: 'course',
      component: courseDetail
    },
    {
      path: '/course/:id/entryForm',
      name: 'entryForm',
      component: entryForm
    }
  ]
})
