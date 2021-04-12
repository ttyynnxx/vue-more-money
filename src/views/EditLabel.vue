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
import Notes from '@/components/money/Notes.vue'
import Button from '@/components/Button.vue'

export default {
  components: { Notes, Button },
  computed: {
    // 这里的tag可以改成currentTag，但由于引用地方较多，没有找到合适方法一键修改，暂不改动
    tag() {
      return this.$store.state.currentTag
    }
  },
  created() {
    const id = this.$route.params.id
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag', id)
    if (!this.tag) {
      this.$router.replace('/404')
    }
  },
  methods: {
    updateTag(name) {
      if (this.tag) {
        this.$store.commit('updateTag', { id: this.tag.id, name })
      }
    },
    removeTag() {
      if (this.tag) {
        this.$store.commit('removeTag', this.tag.id)
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
  background: #3D7EFF;
  padding: 12px 16px;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 20px;
    height: 20px;
    color: #fff;
  }
  > .title {
    color: #fff;
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
