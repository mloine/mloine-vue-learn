<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deepPink">
      <img slot="item-icon" src="assets/img/tabbar/home.png"  alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.png"  alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/type.png"  alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/type_active.png"  alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cato" activeColor="deepPink">
      <img  slot="item-icon" src="@/assets/img/tabbar/shop.png" alt="">
      <img  slot="item-icon-active" src="@/assets/img/tabbar/home_active.png" alt="">
      <div  slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img  slot="item-icon" src="@/assets/img/tabbar/my.png" alt="">
      <img  slot="item-icon-active" src="@/assets/img/tabbar/type_active.png" alt="">
      <div  slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";
  // const TabBar = ()=> import("./tabbar/TabBar.vue")
  // const TabBarItem = ()=> import("./tabbar/TabBarItem.vue")

  export default {
        name: "MainTabBar",
        components:{
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
