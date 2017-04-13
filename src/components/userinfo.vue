<template>
    <div class="user-info">
        <!-- 未登录 -->
        <div class="login-no" v-if="!userInfo.loginname">
            <router-link :to="{name: 'login'}">
                <i class="iconfont icon-denglu"></i>登录
            </router-link>
        </div>
        <!-- 已登录 -->
        <div v-else class="login-yes">
            <img v-if="userInfo.avatar_url" :src="userInfo.avatar_url">
            <span class="login-name" v-text="userInfo.loginname"></span>
            <span class="login-out" @click="handleLoginOut">退出</span>
        </div>
    </div>
</template>

<style lang="scss">
    .login-no a {
        font-size: .2rem;
        font-weight: 700;
        color: #313131;
        padding: .24rem;
        display: block;
        .iconfont{
            display:inline-block;
            font-size: .24rem;
            color: rgb(66, 185, 131);
            margin-right: .3rem;
        }
    }

    .login-yes {
        padding: .2rem .15rem;
        display: flex;
        align-items: center;
        img {
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            margin-right: .15rem;
        }
        .login-name {
            flex: 1;
        }
        .login-out {
            color: #337ab7;
        }
    }
</style>

<script>
    import {mapState} from 'vuex';
    import {LOGIN_OUT} from '../store/mutationTypes';
    export default {
        methods: {
            handleLoginOut() {
                this.$store.commit(LOGIN_OUT);
                this.$router.push({name: 'list'});
            }
        },
        computed: {//计算属性中直接获取state
            ...mapState(['userInfo']),
        },
    }
</script>

