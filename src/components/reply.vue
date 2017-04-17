<template>
    <section class="reply">
        <textarea id="centent" rows="8" class="text" v-model="content" placeholder="回复支持Markdown语法,请注意标记代码" v-focus="focus">
        </textarea>
        <button class="btn btn-reply btn-reply-confirm" @click="handleReply">确定</button>
    </section>
</template>
<script>
import {
    mapState
} from 'vuex'
import {
    REPLY
} from '../store/mutationTypes'
export default {
    data() {
            return {
                content: ''
            }
        },
        props: ['replyId','replyTo', 'topicId','focus'],
        mouted() {

        },

        methods: {
        	handleReply(){
        		
        	}

        },

        computed: {

        }

}
</script>

<style lang="scss">

</style>
