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
  //将修改后的数据进行更新
  update(id, name) {
    const idList = this.data.map(item => item.id)
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        return 'duplicated'
      } else {
        const tag = this.data.filter(item => item.id === id)[0]
        tag.name = name
        this.save()
        return 'success'
      }
    } else {
      return 'not found'
    }
  },
  // 删除数据
  remove(id) {
    let index=-1
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].id===id){
        index=i
        break
      }
    }
    this.data.splice(index,1)
    this.save()
    return true
  },
  // 修改数据
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}

export default tagListModel
