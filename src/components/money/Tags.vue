<template>
  <div class="tags">
    <div class="new">
      <button @click="addTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  computed:{
    tagList(){
      return []
    }
  },
  data(){
    return {
      selectedTags:[],
      //tagList:store.fetchTags()
    }
  },
  methods:{
    toggle(tag){
      const index =this.selectedTags.indexOf(tag)
      if(index >=0){
        this.selectedTags.splice(index,1)
      }else{
        this.selectedTags.push(tag)
      }
      this.$emit('update:value',this.selectedTags)
    },
    addTag(){
      const name =window.prompt('请输入标签名')
      if(!name ){return window.alert('标签不能为空')}
      //store.createTag(name);
    }
  }

})
</script>

<style lang="scss" scoped>
// 输入内容显示部分
.tags {
  background-color: #fff;
  border: 1px red solid;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      background-color: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 10px;
      &.selected {
        background-color: darken($bg, 50%);
        color: #fff;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
