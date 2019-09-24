<template>
  <el-container class="el-container">
    <el-header>
      <MyHeader></MyHeader>
    </el-header>
    <el-container>
      <el-aside width="100px">
        <SideBar></SideBar>
      </el-aside>
      <el-main>主要区域</el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'
export default {
  components: {
    MyHeader,
    SideBar
  }
}
</script>

<style lang="scss" scoped>
  .el-container{
    transition: 1s opacity;
    width: 100%;
  }
</style>
