<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 输出tab切换内容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from 'compts/m-header/m-header'
  import Tab from 'compts/tab/tab'
  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
