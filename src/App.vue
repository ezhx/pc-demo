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
  data() {},
  mounted: function() {
    this.$rs.test()
  }
}
</script>

<style lang="less" scoped src="./App.less">
div {
  background-color: #f00;
  font-size: 3px;
}
</style>
