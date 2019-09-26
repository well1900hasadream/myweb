<template>
  <div class="side-bar">
    <el-drawer
      title="TITLE"
      class="left-side-drawer"
      :visible.sync="showDrawer"
      :direction="drawerDirection"
      :modal="false"
    >
      <div class="side-content">
        我来啦!
      </div>
    </el-drawer>
    <div :class="shaking ? 'side-bar-trigger side-bar-trigger-shaking' : 'side-bar-trigger side-bar-trigger-shakingback'"
      @click="handleClick"
      @mouseenter="showTrigger"
      @mouseleave="fadeTrigger">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDrawer: false,
      drawerDirection: 'ltr',
      shaking: false,
      showTimer: '',
      fadeTimer: ''
    }
  },
  methods: {
    handleClick () {
      this.showDrawer = true
    },
    showTrigger () {
      let that = this
      this.shaking = true
      // clearTimeout(this.fadeTimer)
      // this.showTimer = setTimeout(() => {
      //   that.$store.commit('showMask')
      // }, 500)
      that.$store.commit('showMask')
    },
    fadeTrigger () {
      let that = this
      this.shaking = false
      // clearTimeout(this.showTimer)
      // this.fadeTimer = setTimeout(() => {
      //   that.$store.commit('hideMask')
      // }, 500)
      that.$store.commit('hideMask')
    }
  }
}
</script>

<style lang="scss" scoped>
.left-side-drawer{
  z-index: 99999 !important;
  left: 0;
  top: 50%;
  transform: translate(0,-50%);
  width: 100%;
  height: 95%;
  border-radius: 10%;
}
.side-bar-trigger{
  position: fixed;
  z-index: 9999;
  width: 60px;
  height: 30%;
  top: 50%;
  left: -50px;
  transform: translate(0,-50%);
  box-shadow: 0 0 10px grey;
  background: white;
  border-radius: 0% 60% 60% 0%;
}
.side-bar-trigger-shaking{
  animation: shaking1900 .5s;
  height: 105%;
  left: -30px;
}
.side-bar-trigger-shakingback{
  animation: shakingBack1900 .5s;
  height: 30%;
  left: -50px;
}
.side-content{
  padding: 20px 20px 0;
}

@keyframes shaking1900 {
  0% {
    left: -50px;
    height: 30%
  }
  100% {
    left: -30px;
    height: 105%
  }
}

@keyframes shakingBack1900 {
  0% {
    left: -30px;
    height: 105%
  }
  100% {
    left: -50px;
    height: 30%
  }
}
</style>
