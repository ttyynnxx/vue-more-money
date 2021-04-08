<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <Notes
        :value="tag.name"
        @update:value="updateTag"
        field-name="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="removeTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script>
// import tagListModel from '@/model/tagListModel'
import Notes from '@/components/money/Notes.vue'
import Button from '@/components/Button.vue'

export default {
  components: { Notes, Button },
  computed: {
    tag() {
      return this.$store.state.currentTag
    }
  },
  created() {
    const id = this.$route.params.id
    this.$store.commit('setCurrentTag', id)
    if (!this.tag) {
      this.$router.replace('/404')
    }
  },
  methods: {
    updateTag(name) {
      if (this.tag) {
        // todo store.updateTag(this.tag.id, name)
      }
    },
    removeTag() {
      if (this.tag) {
        // todo
        return
        // if (store.removeTag(this.tag.id)) {
        //   this.$router.back()
        // } else {
        //   window.alert('删除失败')
        // }
      }
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  background: #fff;
  padding: 12px 16px;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 20px;
    height: 20px;
  }
  > .title {
    color: #333;
  }
  > .rightIcon {
    color: #fff;
    width: 20px;
    height: 20px;
  }
}
.form-wrapper {
  background-color: #fff;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  margin-top: 44-16px;
  padding: 16px;
}
</style>
