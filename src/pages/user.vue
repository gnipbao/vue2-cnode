<template>
    <div>
      <h2>{{userInfo.loginname}}</h2>
    </div>
</template>

<style lang="scss" scoped>
 
</style>

<script>

    import {mapState} from 'vuex'
    import  {GET_USER_INFO} from '../store/mutationTypes.js'
    export default {
        data() {
            return {
              username:''
            }
        },
        mounted(){
            const username = this.$store.state.userInfo.loginname;
            username && this.getUserInfo();
        }
        , 
        computed:{
        	...mapState(['userInfo'])
        },
        methods:{
            getUserInfo(){
                 this.username = this.$store.state.userInfo.loginname;
                 this.$store.dispatch(GET_USER_INFO,this.username) 
            }
          
        },
        
    }
</script>