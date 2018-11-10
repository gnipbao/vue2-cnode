<template>
  <div>
    <nv-head title="登录"></nv-head>
    <section class="login">
      <div class="login-token">
        <input
          type="text"
          class="text"
          placeholder="Access Token"
          v-model="token"
          maxlength="36"
        />
        <button class="btn btn-login" @click="handleLogin">login</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.login {
  padding-top: 0.4rem;
  .login-token {
    padding: 0 0.15rem;
    margin-top: 0.5rem;
    input {
      padding: 0.12rem 0;
      border-bottom: 1px solid #4fc08d;
      background-color: transparent;
      font-size: 0.14rem;
      color: #313131;
      width: 100%;
    }
    .btn-login {
      width: 100%;
      border-bottom: 2px solid #3aa373;
      background-color: #4fc08d;
      font-size: 0.16rem;
      margin: 0.15rem 0;
      color: #fff;
      padding: 0.1rem;
      border-radius: 0.03rem;
    }
  }
}
</style>

<script>
import { mapState } from 'vuex';
import nvHead from '../components/header';
import { LOGIN } from '../store/mutationTypes';

export default {
  data() {
    return {
      token: 'f12898dc-7eec-42fc-bbfd-258a5bae91fb',
    };
  },
  methods: {
    handleLogin() {
      const data = {
        accesstoken: this.token,
      };
      //提交 跳转
      this.$store.dispatch(LOGIN, data).then(() => {
        const redirect = decodeURIComponent(
          this.$route.query.redirect || 'list',
        );
        this.$router.push({ name: redirect });
      });
    },
  },
  computed: {
    ...mapState(['userInfo']),
  },

  components: {
    nvHead,
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.userInfo.loginname && vm.$router.replace({ name: 'list' });
    });
  },
};
</script>
