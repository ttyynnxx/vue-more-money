<template>
  <div>
    <Layout> 
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        types:{{type}}
        interval:{{interval}}
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Type from '@/components/money/Type.vue'
import Tabs from '@/components/Tabs.vue'

export default {
  components: { Type, Tabs },
  data(){
    return{
      type:'-',
      interval:'day',
      intervalList:[
        {text:'按天',value:'day'},
        {text:'按周',value:'week'},
        {text:'按月',value:'month'}
      ],
      typeList:[
        {text:'支出',value:'-'},
        {text:'收入',value:'+'}
      ]
    }
  },
  name: 'Statistics'
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item{
   background-color: #fff;
   &.selected{
     background-color: #c4c4c4;
     &::after{
       display: none;
     }
   }
 }
</style>
