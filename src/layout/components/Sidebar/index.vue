<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- todo el-menu :default-active="activeMenu"
      :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
       -->
      <el-menu
        background-color="#2B394C"
        text-color="#B7C4D3"
        active-text-color="#0B97FA"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
// import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem.vue'
import Logo from './Logo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
    Logo
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ]),
    routes () {
      return this.$router.options.routes
    }
    // variables () {
    //   return variables
    // }
  },
  data () {
    return {
      showLogo: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
