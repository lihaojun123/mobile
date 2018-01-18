module.exports = function () {
    var faker = require("faker");
    faker.locale = "zh_CN";
    var _ = require("lodash");
    return {
      "login.loginIn":function(){
          return{
              success:true,
              data:{
                ssoSign:'sdfasfdfdf'
              },
              message:'登录成功'
          }
      }()  
    }
  }



