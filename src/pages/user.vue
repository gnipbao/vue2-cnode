<template>
    <div>
      <h2>{{userInfo.loginname}}</h2>
    </div>
</template>

<style lang="scss" scoped>
 
</style>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
              
            }
        },
        
        computed:{
        	...mapState(['userInfo'])
        }
        
    }
</script>