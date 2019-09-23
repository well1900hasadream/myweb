<template>
  <div id="canvas-nest" :style="{ height: screenHeight + 'px'}" @click.native="console.log(this)">
  </div>
</template>

<script>
import CanvasNest from 'canvas-nest.js'
export default {
  data () {
    return {
      screenHeight: document.documentElement.clientHeight || document.body.clientHeight
    }
  },
  mounted () {
    this.initCanvasNest()
    this.getHeightByResize()
  },
  methods: {
    initCanvasNest () {
      const config = {
        color: '0,0,0',
        count: 120,
        opcity: 0.8
      }
      const cavasNest = new CanvasNest(document.getElementById('canvas-nest'), config)
    },
    getHeightByResize () {
      const that = this
      window.onresize = () => {
        return (
          () => {
            // window.screenHeight = document.body.clientHeight
            // that.screenHeight = window.screenHeight
            that.screenHeight = document.documentElement.clientHeight || document.body.clientHeight
          }
        )()
      }
    }
  },
  watch: {
    screenHeight (val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      // console.log(11111)
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          // 打印screenWidth变化的值
          console.log(that.screenHeight)
          that.timer = false
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#canvas-nest{
  width: 100%;
  // z-index: -999999;
  pointer-events: none !important;
  // background-color: gray;
  // min-height: 200px;
}
</style>
