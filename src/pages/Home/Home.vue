<template>
  <div class="home">
    <div class="left-area">
      <Box1></Box1>
    </div>
    <div class="right-area">
      <div>
        <Box2></Box2>
      </div>
      <div>
        <Box3></Box3>
      </div>
    </div>
  </div>
</template>

<script>
import Box1 from './modules/Box1/Box1'
import Box2 from './modules/Box2/Box2'
import Box3 from './modules/Box3/Box3'
export default {
  components: {
    Box1,
    Box2,
    Box3
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  width: 100%;
  height: 100%;
  .left-area{
    width: 70%;
    height: 100%;
    margin-right: 30px;
  }
  .right-area{
    width: 30%;
    height: 100%;
  }
}
</style>
