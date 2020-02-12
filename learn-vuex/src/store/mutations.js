import * as types from "./mutations-types";
import Vue from "vue";

export default {// 更新state里的数据 只能用mutation
  // increment(state){
  //   state.counter++
  // },

  // 统一管理 避免错误
  [types.INCREMENT](state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  incrementCount(state,num){
    console.log(num)

    state.counter += num.num
  },
  addStudent(state,stu){
    state.students.push(stu);
  },
  updateInfo(state){
    // state.info.name = "mloine"

    //不要在mutation中 用异步操作
    // setTimeout(()=>{ state.info.name = "mloine"},1000)

    // 非响应式加入
    // state.info['address']='shanghai'
    // delete state.info.age

    // 响应式加入新属性
    Vue.set(state.info,'address','shanghai')

    Vue.delete(state.info,'age')
  }
}
