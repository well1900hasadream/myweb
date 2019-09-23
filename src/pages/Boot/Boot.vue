<template>
  <div class="main-wrap">
    <div class="entry" @click="handleMouseOver()">Boot</div>
    <div class="bg-box"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bgOpcity: 0
      }
    },
    created () {
      console.log(this.$store.state);
    },
    methods: {
      handleMouseOver () {
        this.$store.commit('changeBootState')
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
  .entry{
    animation: boot1900 3s;
    width: 600px;
    height: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99999;
    transform: translate(-50%, -50%);
    line-height: 280px;
    font-size: 48px;
    color: #fff;
    user-select: none;
  }

  @keyframes boot1900{
    0% {opacity: 0; font-size: 20px; color: #000;}
    50% {opacity: .8; font-size: 36px;}
    100% {opacity: 1; font-size: 48px; color: #fff;}
  }

  @keyframes bgbox1900{
    0% {opacity: 0;}
    100% {opacity: .8;}
  }
</style>