<template>
  <el-container class="el-container">
    <el-header>
      <MyHeader></MyHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from '@/components/Header/Header'
export default{
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>
  .el-container{
    width: 100%;
  }
</style>
