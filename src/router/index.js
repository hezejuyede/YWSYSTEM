import Vue from 'vue'
import Router from 'vue-router'
import loginIndex from '../components/indexLogin/loginIndex';
import index from '../components/index/index';
import AboutUs from '../components/AboutUs/AboutUs';
import business from '../components/business/business';
import JoinUs from '../components/JoinUs/JoinUs';
import knowledge from '../components/knowledge/knowledge';
import SuccessCase from '../components/SuccessCase/SuccessCase';

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
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/JoinUs',
      name: 'JoinUs',
      component: JoinUs
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: knowledge
    },
    {
      path: '/SuccessCase',
      name: 'SuccessCase',
      component: SuccessCase
    }
  ]
})
