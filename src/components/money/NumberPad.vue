<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent" style="font-weight:bold">.</button>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  props:['value'],
  data() {
    return {
      output: this.value.toString()
    }
  },
  methods:{
    // 显示输出内容
    inputContent(event){
      console.log(event.target.textContent);
      const input = event.target.textContent
      if(this.output.length === 16){return}
      if(this.output === '0'){
        if('0123456789'.indexOf(input) >=0){
          this.output = input
        }else{
          this.output += input
        }
        return
      }
      if(this.output.indexOf('.') >=0 && input == '.'){
       return
      }
        this.output += input
    },
    // 从后往前删除单个数字
    remove(){
      if(this.output.length === 1){
        this.output='0'
      }else{
        this.output = this.output.slice(0,-1)
      }

    },
    // 清空所有内容
    clear(){
      this.output='0'
    },

    // 提交输入的数字进行记账记录
    ok(){
      const number =parseFloat(this.output)
      this.$emit('update:value',number)
      this.$emit('submit',number)
      this.output='0'
    }

  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/helper.scss';
// 键盘部分
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    height: 72px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: #fff;
      border: 2px solid #f5f5f5;
      &.ok {
        height: 64 * 2px;
        float: right;
        font-size: 24px;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bg: #f2f2f2;
      &:nth-child(4),&:nth-child(8) {
        background-color: rgba(249,249,249,1);
      }
      &:nth-child(12) {
        color: #3D7EFF;
      }
      > button:hover {
        background: rgba(249,249,249,1);
      }
    }
  }
}
</style>
