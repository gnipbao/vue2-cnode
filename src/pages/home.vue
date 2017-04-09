<template>
    <div>
        <img class="index" src="../assets/logo.png">
        <nv-Home>

        </nv-Home>
    </div>
</template>
<script>
    import nvHome from '../components/home.vue'
    export default {
        data() {

        },
        components: {
            nvHome,
        }
    };
</script>
<style lang="scss">
    .index {
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>
