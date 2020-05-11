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

    <!-- 轮播图 -->
    <div class="swiper-container swiperHomeNavLP">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/homeimg/shouye1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/homeimg/shouye2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/homeimg/shouye3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/homeimg/shouye4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/homeimg/shouye5.jpg" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 内容 可使其跳转到分类页面-->
    <div class="swiper-container swiperHomeNeiR">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <van-grid :gutter="10">
            <van-grid-item icon="gem-o" to="/sort?id=0" text="精选" />
            <van-grid-item icon="hot-sale-o" to="/sort?id=1" text="当当优品" />
            <van-grid-item icon="orders-o" to="/sort?id=2" text="图书" />
            <van-grid-item icon="photo-o" to="/sort?id=3" text="童书" />
            <van-grid-item icon="shop-collect-o" to="/sort?id=4" text="旧书拍卖" />
            <van-grid-item icon="photo-o" to="/sort?id=5" text="电子书" />
            <van-grid-item icon="photo-o" to="/sort?id=6" text="手机数码" />
            <van-grid-item icon="comment-circle-o" to="/sort?id=7" text="创意文具" />
          </van-grid>
        </div>
        <div class="swiper-slide">
          <van-grid :gutter="10">
            <van-grid-item icon="photo-o" to="/sort?id=8" text="女装" />
            <van-grid-item icon="photo-o" to="/sort?id=9" text="男装" />
            <van-grid-item icon="photo-o" to="/sort?id=10" text="电脑办公" />
            <van-grid-item icon="photo-o" to="/sort?id=11" text="食品生鲜" />
            <van-grid-item icon="photo-o" to="/sort?id=12" text="母婴玩具" />
            <van-grid-item icon="photo-o" to="/sort?id=13" text="童鞋童妆" />
          </van-grid>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>

    <!-- 限时秒杀 -->
    <img src="../../assets/homeimg/1_y.jpg" alt />
    <van-divider :style="{ color: 'red', borderColor: 'red', padding: '0 16px' }">今日秒杀</van-divider>
    <van-count-down :time="time">
      <template v-slot="timeData">
        <span class="item">{{ timeData.hours }}</span>时
        <span class="item">{{ timeData.minutes }}</span>分
        <span class="item red">{{ timeData.seconds }}</span>秒
      </template>
    </van-count-down>
    <div class="swiper-container swiperSpike">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/details">
            <div class="pic">
              <img class="lazy" src="http://img3m9.ddimg.cn/94/23/1211494279-1_h_4.jpg" />
              <p class="name">【限时秒杀包邮】哈佛家训</p>

              <span class="rob">￥1</span>
              <span class="discount">￥36.00</span>
            </div>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/details">
            <div class="pic">
              <img class="lazy" src="http://img3m6.ddimg.cn/87/25/1424159736-1_h_1.jpg" />
              <p class="name">【限时秒杀包邮】儿童帆布鞋</p>

              <span class="rob">￥39.9</span>
              <span class="discount">￥236.00</span>
            </div>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/details">
            <div class="pic">
              <img class="lazy" src="http://img3m7.ddimg.cn/94/30/1596378757-1_h_2.jpg" />
              <p class="name">【限时秒杀包邮】细菌世界</p>

              <span class="rob">￥38.9</span>
              <span class="discount">￥182.84</span>
            </div>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/details">
            <div class="pic">
              <img class="lazy" src="http://img3m3.ddimg.cn/87/10/1467723003-1_h_20.jpg" />
              <p class="name">【限时秒杀包邮】儿童帆布鞋</p>

              <span class="rob">￥39.9</span>
              <span class="discount">￥236.00</span>
            </div>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/details">
            <div class="pic">
              <img class="lazy" src="http://img3m7.ddimg.cn/47/14/23422457-1_h_15.jpg" />
              <p class="name">【限时秒杀包邮】纯棉毛巾</p>

              <span class="rob">￥16.9</span>
              <span class="discount">￥199.00</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 好物推荐 -->
    <img src="http://img61.ddimg.cn/upload_img/00803/1/1242x332-1583739302.jpg" alt />
    <van-divider :style="{ color: 'red', borderColor: 'lightslategray', padding: '0 16px' }">好物推荐</van-divider>
    <van-grid :column-num="2">
      <router-link to="/details" tag="a">
        <van-card
          desc="书中情怀"
          title="文艺情节"
          thumb="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png"
        />
      </router-link>
      <router-link to="/details" tag="a">
        <van-card
          desc="精彩无限"
          title="阅享生活"
          thumb="http://img63.ddimg.cn/ddreader/dangebook/3ynew_500x500.jpg"
        />
      </router-link>
      <router-link to="/details" tag="a">
        <van-card
          desc="万重童书"
          title="陪伴成长"
          thumb="http://img60.ddimg.cn/upload_img/00796/1/10.28-1575272475.png"
        />
      </router-link>
      <router-link to="/details" tag="a">
        <van-card
          desc="知史知今"
          title="人文社科"
          thumb="http://img61.ddimg.cn/upload_img/00796/1/10.22-1575272532.png"
        />
      </router-link>
    </van-grid>
    <!-- <van-divider :style="{ color: 'red', borderColor: '#ccc', padding: '0 16px' }">更多精彩敬请期待</van-divider> -->
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      time: 2 * 60 * 60 * 1000
    };
  },
  methods: {
    goHome() {
      // 刷新页面
      this.$router.go(1);
    },
    getSearch() {
      // 跳转路由
      this.$router.push("/search");
    },
    goMydang() {
      // 跳转路由
      this.$router.push("/mydang");
    }
  },
  //注意： swiper 必须要在页面渲染到浏览器后mounted钩子函数中才能执行
  mounted() {
    // 注意：.swiper-container swiper中实例化对象第一值，是swiper显示最外面对象容器。这个类在重复使用swiper容易冲突，重新定义类名解决
    new Swiper(".swiperHomeNavLP", {
      loop: true, //自动轮播
      slidesPerView: 1, //显示可视轮播图个数
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    // 转跳栏的轮播
    new Swiper(".swiperHomeNeiR", {
      slidesPerView: 1 //显示可视轮播图个数
      // // 如果需要滚动条
      // scrollbar: {
      //   el: ".swiper-scrollbar"
      // }
    });
    // 转跳栏的轮播
    new Swiper(".swiperSpike", {
      slidesPerView: 3.4 //显示可视轮播图个数
    });
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-card__title {
  margin: 15px 0px;
  font-weight: bold;
}
.van-ellipsis {
  margin: 12px 0px;
}
a {
  width: 50%;
}
.van-count-down {
  color: #323233;
  font-size: 14px;
  line-height: 20px;
  width: 135px;
  margin: 0 auto;
  padding-bottom: 20px;
  .item {
    display: inline-block;
    width: 22px;
    margin: 0 3px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: black;
  }
  .red {
    background-color: red;
  }
}
.pic {
  padding: 0 5px 5px 5px;
  margin-bottom: 10px;
  .name {
    margin-top: 0.4rem;
    color: #323232;
    overflow: hidden;
  }
  .rob {
    color: red;
    font-size: 16px;
  }
  .discount {
    text-decoration: line-through;
  }
}
</style>

