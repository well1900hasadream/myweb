<template>
  <div class="header">
    <el-menu :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect">
      <el-menu-item index="1" @click="routerGo('/home')">首页</el-menu-item>
      <el-menu-item index="2" @click="routerGo('/notes')">文章</el-menu-item>
      <el-menu-item index="3">转载</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) { // 点击导航的事件句柄
      // console.log(key, keyPath)
    },
    routerGo (url) {
      if(this.$router.history.current.fullPath === url){
        return;
      } else {
        this.$router.push(url)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 100%;
}
.el-menu{
  float: right;
  background-color: transparent;
  border-bottom: none !important;
  user-select: none;
  >.el-menu-item{
    padding: 0 30px;
    font-size: 18px;
  }
  >.is-active{
    background-color: transparent;
    font-weight: bold;
    border-bottom-color: red !important;
  }
  >.is-active::hover{
    background-color: grey;
    color: white;
  }
  .router-link{
    width: 100%;
    height: 100%;
  }
}
</style>
