<template>
  <div>
    <!-- $router.go(-1) //-1表示返回上一级 -->
    <!-- $router.go(1) //1表示刷新当前页面，刷新页面，使用路由go刷新-->
    <!-- $router.go(2) //2表示返回下一级 -->
    <!-- 头 搜索框 -->
    <!-- <van-row>
      <van-col span="20">
        <van-search placeholder="请输入搜索关键词" />
      </van-col>
      <van-col span="4">
        <span class="fbtn" @click="$router.go(-1)">取消</span>
      </van-col>
    </van-row>-->

    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <br />
    <p class="tit">热门搜索</p>

    <van-row type="flex" justify="space-around">
      <van-col span="9">东野圭吾<van-tag type="danger" size="mini">热门</van-tag></van-col>
      <van-col span="9">哈利波特</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col span="9">太宰治</van-col>
      <van-col span="9">你就是孩子最好的玩具</van-col>
    </van-row>

    <van-divider dashed style="margin-top: 80px;">猜你喜欢</van-divider>
      <van-grid :column-num="2" :gutter="8">
        <router-link to="/details" tag="a">
          <van-card
            price="2.00"
            desc="知史知今"
            title="人文社科"
            thumb="http://img61.ddimg.cn/upload_img/00796/1/10.22-1575272532.png"
          />
        </router-link>
        <router-link to="/details" tag="a">
          <van-card
            price="2.00"
            desc="万重童书"
            title="陪伴成长"
            thumb="http://img60.ddimg.cn/upload_img/00796/1/10.28-1575272475.png"
          />
        </router-link>
        <router-link to="/details" tag="a">
          <van-card
            price="59.00"
            desc="书中情怀"
            title="文艺情节"
            thumb="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png"
          />
        </router-link>
        <router-link to="/details" tag="a">
          <van-card
            price="2.00"
            desc="精彩无限"
            title="阅享生活"
            thumb="http://img63.ddimg.cn/ddreader/dangebook/3ynew_500x500.jpg"
          />
        </router-link>
      </van-grid>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.fbtn {
  font-size: 16px;
  margin: 13px;
  line-height: 54px;
}
.tit {
  margin: 0 0 10px 10px;
}
.van-col{
  margin: 5px 0;
}
a {
  width: 50%;
}
</style>