<template>
  <div class="">
    <ul class="types">
      <li :class="type === '-' ? 'selected' : ''" @click="selectType('-')">
        支出
      </li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  name:'Type',
  props:['xxx'],
  data(){
    return {
      type:'-' // -表示支出，+表示收入
    }
  },
  methods: {
    selectType(type){
      if(type!=='-' && type !== '+'){
        throw new Error('type is unknowm')
      }
      this.type =type
    }
  },
  mounted(){
    console.log(this.xxx);
  }

})
</script>

<style lang="scss" scoped>
// 支出和收入部分
.types {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
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
