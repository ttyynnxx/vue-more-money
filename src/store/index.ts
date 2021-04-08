import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone.js';

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    recordList:[] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      const recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]')
      state.recordList =recordList
    },
    createRecord (state,record){
      const record2 = clone(record)
      record2.createdAt = new Date()
      state.recordList.push(record2)
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
    }

  },
  actions: {
  },
  modules: {
  }
})

export default store