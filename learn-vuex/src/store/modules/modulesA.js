export default {
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
