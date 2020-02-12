export default {
  // context 上下文
  aUpdateInfo(context,payload){
    return new Promise(resolve => {
      //不要在mutation中 用异步操作
      setTimeout(()=>{
        context.commit('updateInfo')
        console.log(payload)
        // payload.success()
        resolve('11113');
      },6000)

    })
  },



}
