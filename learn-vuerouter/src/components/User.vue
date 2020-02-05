<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户相关信息，哈哈哈哈哈 </p>
<!--      <h2>{{userId}}</h2>-->
      <h2>{{cuserId}}</h2>
      <h2>{{$route.params.userId}}</h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        props:{
          userId:{
            type:String
          }
        },
        computed:{
          cuserId(){
            return this.$route.params.userId
          }
      }
    }
</script>

<style scoped>

</style>
