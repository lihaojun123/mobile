<template>
  <div id="productDetail">
    <mt-header fixed title="详情" class="ui-head">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <mt-swipe :auto="40000">
        <mt-swipe-item>
          <img class="swiper-img" src="http://img.qfc.cn/upload/c11/product/d5/13/20180105117.jpg">
          <span class="icon-title">推荐</span>
          <span class="icon-hot">热卖</span>
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="swiper-img" src="http://img.qfc.cn/upload/c11/product/d5/13/20180105117.jpg">
          <span class="icon-title">推荐</span>
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="swiper-img" src="http://img.qfc.cn/upload/c11/product/d5/13/20180105117.jpg">
          <span class="icon-title">推荐</span>
        </mt-swipe-item>
      </mt-swipe>
      <div class="product-detail-wrap">
        <div class="detail-des">
          <p>sfsdfsdfffsdfsd</p>
        </div>
        <div class="product-detail">
          <p>咚咚咚，回复过后的是吧，发的和爱人还给他，阿虎发货单。</p>
          <img src="http://img.qfc.cn/upload/c11/product/4f/ca/20180105118.jpg" />
          <p>咚咚咚，回复过后的是吧，发的和爱人还给他，阿虎发货单。</p>
          <img src="http://img.qfc.cn/upload/c11/product/4f/ca/20180105118.jpg" />
          <p>咚咚咚，回复过后的是吧，发的和爱人还给他，阿虎发货单。</p>
          <img src="http://img.qfc.cn/upload/c11/product/4f/ca/20180105118.jpg" />
          <p>咚咚咚，回复过后的是吧，发的和爱人还给他，阿虎发货单。</p>
          <img src="http://img.qfc.cn/upload/c11/product/4f/ca/20180105118.jpg" />
        </div>
      </div>
      <div class="nav-bottom">
        <ul>
          <li>
            <span @click="collection">收藏</span>
          </li>
          <li>
            <span @click="telphone">打电话</span>
          </li>
          <li>
            <span @click="shopCart">加入购物车</span>
          </li>
          <li>
            <span @click="buy">购买</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Indicator } from "mint-ui";
export default {
  name: "productDetail",
  data() {
    return {};
  },
  methods: {
    collection() {
      let ssoSigin = sessionStorage.getItem("ssosign");
      let _this = this;
      //判断登录状态
      if (ssoSigin) {
        Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });
        //收藏业务逻辑
      } else {
        //跳转登录
        _this.$router.push({
          path: "/login",
          query: {
            redirect: "/detail?id=" + _this.$route.query.id
          }
        });
      }
    },
    telphone() {},
    shopCart() {},
    buy() {}
  },
  mounted() {
    var _this = this;
    var productId = this.$route.query.id;
    if (productId) {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      //接口请求
      _this.$service.productDetail
        .getDetail(productId)
        .then(res => {
          //执行成功
          console.log(res);
          Indicator.close();
        })
        .catch(error => {
          //执行失败
          Indicator.close();
        });
    } else {
    }
  }
};
</script>
<style scope>
.mint-swipe {
  width: 100%;
  height: 323px;
}
.icon-title {
  position: absolute;
  bottom: 0;
  color: #fff;
  left: 10px;
  background: red;
}
.icon-hot {
  position: absolute;
  bottom: 0;
  color: #fff;
  left: 56px;
  background: red;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.product-detail,
.product-detail img {
  width: 100%;
}
.nav-bottom {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 50px;
  background: #fff;
  border-top: 1px solid #d2d2d2;
}
.nav-bottom ul li {
  float: left;
  width: 24%;
  border-right: 1px solid #d2d2d2;
  line-height: 50px;
  text-align: center;
}
.nav-bottom ul li:last-child {
  border-right: none;
}
</style>
