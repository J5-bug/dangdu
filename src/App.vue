<template>
  <div id="app">
    <transition
      mode="out-in"
      :duration="{ enter: 300, leave: 200 }"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
    
    <!-- 脚 -->
    <van-tabbar v-model="active" v-show="$store.state.vanTabbar">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/read" icon="description">当读</van-tabbar-item>
      <van-tabbar-item to="/buy" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/mydang" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 用于撑开底部位置 -->
    <div class="bottomnull"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
// 解决滚动条效果
#app {
  overflow: hidden;
}
// 留有底部位置
.bottomnull {
  height: 50px;
  width: 100%;
}
</style>