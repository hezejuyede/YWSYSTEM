<template>
  <div id="index">
    <HeaderVew></HeaderVew>
    <div class="clearfix center" ref="center">
      <div v-bind:class="{'left fl leftMoveR':isLeft,'left fl leftMoveL':'!isLeft'}" ref="left">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#4682B4"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-zhuye1"
                 style="margin: 20px;color: #ffcd32"></i>
              <span>编辑主页</span>
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-leimupinleifenleileibie"
                 style="margin: 20px;color: #3EC455"></i>
              <span>编辑导航</span>
            </template>
          </el-submenu>
        </el-menu>
      </div>
      <div  v-bind:class="{'right  rightMoveR':isRight,'right  rightMoveL':'!isRight'}" ref="right">
          <i @click="changeLeftRight" v-bind:class="{ 'iconfont icon-liebiao-copy': isLeft,'iconfont icon-liebiao':'!isLeft'}"></i>
        <div class="right-div">
         <div class="right-div-template">
           <i class="iconfont "></i>
           <span>轮播图</span>
         </div>
        </div>



      </div>
    </div>
   <FooterVew></FooterVew>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import HeaderVew from '../../common/header/header'
  import FooterVew from '../../common/footer/footer'
  export default {
    name: 'index',
    data(){
      return {
        isCollapse: true,
        isLeft:false,
        isRight:false
      }
    },
    components: { HeaderVew,FooterVew},
    mounted(){
      this._getHeight()
    },
    created(){

    },
    methods: {
      _getHeight(){
        let h =document.body.clientHeight;
        const C = this.$refs.center;
        const L = this.$refs.left;
        const R = this.$refs.right;
        C.style.height= (h-90)+"px";
        L.style.height= (h-90)+"px";
        R.style.height= (h-90)+"px";
      },
      changeLeftRight(){
        if(this.isLeft === true){
          this.isLeft = false;
          this.isRight=false
        }
        else if(this.isLeft === false){
          this.isLeft = true
          this.isRight = true
        }
      }

    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../base/less/base";
  .center{
    .left{
     background-color: #4682B4;
      width: 200px;
    }
    .right{
      width:100%;
      background-color:@color-F0;
      position: relative;
      .icon-liebiao{
        position: absolute;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 10px;
        top: 10px;
        color: #ffffff;
        background-color: #3EC455;
        border-radius: 50%;
        font-size: 16px;

      }
      .right-div{
        position: absolute;
        top: 20px;
        left: 40px;
        width: 85%;
        height: 95%;
        background-color: #d93f30;
      }



    }
  }
  .leftMoveL{
    position: relative;
    left: 0;
    transition:  all 2s;
  }
  .leftMoveR{
    position: relative;
    left: -200px;
    transition:  all 2s;
  }
  .rightMoveL{
    position: relative;
    left: 200px;
    transition:  all 2s;
  }
  .rightMoveR{
    position: relative;
    left: 0;
    transition:  all 2s;
  }





</style>
