import axios from "axios"

export const getDetail=(id)=>{
    return dispacth=>{
      axios('/api/detail.json?id=' + id)
      .then(res=>{
        console.log(res.data.data);
        const result=res.data.data
        dispacth(changeDetail(result.title,result.content))
      })
    }
}
const changeDetail=(title,content)=>{
    return{
        type:'changeDetail',
        title,
        content
    }
}