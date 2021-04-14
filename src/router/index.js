import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '@/components/addBlog'
import showBlogs from '@/components/showBlogs'
import contactUs from '@/components/contactUs'
import author from '@/components/author'
import Home from '@/components/Home'
import singleBlog from '@/components/singleBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add',
      name: 'addBlog',
      component: addBlog
    },
    {
      path: '/add/:id',
      name: 'editBlog',
      component: addBlog
    },
    {
      path: '/showblogs',
      name: 'showBlogs',
      component: showBlogs
    },
    {
      path: '/contactus',
      name: 'contactform',
      component: contactUs
    },
    {
      path: '/author',
      name: 'author',
      component: author
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/blog/:id',
      name: 'single-blog',
      component: singleBlog
    }
  ]
})
