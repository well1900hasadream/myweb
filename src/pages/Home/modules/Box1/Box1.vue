<template>
  <div class="wrap">
    <div class="img-box-1 img-box"
    @mouseenter="handleMouseOver()"
    @mouseleave="handleMouseOut()"
    @click="handleClick()"
    :style="getScale">
      <img src="@/public/images/home/pic1.png" alt="oops">
    </div>
    <div class="img-box-2 img-box spin-animation">
      <img src="@/public/images/home/pic-sci-fi-1.png" alt="oops">
    </div>
  </div>
</template>

<script>
// import { setInterval } from 'timers'
  export default {
    data () {
      return {
        click: 'clickTriggered',
        // mouseOver: '',
        zoomable: true, // 是否可以进行放大的标识,用于防止多次触发zoomTheOutside()
        zoomStop: false, // 是否中断放大的标识
        currentZoomLevel: 0.8
      }
    },
    computed: {
      getScale () {
        let scale = this.currentZoomLevel
        return `transform:scale(${scale})`
      }
    },
    methods: {
      handleMouseOver () { // 内圈颜色出现，并放大，记录现在的缩放比例
        // this.mouseOver = 'mouseOverTriggered' // 这是利用动画实现过程，但由于无法监听进程所以换了方案
        // this.zoomable = true
        if (this.zoomable) {
          this.zoomTheOutside()
        }
      },
      handleMouseOut () {
        // this.currentZoomLevel = 0.8
        this.zoomStop = true
        console.log('out');
        
      },
      handleClick () {
        
      },
      /** 1.每隔10ms,zoomLevel增加0.02,以达到0.5s增加0.2的效果
       *  2.当鼠标移出范围，停止放大并记录当前放大系数
      */
      zoomTheOutside () {
        this.zoomable = false
        let zoomLevel = this.currentZoomLevel
        let time = 0
        var zoomTimer = setInterval (() => {
          if (!this.zoomStop && zoomLevel < 1) {
            zoomLevel += 0.005
            time += 10
            // this.currentZoomLevel = Number(zoomLevel.toFixed(2)) // toFixed是string
          } else {
            this.currentZoomLevel = Number(zoomLevel.toFixed(3)) // toFixed是string
            console.log('zl:',this.currentZoomLevel)
            console.log(time);
            this.zoomable = true
            clearInterval(zoomTimer)
          }
          this.currentZoomLevel = Number(zoomLevel.toFixed(3)) // toFixed是string
        }, 5)
        this.zoomStop = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  position: relative;
}
.img-box{
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // filter: blur(10px);
  user-select: none;
  >img{
    width: 100%;
    // width: 80%;
    // filter: grayscale(100%) saturate(0%) contrast(0%);
    // filter: black;
  }
}
.img-box-1{
  z-index: 2;
  filter: grayscale(50%) saturate(100%) contrast(100%);
  width: 50%;
  transform: scale(0.8);
  // transition: .150;
}
.img-box-2{
  z-index: 1;
}
.spin-animation{
  animation: spinning1900 20s infinite linear;
}
.mouseOverTriggered{
  animation: mouseOverTriggered 1.5s;
}

@keyframes spinning1900{ // 外圈的滚动动画
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
// 动画实现方案，暂时废弃
// @keyframes mouseOverTriggered{
//   0% {
//       filter: grayscale(100%) saturate(0%) contrast(0%);
//       transform: scale(0.8);
//     }
//   100% {
//       filter: grayscale(50%) saturate(100%) contrast(100%);
//       transform: scale(1.0);
//     }
// }
</style>