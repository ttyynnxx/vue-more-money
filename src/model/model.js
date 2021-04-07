import clone from '@/lib/clone.js'

const localStorageKeyName = 'recordList'

const model = {
  data: [],
  create(record) {
    const record2 = clone(record)
    record2.createdAt = new Date()
    this.data.push(record2)
    this.save()
  },
  //读取数据
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]'
    )
    return this.data
  },
  // 修改数据
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}

export default model
