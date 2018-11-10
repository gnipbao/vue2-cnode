<template>
  <nav class="menu-bar" :class="{ show: show }">
    <user-info></user-info>
    <ul class="menu-list">
      <li class="menu-item">
        <router-link class="" :to="{ name: 'list', query: { tab: 'all' } }"
          ><i class="iconfont icon-quanbu"></i>全部</router-link
        >
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'list', query: { tab: 'good' } }"
          ><i class="iconfont icon-jinghua"></i>精华</router-link
        >
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'list', query: { tab: 'share' } }"
          ><i class="iconfont icon-share"></i>分享</router-link
        >
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'list', query: { tab: 'ask' } }"
          ><i class="iconfont icon-wenda"></i>问答</router-link
        >
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'list', query: { tab: 'job' } }"
          ><i class="iconfont icon-zhaopin"></i>招聘</router-link
        >
      </li>

      <li class="menu-item">
        <router-link :to="{ name: 'message' }" style="position: relative">
          <i class="iconfont icon-xiaoxi"></i>消息
          <span
            class="message-count"
            v-text="`+${messageCount}`"
            v-if="messageCount"
          ></span>
        </router-link>
      </li>

      <li class="menu-item" v-if="userInfo.loginname">
        <router-link :to="{ path: '/user/' + userInfo.loginname }"
          ><i class="iconfont icon-denglu"></i>设置</router-link
        >
      </li>

      <li class="menu-item">
        <router-link :to="{ name: 'about' }"
          ><i class="iconfont icon-guanyu"></i>关于</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import userInfo from './userinfo';
import { messageCount } from '../config/apis';
export default {
  data() {
    return {
      messageCount: 0,
    };
  },
  mounted() {
    this.getMessageCount();
  },

  methods: {
    getMessageCount() {
      if (this.userInfo.loginname) {
        messageCount({ accesstoken: this.userInfo.accesstoken }).then(res => {
          let ret = res.data;
          if (ret.success) {
            this.messageCount = ret.data;
          }
        });
      }
    },
  },

  props: {
    show: Boolean,
  },

  computed: {
    ...mapState(['userInfo']),
  },

  components: {
    userInfo,
  },
};
</script>

<style lang="scss">
.message-count {
  position: absolute;
  color: red;
  left: 0.4rem;
  top: 0.15rem;
}

nav.menu-bar {
  position: fixed;
  top: 0.4rem;
  bottom: 0;
  left: -2rem;
  width: 2rem;
  color: #313131;
  background-color: #fff;
  transition: all 0.3s ease;
  z-index: 10;
  &.show {
    transform: translateX(2rem);
  }

  .menu-list {
    border-top: 1px solid #d4d4d4;
    padding-top: 0.18rem;

    li.menu-item {
      height: 0.6rem;
      &:hover {
        background-color: #f5f5f5;
      }
      a {
        display: block;
        padding: 0.14rem 0.24rem;
        font-size: 0.14rem;
        color: #313131;
        font-weight: 700;
        height: 0.6rem;
        .iconfont {
          display: inline-block;
          margin-right: 0.3rem;
        }
      }
      &:nth-of-type(6) {
        //消息
        border-top: 1px solid #d4d4d4;
      }
    }
  }
}
</style>
