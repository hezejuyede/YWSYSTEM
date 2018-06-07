<template>
  <div id="index">
    <HeaderVew></HeaderVew>
    <div class="clearfix center" ref="center">
      <Left :isLeft="isLeft"></Left>
      <div v-bind:class="{'right  rightMoveR':isRight,'right  rightMoveL':'!isRight'}" ref="right">
        <i @click="changeLeftRight"
           v-bind:class="{ 'iconfont icon-liebiao-copy': isLeft,'iconfont icon-liebiao':'!isLeft'}"></i>
        <div class="right-div">
          <div class="right-div-template">
            <i class="iconfont icon-drxx70"></i>
            <span>轮播图</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-yewu"></i>
            <span>我们的业务</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-gongsi"></i>
            <span>我们的公司</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-hezuo"></i>
            <span>他们选择了我们</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-hezuoshangicon"></i>
            <span>硬件合作商</span>
          </div>
          <div class="right-div-template">
            <i class="iconfont icon-kaifa"></i>
            <span>研发软件</span>
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
    name: 'index',
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
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
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
          width: 30%;
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
          .icon-drxx70 {
            font-size: 40px;
            color: #3EC455;

          }
          .icon-yewu {
            font-size: 40px;
            color: #ffcd32;
          }
          .icon-gongsi {
            font-size: 40px;
            color: darkturquoise;
          }
          .icon-hezuo {
            font-size: 40px;
            color: purple;
          }
          .icon-hezuoshangicon {
            font-size: 40px;
            color: lightpink;
          }
          .icon-kaifa {
            font-size: 40px;
            color: fuchsia;
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

  @media only screen and (max-width: 500px) {
    #index {
      .right-div-template {
        width: 95%;
        height: 70px;
        margin-bottom: 3px;
        span {
          margin-bottom: 0;
          font-size: 12px;
        }

      }
    }
  }


</style>
