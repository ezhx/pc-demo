<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import './App.less'
export default {
  data() {
    return {}
  },
  mounted: function() {
    this.$rs.test()
  }
}
</script>

<style lang="less" scoped></style>
