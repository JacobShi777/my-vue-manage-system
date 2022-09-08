<template>
    <div class="sidebar_logo">
        <div v-if="!isCollapse">通用后台管理系统</div>
        <div else><i class="el-icon-s-shop"></i></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Logo',
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  }
}
</script>

<style lang="scss" scoped>
.sidebar_logo{
    background-color: #202A39;
    height: 65px;
    line-height: 65px;
    text-align: center;
    color: #FFFFFF;
    font-size: 18px;
}
</style>
