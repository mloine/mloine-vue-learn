import Vue from 'vue'
import App from './App'

import axios from 'axios'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// // 1.基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then((data)=>{
//   console.log(data)
// })
//
// axios.get("http://123.207.32.32:8000/home/multidata",{}).then((data)=>{
//   console.log(data)})
//
// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=3',
//   method:'get'
// }).then((data)=>{
//   console.log(data)
// })
//
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   method:'get',
//   params:{
//     type:'sell',
//     page:1
//   }
// }).then((data)=>{
//   console.log(data)
// })
//
//
// //2.axios 发送并发请求 结果需要全拿到才能处理
// axios.all([
//   axios({
//     url:'http://123.207.32.32:8000/home/multidata',
//     method:'get'
//   }),
//   axios({
//     url:'http://123.207.32.32:8000/home/data',
//     method:'get',
//     params:{
//       type:'sell',
//       page:1
//     }
//   }),
// ]).then((results)=>{
//   console.log(results.length);
//   console.log(results);
//   console.log("第一个:"+results[0])
//   console.log("第二个:"+results[1])
// })

// 全局配置 全局的axios发送请求
// axios.defaults.baseURL = "http://127.0.0.1:8086";
// axios.defaults.timeout = 5000;
//
//
// axios.all([
//   axios({
//     url:'/official/gainNews',
//     method:'get',
//     params:{
//       type:0,
//       newsType:1
//     }
//   }),
//   axios({
//     url:'/official/gainContext',
//     method:'get',
//     params:{
//       type:0
//     }
//   }),
// ]).then(([res1,res2])=>{
//   console.log(res1)
//   console.log(res2)
//   console.log("arr第一个:"+res1)
//   console.log("arr第二个:"+res2)
// })
//
//
// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then((data)=>{
//   console.log(data)
// })


//创建对应的axios的实例 发送请求
// const instance = axios.create({
//   baseURL:"http://127.0.0.1:8086",
//   timeout:5000
// });
//
// instance({
//       url:'/official/gainNews',
//     method:'get',
//     params: {
//       type: 0,
//       newsType: 1
//     }
// }).then((data) => {
//   console.log(data)
// })
//
// const instance2 = axios.create({
//   baseURL:"http://123.207.32.32:8000"
// })
//
// instance2({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then((data)=>{
//   console.log(data)
// })



// 5.使用自己分装过后的request
import {request} from "./network/request"

request({
  url:"/official/gainContext",
  method:'get',
  params:{
    type:0
  }
},(data)=>{
  console.log("请求成功")
  console.log(data)
},(data)=>{
  console.log("请求失败")
  console.log(data)
})





