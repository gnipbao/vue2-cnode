import Vue from 'vue';
import Vuex from 'vuex';
import {
  topicList,
  topicInfo,
  login,
  reply,
  messages,
  upReply,
  getUserInfo,
} from '../config/apis'; //apis

import {
  GET_TOPIC_LIST,
  UPDATE_TOPIC_LIST,
  GET_TOPIC_INFO,
  GET_USER_INFO,
  LOGIN,
  LOGIN_OUT,
  REPLY,
  TOOGLE_LOAD,
  TOOGLE_LIST_LOAD,
} from './mutationTypes'; //mutationTypes

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    topics: [],
    topicInfo: {},
    userInfo: {},
    showLoad: false, //页面等待效果
    showListLoad: false, //list划到底后的等待效果
  },

  mutations: {
    [GET_TOPIC_LIST](state, data) {
      state.topics = data;
    },

    [UPDATE_TOPIC_LIST](state, data) {
      state.topics = [...state.topics, ...data];
    },

    [GET_TOPIC_INFO](state, data) {
      state.topicInfo = data;
    },

    [GET_USER_INFO](state, data) {
      state.userInfo = data;
    },

    [LOGIN](state, data) {
      state.userInfo = data;
    },

    [TOOGLE_LOAD](state, data) {
      if (data) {
        state.showLoad = data;
      } else {
        state.showLoad = !state.showLoad;
      }
    },

    [TOOGLE_LIST_LOAD](state, data) {
      if (data) {
        state.showListLoad = data;
      } else {
        state.showListLoad = !state.showListLoad;
      }
    },

    [LOGIN_OUT](state) {
      state.userInfo = {};
      localStorage.removeItem('userInfo');
    },
  },

  actions: {
    [GET_TOPIC_LIST]({ commit }, data) {
      commit(TOOGLE_LOAD, true);
      return topicList(data).then(res => {
        var ret = res.data;
        if (ret.success) {
          commit(TOOGLE_LOAD, false);
          commit(GET_TOPIC_LIST, ret.data);
        }
      });
    },

    [UPDATE_TOPIC_LIST]({ commit }, data) {
      commit(TOOGLE_LIST_LOAD, true);

      return topicList(data).then(res => {
        var ret = res.data;
        if (ret.success) {
          commit(TOOGLE_LIST_LOAD, false);
          commit(UPDATE_TOPIC_LIST, ret.data);
        }
      });
    },

    [GET_TOPIC_INFO]({ commit }, data) {
      commit(TOOGLE_LOAD, true);
      topicInfo(data).then(res => {
        var ret = res.data;
        if (ret.success) {
          commit(TOOGLE_LOAD, false);
          commit(GET_TOPIC_INFO, ret.data);
        }
      });
    },

    [GET_USER_INFO]({ commit }, data) {
      getUserInfo(data).then(res => {
        var ret = res.data;
        if (ret.success) {
          commit(GET_USER_INFO, ret.data);
        }
      });
    },

    [LOGIN]({ commit }, data) {
      return login(data).then(res => {
        var ret = res.data;
        if (ret.success) {
          const user = {
            loginname: ret.loginname,
            id: ret.id,
            avatar_url: ret.avatar_url,
            accesstoken: data.accesstoken,
          };
          localStorage.setItem('userInfo', JSON.stringify(user));
          commit(LOGIN, user);
        }
      });
    },

    [REPLY]({ commit, dispatch }, data) {
      const topicId = data.topicId;
      delete data.topicId;
      reply(data, topicId).then(res => {
        var ret = res.data;
        if (ret.success) {
          dispatch(GET_TOPIC_INFO, topicId);
        }
      });
    },
  },
});

export default store;
