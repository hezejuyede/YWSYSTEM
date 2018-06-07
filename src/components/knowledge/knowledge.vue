<template>
  <div id="knowledge">
    <HeaderVew></HeaderVew>
    <div class="clearfix center" ref="center">
      <Left :isLeft="isLeft"></Left>
      <div v-bind:class="{'right  rightMoveR':isRight,'right  rightMoveL':'!isRight'}" ref="right">
        <i @click="changeLeftRight"
           v-bind:class="{ 'iconfont icon-liebiao-copy': isLeft,'iconfont icon-liebiao':'!isLeft'}"></i>
        <div class="right-div">
          <div class="right-div-template">
            <i class="iconfont icon-ziyuanguanlixitong"></i>
            <span>报表管理</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-shujufabuxitong"></i>
            <span>WEB发布</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-acquisitionModality"></i>
            <span>数据采集接口</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-icon-test"></i>
            <span>串口数据传输</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-dianliangtongji"></i>
            <span>电量采集接口</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-xingzhuang"></i>
            <span>大屏数据传输</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-kaohe"></i>
            <span>绩效考核系统</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-kaifa"></i>
            <span>数据安全传输</span>
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
  import Left from "../../common/left/left";

  export default {
    name: 'knowledge',
    data() {
      return {
        isCollapse: true,
        isLeft: false,
        isRight: false
      }
    },
    components: {Left, HeaderVew, FooterVew},
    mounted() {
      this._getHeight()
    },
    created() {

    },
    methods: {
      _getHeight() {
        let h = document.body.clientHeight;
        const C = this.$refs.center;
        const R = this.$refs.right;
        C.style.height = (h - 90) + "px";
        R.style.height = (h - 90) + "px";
      },
      changeLeftRight() {
        if (this.isLeft === true) {
          this.isLeft = false;
          this.isRight = false;
        }
        else if (this.isLeft === false) {
          this.isLeft = true;
          this.isRight = true;
        }
      }


    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../base/less/base";

  .center {
    .right {
      width: 100%;
      background-color: @color-F0;
      position: relative;
      .icon-liebiao {
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
      .right-div {
        position: absolute;
        top: 20px;
        left: 40px;
        width: 85%;
        height: 95%;
        .right-div-template {
          float: left;
          margin-left: 3%;
          margin-bottom: 50px;
          width: 22%;
          height: 200px;
          background-color: @color-white;
          display: flex;
          align-items: center;
          cursor: pointer;
          justify-content: center;
          flex-direction: column;
          span {
            margin-top: 10px;
            color: @color-dialog-background;
            font-size: 16px;
          }
          .icon-ziyuanguanlixitong {
            font-size: 34px;
            color: #3EC455;

          }
          .icon-shujufabuxitong {
            font-size: 34px;
            color: #ffcd32;
          }
          .icon-acquisitionModality {
            font-size: 34px;
            color: darkturquoise;
          }
          .icon-dianliangtongji {
            font-size: 34px;
            color: purple;
          }
          .icon-xingzhuang {
            font-size: 34px;
            color: lightpink;
          }
          .icon-kaifa {
            font-size: 34px;
            color: fuchsia;
          }
          .icon-icon-test {
            font-size: 34px;
            color: peachpuff;
          }
          .icon-kaohe {
            font-size: 34px;
            color: firebrick;
          }

        }

      }
    }
  }

  .rightMoveL {
    position: relative;
    left: 200px;
    transition: all 2s;
  }

  .rightMoveR {
    position: relative;
    left: 0;
    transition: all 2s;
  }

  @media only screen and (max-width: 520px) {
    #knowledge {
      .right-div-template {
        width: 95%;
        height: 53px;
        margin-bottom: 3px;
        span {
          margin-bottom: 0;
          font-size: 12px;
          margin-top: 1px;
        }

      }
    }
  }
</style>
