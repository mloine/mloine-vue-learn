<template>
  <div id="app">
    <h2>------------------App 内容</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
    <button @click="addtion()">+</button>
    <button @click="subtion()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">+student</button>

    <h2>------------------App getter 内容</h2>

    <h2>{{$store.state.counter * $store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>


    <h2>{{$store.getters.handleStudent}}</h2>
    <h2>{{$store.getters.handleStudentLength}}</h2>
    <h2>{{$store.getters.handleStudentByParam(12)}}</h2>
    <h2>{{more20stu}}</h2>
    <ul>
      <li v-for="item in $store.getters.handleStudent">{{item.name}}</li>
    </ul>

    <h2>------------------App info 内容是否是响应式的</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>------------------App module内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="updateName">updateName</button>
    <button @click="asyncUpdateName">asyncUpdateName</button>

    <h2>------------------Hello-vuex 内容</h2>
    <hello-vuex ></hello-vuex>

  </div>
</template>

<script>

  import HelloVuex from "./components/HelloVuex";
  import * as types from "./store/mutations-types"

export default {
  name: 'App',
  data(){
    return {
      message:"我是app组件",
      counter:0
    }
  },
  components:{
    HelloVuex
  },
  methods:{
    addtion(){
     // this.$store.mutations.increment();
     // this.$store.commit('increment')
     this.$store.commit(types.INCREMENT)
    },
    subtion(){
      // this.$store.mutations.decrement();
     this.$store.commit('decrement')

    },
    addCount(num){
      // 1.普通的提交风格
      // this.$store.commit('incrementCount',num)
      // 2.特殊的提交风格
      this.$store.commit({
        type:"incrementCount",
        num
      })
    },
    addStudent(){
      const stu = {
        id:5,
        name:'cobi',
        age:35
      }
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      // mutation
      // this.$store.commit('updateInfo')

      //action
      // this.$store.dispatch('aUpdateInfo',()=>{
      //   console.log("ok 里面已经完成了")
      // })

      // this.$store.dispatch('aUpdateInfo',{
      //     payload:"我是携带的信息",
      //     success:()=>{
      //       console.log("操作陈工啦")
      //     }
      // })

      this.$store.dispatch('aUpdateInfo','我是携带信息').then((msg)=>{
        console.log("执行成功:"+msg)
      })

    },
    updateName(){
      this.$store.commit("updateName",'lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')

    }
  },
  computed:{
    more20stu(){
      return this.$store.state.students.filter((x) => x.age>20)
    }
  }
}
</script>

<style>

</style>
