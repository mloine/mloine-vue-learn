// 模拟模块化   闭包
var moduleA = (function(){

    var obj = {};
    // 小明
    var name = 'xiao ming';
    var age = 22;
    
    function sum(num1,num2){
        return num1+num2;
    }
    
    
    var flag = true;
    
    if(flag){
        console.log(sum(1,2));   
    }
    

    obj.flag = flag;
    obj.sum = sum;

    return obj;
})();


 // 小明
 var name = 'xiao ming';
 var age = 22;
 
 function sum(num1,num2){
     return num1+num2;
 }
 
 
 var flag = true;
 
 if(flag){
     console.log(sum(1,2));   
 }
 
// es6
//  module.exports = {
//      flag:flag,
//      sum:sum
//  }