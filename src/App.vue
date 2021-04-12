<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '~@/assets/styles/reset.scss';
@import '~@/assets/styles/helper.scss';
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-size: 16px;
  font-family: $font-hei;
  background-color: #f5f7fa;

}

#app {
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 8px rgba(0,0,0,0.15);
}
</style>
