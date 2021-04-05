<template>
  <div class="">
    {{ value }}
    <label for="" class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value" placeholder="在这里输入备注" />
    </label>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return{
      value:''
    }
  },
  methods:{

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
