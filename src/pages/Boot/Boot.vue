<template>
  <div class="main-wrap">
    <div
    @click="handleClick()"
    @mouseover="handleMouseover"
    @mouseout="handleMouseout"
    :style="bootStyle"
    :class="bootFade ? 'entry entry-fade' : 'entry'">CLICK TO START</div>
    <div :class="bootFade ? 'bg-box bg-box-fade' : 'bg-box'"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bgOpcity: 0,
        entryClickable: false,
        bootStyle: {
          fontSize: '48px'
        },
        bootFade: false
      }
    },
    created () {
      addEventListener('animationend', this.alterBootClickable)
    },
    beforeDestroy () {
      removeEventListener('animationend', this.alterBootClickable)
    },
    methods: {
      handleClick () {
        let that = this
        if (this.entryClickable) {
          this.bootFade = true
          setTimeout (function () {
            that.$store.commit('changeBootState')
          }, 1200)
        }
      },
      handleMouseover () {
        if (this.entryClickable) {
          this.bootStyle = {
            fontSize: '62px',
            transition: "1s"
          }
        }
      },
      handleMouseout () {
        this.bootStyle = {
          fontSize: '48px',
          transition: "1s"
        }
      },
      alterBootClickable () {
        this.entryClickable = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-wrap{
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .bg-box{
    animation: bgbox1900 3s;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .8;
    z-index: -99;
  }
  .bg-box-fade{
    animation: bgboxFade1900 1.5s;
  }
  .entry{
    animation: boot1900 3s;
    width: 500px;
    height: 140px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99999;
    transform: translate(-50%, -50%);
    line-height: 140px;
    font-size: 48px;
    color: #fff;
    user-select: none;
    text-shadow: 4px 2px gray;
  }
  .entry-fade{
    animation: bootExit1900 1.5s;
  }
  @keyframes boot1900{
    0% {opacity: 0; font-size: 20px; color: #000;}
    50% {opacity: .8; font-size: 36px;}
    100% {opacity: 1; font-size: 48px; color: #fff;}
  }
  @keyframes bootExit1900{
    0% {opacity: 1;}
    100% {opacity: 0;}
  }
  @keyframes bgbox1900{
    0% {opacity: 0;}
    100% {opacity: .8;}
  }
  @keyframes bgboxFade1900{
    0% {opacity: .8}
    100% {opacity: 0;}
  }
</style>