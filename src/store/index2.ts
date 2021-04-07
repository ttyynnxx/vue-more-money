
import tagListModel from '@/model/tagListModel.js';
import model from '@/model/model.js';

const store = {
      // record store
    recordList: model.fetch(),
    createRecord:(record) => model.create(record),
    // 全局变量太多，严重依赖window

    // tag store
    tagList:tagListModel.fetch(),
    findTag:function(id: string){
    return  this.tagList.filter(t => t.id === id)[0]
    },
    createTag:(name:string) => {
      const message = tagListModel.create(name)
            if(message === 'duplicated'){
              window.alert('标签名重复了')
            }else if(message === 'success'){
              window.alert('添加成功')
            }
    },
    removeTag:(id: string) => {
      if (tagListModel.remove(id)) {
          return true
        } else {
          return false
        }
    },
    updateTag:(id: string, name: string) => {
      return tagListModel.update(id, name)
    }
  
}

export default store