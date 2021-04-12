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
  background-color: #3d7eff;;
  display: flex;
  text-align: center;
  font-size: 24px;
  color: rgba(255,255,255,0.5);
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);
  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected{
        color: #fff;
    }
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #fff;
    }
  }
}
</style>
