import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone.js'
import createId from '@/lib/createId.js'

Vue.use(Vuex)

type RootState = {
  recordList: RecordItem[]
  tagList: Tag[]
  currentTag?: Tag
}

const store = new Vuex.Store({
  state: {
    recordList: [] ,
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    setCurrentTag(state,id){
      state.currentTag =state.tagList.filter(t => t.id === id)[0]
    },
    fetchRecords(state) {
      const recordList = JSON.parse(
        window.localStorage.getItem('recordList') || '[]'
      )
      state.recordList = recordList
    },
    createRecord(state, record) {
      const record2 = clone(record)
      record2.createdAt = new Date()
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
      const tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
      return (state.tagList = tagList)
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
