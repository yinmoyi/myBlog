import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/addblog',
      name: 'addBlog',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      name: 'singleBlog',
      component: SingleBlog
    }
  ],
  mode:"history"
})
