<template>
    <div>
      <h2>topicList</h2>
    </div>
</template>

<style lang="scss" scoped>
  
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