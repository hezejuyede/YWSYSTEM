<template>
  <div id="left">
      <div v-bind:class="{'left fl leftMoveR':isLeft,'left fl leftMoveL':'!isLeft'}" ref="left">
        <router-link to="/" >
          <i class="iconfont icon-zhuye1"
             style="color: #ffcd32"></i>
          <span>编辑主页</span>
        </router-link>
        <router-link  to="/AboutUs">
          <i class="iconfont icon-guanyuwomen"
             style="color:yellow"></i>
          <span>关于我们</span>
        </router-link>
        <router-link  to="/knowledge">
          <i class="iconfont icon-zhishichanquan"
             style="color: peachpuff"></i>
          <span>知识产权</span>
        </router-link>
        <router-link  to="/SuccessCase">
          <i class="iconfont icon-chenggonganli"
             style="color: darkorange"></i>
          <span>成功案例</span>
        </router-link>
        <router-link  to="/business">
          <i class="iconfont icon-yewu"
             style="color: fuchsia"></i>
          <span>业务范畴</span>
        </router-link>
        <router-link to="/JoinUs">
          <i class="iconfont icon-zhaopin"
             style="color: #F5F1E8"></i>
          <span>加入我们</span>
        </router-link>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'left',
    data(){
      return {}
    },
    components: {},
    mounted(){
      this._getHeight()
    },
    created(){

    },
    methods: {
      _getHeight(){
        let h =document.body.clientHeight;
        const L = this.$refs.left;
        L.style.height= (h-90)+"px";
      }
    },
    props: ['isLeft']
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../base/less/base";
  .left{
    background-color: #4682B4;
    width: 200px;
    a{
      display: block;
      height: 50px;
      line-height: 50px;
      text-align: center;
      span{
        margin-left: 5px;
      }
    }
    a:hover{
      background-color: @color-background-d;
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

</style>
