<template>
  <div>
    {{ recordList }}
    <Layout class-prefix="layout">
      <!-- 键盘 -->
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />

      <!-- 3.支出和收入 -->
      <Type :value.sync="record.type" />

      <!-- 2.备注部分 -->
      <Notes @update:value="onUpdateNotes" />

      <!-- 1.输入部分 -->
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<script lang="js">
import NumberPad from '@/components/money/NumberPad.vue'
import Type from '@/components/money/Type.vue'
import Notes from '@/components/money/Notes.vue'
import Tags from '@/components/money/Tags.vue'

// 数据库升级需要考虑的，目前只做了解，以下代码可能会报错，实际运用需做调整
// const version =window.localStorage.getItem('version' || '0')
// const recordList =JSON.parse(window.localStorage.getItem('recordList') || '[]')
// if(version === '0.0.1') {
//   // 数据库升级，数据迁移
//   recordList.forEach(record => {
//     record.createdAt = new Date(2020,0,1)
//   })
//   // 保存数据
//   window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
// }
// window.localStorage.setItem('version','0.0.1')

export default {
  components: { NumberPad, Notes, Tags, Type },
  name: 'Money',
  data(){
    return{
      tags:['衣服','食物','住宿','出行'],
      record:{tags:[],notes:'',type:'-',amount:10},
      recordList:JSON.parse(window.localStorage.getItem('recordList') || '[]')
    }
  },
  methods:{
    onUpdateTags(value){
      this.record.tags=value
    },
    onUpdateNotes(value){
      this.record.notes=value
    },
    // onUpdateType(value){
    //   this.record.type=value
    // },
    onUpdateAmount(value){
      this.record.amount=parseFloat(value)
    },
    // 点击后将数据存储至本地
    saveRecord() {
      const record2=JSON.parse(JSON.stringify(this.record))
      record2.createdAt=new Date()
      this.recordList.push(record2)
      // console.log(this.recordList);
    }
  },
  watch:{
    recordList(val){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
  }
}
</script>

<style lang="scss" scoped></style>
