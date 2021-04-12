<template>
  <div>
    <Layout>
      <div class="tags">
        <div class="tagsTitle"> 
          标签管理
        </div>
        <router-link
          :key="tag.id"
          class="tag"
          v-for="tag in tags"
          :to="`/labels/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span>
          <Icon class="svg" name="right" />
        </router-link>
      </div>
      <div class="button-wrapper">
        <Button @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="js">
import Button from '@/components/Button.vue'

export default {
  name: 'Labels',
  components:{Button},
  beforeCreate(){
    this.$store.commit('fetchTags')
  },
  computed:{
    tags(){
      return this.$store.state.tagList
    }
  },
  methods:{
    createTag(){
      const name =window.prompt('请输入标签名')
      if(!name ){return window.alert('标签不能为空')}
      this.$store.commit('createTag',name);
      if(this.$store.state.createTagError){
        if(this.$store.state.createTagError.message === 'tag name duplicated'){
          window.alert('标签名重复了')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  font-size: 16px;
  .tagsTitle{
    background-color: #3D7EFF;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  > .tag {
      padding-left: 16px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.button-wrapper {
  text-align: center;
  padding: 14px;
  margin-top: 44-16px;
}
</style>
