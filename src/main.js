import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);

const rootUrl = "https://vue-stock-trader-702d1.firebaseio.com/";

Vue.filter('currency', value => {
	return '$' + value.toLocaleString();
});

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
