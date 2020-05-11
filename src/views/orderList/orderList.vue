<template>
  <div>
    <van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="$router.push('/mydang')" />
    <van-tabs v-model="active" @change="onadd">
      <van-tab title="全部订单"></van-tab>
      <van-tab title="待支付"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>
    <!-- 三级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onadd(index) {
      if (index == 0) {
        this.$router.push("/orderList/orderAll");
      } else if (index == 1) {
        this.$router.push("/orderList/orderPay");
      } else if (index == 2) {
        this.$router.push("/orderList/orderGoods");
      } else if (index == 3) {
        this.$router.push("/orderList/orderEnd");
      }
    }
  },
  mounted() {
    // 接收链接 转跳  没效果？待解决
    if (location.search) {
      this.active = location.search.split("?", 2)[1];
    }
  },
  // 创建时
  created() {
    this.$store.state.vanTabbar = false;
  },
  // 生命周期钩子
  //销毁函数后
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
</style>