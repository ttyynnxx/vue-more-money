<template>
  <div>
    <!-- {{ record }} -->
    <Layout class-prefix="layout">
      <!-- 键盘 -->
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />

   

      <!-- 备注部分 这里可以将组件名 Notes 改为 formItem 但没有找到合适的方式一键修改所有的 Notes名，因此暂不改名，等到整个项目做完后再修改-->
      <div class="note-wrapper">
        <Notes
          fieldName="备注"
          placeholder="在这里输入备注"
          :value.sync="record.notes"
        />
      </div>

      <!-- 输入部分 -->
      <Tags @update:value="record.tags = $event" />

         <!-- 支出和收入 -->
      <!-- <Type :value.sync="record.type" /> -->
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
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
import Notes from '@/components/money/Notes.vue'
import Tags from '@/components/money/Tags.vue'
import Tabs from '@/components/Tabs.vue'
import recordTypeList from '@/constants/recordTypeList.js';

export default {
  components: { NumberPad, Notes, Tags,Tabs },
  name: 'Money',
  computed:{
    recordList(){
      return this.$store.state.recordList
    }
  },
  created(){
    this.$store.commit('fetchRecords')
  },
  data(){
    return{
      // tags:store.tagList,
      record:{tags:[],notes:'',type:'-',amount:0},
      recordTypeList:recordTypeList
    }
  },
  methods:{
    onUpdateNotes(value){
      this.record.notes=value
    },
    onUpdateAmount(value){
      this.record.amount=parseFloat(value)
    },
    // 点击后将数据存储至本地
    saveRecord() {
      if(!this.record.tags || this.record.tags.length === 0){
        return window.alert('请至少选择一个标签')
      }
      this.$store.commit('createRecord',(this.record))
      if(this.$store.state.createRecordError == null){
        window.alert('已保存')
        this.record.notes=''
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.note-wrapper {
  padding: 12px 16px;
  background-color: #fff;
}
</style>
