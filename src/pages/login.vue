<template>
    <div>
        <nv-head title="登录"></nv-head>
        <section class="login">
        	<div class="login-token">
        		<input type="text" class="text" placeholder="Access Token" v-model="token" maxlength="36">
        		<button class="btn btn-login" @click="handleLogin">login</button>
        	</div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .login{
    	padding-top: .4rem;
    	.login-token{
    		padding: 0 .15rem;
    		margin-top: .5rem;
    		input {
           padding: .12rem 0;
           border-bottom: 1px solid #4fc08d;
           background-color: transparent;
           font-size: 0.14rem;
           color: #313131;
           width: 100%;   
    		}
    		.btn-login{
    			width: 100%;
    			border-bottom:2px solid #3aa373;
    			background-color: #4fc08d;
    			font-size: .16rem;
    			margin: .15rem 0;
    			color: #fff;
    			padding:.1rem;
    			border-radius: .03rem; 
    		}
    	}
    }
</style>

<script>
    import {mapState} from 'vuex'
    import nvHead from '../components/header'
    import {LOGIN} from '../store/mutationTypes'

    export default {
        data() {
            return {
              token:''
            }
        },
        methods:{
        	handleLogin(){
        		const data = {
        			accesstoken: this.token
        		}
        		//提交 跳转
        		this.$store.dispatch(LOGIN,data).then(()=>{
        			  debugger;
                const redirect = decodeURIComponent(this.$route.query.redirect||'list');
                this.$router.push({name: redirect});
        		})
        	}
        },
        computed:{
        	...mapState(['userInfo'])
        },

        components:{
        	nvHead,
        },

        beforeRouteEnter(to, from, next){
        	next(vm=>{
        		vm.userInfo.loginname&&vm.$router.replace({name: 'list'})
        	})
        }
        
    }
</script>