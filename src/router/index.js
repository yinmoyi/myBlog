import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'
import Contact from '@/components/Contact'

// 二级路由
import BlogList from '@/components/index/BlogList'
import LeaveWords from '@/components/index/LeaveWords'
import SparePenny from '@/components/index/SparePenny'
import TravelBook from '@/components/index/TravelBook'
import Projects from '@/components/index/Projects'
import TimeAxios from '@/components/index/TimeAxios'
import FrontEnd from '@/components/index/FrontEnd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
			redirect:'/',
			children:[
				{ path :'/',component:BlogList},
				{ path :'/words',component:LeaveWords},
				{ path :'/spare',component:SparePenny},
				{ path :'/travel',component:TravelBook},
				{ path :'/projects',component:Projects},
				{ path :'/time',component:TimeAxios},
				{ path :'/frontend',component:FrontEnd},
			]
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
    },
		{
			path: '/contact',
			name: 'contact',
			component: Contact
		},
		{
			path:"*",
			redirect:"/"
		}
  ],
  mode:"history"
})
