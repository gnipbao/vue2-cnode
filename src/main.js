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
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior(to, from, savedPosition) {
		// return 期望滚动到哪个的位置
		return savedPosition ? savedPosition : {
			x: 0,
			y: 0
		}
	}
})

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (localStorage.getItem('userInfo')) {
	store.commit('LOGIN', JSON.parse(localStorage.getItem('userInfo')));
}

//登录验证
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.state.userInfo.loginname) {
			next();
		} else {
			next({
				name: 'login',
				query: {
					redirect: encodeURIComponent(to.name)
				} //缓存应该跳的页面,方便登录后直接跳转
			});
		}
	} else {
		next();
	}
})

new Vue({
	router,
	store,
}).$mount('#app')