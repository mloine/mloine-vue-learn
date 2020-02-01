let name = 'mloine';
let age = 25;
let flag = true;

function sum(number1,number2){
    return number1 + number2;
}

if(flag){
    console.log(sum(1,1));
}

// 导出
export {flag,sum}

export var number1 = 1000;
export var height = 1.75;

export function mul(num1,num2){
    return num1 + num2;
}


export class Persion{
    run(){
        console.log("is runing");
        
    }
}

// export defult
const address = 'shang hai'
// export {address} 
// export const address = 'shang hai'


// export default address


export default function(arg){
    console.log(arg);    
}