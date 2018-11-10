<template>
  <div>
    <nv-head title="用户信息"></nv-head>
    <section class="user-home">
      <div class="info">
        <img :src="userInfo.avatar_url" class="avatar" alt="头像" />
        <p class="name" v-text="userInfo.loginname"></p>
        <div class="bottom">
          <div class="score">积分：{{ userInfo.score }}</div>
          <div class="time">
            注册时间 {{ userInfo.create_at | getCreateTime }}
          </div>
        </div>
      </div>
    </section>
    <nv-top></nv-top>
  </div>
</template>

<style lang="scss">
.user-home {
  padding-top: 0.6rem;
  .info {
    padding-top: 0.2rem;
    text-align: center;
    font-size: 0.3rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #7aae74;
    .avatar {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin: 0 auto;
    }
    .name {
      padding-top: 0.1rem;
      color: #666;
    }
    .bottom {
      padding-top: 0.1rem;
      font-size: 0.25rem;
      .time {
        padding-top: 0.1rem;
        color: #ababab;
      }
      .score {
        color: #f6a5a5;
      }
    }
  }
}
</style>

<script>
import nvHead from '../components/header';
import nvTop from '../components/backtop';
import nvLoad from '../components/loading';
import { mapState } from 'vuex';
import { GET_USER_INFO } from '../store/mutationTypes';
import { timeAgo } from '../utils/timeAgo';

export default {
  data() {
    return {};
  },
  mounted() {
    this.getUserInfo();
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch(GET_USER_INFO, this.$store.state.userInfo.loginname);
    },
  },
  filters: {
    timeAgo(str) {
      return timeAgo(str);
    },
    getCreateTime(str) {
      if (!str) {
        return '';
      }
      return timeAgo(str.split('T')[0]);
    },
  },
  components: {
    nvHead,
    nvTop,
    nvLoad,
  },

  watch: {
    $route(to, from) {
      to.params.loginname !== from.params.loginname && this.getUserInfo();
    },
  },
};
</script>
