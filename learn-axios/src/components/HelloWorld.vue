<template>
    <div>
      <h2>{{resl}}</h2>
    </div>
</template>

<script>
  import Axios from "axios"

  export default {
      name: "HelloWorld",
      data(){
            return {
              resl:''
            }
      },
      created() {
        Axios({
          url:'http://127.0.0.1:8086/official/gainContext',
          method:'get',
          params:{
            type:0
          }
        }).then((res) => {
          console.log(res)
          this.resl = res
        })
      }
    }
</script>

<style scoped>

</style>
