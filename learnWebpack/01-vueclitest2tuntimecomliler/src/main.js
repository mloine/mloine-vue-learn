// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

const cpn = {
  template:'<div>{{message}}</div>',
  data(){
    return {
      message:'我是组件'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'


  //1. 普通用法
//   render: function (createElement) {
//       return createElement('h2',
//     {class:'box'},
//     ['mloine',createElement('button',['按钮'])]);
// }

  //2.组件对象 render可以传组件对象
  render:function (createElement) {
    return createElement(App);
  }
})

