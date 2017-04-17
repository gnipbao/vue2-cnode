webpackJsonp([8],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__App__);


const TopicList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(59))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const About = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(54))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const Login = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(55))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const Message = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(56))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const Topic = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(58))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const NewTopic = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(57))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const User = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(60))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/* harmony default export */ __webpack_exports__["a"] = ([{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__App___default.a,
    children: [{
        path: '',
        redirect: {
            name: 'list'
        }
    }, {
        path: '/list',
        name: 'list',
        component: TopicList
    }, {
        path: '/topic/:id',
        name: 'topic',
        component: Topic
    }, {
        path: '/create',
        name: 'create',
        component: NewTopic,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/user/:loginname',
        name: 'user',
        component: User
    }, {
        path: '/message',
        name: 'message',
        component: Message,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/about',
        name: 'about',
        component: About
    }, {
        path: '*',
        component: TopicList
    }]
}]);

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 640) {
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        }
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const GET_TOPIC_LIST = 'GET_TOPIC_LIST';
/* harmony export (immutable) */ __webpack_exports__["a"] = GET_TOPIC_LIST;

const UPDATE_TOPIC_LIST = 'UPDATE_TOPIC_LIST';
/* harmony export (immutable) */ __webpack_exports__["b"] = UPDATE_TOPIC_LIST;

const GET_TOPIC_INFO = 'GET_TOPIC_INFO';
/* harmony export (immutable) */ __webpack_exports__["c"] = GET_TOPIC_INFO;

const LOGIN = 'LOGIN';
/* harmony export (immutable) */ __webpack_exports__["e"] = LOGIN;

const LOGIN_OUT = 'LOGIN_OUT';
/* harmony export (immutable) */ __webpack_exports__["h"] = LOGIN_OUT;

const REPLY = 'REPLY';
/* harmony export (immutable) */ __webpack_exports__["i"] = REPLY;

const TOOGLE_LOAD = 'TOOGLE_LOAD';
/* harmony export (immutable) */ __webpack_exports__["f"] = TOOGLE_LOAD;

const TOOGLE_LIST_LOAD = 'TOOGLE_LIST_LOAD';
/* harmony export (immutable) */ __webpack_exports__["g"] = TOOGLE_LIST_LOAD;

const GET_USER_INFO = 'GET_USER_INFO';
/* harmony export (immutable) */ __webpack_exports__["d"] = GET_USER_INFO;


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerMode; });

const baseUrl = 'https://cnodejs.org/api/v1/';
const routerMode = 'hash';



/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);




console.log(__WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */]);
const topicList = data => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
		url: __WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */] + 'topics',
		params: data
	});
};
/* harmony export (immutable) */ __webpack_exports__["a"] = topicList;


const topicInfo = id => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */] + 'topic/' + id);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = topicInfo;


const login = data => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
		url: __WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */] + 'accesstoken',
		method: 'post',
		data: data
	});
};
/* harmony export (immutable) */ __webpack_exports__["d"] = login;


const reply = (data, id) => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
		url: `${__WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */]}topic/${id}/replies`,
		method: 'post',
		data: data
	});
};
/* harmony export (immutable) */ __webpack_exports__["e"] = reply;


const messageCount = data => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
		url: __WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */] + '/message/count',
		data: data
	});
};
/* harmony export (immutable) */ __webpack_exports__["f"] = messageCount;


const messages = data => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
		url: __WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */] + 'messages',
		data: data
	});
};
/* unused harmony export messages */


const upReply = (data, id) => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
		url: `${__WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */]}reply/${id}/ups`,
		method: 'post',
		data: data
	});
};
/* harmony export (immutable) */ __webpack_exports__["h"] = upReply;


const addTopic = data => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
		url: __WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */] + 'topics',
		method: 'post',
		data: data
	});
};
/* harmony export (immutable) */ __webpack_exports__["g"] = addTopic;


const getUserInfo = loginname => {
	return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_0__env__["b" /* baseUrl */] + 'user/' + loginname);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getUserInfo;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_env__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_rem__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_rem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_rem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fastclick__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_github_markdown_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_github_markdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_github_markdown_css__);










if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function () {
		__WEBPACK_IMPORTED_MODULE_6_fastclick___default.a.attach(document.body);
	}, false);
};

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	routes: __WEBPACK_IMPORTED_MODULE_2__router_router__["a" /* default */],
	mode: __WEBPACK_IMPORTED_MODULE_4__config_env__["a" /* routerMode */],
	strict: "production" !== 'production',
	scrollBehavior(to, from, savedPosition) {
		return savedPosition ? savedPosition : {
			x: 0,
			y: 0
		};
	}
});

