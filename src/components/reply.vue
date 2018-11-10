<template>
  <section class="reply">
    <textarea
      id="centent"
      rows="8"
      class="text"
      v-model="content"
      placeholder="回复支持Markdown语法,请注意标记代码"
      v-focus="focus"
    >
    </textarea>
    <button class="btn btn-reply btn-reply-confirm" @click="handleReply">
      确定
    </button>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import { REPLY } from '../store/mutationTypes';
export default {
  data() {
    return {
      content: '',
    };
  },
  props: ['replyId', 'replyTo', 'topicId', 'focus'],
  mouted() {
    this.repleyTo && (this.content = `@${this.replyTo}`);
  },

  methods: {
    handleReply() {
      const data = {
        accesstoken: this.userInfo.accesstoken,
        content:
          this.content +
          '\n\n[内容来自->vue2-cnode](https://github.com/gnipbao/vue2-cnode)',
        reply_id: this.replyId,
        topicId: this.topicId,
      };
      this.$store.dispatch(REPLY, data).then(() => {
        this.content = '';
        this.$emit('onReply');
      });
    },
  },

  computed: {
    ...mapState(['userInfo']),
  },

  //自定义指令 官方文档 https://cn.vuejs.org/v2/guide/custom-directive.html
  directives: {
    focus: {
      inserted(el, binding) {
        // 聚焦元素
        binding.value && el.focus();
      },
    },
  },
};
</script>
<style lang="scss"></style>
