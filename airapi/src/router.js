import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/city/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cities',
      name: 'cities',
      component: () => import('@/city/Cities.vue')
    },
    {
      path: '/countries',
      name: 'countries',
      component: () => import('@/city/Country.vue')
    },
    {
      path: '/countriesv2',
      name: 'countriesv2',
      component: () => import('@/country/Country-v2.vue')
    },
  ]
});
