// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import nav from './components/nav'

const app = new Vue(Vue.util.extend({
  router,
}, App)).$mount("#app");

Vue.component('nav-components',nav)


// export { app, router }
