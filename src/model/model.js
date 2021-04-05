const localStorageKeyName='recordList'

const model={
    clone(data){
        return JSON.parse(JSON.stringify(data))
    },
    //读取数据
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    },
    // 修改数据
    save(data){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    }
}

export default model