if (localStorage.getItem('userInfo')) {
	__WEBPACK_IMPORTED_MODULE_3__store___["a" /* default */].commit('LOGIN', JSON.parse(localStorage.getItem('userInfo')));
}

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (__WEBPACK_IMPORTED_MODULE_3__store___["a" /* default */].state.userInfo.loginname) {
			next();
		} else {
			next({
				name: 'login',
				query: {
					redirect: encodeURIComponent(to.name)
				} });
		}
	} else {
		next();
	}
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
	router,
	store: __WEBPACK_IMPORTED_MODULE_3__store___["a" /* default */]
}).$mount('#app');

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_apis__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutationTypes__ = __webpack_require__(18);







__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
	state: {
		topics: [],
		topicInfo: {},
		userInfo: {},
		showLoad: false,
		showListLoad: false },

	mutations: {
		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["a" /* GET_TOPIC_LIST */]](state, data) {
			state.topics = data;
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["b" /* UPDATE_TOPIC_LIST */]](state, data) {
			state.topics = [...state.topics, ...data];
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["c" /* GET_TOPIC_INFO */]](state, data) {
			state.topicInfo = data;
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["d" /* GET_USER_INFO */]](state, data) {
			state.userInfo = data;
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["e" /* LOGIN */]](state, data) {
			state.userInfo = data;
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["f" /* TOOGLE_LOAD */]](state, data) {
			if (data) {
				state.showLoad = data;
			} else {
				state.showLoad = !state.showLoad;
			}
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["g" /* TOOGLE_LIST_LOAD */]](state, data) {
			if (data) {
				state.showListLoad = data;
			} else {
				state.showListLoad = !state.showListLoad;
			}
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["h" /* LOGIN_OUT */]](state) {
			state.userInfo = {};
			localStorage.removeItem('userInfo');
		}
	},

	actions: {
		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["a" /* GET_TOPIC_LIST */]]({
			commit
		}, data) {
			commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["f" /* TOOGLE_LOAD */], true);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__config_apis__["a" /* topicList */])(data).then(res => {
				var ret = res.data;
				if (ret.success) {
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["f" /* TOOGLE_LOAD */], false);
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["a" /* GET_TOPIC_LIST */], ret.data);
				}
			});
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["b" /* UPDATE_TOPIC_LIST */]]({
			commit
		}, data) {
			commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["g" /* TOOGLE_LIST_LOAD */], true);

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__config_apis__["a" /* topicList */])(data).then(res => {
				var ret = res.data;
				if (ret.success) {
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["g" /* TOOGLE_LIST_LOAD */], false);
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["b" /* UPDATE_TOPIC_LIST */], ret.data);
				}
			});
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["c" /* GET_TOPIC_INFO */]]({
			commit
		}, data) {
			commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["f" /* TOOGLE_LOAD */], true);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__config_apis__["b" /* topicInfo */])(data).then(res => {
				var ret = res.data;
				if (ret.success) {
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["f" /* TOOGLE_LOAD */], false);
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["c" /* GET_TOPIC_INFO */], ret.data);
				}
			});
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["d" /* GET_USER_INFO */]]({
			commit
		}, data) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__config_apis__["c" /* getUserInfo */])(data).then(res => {
				var ret = res.data;
				if (ret.success) {
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["d" /* GET_USER_INFO */], ret.data);
				}
			});
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["e" /* LOGIN */]]({
			commit
		}, data) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__config_apis__["d" /* login */])(data).then(res => {
				var ret = res.data;
				if (ret.success) {
					const user = {
						loginname: ret.loginname,
						id: ret.id,
						avatar_url: ret.avatar_url,
						accesstoken: data.accesstoken
					};
					localStorage.setItem('userInfo', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(user));
					commit(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["e" /* LOGIN */], user);
				}
			});
		},

		[__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["i" /* REPLY */]]({
			commit,
			dispatch
		}, data) {
			const topicId = data.topicId;
			delete data.topicId;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__config_apis__["e" /* reply */])(data, topicId).then(res => {
				var ret = res.data;
				if (ret.success) {
					dispatch(__WEBPACK_IMPORTED_MODULE_4__mutationTypes__["c" /* GET_TOPIC_INFO */], topicId);
				}
			});
		}
	}
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

},[41]);
//# sourceMappingURL=app.109d8fa8b2055eaa1d61.js.map