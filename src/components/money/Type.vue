<template>
  <div class="">
    <ul class="types">
      <li :class="{selected:value==='-',[classPrefix+'-item']:classPrefix}"  @click="selectType('-')">
        支出
      </li>
      <li :class="{selected:value==='+',[classPrefix+'-item']:classPrefix}" @click="selectType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// 用typescript实现支出与收入的切换效果
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Type extends Vue {
  // type = '-' // '-'表示支出，‘+’表示收入
  // @Prop(Number) xxx: number | undefined
  // // Prop 告诉Vue.xxx 不是data 是prop
  // // Number 告诉 Vue xxx 运行时是个 Number
  // // xxx 表示属性名
  // // number | undefined 告诉TS xxx的编译时类型
  @Prop(String) readonly value!: string
  @Prop(String) classPrefix?:string

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unkown')
    }
    this.$emit('update:value', type)
  }
  // mounted() {
  //   if (this.xxx === undefined) {
  //     console.log('没有xxx')
  //   } else {
  //     console.log(this.xxx)
  //   }
  // }
  // @Watch('type')
  // onTypeChange(value: string) {
  //   this.$emit('update:value', value)
  // }
}

// 以下代码是用JS实现的支出和收入效果
// export default Vue.extend({
//   name:'Type',
//   props:['xxx'],
//   data(){
//     return {
//       type:'-' // -表示支出，+表示收入
//     }
//   },
//   methods: {
//     selectType(type){
//       if(type!=='-' && type !== '+'){
//         throw new Error('type is unknowm')
//       }
//       this.type =type
//     }
//   },
//   mounted(){
//     console.log(this.xxx);
//   }

// })
</script>

<style lang="scss" scoped>
// 支出和收入部分
.types {
  background-color: #3d7eff;
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
