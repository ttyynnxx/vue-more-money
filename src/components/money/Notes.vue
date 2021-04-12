<template>
  <label for="" class="notes">
    <span class="name">{{fieldName}}</span>
    <input type="text" :value="value" @input="onValueChanged($event.target.value)" :placeholder="placeholder" />
  </label>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  props:['fieldName','placeholder','value'],
  methods:{
    onValueChanged(val){
      this.$emit('update:value',val)
    }

  }
})
</script>

<style lang="scss" scoped>
// 备注部分
.notes {
  font-size: 14px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
