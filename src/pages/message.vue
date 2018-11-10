<template>
  <div>
    <nv-head title="消息中心" />
    <section class="message">
      <ul class="tab">
        <li
          class="tab-item"
          :class="{ active: this.activeItem === 1 }"
          @click="handleTabChange(1);"
        >
          已读消息
        </li>
        <li
          class="tab-item"
          :class="{ active: this.activeItem === 2 }"
          @click="handleTabChange(2);"
        >
          未读消息
        </li>
      </ul>

      <div class="message-content" v-for="item in currentData" :key="item.id">
        <section class="author-info">
          <img class="head" :src="item.author.avatar_url" />
          <div class="info">
            <span class="left">
              <span class="name">{{ item.author.loginname }}</span>
              <span class="name" v-if="item.type === 'at'">在回复中@了您</span>
              <span class="name" v-if="item.type === 'reply'"
                >回复了您的话题</span
              >
            </span>
            <span class="right">
              <span class="name">{{ item.reply.create_at | timeAgo }}</span>
            </span>
          </div>
        </section>
        <div class="reply-content markdown-body" v-html="item.reply.content" />
        <router-link :to="{ name: 'topic', params: { id: item.topic.id } }">
          <div class="topic-title">话题：{{ item.topic.title }}</div>
        </router-link>
      </div>

      <div class="no-data" v-show="noData">
        <i class="iconfont icon-empty" /> 暂无数据!
      </div>
    </section>
    <nv-load :show="showLoad" />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import nvHead from '../components/header';
import nvLoad from '../components/loading';
import { messages } from '../config/apis';
import { timeAgo } from '../utils/timeAgo';
import { TOOGLE_LOAD } from '../store/mutationTypes';
export default {
  data() {
    return {
      activeItem: 1,
      messageData: {},
      currentData: [],
      noData: false,
      mdrender: true,
    };
  },
  mounted() {
    if (this.userInfo.loginname) {
      this[TOOGLE_LOAD](true);
      const data = {
        accesstoken: this.userInfo.accesstoken,
        mdrender: this.mdrender,
      };
      messages(data)
        .then(res => {
          this[TOOGLE_LOAD](false);
          var ret = res.data;
          if (ret.success) {
            this.messageData = ret.data;
            if (ret.data.hasnot_read_messages.length) {
              this.currentData = ret.data.hasnot_read_messages;
              this.acitveItem = 2;
            } else {
              this.currentData = ret.data.has_read_messages;
            }
            this.noData = this.currentData.length === 0;
          } else {
            this.noData = true;
          }
        })
        .catch(err => {
          this[TOOGLE_LOAD](false);
        });
    } else {
      this.$router.push({ name: 'login' });
    }
  },

  methods: {
    ...mapMutations([TOOGLE_LOAD]),
    handleTabChange(index) {
      this.activeItem = index;
      this.currentData =
        index === 1
          ? this.messageData.has_read_messages
          : this.messageData.hasnot_read_messages;
      this.noData = this.currentData.length === 0;
    },
  },

  filters: {
    timeAgo(str) {
      return timeAgo(str);
    },
  },

  computed: {
    ...mapState(['userInfo', 'showLoad']),
  },

  components: {
    nvHead,
    nvLoad,
  },
};
</script>
<style lang="scss" scoped>
.message {
  padding-top: 0.6rem;
  .message-content {
    padding: 0.1rem 0;
    border-bottom: 1px solid #d4d4d4;
    .author-info {
      display: -webkit-flex;
      display: flex;
      padding: 0 0.1rem;
      margin: 0.1rem 0;
      .head {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.15rem;
      }
      .info {
        flex: 1;
        display: -webkit-flex;
        display: flex;
        .left {
          flex: 1;
          color: #626262;
          font-size: 0.16rem;
        }
        .right {
          color: #80bd01;
          font-size: 0.12rem;
        }
      }
    }
    .reply-content {
      padding: 0 0.15rem;
    }
    a {
      display: block;
      margin: 0 0.15rem;
      .topic-title {
        padding: 0.05rem;
        font-size: 0.18rem;
        color: #2c3e50;
        background-color: #f0f0f0;
        border-radius: 0.05rem;
      }
    }
  }
  .no-data {
    padding-top: 3rem;
  }
}
</style>
