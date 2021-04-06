
type Tag ={
    id:string
    name:string
}
type TagListModel={
    data:Tag[]
    fetch:()=>Tag[]
    create:(name:string)=>'success'|'duplicated'
    update:(id:string,name:string) =>'success'|'duplicated'|'not found'
    remove:(id:string)=> boolean
    save:()=>void

}

interface Window{
    tagList:Tag[]
}