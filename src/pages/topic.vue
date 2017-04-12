<template>
    <div>
      <nv-head></nv-head>
      <div class="topic" v-if="topicInfo.title">
            <h2 class="topic-title" v-text="topicInfo.title"></h2>

            <section class="author-info">
                <router-link :to="{name:'user',params:{loginname:topicInfo.author.loginname}}">
                    <img :src="topicInfo.author.avatar_url" alt="" class="avatar">
                </router-link>

                <div class="center">
                    <span class="author" v-text="topicInfo.author.loginname"></span>
                    <time class="info">
                        发布于:{{topicInfo.create_at | timeAgo}}
                    </time>
                </div>
                <div class="right">
                    <span class="tag" v-text="getTabInfo(topicInfo)"
                        :class="{color: topicInfo.good || topicInfo.top}"></span>
                    <span class="name">{{topicInfo.visit_count}}次浏览</span>
                </div>
            </section>

            <section class='markdown-body topic-content' v-html="topicInfo.content">
            </section>


            <section class="topic-reply">
                <h3 class="topic-total">
                    <strong>{{topicInfo.reply_count}}</strong> 回复
                </h3>

                <ul class="reply-list">
                    <li v-for="item in topicInfo.replies">
                        <section class="user">
                            <router-link :to="{name:'user',params:{loginname:item.author.loginname}}" >
                                <img class="head" :src="item.author.avatar_url"/>
                            </router-link>
                            <div class="info">
                                <span class="left">
                                    <span class="name" v-text="item.author.loginname"></span>
                                    <span class="name">
                                        发布于:{{item.create_at | timeAgo}}
                                    </span>
                                </span>
                                <span class="right">
                                    <span style="margin-right: 5px" class="iconfont icon-dianzan"
                                        :class="{'uped': isUps(item.ups)}"
                                        @click="handleUpReply(item)"></span>
                                    <span style="margin-right: 5px">{{item.ups.length}}</span>
                                    <span class="iconfont icon-hf" @click="addReply(item.id)"></span>
                                </span>
                            </div>
                        </section>
                        <div class="reply-content markdown-body" v-html="item.content"></div>
                        <nv-reply v-if="userInfo.loginname && replyId === item.id"
                            :reply-to="item.author.loginname"
                            :reply-id="item.id"
                            :topic-id="topicId"
                            :focus="true"
                            @onReply="handleReply"></nv-reply>
                    </li>
                </ul>
            </section>

            <nv-reply v-if="userInfo.loginname"
                :topic-id="topicId"></nv-reply>
        </div>
        <nv-top></nv-top>
        <nv-load :show="showLoad"></nv-load>
    </div>
</template>

