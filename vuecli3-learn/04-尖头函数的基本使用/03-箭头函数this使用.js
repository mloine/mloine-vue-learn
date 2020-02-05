// 什么时候

// console.log(this);
//
// setTimeout(()=>{
//     console.log(this);
// },1000);

// 箭头函数中的this 引用的是最近作用域中的this
const obj = {
    aaa(){
        setTimeout(function () {
            console.log(this);//window

            setTimeout(function () {
                console.log(this);//window
            });

            setTimeout(()=>{
                console.log(this);//window
            })
        });

        setTimeout(()=>{
            console.log(this);//obj对象

            setTimeout(function () {
                console.log(this);//window
            });

            setTimeout(()=>{
                console.log(this);//obj对象
            })
        })
    }
}

obj.aaa();