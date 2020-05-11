<template>
  <div>
    <!-- 头 搜索框 -->
    <van-sticky>
      <van-row>
        <van-col span="4">
          <span class="dd" @click="goHome">当当</span>
        </van-col>
        <van-col span="16">
          <van-search @focus="getSearch" placeholder="请输入搜索关键词" />
        </van-col>
        <van-col span="4">
          <van-icon class="xinjian" name="friends-o" @click="goMydang" size="25px" />
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 内容 -->
    <van-tree-select height="90vh" :items="items" :main-active-index.sync="active">
      <template slot="content">
        <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <van-image v-if="active === 2" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <van-image v-if="active === 3" src="https://img.yzcdn.cn/vant/apple-4.jpg" />
        <van-image v-if="active === 4" src="https://img.yzcdn.cn/vant/apple-5.jpg" />
        <van-image v-if="active === 5" src="https://img.yzcdn.cn/vant/apple-6.jpg" />
        <van-image v-if="active === 6" src="https://img.yzcdn.cn/vant/apple-7.jpg" />
        <van-image v-if="active === 7" src="https://img.yzcdn.cn/vant/apple-8.jpg" />
        <van-image v-if="active === 8" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <van-image v-if="active === 9" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <van-image v-if="active === 10" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <van-image v-if="active === 11" src="https://img.yzcdn.cn/vant/apple-4.jpg" />
        <van-image v-if="active === 12" src="https://img.yzcdn.cn/vant/apple-5.jpg" />
        <van-image v-if="active === 13" src="https://img.yzcdn.cn/vant/apple-6.jpg" />
        <van-image v-if="active === 14" src="https://img.yzcdn.cn/vant/apple-7.jpg" />
        <van-grid :gutter="5">
          <van-grid-item icon="gem-o" to="/details" text="精选" />
          <van-grid-item icon="hot-sale-o" to="/details" text="优品" />
          <van-grid-item icon="orders-o" to="/details" text="图书" />
          <van-grid-item icon="photo-o" to="/details" text="童书" />
          <van-grid-item icon="shop-collect-o" to="/details" text="拍卖" />
          <van-grid-item icon="photo-o" to="/details" text="男装" />
          <van-grid-item icon="photo-o" to="/details" text="数码" />
          <van-grid-item icon="comment-circle-o" to="/details" text="文具" />
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { text: "精选" },
        { text: "当当优品" },
        { text: "图书" },
        { text: "童书" },
        { text: "旧书拍卖" },
        { text: "电子书" },
        { text: "手机数码" },
        { text: "创意文具" },
        { text: "女装" },
        { text: "男装" },
        { text: "电脑办公" },
        { text: "食品生鲜" },
        { text: "母婴玩具" },
        { text: "童鞋童妆" },
        { text: "户外运动" },
        { text: "当当礼品卡" },
        { text: "美妆个护" },
        { text: "当当优课" },
        { text: "网络文学" }
      ]
    };
  },
  methods: {
    goHome() {
      // 刷新页面 首页
      this.$router.push("/home");
    },
    getSearch() {
      // 跳转路由 搜索
      this.$router.push("/search");
    },
    goMydang() {
      // 跳转路由 我的
      this.$router.push("/mydang");
    }
  },
  // 页面加载完后
  mounted() {
    // 接收链接 转跳
    if (location.search) {
      this.active = location.search.split("=", 2)[1];
    }
  }
};
</script>

<style lang="scss" scoped>
.dd {
  font-weight: bold;
  color: orangered;
  font-size: 16px;
  padding: 12px 0 12px 12px;
  display: block;
  background: white;
  height: 30px;
  line-height: 30psx;
}
.xinjian {
  padding: 15px;
  display: block;
  background: white;
  height: 24px;
}
</style>