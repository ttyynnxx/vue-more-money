<template>
  <div>
    <Layout>
      <div class="tags">
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
// import tagListModel from '@/model/tagListModel.js'
import Button from '@/components/Button.vue'


export default {
  name: 'Labels',
  components:{Button},
  data(){
    return{
      tags:window.tagList
    }
  },
  methods:{
    createTag(){
      const name =window.prompt('请输入标签')
      if(name){
        window.createTag(name)
        // const message = tagListModel.create(name)
        // if(message === 'duplicated'){
        //   window.alert('标签名重复了')
        // }else if(message === 'success'){
        //   window.alert('添加成功')
        // }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
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
