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
      return this.$store.state.tagList
    }
  },
  created(){
    this.$store.commit('fetchTags')
  },
  data(){
    return {
      selectedTags:[],
      cur:0
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
      this.$store.commit('createTag',name);
      if(this.$store.state.createTagError){
       if(this.$store.state.createTagError.message === 'tag name duplicated'){
          window.alert('标签名重复了')
        }
      }
    }
  }

})
</script>

<style lang="scss" scoped>
// 输入内容显示部分
.tags {
  background-color: #f5f7fa;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #D7E5FF;
      color: #3D7EFF;
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
      background-color: rgba(255,255,255,1);
      border: 1px solid #3D7EFF;
      color: #3D7EFF;
      border-radius: 15px;
      padding: 4px 10px;
    }
  }
}
</style>
