import tagListModel from '@/model/tagListModel.js';
<template>
  <div>
    <Layout>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag">
          <span>{{ tag }}</span>
          <Icon class="svg" name="right" />
        </li>
      </ol>
      <div class="addTag-wrapper">
        <button class="addTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="js">
import tagListModel from '@/model/tagListModel.js'

tagListModel.fetch()
// console.log(tags);

export default {
  name: 'Labels',
  data(){
    return{
      tags:tagListModel.fetch()
    }
  },
  methods:{
    createTag(){
      const name =window.prompt('请输入标签')
      if(name){
        const message = tagListModel.create(name)
        if(message === 'duplicated'){
          window.alert('标签名重复了')
        }else if(message === 'success'){
          window.alert('添加成功')

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
  padding-left: 16px;
  > li {
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
.addTag {
  background-color: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 14px;
    margin-top: 44-16px;
  }
}
</style>
