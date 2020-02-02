// commonJs 模块化规范
const {add,mul} = require('./js/mathUtil.js')

console.log(add(20,30));
console.log(add(210,310));

// es6 模块化规范
import {name1,age,height} from './js/info';

console.log(age);
console.log(name1);
console.log(height);

// 依赖css 文件
require('./css/normal.css');
// 依赖less文件
require('./css/special.less');

document.writeln("<h2>你好👌 mloine</h2>");

// 使用vue开发
import Vue from 'vue';

// import app from './vue/app.js';
import app from './vue/app.vue';

// const app = {
//     data(){
//         return {
//             message:'hello webpack',
//             name:'mloine name'
//         }
//     },
//     methods:{
//         btnClick(){
//             console.log("mloine btn");
//         }
//     },
//     template:`
//         <div>
//             <h2>{{message}}</h2>
//             <button @click="btnClick">按钮</button>
//             <h2>{{name}}</h2>
//         </div>`
// }

new Vue({
    el:'#app',
    components:{
        App:app
    },
    template: `<App></App>`
})



// document.writeln("<button>你好👌 mloine</button>");









