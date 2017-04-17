<template>
    <div>
        <nv-head title="新建主题"></nv-head>
        <div class="topic-create">
            <div class="category">
                <span>选择板块：</span>
                <select v-model="topic.tab">
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                </select>
            </div>
            <div class="title">
                <input type="text" v-model.trim="topic.title" placeholder="标题，字数10字以上" maxLength="100">
            </div>
            <div class="content">
                <textarea v-model.trim="topic.content" rows="15" placeholder='支持Markdown语法,请注意标记代码'>
                </textarea>
            </div>
            <button @click="handleSubmit">提交</button>
        </div>
    </div>
</template>
<script>
import {
    mapState
} from 'vuex'
import nvHead from '../components/header'
import {
    addTopic
} from '../config/apis'

export default {
    data() {
            return {
                topic: {
                    tab: 'share',
                    title: '',
                    content: ''
                }
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },

        methods: {
            handleSubmit() {
                const {
                    title,
                    content
                } = this.topic;
                if (!title || title.length < 10 || !content) return;

                const data = {
                    ...this.topic,
                    accesstoken: this.userInfo.accesstoken
                }

                addTopic(data).then((res) => {
                	  var ret = res.data;
                    if (ret.success) {
                        sessionStorage.removeItem('scrollTop');
                        sessionStorage.removeItem('searchOption');
                        sessionStorage.removeItem('tab');
                        console.log(this.$router);
                        this.$router.push({
                            name: 'list'
                        });
                    }
                })

            }

        },

        components: {
            nvHead
        }
}
</script>
<style lang="scss">
.topic-create {
    padding-top: .6rem;
    font-size: 0.3rem;
    .category {
        border-bottom: 1px solid #d4d4d4;
        font-size: .16rem;
        padding: .15rem .2rem;
        span {
            display: inline-block;
        }
        select {
            width: 1rem;
            border: 1px solid rgb(169, 169, 169);
            height: .35rem;
            line-height: .3rem;
            border-radius: .03rem;
            font-size: .16rem;
            text-align: center;
            text-indent: .1rem;
        }
    }
    .title {
        padding: .15rem .2rem;
        border-bottom: 1px solid #d4d4d4;
        input {
            width: 100%;
            height: .35rem;
            border-radius: .05rem;
            box-shadow: 0 0 .02rem rgba(60, 60, 60, .5);
            font-size: .14rem;
            padding: .05rem;
        }
    }
    .content {
        padding: .15rem .2rem;
        textarea {
            width: 100%;
            border: 1px solid rgb(169, 169, 169);
            border-radius: .03rem;
            padding: .05rem;
            font-size: .16rem;
        }
    }
    button {
        display: block;
        margin: 0 .2rem;
        background-color: #80bd01;
        padding: .08rem .15rem;
        border-radius: .05rem;
        color: #fff;
    }
}
</style>
