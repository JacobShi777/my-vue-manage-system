<template>
    <div class="navbar">
      <div class="navbar_left">
        <ul>
          <li><i class="el-icon-s-unfold" @click="toggleMenu"></i></li>
          <li>
            <breadcrumb></breadcrumb>
          </li>
        </ul>
      </div>
      <div class="navbar_right">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'

export default {
  name: 'Navbar',
  // created () {
  //   console.log(this.$route)
  // },
  components: {
    Breadcrumb
  },
  methods: {
    toggleMenu () {
      console.log(this.$store.state.tabs.isCollapse)
      this.$store.commit('tabs/TOGGLE_MENU')
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  height: 100%;
  display: flex;
  align-items: center;
  li{
    padding-right: 10px;
  }

}

.navbar{
  color: white;
  // background-color: blue;
  height: 100%;
  display: flex;
  justify-content: space-between;

  // .navbar_left{
    // ul{
    //   height: 100%;
    //   display: flex;
    //   align-items: center;
    //   li{
    //     padding-right: 10px;
    //   }

    // }
  // }

  // .navbar_right{

  // }

  .el-icon-s-unfold{
    font-size: 25px;
    padding-right: 20px;
  }

  // >>> .breadcrumb_item{
  //       color: red;
  //   }
}
</style>
