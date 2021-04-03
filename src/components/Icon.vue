<template>
  <div>
    <svg class="icon">
      <use :xlink:href="'#' + name" />
    </svg>
  </div>
</template>

<script lang="ts">
let imoprtAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext)
}
try {
  imoprtAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

import Vue from 'vue'

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
}
</style>