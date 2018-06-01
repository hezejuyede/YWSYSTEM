<template>
    <header id="Header">
      <div class="header-right fl">
        <div class="header-right-logo fl">
          <img src="../../base/img/LOGO.png" alt="">
        </div>
        <div class="header-right-title fl">
          英伟后台管理系统
        </div>
      </div>
      <div class="header-left fr">
        <div class="userLogin-outLogin fr">
          <p class="" @click="outLogin">退出</p>
        </div>
        <div class="userLogin-name fr">
          <p class="">{{username}}</p>
        </div>
        <div class="userLogin-img fr">
          <img src="../../base/img/avatar.jpg" alt="">
        </div>
      </div>
    </header>
</template>
<script type="text/ecmascript-6">


  export default {
    name: 'Header',
    data(){
      return {
        username:'hhahah'

      }
    },
    components: {},
    methods: {
      outLogin(){
        alert("hahah")
      }

    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../base/less/base";

  header {
    height: 60px;
    background: url("../../base/img/1.jpg");
    background-size: 100%;
    .header-right{
      width: 58%;
      height: 60px;
      line-height: 60px;
      padding-left: 2%;
      .header-right-logo{
        img{
          width: 50px;
          height: 50px;
          margin-top: 5px;
        }
      }
      .header-right-title{
        font-size: 16px;
        color: @color-white;
      }
    }
    .header-left {
      width: 42%;
      height: 60px;
      line-height: 60px;
      .userLogin-img {
        margin-right: 2%;
        img {
          width: 40px;
          height: 40px;
          margin-top: 10px;
          border-radius: 50%;
        }
      }
      .userLogin-name {
        margin-right: 2%;
        color: @color-white;
      }
      .userLogin-outLogin {
        margin-right: 5%;
        color: @color-white;
      }
    }

  }





</style>
