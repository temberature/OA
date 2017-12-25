import Vue from 'vue'
import Router from 'vue-router'
import courses from '@/components/courses'
import courseDetail from '@/components/courseDetail'
import entryForm from '@/components/entryForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'courses',
      component: courses
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
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
    }
  ]
})
