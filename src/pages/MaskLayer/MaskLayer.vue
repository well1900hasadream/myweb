<template>
  <div class="container"
  v-if="showMask">
    <div class="mask-layer">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showMask () {
      return this.$store.state.showingMaskLayer
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    position: fixed;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
    z-index: 2;
    width: 80%;
    height: 100%;
    overflow: hidden;
    .mask-layer{
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0 -50%);
      background-image: radial-gradient(ellipse farthest-corner at -40% 50%, #fff 0%,#fff 65%, #000 70%,#000 85%,#000 87%, #000 95%);
      background-position: left center;
      border-radius: 100%;
      background-clip: padding-box;
      animation-delay: 0.6s;
      opacity: .7;
      animation: spread1900 2s ease-out;
    }
    .mask-show{
      width: 150vw;
      height: 120vw;
      margin-left: -120vw;
      margin-top: -60vw;
    }
    .mask-fade{
      width: 0vw;
      height: 0vw;
      margin-left: 0vw;
      margin-top: 0vw;
    }
  }

  @keyframes spread1900{
    0% {
      width: 0vw;
      height: 0vw;
      margin-left: 0vw;
      margin-top: 0vw;
    }

    100% {
      width: 150vw;
      height: 120vw;
      margin-left: -120vw;
      margin-top: -60vw;
    }
  }
</style>
