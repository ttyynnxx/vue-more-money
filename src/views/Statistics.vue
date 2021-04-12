<template>
  <div>
    <Layout>
      <Tabs
        class-prefix="type"
        :data-source="recordTypeList"
        :value.sync="type"
      />
      <ol v-if="groupedList.length > 0">
        <li class="group" v-for="(group, index) in groupedList" :key="index">
          <h3 class="title">
            {{ beautify(group.title) }} <span>¥{{ group.total }}</span>
          </h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="noResult">
        目前没有相关记录
      </div>
    </Layout>
  </div>
</template>

<script lang="js">
import Tabs from '@/components/Tabs.vue'
import recordTypeList from '@/constants/recordTypeList.js';
import dayjs from 'dayjs'
import clone from '@/lib/clone.js';

export default {
  components: {  Tabs },
  created(){
    this.$store.commit('fetchRecords')
  },
  computed:{
    recordList(){
      return this.$store.state.recordList
    },
    groupedList(){
      const{recordList}  =this
      if(recordList.length===0){return []}

      const newList =clone(recordList).filter(r=>r.type === this.type).sort((a,b)=>dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())
      if(newList.length===0){return []}
      const result =[{title:dayjs(newList[0].createdAt).format('YYYY-MM-DD'),items:[newList[0]]}]

      for(let i=1;i<newList.length;i++){
        const current =newList[i]
        const last =result[result.length-1]
        if(dayjs(last.title).isSame(dayjs(current.createdAt),'day')){
          last.items.push(current)
        }else{
          result.push({title:dayjs(current.createdAt).format('YYYY-MM-DD'),items:[current]})
        }
      }
      result.map(group=>{
        group.total =group.items.reduce((sum,item)=>sum +item.amount,0)
      })
      return result
    }
  },
  data(){
    return{
      type:'-',
      recordTypeList:recordTypeList
    }
  },
  methods:{
    tagString(tags){
      return tags.length === 0 ? '无':tags.map(t=>t.name).join(',')
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
.noResult {
  padding: 16px;
  text-align: center;
}

%item {
  padding: 0 16px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  .title {
    @extend %item;
  }
  .record {
    background-color: #fff;
    margin-top: 2px;
    @extend %item;
  }
  .notes {
    margin-right: auto;
    padding-left: 16px;
    color: #999;
  }
}
</style>
