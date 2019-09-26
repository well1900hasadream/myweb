<template>
  <div id="app">
    <Layout v-show="!showBoot" class="layout"/>
    <!-- 以下并非主要布局 -->
    <CanvasNest />
    <Boot class="boot" v-show="showBoot" />
    <MaskLayer></MaskLayer>
  </div>
</template>

<script>
import Layout from './pages/Layout/Layout'

import Boot from '@/pages/Boot/Boot' // 启动时的页面
import CanvasNest from '@/pages/CanvasNest/CanvasNest' // 背景
import MaskLayer from '@/pages/MaskLayer/MaskLayer' // 遮罩层

export default {
  name: 'app',
  computed: {
    showBoot () {
      return this.$store.state.bootState
    }
  },
  components: {
    CanvasNest,
    Boot,
    MaskLayer,
    Layout
  }
}
</script>

<style>
#app{
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.boot{
  position: absolute;
  top: 0;
  left: 0;
}
.layout{
  box-sizing: border-box;
}
</style>
