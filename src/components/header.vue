<template>
  <div>
    <span class="page-cover" @click="toggleMenu" v-if="show" />
    <header class="header-bar">
      <span class="menu-btn" @click="toggleMenu" />
      <span class="info">
        <span class="vue-logo" /> <span>{{ title }}</span>
      </span>
      <router-link :to="{ name: 'create' }" class="publish-btn">
        <i class="iconfont icon-publish green" />
      </router-link>
    </header>
    <nv-menu :show="show" />
  </div>
</template>

<style lang="scss">
@import 'src/style/mixin';

.green {
  color: $green;
}
.page-cover {
  position: fixed;
  top: 0.6rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 7;
}

.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.6rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  z-index: 6;
  background-color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  .menu-btn {
    @include wh(0.6rem, 0.6rem);
    background: url('../assets/menu.png') center center no-repeat;
    background-size: 0.4rem;
  }
  .info {
    flex: 1;
    text-align: center;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.15rem;
    .vue-logo {
      width: 0.5rem;
      height: 0.5rem;
      background: url('../assets/logo.png') center center no-repeat;
      background-size: 0.3rem;
    }
  }
  a.publish-btn {
    color: #42b983;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0 0.15rem;
    display: block;
  }
}
</style>

<script>
import nvMenu from './menu.vue';
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleMenu() {
      this.show = !this.show;
    },
  },
  components: {
    nvMenu,
  },
};
</script>
