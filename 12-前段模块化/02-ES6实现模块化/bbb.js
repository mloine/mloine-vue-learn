// 导入指定
import {flag,sum,number1,height,mul,Persion} from './aaa.js';
// 带入默认
import addr from './aaa.js';

//导入全部
import * as aaa from './aaa.js';

const p = new Persion();
if(flag){
    console.log(sum(222,211));
    console.log(mul(222,211));
    console.log(number1);
    console.log(height);
    p.run();
    console.log(addr('👋'));

    console.log(aaa.height);
    
}