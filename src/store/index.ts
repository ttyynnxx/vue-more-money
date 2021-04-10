import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone.js'
import createId from '@/lib/createId.js'
import router from '@/router';

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    recordList: [],
    createRecordError: null,
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    setCurrentTag(state, id) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0]
    },
    updateTag(state, payload: { id: string; name: string }) {
      const { id, name } = payload
      const idList = state.tagList.map(item => item.id)
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复')
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0]
          tag.name = name
          store.commit('saveTags')
        }
      }
    },
    removeTag(state,id: string) {
      let index = -1
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i
          break
        }
      }
      if(index >=0){
        state.tagList.splice(index, 1)
        store.commit('saveTags')
        router.back()
      }else{
        window.alert('删除失败')
      }
      
      
    },
    fetchRecords(state) {
      const recordList = JSON.parse(
        window.localStorage.getItem('recordList') || '[]'
      )
      state.recordList = recordList
    },
    createRecord(state, record) {
      const record2 = clone(record)
      record2.createdAt = new Date().toISOString()
      state.recordList.push(record2)
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem(
        'recordList',
        JSON.stringify(state.recordList)
      )
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
      
      if(!state.tagList || state.tagList.length === 0){
        store.commit('createTag','衣服')
        store.commit('createTag','食物')
        store.commit('createTag','住宿')
        store.commit('createTag','出行')
      }
      
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了')
        return 'duplicated'
      }
      const id = createId().toString()
      state.tagList.push({ id, name: name })
      store.commit('saveTags') // this.saveTags()
      window.alert('添加成功')
      return 'success' // success表示成功，duplicated表示重复，意味着失败
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
    findTag(state, id: string) {
      return state.tagList.filter(t => t.id === id)[0]
    }
  },
  actions: {},
  modules: {}
})

export default store
