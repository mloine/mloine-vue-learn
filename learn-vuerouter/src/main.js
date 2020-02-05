import Vue from 'vue'
import App from './App'
// import router from './router'
import router from "./router";

Vue.config.productionTip = false

Vue.prototype.test = function () {
  console.log("author is mloine")
}

Vue.prototype.name = "mloine"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})


console.log(router)
