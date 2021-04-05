const localStorageKeyName='tagList'

const tagListModel={
    data:[],
    //读取数据
    fetch(){
        this.data= JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data
    },
    // 新增标签
    create(name){
        if(this.data.indexOf(name) >= 0){return 'duplicated'}
        this.data.push(name)
        this.save()
        return 'success' // success表示成功，duplicated表示重复，意味着失败
    },
    // 修改数据
    save(){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data))
    }
}

export default tagListModel