<template>
  <div>
    {{ record }}
    <Layout class-prefix="layout">
      <!-- 键盘 -->
      <NumberPad :value.sync="record.amount" />

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

export default {
  components: { NumberPad, Notes, Tags, Type },
  name: 'Money',
  data(){
    return{
      tags:['衣服','食物','住宿','出行'],
      record:{tags:[],notes:'',type:'-',amount:10}
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
