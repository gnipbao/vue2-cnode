<template>
  <div>
    <nv-head />
    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import nvHead from '../components/header';
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    nvHead,
  },
};
</script>
