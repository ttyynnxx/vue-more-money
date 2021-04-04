<template>
  <div>
    <Layout class-prefix="layout">
      <!-- 键盘 -->
      <NumberPad />

      <!-- 3.支出和收入 -->
      <Type xxx="hello" />

      <!-- 2.备注部分 -->
      <Notes />

      <!-- 1.输入部分 -->
      <Tags />
    </Layout>
  </div>
</template>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<script lang="ts">
import NumberPad from '@/components/money/NumberPad.vue'
import Type from '@/components/money/Type.vue'
import Notes from '@/components/money/Notes.vue'
import Tags from '@/components/money/Tags.vue'

export default {
  components: { NumberPad, Notes, Tags, Type },
  name: 'Money'
}
</script>

<style lang="scss" scoped></style>
