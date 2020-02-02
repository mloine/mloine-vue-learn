// commonJs 模块化规范
const {add,mul} = require('./js/mathUtil.js')

console.log(add(20,30));
console.log(add(210,310));

// es6 模块化规范
import {name,age,height} from './js/info';

console.log(age);
console.log(name);
console.log(height);

// 依赖css 文件
require('./css/normal.css');
// 依赖less文件
require('./css/special.less');

document.writeln("<h2>你好👌 mloine</h2>")




