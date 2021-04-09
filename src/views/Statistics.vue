<template>
  <div>
    <Layout> 
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        types:{{type}}
        interval:{{interval}}
      </div>
    </Layout>
  </div>
</template>

<script lang="js">
import Tabs from '@/components/Tabs.vue'
import intervalList from '@/constans/intervalList.js'
import recordTypeList from '@/constans/recordTypeList.js';

export default {
  components: {  Tabs },
  data(){
    return{
      type:'-',
      interval:'day',
      intervalList:intervalList,
      recordTypeList:recordTypeList
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
