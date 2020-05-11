<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container containerguidepage">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/3.jpg" alt />
          <van-button class="btn" plain hairline type="warning" size="small" to="/home">点击体验</van-button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination paginationguidepage"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  created() {
    this.$store.state.vanTabbar = false;
  },
  mounted() {
    new Swiper(".containerguidepage", {
      pagination: {
        el: ".paginationguidepage"
      }
    });
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.btn{
  z-index: 999;
  position: absolute;
  right: 20px;
  top: 20px;
}
.swiper-container {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  // img {
    // width: 100%;
    // height: 100%;
  // }
}
</style>