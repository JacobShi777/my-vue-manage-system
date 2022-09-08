<template>
    <el-breadcrumb separator="/">
        <!-- tofdo, transition-group之后再添加 -->
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <!--
                unknow: item.redirect==='noRedirect'是判断什么？
                不过这个作用基本就是最后一个不做跳转
             -->
            <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
            <a v-else @click="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import { compile } from 'path-to-regexp'

export default {
  name: 'Breadcrumb',
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      // only show routes with meta.title
      // this.$route.matched 中保存着每一级的路由信息
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard (route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile (path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      // tofdo: 这个是跟动态路由有关的，之后再做
      const { params } = this.$route
      const toPath = compile(path)
      return toPath(params)
    },
    handleLink (item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
// 不会用
// .el-breadcrumb >>> .el-breadcrumb__item {
//         .el-breadcrumb__inner {
//             font-weight: normal;
//             &.is-link {
//                 color: #666
//             }
//             a {
//                 color: #666
//             }
//         }
//         &:last-child {
//             .el-breadcrumb__inner {
//                 color: #fff;
//             }
//         }
// }

// 这个是 vue-element-template 的方法，但也不好用
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    // color: #97a8be;
    color: white;
    cursor: text;
  }
}
</style>
