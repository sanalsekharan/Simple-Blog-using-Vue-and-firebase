import Vue from 'vue'
import Router from 'vue-router'
import showBlogs from '@/components/showBlogs'
import addBlog from '@/components/addBlog'
import singleBlog from '@/components/singleBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: showBlogs
    },
    {
      path: '/add',
      name: 'Add Posts',
      component: addBlog
    },
    {
      path: '/blog/:id',
      name: 'Add Posts',
      component: singleBlog
    }
  ],
  mode: 'history'
})
