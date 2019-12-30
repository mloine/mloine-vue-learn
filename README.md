# mloine-vue-learn
##vue 学习记录

##day1：vue 接触例子 
+ a.数据绑定 {}{}
+ b.列表展示 v-for
+ c.事件绑定 v-on:click  语法糖: @click
+ d.new Vue 可传入参数 el交给vue管理的元素 data数据 methods方法集合 钩子方法 created mounted beforeCreate
+ e.vue属于声明式编程范式 

##day02: vue {{}} 语法初步接触
+ a.可以使用 + 号 拼接

###day03: vue 插值语法  动态属性  计算属性
+ a. v-once 只会加载一次 后续操作不会影响
+ b. v-html 内容会进行html渲染
+ c. v-text 效果类似 {{}} 语法
+ d. v-pre  不会交给vue 解析内容
+ e. v-cloak 斗篷 在html元素交给vue处理之前 会用斗篷渲染样式的行为
+ f. v-bind 绑定属性  可以动态修改src href class 等    v-bind:class 语法糖 :class 
+ g. 计算属性 computed 可以事先处理数据结果当作属性使用