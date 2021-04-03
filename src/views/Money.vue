<template>
  <div class="nav-wrapper">
    <div class="content">money</div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Labels'
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  border: 2px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>
