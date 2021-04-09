<template>
  <div>
    <ul class="tabs" :class="{
        [classPrefix + '-tabs']: classPrefix
      }">
      <li class="tabs-item"
        :class="liClass(item)"
        v-for="item in dataSource"
        :key="item.value"
        @click="select(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['dataSource', 'value', 'classPrefix'],
  data() {
    return {}
  },
  methods: {
    select(item) {
      this.$emit('update:value', item.value)
    },
    liClass(item) {
      return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: item.value === this.value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>
