<template>
    <div class="navbar">
      <div class="navbar_left">
        <ul>
          <li class="pointer_icon"><i class="el-icon-s-unfold navbar_icons" @click="toggleMenu"></i></li>
          <li>
            <breadcrumb></breadcrumb>
          </li>
        </ul>
      </div>
      <div class="navbar_right">
        <ul>
          <li class="pointer_icon" @click="handleFullScreen">
            <el-tooltip class="item" effect="dark" :content="fullscreen?'取消全屏':'全屏'" placement="bottom">
              <i class="el-icon-full-screen navbar_icons"></i>
            </el-tooltip>
          </li>
          <li class="pointer_icon" @click="handleNews">
            <el-tooltip class="item" effect="dark" content="有2条未读消息" placement="bottom">
              <i class="el-icon-news navbar_icons"></i>
            </el-tooltip>
          </li>
          <li class="profile"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU"></li>
          <li class="navbar_dropdown">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>项目仓库</el-dropdown-item>
                <el-dropdown-item>退去登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'

export default {
  name: 'Navbar',
  components: {
    Breadcrumb
  },
  data () {
    return {
      fullscreen: false
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('tabs/TOGGLE_MENU')
    },
    handleNews () {
      this.$router.push('/tabs/index')
    },
    // 全屏事件
    handleFullScreen () {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar_left>ul, .navbar_right>ul{
    height: 100%;
    display: flex;
    align-items: center;
    li{
      margin-right: 20px;
    }
  }

  .navbar{
    color: white;
    // background-color: blue;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .navbar_icons{
      font-size: 25px;
      // padding-right: 20px;
    }

    .profile{
      width: 35px;
      height: 35px;
      overflow: hidden;
      border-radius: 50%;
      object-fit: cover;
      img{
        height: 100%;
      }
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #FFFFFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .pointer_icon {
    cursor: pointer;
  }

</style>
