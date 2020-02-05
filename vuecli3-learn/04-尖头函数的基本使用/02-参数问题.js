// 两个参数
const sum =  (num1,num2) => {return num1 + num2};


// 一个参数
const power = num => {return num*num};
// const power = (num) => {return num*num};


// 函数中的代码结构
const test1 = () => {
    console.log("hello world");
    console.log("mloine hello");
}
// 只有一行代码
const mul = (num1,num2) => num1+num2;

const demo = () => console.log('one line');



console.log(sum(1,1));
console.log(power(4));
test1();
console.log(mul(6,7));
demo()