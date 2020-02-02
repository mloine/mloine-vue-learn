export default {
    data(){
        return {
            message:'hello webpack',
            name:'mloine name'
        }
    },
    methods:{
        btnClick(){
            console.log("mloine btn");
        }
    },
    template:`
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <h2>{{name}}</h2>
        </div>`
}