<template>
  <div class="main-viewport">
    <el-container class="el-container">
      <el-header height="60px">
        <MyHeader></MyHeader>
      </el-header>
      <el-container>
        <el-aside width="50px">
          <SideBar></SideBar>
        </el-aside>
        <el-main :style="{ height: getScreenHeight - 60 + 'px'}">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'

export default {
  data () {
    return {
      // mainStyle: {
      //   height: 
      // }
    }
  },
  computed: {
    showBoot () {
      return this.$store.state.bootState
    },
    getScreenHeight () {
      console.log(this.$store.state.currentScreenHeight);
      return this.$store.state.currentScreenHeight
    }
  },
  components: {
    MyHeader,
    SideBar
  }
}
</script>

<style lang="scss" scoped>
.main-viewport{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.boot{
  position: absolute;
  top: 0;
  left: 0;
}
.el-menu{
  z-index: 1;
}
.el-main{
  position: relative;
}

// transition动画
.fade-enter-active, .fade-leave-active {
  transition: opacity .35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
