<template>
  <div id="SuccessCase">
    <HeaderVew></HeaderVew>
    <div class="clearfix center" ref="center">
      <Left :isLeft="isLeft"></Left>
      <div v-bind:class="{'right  rightMoveR':isRight,'right  rightMoveL':'!isRight'}" ref="right">
        <i @click="changeLeftRight"
           v-bind:class="{ 'iconfont icon-liebiao-copy': isLeft,'iconfont icon-liebiao':'!isLeft'}"></i>
        <div class="right-div">
          <div class="right-div-template">
            <i class="iconfont icon-ningxia"></i>
            <span>华电宁夏灵武</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-qinghaisheng"></i>
            <span>华电青海西宁</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-shandong"></i>
            <span>华电山东潍坊</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-sichuan"></i>
            <span>华电四川广安</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-fujian"></i>
            <span>福建湄洲湾</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-anhui"></i>
            <span>华电安徽宿州</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-zhangzhou"></i>
            <span>福建漳州后石</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-guangdong"></i>
            <span>珠海醋酸纤维</span>
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
    name: 'SuccessCase',
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
          .icon-ningxia {
            font-size: 34px;
            color: #3EC455;

          }
          .icon-qinghaisheng {
            font-size: 34px;
            color: #ffcd32;
          }
          .icon-shandong {
            font-size: 34px;
            color: darkturquoise;
          }
          .icon-fujian {
            font-size: 34px;
            color: purple;
          }
          .icon-guangdong {
            font-size: 34px;
            color: lightpink;
          }
          .icon-zhangzhou {
            font-size: 34px;
            color: fuchsia;
          }
          .icon-anhui {
            font-size: 34px;
            color: peachpuff;
          }
          .icon-sichuan {
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
    #SuccessCase {
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
