<template>
  <div id="index">
    <header>
      <el-row :gutter="0">
        <el-col :xs="8" :sm="8" :md="8" :lg="6" :xl="2">
          <div class="grid-content bg-purple">
            灌灌灌灌
          </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple-light">
            嗯嗯嗯
          </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple">
            <div class="">

            </div>
            <div class="">
              <div class="">
                <img src="" alt="">
              </div>
              <div class="">
                 退出
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </header>
    <div class="">

    </div>
    <footer>

    </footer>



  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'

  export default {
    name: 'index',
    data(){
      return {

      }
    },
    components: {},
    methods: {

    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../base/less/base";
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }






</style>
