<template>
  <div>
    <van-sticky>
    <van-nav-bar :title="$route.name" />
    </van-sticky>
    <!-- 当购物车为空的时候显示 -->
    <h1 class="viodText" v-show="lists.length == 0">
      购物车为空
      <router-link to="/home" tag="button">去逛逛</router-link>
    </h1>
    <!-- 购物车商品列表 -->
    <div v-for="(item,index) in lists" :key="index">
      <van-card
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        thumb="http://img3m2.ddimg.cn/0/27/28473192-1_e_3.jpg"
      >
        <div slot="tags">
          <van-tag plain @click="item.num <=1?1:item.num--">-</van-tag>
          <input type="text" v-model="item.num" class="num" />
          <van-tag plain @click="item.num++">+</van-tag>
        </div>
        <div slot="footer">
          <div class="checkboxselect" @click="inputselect(index)">
            <van-icon name="success" v-show="item.isSelect" />
          </div>
          <van-button size="mini" class="delbutton" @click="del(index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <!-- 推荐栏 -->
    <div v-show="lists.length == 0">
      <van-divider dashed>猜你喜欢</van-divider>
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
    <!-- 订单提交 -->
    <van-submit-bar
      :price="totals * 100"
      button-text="提交订单"
      @submit="onsubmit"
      v-show="lists.length != 0"
    >
      <van-checkbox @click="checkAll" :value="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lists: [],
      totals: 0, //总价格
      checked: true //默认全选
    };
  },
  methods: {
    del(index) {
      this.lists.splice(index, 1);
    },
    // 控制全选与反选
    checkAll() {
      this.lists.forEach(data => {
        data.isSelect = !this.checked;
      });
      this.checked = !this.checked;
    },
    checkboxclick() {
      //第一次页面加载过程中，判断数据中isSelet状态，如果全部为true，那么返回true
      this.checked = this.lists.every(item => {
        return item.isSelect; //只有选项中全部为true，返回true。只要有一个false，返回false
      });
    },
    // 单击商品列表选项操作
    inputselect(index) {
      // 修改商品列表数据
      this.lists[index].isSelect = !this.lists[index].isSelect;
      this.checkboxclick();
      this.sum();
    },
    // 总价格计算
    sum() {
      // 总价格计算
      // reduce()返回计算总价格
      // total 总价格累加
      // item 数据中对象
      this.totals = this.lists.reduce((total, item) => {
        // 判断选项
        if (!item.isSelect) return total; //false不让计算总价格
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认参数值为0
    },
    onsubmit() {
      // 判断用户名是否为空
      // 为空：跳转登陆页面
      // 不为空:订单页面
      if (this.$store.state.username) {
        this.$router.push("/order");
      } else {
        this.$router.push({
          path: "/login",
          query: {
            path: "/order"
          }
        });
      }
    }
  },
  created() {
    this.lists = this.$store.state.buy.lists;
    this.sum(); //执行计算总价格
    this.checkboxclick();
  },
  beforeUpdate() {
    this.sum(); //执行计算总价格
  }
};
</script>

<style lang="scss" scoped>
.van-submit-bar {
  bottom: 50px;
}
.checkboxbutton {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -20px;
}
.delbutton {
  position: absolute;
  right: 20px;
  bottom: 5px;
}
.num {
  width: 30px;
  text-align: center;
  font-size: 16px;
}
.checkboxselect {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #c8c9cc;
  i {
    display: block;
    width: 20px;
    height: 20px;
    background: #1989fa;
    border-radius: 50%;
    text-align: center;
    line-height: 22px;
    font-size: 16px;
    color: #fff;
  }
}
.viodText {
  font-size: 16px;
  line-height: 30px;
  height: 30px;
  width: 180px;
  margin: 50px auto;
  button {
    border: 1px solid transparent;
  }
}
a {
  width: 50%;
}
</style>