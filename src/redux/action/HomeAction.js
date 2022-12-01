
import axios from "axios"
import {fromJS} from "immutable"
export const codeEnter=()=>{
   return{
     type:'codeEnter'
   }
}
export const codeLeave=()=>{
    return{
      type:'codeLeave'
    }
 }
 export const changeScrollTopShow=()=>{
  if(document.documentElement.scrollTop>100){
    return{
      type:'toggleTopShow',
      payload:true
    }
  }else{
   return{
    type:'toggleTopShow',
    payload:false
   }
  }
 }
 //....................................................................
 //Home所有数据都在这
 export const changHomeData = (result) => ({
	type: 'change_hone_data',
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});
export const getHomeInfo=()=>{
  return dispatch=>{
    axios.get('https://www.fastmock.site/mock/c1248b4428d69377c3001bf1361e444c/api/home')
    .then(res=>{
      const result=res.data.data
      dispatch(changHomeData(result) )
    })
  }
}
//........................................................................
//List组件的异步,获取更多数据
export const getMoreList=(page)=>{
  return dispatch=>{
    axios.get('https://www.fastmock.site/mock/c1248b4428d69377c3001bf1361e444c/api/homelist')
    .then(res=>{
      const result=res.data.data
      dispatch(addHomeList(result,page+1))
    })
  }
}
const addHomeList=(result,nexpage)=>{
  return{
    type:'addList',
     list:fromJS(result),/* 这里记得转immutable,fouze获取组件获取数据得不到 */
     nexpage
  }
}