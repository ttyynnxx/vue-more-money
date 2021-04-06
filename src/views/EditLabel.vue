<template>
  <Layout>
    编辑标签页面
  </Layout>
</template>

<script>
import tagListModel from '@/model/tagListModel'
export default {
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

<style lang="scss" scoped></style>
