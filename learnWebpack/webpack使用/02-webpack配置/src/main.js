// commonJs 模块化规范
const {add,mul} = require('./js/mathUtil.js')

console.log(add(20,30));
console.log(add(210,310));

// es6 模块化规范
import {name,age,height} from './js/info';

console.log(age);
console.log(name);
console.log(height);


