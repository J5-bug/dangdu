<template>
  <div>
    <!--  -->
    <van-sticky>
      <van-nav-bar title="商品" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <!-- 轮播图 -->
    <div class="swiper-container swiperDetailsLP">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/e1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/e2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/e3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/e4.jpg" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 购买信息 -->
    <div class="panel">
      <h1>{{goods.name}}</h1>
      <div class="content">你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！）</div>
      <div class="price">￥{{goods.price}} <span class="discount">￥80</span></div>
      <br>
      <p
        style="color:#ccc"
      >17岁前从未上过学的女孩，如何成为剑桥大学博士？我们要背叛多少曾经，才能找到真正的自我！《纽约时报》 等数十家媒体一致公推“年度图书”，作者获选《时代周刊》年度影响力人物！这本书比你听说的还要好！</p>
      <van-row type="flex" justify="space-between">
        <van-col span="6" >广州</van-col>
        <van-col span="6"> 免运费</van-col>
        <van-col span="6">月销量:666</van-col>
      </van-row>
      <br>
      
    </div>
<br>
    <!-- 详情内容 -->
    <ul class="parms" style="background-color: white;margin:10px 0">
      <li>
        <em>作者</em>
        <i>塔拉 · 韦斯特弗 著 ， 新经典 出品</i>
      </li>
      <li>
        <em>出版社</em>
        <i>南海出版公司</i>
      </li>
      <li>
        <em>排名</em>
        <i>塔拉 · 韦斯特弗 著 ， 新经典 出品</i>
      </li>
      <li>
        <em>分类</em>
        <i>图书>文学>外国随笔</i>
      </li>
    </ul>
    <van-tabs v-model="active">
      <van-tab title="图书详情">
        <img src="../../assets/img/17.jpg" alt srcset />
      </van-tab>
      <van-tab title="出版信息">
        <ul class="parms">
          <li>
            <em>书名</em>
            <i>
              你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80
              周！多一个人读到这个真实故事，就多一个人勇敢做自己！）
            </i>
          </li>
          <li>
            <em>ISBN</em>
            <i>9787544276986</i>
          </li>
          <li>
            <em>作者</em>
            <i>塔拉 · 韦斯特弗 著 ， 新经典 出品</i>
          </li>
          <li>
            <em>出版社</em>
            <i>南海出版公司</i>
          </li>
          <li>
            <em>出版时间</em>
            <i>2019-11-01</i>
          </li>
          <li>
            <em>页数</em>
            <i>388</i>
          </li>
          <li>
            <em>字数</em>
            <i>270000</i>
          </li>
          <li>
            <em>开本</em>
            <i>32开</i>
          </li>
          <li>
            <em>纸张</em>
            <i>胶版纸</i>
          </li>
          <li>
            <em>包装</em>
            <i>精装</i>
          </li>
          <li>
            <em>是否套装</em>
            <i>否</i>
          </li>
        </ul>
      </van-tab>
    </van-tabs>

    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon text="首页" @click="$router.push('/home')" icon="wap-home-o" color />
      <van-goods-action-icon text="购物车" @click="$router.push('/buy')" icon="cart-o" :info="num" />
      <!-- <van-goods-action-icon text="收藏" icon="star" color="#ff5000" /> -->
      <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("buy");

import Swiper from "swiper";

export default {
  data: function() {
    return {
      active: 0,
      // num:1,
      goods: {
        id: 6,
        name: "你当像鸟飞往你的山",
        price: "59.00",
        num: 1
      }
    };
  },
  methods: {
    ...mapMutations(["add"])
  },
  computed: {
    ...mapState({
      num: state => state.num
    })
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  },
  mounted() {
    new Swiper(".swiperDetailsLP", {
      loop: true, //自动轮播
      slidesPerView: 1, //显示可视轮播图个数
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.panel {
  padding: 15px 15px 0px 15px;
  h1 {
    font-size: 24px;
  }
  .content {
    font-size: 14px;
  }
  .price {
    color: #ff6b00;
    font-size: 28px;
    .discount{
      font-size: 18px;
      color: #969696;
      text-decoration: line-through;
    }
  }
}
.parms {
  li {
    position: relative;
    overflow: hidden;
    font-size: 14px;
    padding: 10px 0;
    border: 0.2px solid #ccc;
    em {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 85px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      color: #969696;
    }
    i {
      display: block;
      margin-left: 85px;
      color: #4d525d;
    }
  }
}
.van-row--justify-space-between{
  color: #969696;
}
</style>