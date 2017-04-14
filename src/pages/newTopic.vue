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
                <input type="text" v-model.trim="topic.title"
                    placeholder="标题，字数10字以上" maxLength="100">
            </div>
            <div class="content">
                <textarea v-model.trim="topic.content" rows="15"
                    placeholder='支持Markdown语法,请注意标记代码'>
                </textarea>
            </div>
        <button v-on:click="handleSubmit">提交</button>	
     </div>   
    </div>
</template>


<script>
    import {mapState} from 'vuex'
    import nvHead from '../components/header'
    import {addTopic} from '../config/apis'

    export default {
        data() {
            return {
              topic:{
              	tab: 'share',
              	title:'',
              	content: ''
              }
            }
        },
        computed:{
        	...mapState(['userInfo'])
        },

        methods:{
          handleSubmit(){
          	const{title, conent} = this.topic;
          	if(!title || title.length<10||!content) return;

          	const data = {
          		...this.topic,
          		accesstoken: this.userInfo.accesstoken
          	}
            
            addTopic(data).then((res)=>{
            	debugger;
            	if(res.success){
            		 sessionStorage.removeItem('scrollTop');
                 sessionStorage.removeItem('searchOption');
                 sessionStorage.removeItem('tab');
                 this.$router.push({
                    name: 'list'
                  });
            	}
            })

          }

        },

        components:{
        	nvHead
        }
    }
</script>


<style lang="scss" >
 
</style>