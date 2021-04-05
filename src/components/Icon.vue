<template>
  <svg class="icon">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

let imoprtAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext)
}
try {
  imoprtAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
// import x from '@/assets/icons/标签.svg'
// import y from '@/assets/icons/淘宝客推广.svg'
// console.log(x)
// console.log(y)

export default Vue.extend({
  props: ['name']
})
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #333;
}
</style>
