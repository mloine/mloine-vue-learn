import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import modulesA from "./modules/modulesA";
import * as types from './mutations-types'

//安装插件
Vue.use(Vuex)


const moudleA = modulesA

const state = {
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
}


const store =  new Vuex.Store({
    state:state,
    mutations:mutations,
    actions:actions,
    getters:getters,
    modules:{
        a:moudleA
    }
})



export default store
