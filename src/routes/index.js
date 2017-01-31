import Vue from 'vue'
import Router from 'vue-router'
import Landing from './../templates/landing'
import Saraa from './../templates/sara'

Vue.use(Router);

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/', component: Landing },
    { path: '/Sara', component: Saraa}
  ]
})
