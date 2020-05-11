<template>
<!-- 取消 -->
  <div>
    <van-nav-bar
      :title="$route.name"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/mydang')"
    />
    <!-- 当收藏为空时 -->
    <div v-show="lists.length == 0">
      <img src />
      <h1 class="viodText">
        暂无收藏
        <router-link to="/home" tag="button">去首页看看</router-link>
      </h1>
    </div>
    <!-- 有数据时 -->
    <div v-for="(item,index) in lists" :key="index">
      <van-card
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        thumb="http://img3m2.ddimg.cn/0/27/28473192-1_e_3.jpg"
      >
        <div slot="footer">
          <van-button size="mini" class="delbutton" @click="del(index)">取消收藏</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    };
  }
};
</script>

<style lang="scss" scoped>
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
</style>