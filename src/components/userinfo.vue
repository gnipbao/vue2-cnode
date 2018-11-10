<template>
  <div class="user-info">
    <!-- 未登录 -->
    <div class="login-no" v-if="!userInfo.loginname">
      <router-link :to="{ name: 'login' }">
        <i class="iconfont icon-denglu" />登录
      </router-link>
    </div>
    <!-- 已登录 -->
    <div v-else>
      <div class="login-yes">
        <img v-if="userInfo.avatar_url" :src="userInfo.avatar_url" />
        <span class="login-name" v-text="userInfo.loginname" />
      </div>
      <div class="login-out" @click="handleLoginOut">退出</div>
    </div>
  </div>
</template>

<style lang="scss">
.user-info {
  font-size: 0.2rem;
  .login-no a {
    font-size: 0.2rem;
    font-weight: 700;
    color: #313131;
    padding: 0.24rem;
    display: block;
    .iconfont {
      display: inline-block;
      font-size: 0.24rem;
      color: rgb(66, 185, 131);
      margin-right: 0.3rem;
    }
  }

  .login-yes {
    padding: 0.2rem 0.15rem;
    display: flex;
    align-items: center;
    img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      margin-right: 0.15rem;
    }
    .login-name {
      flex: 1;
      font-size: 0.14rem;
    }
  }
  .login-out {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 0.15rem;
    font-size: 0.1rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    padding: 2px 8px;
    border-radius: 4px;
    background-color: #f04134;
    border-color: #f04134;
    color: #f0f0f0;
  }
}
</style>

<script>
import { mapState } from 'vuex';
import { LOGIN_OUT } from '../store/mutationTypes';
export default {
  methods: {
    handleLoginOut() {
      this.$store.commit(LOGIN_OUT);
      this.$router.push({ name: 'list' });
    },
  },
  computed: {
    //计算属性中直接获取state
    ...mapState(['userInfo']),
  },
};
</script>
