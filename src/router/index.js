import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/basetable',
    component: Layout,
    redirect: '/basetable/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/basetable/index'),
        name: 'BaseTable',
        meta: { title: '基础表格', icon: 'guide' }
      }
    ]
  },

  {
    path: '/tabs',
    component: Layout,
    redirect: '/tabs/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/tabs/index'),
        name: 'Tabs',
        meta: { title: 'tab选项卡', icon: 'guide' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: '/form/baseform',
    name: 'Form',
    meta: { title: '表单相关', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'baseform',
        name: 'BaseForm',
        component: () => import('@/views/form/baseform/index'),
        meta: { title: '基本表单', icon: 'table' }
      },
      {
        path: 'thirdmenu',
        name: 'ThirdMenu',
        component: () => import('@/views/form/thirdmenu/index'),
        meta: { title: '三级菜单', icon: 'table' },
        children: [
          {
            path: 'vueeditor',
            name: 'VueEditor',
            component: () => import('@/views/form/thirdmenu/vueeditor/index'),
            meta: { title: '富文本编辑器', icon: 'table' }
          },
          {
            path: 'markdown',
            name: 'Markdown',
            component: () => import('@/views/form/thirdmenu/markdown/index'),
            meta: { title: 'markdown编辑器', icon: 'table' }
          }
        ]
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/form/upload/index'),
        meta: { title: '文件上传', icon: 'tree' }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    redirect: '/icon/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/icon/index'),
        name: 'Icon',
        meta: { title: '自定义图标', icon: 'guide' }
      }
    ]
  },

  {
    path: '/basecharts',
    component: Layout,
    redirect: '/basecharts/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/basecharts/index'),
        name: 'BaseCharts',
        meta: { title: 'schart图表', icon: 'guide' }
      }
    ]
  },

  {
    path: '/drag',
    component: Layout,
    redirect: '/drag/draglist',
    name: 'Drag',
    meta: { title: '拖拽组件', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'draglist',
        name: 'DragList',
        component: () => import('@/views/drag/draglist/index'),
        meta: { title: '拖拽列表', icon: 'table' }
      },
      {
        path: 'dragdialog',
        name: 'DragDialog',
        component: () => import('@/views/drag/dragdialog/index'),
        meta: { title: '拖拽弹框', icon: 'tree' }
      }
    ]
  },

  {
    path: '/i18n',
    component: Layout,
    redirect: '/i18n/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/i18n/index'),
        name: 'I18n',
        meta: { title: '国际化功能', icon: 'guide' }
      }
    ]
  },

  {
    path: '/errorresolve',
    name: 'ErrorResolve',
    component: Layout,
    redirect: '/errorresolve/permission',
    children: [
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('@/views/errorresolve/permission/index'),
        meta: { title: '权限测试', icon: 'guide' }
      },
      {
        path: '404',
        name: '404',
        component: () => import('@/views/errorresolve/404/index'),
        meta: { title: '404', icon: 'guide' }
      }
    ]
  },

  {
    path: '/donate',
    component: Layout,
    redirect: '/donate/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/donate/index'),
        name: 'Donate',
        meta: { title: '支持作者', icon: 'guide' }
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
