<template>
    <div>
        <title>我是标题</title>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn';
    // import Cpn from './Cpn.vue';

    export default {
        name: "app",
        data(){
            return {
                message:'hello webpack',
                name:'mloine name'
            }
        },
        components:{
            Cpn
        },
        methods:{
            btnClick(){
                console.log("mloine btn");
            }
        },
    }
</script>

<style scoped>
    title{
        color: green;
    }
</style>