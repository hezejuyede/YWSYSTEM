import Vue from 'vue'
import Router from 'vue-router'
import loginIndex from '../components/loginIndex'
import index from '../components/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/loginIndex',
      name: 'loginIndex',
      component: loginIndex
    }
  ]
})
