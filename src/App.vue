<template>
  <div id="app">
    <CanvasNest />
    <router-view v-show="!showBoot" class="main-viewport"/>
    <Boot class="boot" v-show="showBoot" />
    <MaskLayer></MaskLayer>
  </div>
</template>

<script>
import Boot from './pages/Boot/Boot'
import CanvasNest from './pages/CanvasNest/CanvasNest'
import MaskLayer from './pages/MaskLayer/MaskLayer'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    showBoot () {
      return this.$store.state.bootState
    }
  },
  components: {
    CanvasNest,
    Boot,
    MaskLayer
  }
}
</script>

<style>
#app{
  position: relative;
  width: 100%;
  height: 100%;
}
.main-viewport{
  position: absolute;
  top: 0;
  left: 0;
}
.boot{
  position: absolute;
  top: 0;
  left: 0;
}
.el-menu{
  z-index: 1;
}
</style>
