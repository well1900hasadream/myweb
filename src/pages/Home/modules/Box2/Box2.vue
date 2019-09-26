<template>
  <div>
    <div class="img-box">
      <img src="@/public/images/home/pic3.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.img-box{
  max-width: 100%;
  max-height: 100%;
  // filter: blur(10px);
  >img{
    max-width: 100%;
    // width: 50%;
    // filter: grayscale(100%) saturate(0%) contrast(0%);
    // filter: black;
  }
}
</style>