<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
            <sidebar></sidebar>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'Layout',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
  .el-header{
    background-color: #202A39;
  }

//   .el-aside {
//     background-color: #2B394C;
//   }

  .el-main {
    background-color: #EEEEEE;
  }

</style>
