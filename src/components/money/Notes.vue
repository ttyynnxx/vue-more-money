<template>
  <label for="" class="notes">
    <span class="name">{{fieldName}}</span>
    <input type="text" v-model="value" :placeholder="placeholder" />
  </label>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  props:['fieldName','placeholder'],
  data(){
    return{
      value:''
    }
  },
  watch:{
    value:function(val){
      this.$emit('update:value',val)
    }

  }
})
</script>

<style lang="scss" scoped>
// 备注部分
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
