<template>
  <div>
    <Layout>
      <Tabs
        class-prefix="type"
        :data-source="recordTypeList"
        :value.sync="type"
      />
      <Tabs
        class-prefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      />
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{beautify(group.title)}}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>

    </Layout>
  </div>
</template>

<script lang="js">
import Tabs from '@/components/Tabs.vue'
import intervalList from '@/constants/intervalList.js'
import recordTypeList from '@/constants/recordTypeList.js';
import dayjs from 'dayjs'

export default {
  components: {  Tabs },
  created(){
    this.$store.commit('fetchRecords')
  },
  computed:{
    recordList(){
      return this.$store.state.recordList
    },
    result(){
      // return this.recordList
      const{recordList}  =this
      const hashTable ={}
      for(let i=0;i<recordList.length;i++){
        const [date,time] = recordList[i].createdAt.split('T');
        hashTable[date]=hashTable[date] || {title:date,items:[]}
        hashTable[date].items.push(recordList[i])
      }
      return hashTable
    }
  },
  data(){
    return{
      type:'-',
      interval:'day',
      intervalList:intervalList,
      recordTypeList:recordTypeList
    }
  },
  methods:{
    tagString(tags){
      return tags.length === 0 ? '无':tags.join(',')
    },
    beautify(string){
      const day =dayjs(string)
      const now =dayjs()
      if(day.isSame(now,'day')){
        return '今天'
      }else if(day.isSame(now.subtract(1,'day'),'day')){
        return '昨天'
      }else if(day.isSame(now.subtract(2,'day'),'day')){
        return '前天'
      }else if(day.isSame(now,'year')){
        return day.format('M月D日')
      }else{
        return day.format('YYYY年MM月DD日')
      }
    }
  },
  name: 'Statistics'
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background-color: #fff;
    &.selected {
      background-color: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
  height: 48px;
  }
}
%item{
  padding: 0 16px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
  @extend %item
}
.record{
  background-color: #fff;
  @extend %item;

}
.notes{
  margin-right: auto;
  padding-left: 16px;
  color: #999;
}

</style>
