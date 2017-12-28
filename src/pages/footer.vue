<template>
    <div id="footer">
         <ul>
             <li  v-for="item in list">
                 <router-link :to="item.to">
                     <span class="icon" :class="item.icon"></span>
                      <p>{{item.value}}</p>
                 </router-link>  
             </li>
         </ul>
    </div>
</template>
<script>
export default {
  name: "footer",
  data() {
    return {
      list: [
        {
          id: "index",
          value: "首页",
          to:'/index',
          icon:'icon-home'
        },
        {
           id: "info",
           value: "列表", 
           to:'/info',
           icon:'icon-info'
        },
        {
          id: "mine",
          value: "我的",
          to:'/mine',
          icon:'icon-mine'
        }
      ]
    };
  }
};
</script>
<style scope>
   #footer{
       width:100%;
       position: fixed;
       bottom:0;
       background:#ba0043;
       height:45px;
       padding:5px 0;
   }
  #footer ul li{
      text-align: center;
      float: left;
      width:33%;
  }
  ul li .icon{
      width:27px;
      height:23px;
      display: inline-block;
  } 
  ul li .icon-home{
      background:url(../../src/assets/images/tarbar_03.png) no-repeat center center;
      background-size:27px 23px;
  }
  ul li .icon-info{
      background:url(../../src/assets/images/tarbar_05.png) no-repeat center center;
      background-size:27px 23px;
  }
  ul li .icon-mine{
      background:url(../../src/assets/images/tarbar_07.png) no-repeat center center;
      background-size:27px 23px;
  }
  ul li p{
        color:#fff;
   }
  ul li .router-link-active .icon-home{
      background:url(../../src/assets/images/tarbar_03_active.png) no-repeat center center;
      background-size:27px 23px;
  }
  ul li .router-link-active .icon-info{
      background:url(../../src/assets/images/tarbar_05_active.png) no-repeat center center;
      background-size:27px 23px;
  }
  ul li .router-link-active .icon-mine{
      background:url(../../src/assets/images/tarbar_07_active.png) no-repeat center center;
      background-size:27px 23px;
  }
   ul li .router-link-active p{
        color:#ffff61;
   }
</style>

