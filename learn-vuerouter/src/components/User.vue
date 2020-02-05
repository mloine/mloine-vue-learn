<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户相关信息，哈哈哈哈哈 </p>
<!--      <h2>{{userId}}</h2>-->
      <h2>{{cuserId}}</h2>
      <h2>{{$route.params.userId}}</h2>
      <button @click="btnClick">按钮</button>
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
      },
      methods:{
        btnClick(){
          console.log(this.$router)
          console.log(this.$route)
          console.log(this.name)
          this.test();
        }
      }
    }
</script>

<style scoped>

</style>
