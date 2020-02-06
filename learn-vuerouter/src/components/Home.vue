<template>
  <div>
    <h2>我是首页 哈哈哈</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
              message:"msg home",
              path:"/home/news"
            }
        },
        created() {
          console.log("home create")
          document.title = "首页"
          // this.$router.push("/home/news")
        },
        destroyed() {
          console.log("home destroy")
        },
        activated() {
          console.log("ac");
          this.$router.push(this.path);
        },
        deactivated() {
          console.log("deac");
        },
        beforeRouteLeave(to,from,next){
          console.log(from.path)
          this.path = from.path
          next()
        }
        // mounted() {
        //   console.log("home mounted")
        // },
        // updated() {
        //   console.log("home updated")
        // }
    }
</script>

<style scoped>

</style>
