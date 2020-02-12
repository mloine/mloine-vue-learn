<template>
    <div>
      <h2>{{$store.state.counter}}</h2>
<!--      <button @click="counter++">++</button>-->
<!--      <button @click="counter&#45;&#45;">&#45;&#45;</button>-->

      <h2>{{$store.getters.handleStudent}}</h2>

      <h2>------------------info 内容是否是响应式的</h2>
      <h2>{{$store.state.info}}</h2>

    </div>
</template>

<script>
    export default {
      name: "HelloVuex",
      // props:{
      //     counter:{
      //       type:Number
      //     }
      // }
    }
</script>

<style scoped>

</style>
