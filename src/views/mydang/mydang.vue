<template>
  <div>
    <van-sticky>
      <van-nav-bar :title="$route.name" />
    </van-sticky>
    <!-- 头部 -->
    <div class="top">
      <div v-if="$store.state.username">
        <van-image round width="80px" height="80px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <h3 v-text="$store.state.username"></h3>
        <span @click="$store.state.username=''">退出</span>
      </div>
      <div class="zdbtn" v-else>
        <router-link to="/login">登录</router-link>/
        <router-link to="/register">注册</router-link>
      </div>
    </div>
    <van-divider />
    <!-- <section class="user-stat clearFix">
      <div class="box">
        <em>0</em>
        <br />收藏的商品
      </div>
      <div class="box">
        <em>0</em>
        <br />关注商店
      </div>
      <div class="box">
        <em>0</em>
        <br />我的足迹
      </div>
    </section>-->
    <!-- 我的订单 -->
    <van-cell title="我的订单" to="/orderList/orderAll" is-link />
    <van-grid :column-num="3">
      <van-grid-item icon="balance-pay" text="待付款" to="/orderList/orderPay?1" />
      <van-grid-item icon="logistics" text="待收货" to="/orderList/orderGoods?2" />
      <van-grid-item icon="refund-o" text="已完成" to="/orderList/orderEnd?3" />
    </van-grid>

    <van-divider />

    <van-cell-group>
      <!-- <van-cell title="我的收藏" to="/favorite" is-link /> -->
      <van-cell title="我的地址" to="/address" is-link />
      <van-coupon-cell  title="优惠卷" to="/voucher" is-link />
    </van-cell-group>

    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.clearFix::after {
  content: "";
  display: block;
  clear: both;
}
.top {
  width: 100%;
  border: 0.1px solid rgba(0, 0, 0, 0);
  height: 110px;
  background: url(http://img61.ddimg.cn/upload_img/00610/home/user-bg.jpg)
    no-repeat;
  background-size: 100%;
  .zdbtn {
    width: 100px;
    height: 35px;
    margin: 35px auto;
    border: 1px solid white;
    border-radius: 20px;
    color: white;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
  }
  .van-image--round {
    margin: 15px;
    float: left;
  }
  h3 {
    color: white;
    font-size: 25px;
    padding: 20px;
  }
  span {
    color: white;
    border: 1px solid white;
    padding: 3px;
    border-radius: 20%;
  }
}
.user-stat {
  width: 100%;
  height: 55px;
  overflow: hidden;
  .box {
    width: 33.33%;
    float: left;
    text-align: center;
    margin: 10px 0;

    // padding: 10px 0;
  }
}
</style>