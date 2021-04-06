<template>
  <Layout>
    <div class="editTitle">
        <Icon name="left"/>
        <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" placeholder="请输入标签名"/>
  </Layout>
</template>

<script>
import tagListModel from '@/model/tagListModel'
import Notes from '@/components/money/Notes.vue'
export default {
    components:{ Notes},
  created() {
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(t => t.id === id)[0]
    if (tag) {
      console.log(tag)
    } else {
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>
.editTitle{
    background: #fff;
    padding: 4px 20px;
    span{
        margin-left: 8px;
    }
}
</style>
