<template>
  <div>
    <!-- 头 搜索框 -->
    <van-sticky>
      <van-row>
        <van-col span="16">
          <span class="dd">
            当读 ·
            <span>为您发现好书</span>
          </span>
        </van-col>
        <van-col span="4">
          <van-icon class="xinjian" @click="goMydang" name="friends-o" />
        </van-col>
        <van-col span="4">
          <van-icon class="xinjian" @click="goSort" name="ellipsis" />
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 滑动 -->
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="书评">
        <router-link to="/myRead" tag="a">
          <div class="demo-preview">
            <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" />
            <div class="demo-content">
              <h3>乖，摸摸头</h3>
              <span>作者：大冰</span>
              <p>这些人的故事，有的是无畏的奋斗和孤身的寻找，有的是疯狂的爱恋和极致的浪漫，有的是你我不曾尝试却跃跃欲试的生活。</p>
            </div>
          </div>
        </router-link>
        <van-divider />
        <router-link to="/myRead" tag="a">
          <div class="demo-preview">
            <img src="http://img63.ddimg.cn/ddreader/dangebook/3ynew_500x500.jpg" />
            <div class="demo-content">
              <h3>三生三世枕上書</h3>
              <span>作者：唐七公子</span>
              <p>《枕上书》，哭哭笑笑，觉得这本书实在有趣，凤九的性情是我最喜欢的，可爱烂漫又担当、自由而不散漫。</p>
            </div>
          </div>
        </router-link>
      </van-tab>
      <van-tab title="书单">
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
      </van-tab>

      <van-tab title="睡前读物">
        <router-link to="/myRead" tag="a">
          <div class="demo-preview">
            <img src="http://img61.ddimg.cn/upload_img/00796/1/10.22-1575272532.png" />
            <div class="demo-content">
              <h3>历史的温度</h3>
              <span>作者: 张玮</span>
              <p>历史是万花筒，每个人看到的不同，每个角度看到的也不同。有的人看到了残酷，有的人看到了温情。有的人看到了杀戮，有的人看到了救赎。有的人看见了别人，有的人看见了自己。有的人假作真，有的人真作假。</p>
            </div>
          </div>
        </router-link>
        <van-divider />
        <router-link to="/myRead" tag="a">
          <div class="demo-preview">
            <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" />
            <div class="demo-content">
              <h3>乖，摸摸头</h3>
              <span>作者：大冰</span>
              <p>这些人的故事，有的是无畏的奋斗和孤身的寻找，有的是疯狂的爱恋和极致的浪漫，有的是你我不曾尝试却跃跃欲试的生活。</p>
            </div>
          </div>
        </router-link>
      </van-tab>
      <van-tab title="头脑武装">
        <router-link to="/myRead" tag="a">
          <div class="demo-preview">
            <img src="http://img61.ddimg.cn/upload_img/00796/1/10.22-1575272532.png" />
            <div class="demo-content">
              <h3>历史的温度</h3>
              <span>作者: 张玮</span>
              <p>历史是万花筒，每个人看到的不同，每个角度看到的也不同。有的人看到了残酷，有的人看到了温情。有的人看到了杀戮，有的人看到了救赎。有的人看见了别人，有的人看见了自己。有的人假作真，有的人真作假。</p>
            </div>
          </div>
        </router-link>
      </van-tab>
      <van-tab title="亲子攻略">
        <router-link to="/myRead" tag="a">
          <div class="demo-preview">
            <img src="http://img60.ddimg.cn/upload_img/00796/1/10.28-1575272475.png" />
            <div class="demo-content">
              <h3>怪杰佐罗力</h3>
              <span>作者：山寺宏一、水岛裕</span>
              <p>动物拟人化的世界观。主角是一只名为索罗利（第二季改名为佐罗力）的狐狸，目标是成为世界第一的恶作剧之王，梦想建造属于自己的城堡，以向在天国的妈妈－索罗力露证明自己的能力。</p>
            </div>
          </div>
        </router-link>
        <van-divider />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      loading: true
    };
  },
  methods: {
    goSort() {
      // 跳转路由
      this.$router.push("/sort");
    },
    goMydang() {
      // 跳转路由
      this.$router.push("/mydang");
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-preview {
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  p {
    margin-bottom: 10px;
  }
}
.dd {
  font-weight: bold;
  color: orangered;
  font-size: 18px;
  padding: 10px;
  display: block;
  & > span {
    color: black;
    font-size: 14px;
  }
}
.xinjian {
  font-size: 20px;
  padding: 15px;
  display: block;
}
.xinjian {
  font-size: 20px;
  padding: 15px;
  display: block;
}
.demo-preview p[data-v-3869a645] {
  margin: 10px 0;
}
.van-divider {
  margin: 0;
}
.demo-preview {
  display: flex;
  padding: 0 16px;
  img {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .demo-content {
    padding-top: 6px;
  }
  h3 {
    margin: 0;
    font-size: 18px;
    line-height: 20px;
  }
  p {
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 20px;
  }
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
</style>