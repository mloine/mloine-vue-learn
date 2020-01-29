const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《uninx编程艺术》',
                date:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                date:'2008-9',
                price:39.00,
                count:1
            }, 
            {
                id:4,
                name:'《代码大全》',
                date:'2006-11',
                price:128.00,
                count:1
            }
        ]
    },
    methods: {
        getFinalPrice(price){
            return '¥'+price.toFixed(2);
        },
        decrement(index){
            console.log(index);
            // if(this.books[index].count > 1){
            //     this.books[index].count--;
            // }         
            this.books[index].count--;
        },
        increment(index){
            console.log(index);
            this.books[index].count++;
        },
        removeHandle(index){
            this.books.splice(index,1);
        }
    }, 
    filters: {
        showPrice(price){
            return '¥'+price.toFixed(2);
        }
    },
    computed: {
        totalPrice(){
            let totalPrice = 0;
            //1. 普通for循环
            // for(let i = 0; i<this.books.length;i++){
            //     totalPrice += this.books[i].price  * this.books[i].count;
            // }

            //2   for(let i in this.books)   in索引
            // for(let i in this.books){
            //     console.log(i);  
            //     totalPrice += this.books[i].price  * this.books[i].count;
            // }

            // 3   for(let i of this.books)  of元素
            // for(let item of this.books){
            //     console.log(item);  
            //     totalPrice += item.price  * item.count;
            // }

            //4 reduce 
            // this.books.forEach(element => {
            //     totalPrice += element.price  * element.count;
            // });

            //第一个参数 匿名函数  第二个参数 初始操作值
            // this.books.reduce(function(preValue,n){
            //     return preValue + n.count * n.price;
            // },totalPrice);

            // 简便写法 高阶函数
            totalPrice = this.books.reduce((pre,n) => pre + n.price * n.count,0);
            return totalPrice;
        }
    },
}) 