<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
            <sidebar></sidebar>
        </el-aside>
        <el-container>
            <el-header height="65px">
              <navbar></navbar>
            </el-header>
            <el-main>
              <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar/index.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .el-header{
    background-color: #202A39;
  }

  // tips-ns: 这个颜色设置成和 .el-main 一样，在菜单切换出来的时候，就不会有跳出来的一块区域了
  .el-aside {
    background-color: #EEEEEE;
  }

  .el-main {
    background-color: #EEEEEE;
  }

</style>
