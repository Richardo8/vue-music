<template>
  <div id="app">
    hello world
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color-theme;
    margin-top: 60px;
</style>
