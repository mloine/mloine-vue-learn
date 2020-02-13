
import axios from 'axios'

export function request(config,success,failture) {
  // 1.创建请求
  const instance = axios.create({
    baseURL:"http://127.0.0.1:8086",
    timeout:5000
  })

  //2.axios请求拦截器
  instance.interceptors.request.use((config)=>{
    console.log("请求拦截")
    console.log(config)
    //一定要记住返回拦截住的config !!!!!!!!!!!!!!!!!!!!!!!

    //1.可以多配置处理config

    //2. 比如每次请求的时候 都显示图标

    //3. 某些网络请求必须携带特殊信息
    return config
  },(error)=>{
    console.log("请求拦截")
    console.log(error)
    return error
  })

  // 响应拦截
  instance.interceptors.response.use((result)=>{
    console.log("响应拦截")
    console.log(result)
    // 注意拦截后 要返回响应数据！！！！！！！！！！！！！！！！！！！！！！
    return result.data
  },(error)=>{
    console.log("error")
    console.log(error)
  })

  instance(config).then(success).catch(failture)
}

