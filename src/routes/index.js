import Vue from 'vue'
import Router from 'vue-router'
import Landing from './../templates/landing'
<<<<<<< HEAD
import Saraa from './../templates/sara'
=======
import test from './../templates/test'
>>>>>>> 6eacffaed3b07ce8c769d931b8a87874676bc8f7

Vue.use(Router);

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
<<<<<<< HEAD
    { path: '/', component: Landing },
    { path: '/Sara', component: Saraa}
=======
    { path: '/', component: Landing } ,
    { path: '/test', component: test }
>>>>>>> 6eacffaed3b07ce8c769d931b8a87874676bc8f7
  ]
})
