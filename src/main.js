import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {
	routerMode
} from './config/env'

import './utils/rem'
import FastClick from 'fastclick'
import 'github-markdown-css'

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
};

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})

new Vue({
	router,
	store,
}).$mount('#app')