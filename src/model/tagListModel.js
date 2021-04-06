const localStorageKeyName = 'tagList'

const tagListModel = {
  data: [],
  //读取数据
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]'
    )
    return this.data
  },
  // 新增标签
  create(name) {
    // this.data =[{id:'1',name:'2'},{id:'2',name:'2'}]
    const names = this.data.map(item => item.name)
    if (names.indexOf(name) >= 0) {
      return 'duplicated'
    }
    this.data.push({ id: name, name: name })
    this.save()
    return 'success' // success表示成功，duplicated表示重复，意味着失败
  },
  // 修改数据
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}

export default tagListModel
