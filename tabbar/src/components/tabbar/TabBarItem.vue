<template>
  <div class="tab-item" @click="itemClick" >
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
<!--    <div :class="{active:isActive}">-->
    <div  :style="activeStyle">
      <slot  name="item-text"></slot>
    </div>
<!--    <img src="../../assets/img/tabbar/home.png"  alt="">-->
<!--    <div >首页</div>-->
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:{
          type:String
        },
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return {

          }
      },
      computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          console.log(this.activeColor);
          this.$router.replace(this.path);
          // this.isActive = !this.isActive;

        }
      }
    }
</script>

<style scoped>


  .tab-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: center;
    margin-bottom: 2px;
  }

  /*.active{*/
  /*  color: red;*/
  /*}*/
</style>
