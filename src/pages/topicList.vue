<template>
    <div>
        <nv-head ref="head" :title="pageTitle"></nv-head>
    </div>
    
</template>

<style lang="scss">
    .loading {
        width: 120px;
        /*height: 120px;*/
        margin: 5px auto;
        text-align: center;
        .icon-loading {
            color: #ccc;
            display: inline-block;
            font-size: 5rem;
            -webkit-animation: gif 1s infinite linear;
            animation: gif 1s infinite linear;
        }
        @keyframes gif {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @-webkit-keyframes gif {
            0% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
            }
        }
    }
     
  .topic {
    /*margin: 40px auto 0;*/
    padding-top: 40px;
    .topic-list {
        li {
            border-bottom: 1px solid #f0f0f0;
            &:hover {
                background-color: #f5f5f5;
            }
            a {
                padding: 10px 15px;
                display: block;
                .top {
                    padding: 5px 0;
                    display: flex;
                    span.normal {
                        flex: 0 0 auto; //TODO:soulcm 为什么最后一个值flex-basis默认不是auto,还得自己设置
                        background-color: #e5e5e5;
                        padding: 2px 4px;
                        border-radius: 3px;
                        color: #999;
                        font-size: 1.2rem;
                        &.color {
                            background-color: #80bd01;
                            color: #fff;
                        }
                    }
                    h3 {
                        color: #000;
                        flex: 1 1 auto;
                        margin-left: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 1.6rem;
                    }
                }
                .bottom {
                    display: flex;
                    align-items: center;
                    .author {
                        flex: 0 0 auto;
                        width: 38px;
                        height: 38px;
                        margin-right: 15px;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                        background-size: cover;
                        // background-image: url("https://avatars.githubusercontent.com/u/8791709?v=3&s=120");
                    }
                    .info {
                        flex: 1 1 auto;
                        p {
                            display: flex;
                            font-size: 1.2rem;
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
        padding: 5px;
        margin: 15px;
        font-size: 1.8rem;
        color: #2c3e50;
        line-height: 1.5;
        background-color: #f0f0f0;
        border-radius: 5px;
    }
    .author-info {
        display: -webkit-flex;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: #34495e;
        padding: 0 15px;
        img.avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 15px;
        }
        .center {
            flex: 1;
            .author, .info {
                display: block;
                padding: 5px 0;
            }
        }
        .right {
            .tag {
                color: #999;
                padding: 5px 6px;
                font-size: 1.2rem;
                border-radius: 4px;
                text-align: center;
                display: block;
                background-color: #e5e5e5;
                &.color {
                    background-color: #80bd01;
                    color: #fff;
                }
            }
            .name {
                padding: 5px 0;
                display: block;
            }
        }
    }
    .topic-content {
        padding: 15px;
        margin-top: 15px;
        border-bottom: 1px solid #d4d4d4;
    }
    .topic-reply {
        .topic-total {
            padding: 15px;
            border-bottom: 1px solid #d4d4d4;
            strong {
                color: #42b983;
            }
        }
        .reply-list {
            margin-top: 15px;
            li {
                padding: 15px;
                border-bottom: 1px solid #d4d4d4;
                .user {
                    display: -webkit-flex;
                    display: flex;
                    .head {
                        width: 45px;
                        height: 45px;
                        margin-right: 10px;
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
                                font-size: 26px;
                                &.icon-dianzan.uped {
                                    color: #80bd01;
                                }
                            }
                        }
                    }
                }
                .reply-content {
                    margin-top: 15px;
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
         margin: 0 15px;
         textarea {
             width: 100%;
             background-color: #fff;
             font-size: 14px; //设置rem单位对textarea无效
             padding: 15px;
             color: #313131;
             border: 1px solid #d5dbdb;
         }
         .btn-reply {
             border-bottom: 2px solid #3aa373;
             background-color: #4fc08d;
             font-size: 1.6rem;
             margin: 15px 0;
             color: #fff;
             padding: 10px;
             width: 100%;
             border-radius: 3px;
         }
    }
}

</style>

<script>
    import { mapState } from 'vuex'
    import nvHead from '../components/header'
    //import nvTop from '../components/backtop'
    //import nvLoad from '../components/loading'
    import {GET_TOPIC_LIST, UPDATE_TOPIC_LIST} from '../store/mutationTypes';
    import {topicTab} from '../store/topicTab'
    import {timeAgo} from '../utils/timeAgo';

    export default {
        data() {
            return {
                searchOption: {
                    page: 1,
                    limit: 20,
                    tab: 'all',
                    mdrender: false
                },
                scrollDelay: false
            }
        },
        mounted() {
            if (this.$route.query && this.$route.query.tab) {
                this.searchOption.tab = this.$route.query.tab;
            }
            if (sessionStorage.getItem('tab') && sessionStorage.getItem('tab') === (this.$route.query.tab || 'all')) {
                this.searchOption = JSON.parse(sessionStorage.getItem('searchOption'));
            } else {
                this.getTopics();
            }
            document.addEventListener('scroll', this.getScrollData, false);
        },
        beforeDestroy() {
            document.removeEventListener('scroll', this.getScrollData);
        },
        beforeRouteEnter(to, from, next) {
            if (from.name !== 'topic' || (to.query.tab || 'all') !== sessionStorage.getItem('tab')) {
                sessionStorage.removeItem('scrollTop');
                sessionStorage.removeItem('searchOption');
                sessionStorage.removeItem('tab');
            }
            next();
        },
        beforeRouteLeave(to, from, next) {
            // 方便从详情页面返回到该页面的时候继续加载之前位置的数据
            if (to.name === 'topic') {
                // 当前滚动条位置
                sessionStorage.setItem('scrollTop', document.body.scrollTop || document.documentElement.scrollTop);
                // 查询参数
                sessionStorage.setItem('searchOption', JSON.stringify(this.searchOption));
                sessionStorage.setItem('tab', this.searchOption.tab);
            }
            next();
        },
        methods: {
            getTopics() {
                this.$store.dispatch(GET_TOPIC_LIST, this.searchOption);
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
            getScrollData() {
                const y = document.body.scrollTop || document.documentElement.scrollTop;
                const documentH = document.documentElement.clientHeight;
                const dom = document.querySelectorAll('.topic-list li');
                if (dom.length && (dom[dom.length - 1].offsetTop + dom[dom.length - 1].offsetHeight <= y + documentH) && !this.scrollDelay) {
                    this.searchOption.page = this.searchOption.page + 1;
                    this.scrollDelay = true;
                    this.$store.dispatch(UPDATE_TOPIC_LIST, this.searchOption).then(() => {
                        this.scrollDelay = false;
                    });
                }
            }
        },
        filters: {
            timeAgo(str) {
                return timeAgo(str)
            }
        },
        computed: {
            ...mapState(['topics', 'showLoad', 'showListLoad']),
            pageTitle() {
                const tab = (this.$route.query && this.$route.query.tab) || 'all';
                return topicTab[tab];
            }
        },
        watch: {
            '$route' (to) {
                if (to.query && to.query.tab) {
                    this.searchOption.tab = to.query.tab;
                }
                this.searchOption.page = 1;
                this.getTopics();
                // 隐藏导航栏
                this.$refs.head.show = false;
            }
        },
        components: {
            nvHead,
         /*   nvTop,
            nvLoad*/
        }
    }
</script>