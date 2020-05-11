<template>
  <div>
    <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)" />

    <h1 class="viodText">暂无优惠券</h1>

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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.viodText {
  font-size: 16px;
  line-height: 30px;
  height: 30px;
  width: 100px;
  margin: 50px auto;
}
a {
  width: 50%;
}
</style>