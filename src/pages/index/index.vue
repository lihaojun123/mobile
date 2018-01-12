<template>
    <div id="index">
        <mt-header fixed title="首页" class="ui-head">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="container clearfix">
            <ul class="index-list">
                <li v-for="item in list">
                    <router-link :to="{path:'/detail',query:{id:item.productId}}"><img :src="item.image"></router-link>
                    <div class="img-wrap clearfix">
                        <p class="title">{{item.productCode}}</p>
                        <p class="des">{{item.productName}}</p>
                        <p class="edit">
                            <span @click="openPopup" :data-id="item.productId"></span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <mt-actionsheet :actions="actions" v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>
<script>
import { MessageBox, Toast, Indicator, Actionsheet } from "mint-ui";
//Vue.component(Actionsheet.name, Actionsheet);
export default {
  name: "index",
  data() {
    return {
      sheetVisible: false,
      actions: [],
      list: [],
      id: ""
    };
  },
  methods: {
    openPopup(e) {
      let _this = this;
      let id = e.target.dataset.id;
      _this.id = id;
      _this.sheetVisible = true;
    },
    edit() {
      let _this = this;
      let id = _this.id;
      console.log(id);
    },
    delete() {
      let _this = this;
      let id = _this.id;
      MessageBox.confirm("确定删除该产品吗?")
        .then(action => {
          _this.$service.homePage
            .delProduct(id)
            .then(response => {
              let data = response.data;
              if (data.success) {
                Toast({
                  message: response.data.message || "删除成功",
                  iconClass: "icon icon-success"
                });
                _this.$router.go(0);//刷新当前页面
              } else {
                Toast({
                  message: response.data.message || "删除失败",
                  iconClass: "icon icon-error"
                });
              }
            })
            .catch(error => {
              Toast({
                message: "服务器响应失败！",
                iconClass: "icon icon-fail"
              });
            });
        })
        .catch(a => {
          //用户点击取消了
        });
    }
  },
  mounted() {
    let _this = this;

    _this.actions = [
      {
        name: "编辑",
        method: _this.edit
      },
      {
        name: "删除",
        method: _this.delete
      }
    ];
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    _this.$service.homePage
      .getIndex()
      .then(response => {
        //执行成功返回的数据
        Indicator.close();
        _this.list = response.data;
      })
      .catch(error => {
        //执行失败返回的数据
        Indicator.close();
        Toast({
          message: "服务器响应失败！",
          iconClass: "icon icon-fail"
        });
      });
  }
};
</script>
<style scope>
.container {
  padding: 10px 0 0 0;
}
.index-list {
  width: 100%;
}
.index-list li {
  width: 49%;
  float: left;
  margin-bottom: 10px;
}
.index-list li:nth-child(2n) {
  float: right;
}
.index-list li img {
  width: 100%;
}
.img-wrap {
  padding: 6.5px;
  background: #fff;
}
.index-list li p {
  color: #333;
}
.index-list li p.title {
  font-size: 18px;
}
.edit span {
  float: right;
  width: 33px;
  height: 12px;
  background: url(../../assets/images/edit.png) no-repeat center center;
  background-size: 33px 12px;
}
</style>