<style lang="scss">
 .topic {
    padding-top: .4rem;
    .topic-list {
        li {
            border-bottom: 1px solid #f0f0f0;
            &:hover {
                background-color: #f5f5f5;
            }
            a {
                padding: .1rem .15rem;
                display: block;
                .top {
                    padding: .05rem 0;
                    display: flex;
                    span.normal {
                        flex: 0 0 auto; //TODO:soulcm 为什么最后一个值flex-basis默认不是auto,还得自己设置
                        background-color: #e5e5e5;
                        padding: 0.02rem .04rem;
                        border-radius: .03rem;
                        color: #999;
                        font-size: .12rem;
                        &.color {
                            background-color: #80bd01;
                            color: #fff;
                        }
                    }
                    h3 {
                        color: #000;
                        flex: 1 1 auto;
                        margin-left: .05rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: .16rem;
                    }
                }
                .bottom {
                    display: flex;
                    align-items: center;
                    .author {
                        flex: 0 0 auto;
                        width: .38rem;
                        height: .38rem;
                        margin-right: .15rem;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                        background-size: cover;
                        // background-image: url("https://avatars.githubusercontent.com/u/8791709?v=3&s=120");
                    }
                    .info {
                        flex: 1 1 auto;
                        p {
                            display: flex;
                            font-size: .12rem;
                            color: #778087;
                            span {
                                &:first-child {
                                    flex: 1 1 auto;
                                }
                                &:last-child {
                                    flex: 0 0 auto;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
    .topic-title {
        padding: .05rem;
        margin: .15rem;
        font-size: .18rem;
        color: #2c3e50;
        line-height: 1.5;
        background-color: #f0f0f0;
        border-radius: .05rem;
    }
    .author-info {
        display: -webkit-flex;
        display: flex;
        align-items: center;
        font-size: .12rem;
        color: #34495e;
        padding: 0 .15rem;
        img.avatar {
            width: .40rem;
            height: .40rem;
            border-radius: 50%;
            margin-right: .15rem;
        }
        .center {
            flex: 1;
            .author, .info {
                display: block;
                padding: .05rem 0;
            }
        }
        .right {
            .tag {
                color: #999;
                padding: .05rem .06rem;
                font-size: .12rem;
                border-radius: .04rem;
                text-align: center;
                display: block;
                background-color: #e5e5e5;
                &.color {
                    background-color: #80bd01;
                    color: #fff;
                }
            }
            .name {
                padding: .05rem 0;
                display: block;
            }
        }
    }
    .topic-content {
        padding: .15rem;
        margin-top: .15rem;
        border-bottom: 1px solid #d4d4d4;
    }
    .topic-reply {
    		font-size: 0.17rem;
        .topic-total {
            padding: .15rem;
            border-bottom: 1px solid #d4d4d4;
            strong {
                color: #42b983;
            }
        }
        .reply-list {
            margin-top: .15rem;
            li {
                padding: .15rem;
                border-bottom: 1px solid #d4d4d4;
                .user {
                    display: -webkit-flex;
                    display: flex;
                    .head {
                        width: .45rem;
                        height: .45rem;
                        margin-right: .1rem;
                        display: inline-block;
                    }
                    .info {
                        flex: 1;
                        display: -webkit-flex;
                        display: flex;
                        align-items: center;
                        .left {
                            flex: 1;
                            color: #626262;
                        }
                        .right {
                            display: flex;
                            align-items: center;
                            .iconfont {
                            	display: inline-block;
                                font-size: 0.26rem;
                                &.icon-dianzan.uped {
                                    color: #80bd01;
                                }
                            }
                        }
                    }
                }
                .reply-content {
                    margin-top: .15rem;
                    img {
                        max-width: 100%;
                        border: 0;
                        vertical-align: middle;
                    }
                }
                &:last-child {
                    border-bottom:none;
                }
            }
        }
    }
    .reply {
         margin: 0 .15rem;
         textarea {
             width: 100%;
             background-color: #fff;
             font-size: .14rem; //设置rem单位对textarea无效
             padding: .15rem;
             color: #313131;
             border: 1px solid #d5dbdb;
         }
         .btn-reply {
             border-bottom: 2px solid #3aa373;
             background-color: #4fc08d;
             font-size: .16rem;
             margin: .15rem 0;
             color: #fff;
             padding: .1rem;
             width: 100%;
             border-radius: .03rem;
         }
    }
}
</style>

<script>
		import {mapState} from 'vuex'
		import nvHead from '../components/header'
		import nvTop from '../components/backtop'
		import nvLoad from '../components/loading'
		import nvReply from '../components/reply'
		import {GET_TOPIC_INFO, UP_REPLY} from '../store/mutationTypes'
		import {timeAgo} from '../utils/timeAgo'
		import {topicTab} from '../store/topicTab'
		import store from '../store/'
		console.log(store);
 export default {
        data() {
            return {
                replyId: '',
                topicId: '',
            }
        },
        mounted() {
            this.topicId = this.$route.params.id;
            this.getTopicInfo();
            console.log(`$route-----------`);
            console.log(this.$route);
        },
        methods: {
            getTopicInfo() {
                this.$store.dispatch(GET_TOPIC_INFO, this.topicId);
            },
            getTabInfo(item) {
                let tab = item.tab;
                if (item.good) {
                    tab = 'good';
                } else if (item.top) {
                    tab = 'top';
                }
                return topicTab[tab]
            },
            addReply(id) {
                if (!this.userInfo.loginname) {
                    this.$router.push({
                        name: 'login',
                        query: { redirect: encodeURIComponent(this.$route.name) }
                    });
                }
                this.replyId = id;
            },
            handleReply() {
                this.replyId = '';
            },
            isUps(ups) {
                return ups.indexOf(this.userInfo.id) > -1
            },
            handleUpReply(item) {
                if (!this.userInfo.loginname) {
                    this.$router.push({
                        name: 'login',
                        query: { redirect: encodeURIComponent(this.$route.name) }
                    });
                    return;
                }
                upReply({accesstoken: this.userInfo.accesstoken}, item.id).then((res) => {
                    if (res.success) {
                        if (res.action === 'down') {
                            const index = item.ups.indexOf(this.userInfo.id);
                            if (index > -1) {
                                item.ups.splice(index, 1);
                            }
                        } else {
                            item.ups.push(this.userInfo.id);
                        }
                    }
                })
            }
        },
        filters: {
            timeAgo(str) {
                return timeAgo(str)
            }
        },
        beforeRouteEnter(to, from, next) {
            store.state.topicInfo = {};
            next();
        },
        computed: {
            ...mapState(['topicInfo', 'userInfo', 'showLoad'])
        },
        components: {
            nvHead,
            nvReply,
            nvTop,
            nvLoad
        }
    }
</script>