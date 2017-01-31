// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import nav from './components/nav'
import footer from './components/footer'

Vue.component('nav-component', nav)
//deklarimi i komponenteve . Fillimisht importo file dhe pastaj emerto komponentin si nje tag html , prsh ne kete rast 
// komponenti do quhet <footer-component></footer-component>
Vue.component('footer-component', footer)

const app = new Vue(Vue.util.extend({
  router,
}, App)).$mount("#app");