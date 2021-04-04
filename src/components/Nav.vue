<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="标签" />
      记账</router-link
    >
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="竖状图" />
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="淘宝客推广" />
      统计</router-link
    >
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/helper.scss';
.nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 6px 0;
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: red;
  }
}
</style>
