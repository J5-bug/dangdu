<template>
  <div>
    <div style="z-index: 100; margin: 10px">
      <h1 style="font-size:20px;color:royalblue">
        广告页  
      </h1>
      <button style="" @click="goHome">跳过<font style="font-weight: bold;" > {{num}}</font></button>
    </div>

    <img src="../../assets/1.jpg" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
      cleardata: null //清除定时器
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home"); //推荐页面
    }
  },
  created() {
    // 倒计时定时器
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home"); //推荐页面
      } else {
        this.num--;
      }
    }, 1000);
    // 隐藏导航数据
    this.$store.state.vanTabbar = false;
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  },
  // 销毁生命周期函数之前停止
  beforeDestroy() {
    //销毁vue数据与方法。组件结束执行
    // 定时器属于浏览器对象，属于window。
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss" scoped>
div {
  img {
    position: absolute;
    top: 0;
    width: 100%;
  }
  position: fixed;
  height: 100%;
  width: 100%;
}
button{
  width: 60px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #ccc;
 border: 1px solid #ccc;
 border-radius: 20px;
 background: transparent;
}
</style>