<template>
    <div>
        <mt-header fixed title="登录" class="ui-head">
        </mt-header>
        <div class="container">
            <div class="login-wrap">
                <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" v-model="password" type="password"></mt-field>
                <mt-button type="primary" size="large" class="login" @click="login">登录</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast, Indicator} from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let _this = this;
      let username = _this.username,
        password = _this.password;
        if(!username){
          Toast('用户名为空');
          return false;
        }
        if(!password){
          Toast('密码为空');
          return false;
        }
        
      _this.$service.login
        .login()
        .then(response => {
          //执行成功返回的数据
          Indicator.close();
          let ssosign=response.data.data.ssoSign;
          if(ssosign){
             sessionStorage.setItem("ssosign", ssosign);
             _this.$router.push(_this.$route.query.redirect);
          }
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
  },
  mounted() {}
};
</script>
<style scope>
.login {
  width: 90%;
  margin: 10px auto;
}
</style>
