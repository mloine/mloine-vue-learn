import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutations-types'

//安装插件
Vue.use(Vuex)


const moudleA = {
  state:{
    name:'xyk'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  actions:{
    aUpdateName(context){
      console.log(context)
      setTimeout(()=>{
        context.commit('updateName','薛勇康')
      },1000)

    }
  },
  getters:{
    fullName(state){
      return state.name + "222222"
    } ,
    fullName2(state,getter){
      return "222222" + getter.fullName
    },
    fullName3(state,getter,rootState){
      return  getter.fullName2 + rootState.counter
    }
  }
}

const store =  new Vuex.Store({
    state:{
      counter:1000,
      students:[
        {
          id:1,
          name:'mloine',
          age:18
        },
        {
          id:2,
          name:'mloine2',
          age:24
        },
        {
          id:3,
          name:'mloine3',
          age:30
        },
        {
          id:4,
          name:'mloine4',
          age:10
        }
      ],
      info:{
          name:"cobi",
          age:35,
          height:180
      }
      },
    mutations:{// 更新state里的数据 只能用mutation
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
    },
    actions:{
      // context 上下文
      aUpdateInfo(context,payload){
        return new Promise(resolve => {
          //不要在mutation中 用异步操作
          setTimeout(()=>{
            context.commit('updateInfo')
            console.log(payload)
            // payload.success()
            resolve('1111');
          },6000)

        })
      },



    },
    getters:{//类似计算属性
        powerCounter(state){
          return state.counter * state.counter;
        },
        handleStudent(state){
          return state.students.filter((x)=> x.age >20);
        },
        handleStudentLength(state,getters){
          // console.log( this.handleStudent(state))
          return getters.handleStudent.length;
        },
        handleStudentByParam(state){
          return age => {
            return state.students.filter((x)=> x.age >age);
          }
        }
    },
    modules:{
        a:moudleA
    }
})



export default store
