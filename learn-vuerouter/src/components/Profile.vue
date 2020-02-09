<template>
    <div>
      <h2>我是profile组件</h2>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
      <p>{{$route.query.height}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile",
      created() {
        console.log("profile create")
      },
      destroyed() {
        console.log("profile destroyed")
      }
    }
</script>

<style scoped>

</style>
