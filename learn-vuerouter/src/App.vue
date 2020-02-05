<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="mloine">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="mloine">关于</router-link>-->

<!--    <router-link to="/home" tag="button" replace >首页1</router-link>-->
<!--    <router-link to="/about" tag="button" replace >关于1</router-link>-->

<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
<!--    <button @click="userClick">用户</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>

    <router-view ></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    homeClick(){
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('home')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('about')
    },
    userClick(){
      this.$router.replace('/user')
    }
  },
  data(){
    return {
      userId:'zhangsan'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .mloine{
    color: rebeccapurple;
  }
</style>
