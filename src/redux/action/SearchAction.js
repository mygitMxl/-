//用于注册
import axios from 'axios'
import { fromJS } from 'immutable';
export const handleFlocus=(list)=>{
  console.log(list);/* 依次点击时list的size为10,第二次就为50了 */
  return{
    type:'true'
}
}
export const handleBlur=()=>{
return{
  type:'fasle'
}
}
export const MouseEnter=()=>{
  return{
    type:'MouseEnter'
  }
}  
export const MouseLeave=()=>{
  return{
    type:'MouseLeave'
  }
}
export const logout=()=>{
  return{
    type:'loginout'
  }
}
//...............................................................
export const changePage=(page,totalPage,spin)=>{
 
  let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');// originAngle 是原始的角度,replace(/[^0-9]/ig,‘’,非数字内容进行替换成 空
  if(originAngle){
    originAngle=parseInt(originAngle,10)//转化成一个正整数
  }else{
    originAngle=0
  }
  spin.style.transform='rotate('+(originAngle+360)+'deg)'
  if(page<totalPage){//当前页码小于总页码
    return{type:'pages',pages:page+1 } 
  }else{
    return{type:'pages',pages:1}
  } 
}
//..................................................................................
export const getList=()=>{
return (dispacth)=>{
  axios.get('https://www.fastmock.site/mock/16730e39be8ca262639484e6621af3e7/api/api').then(res=>{
    // console.log(res.data);
    dispacth({
      type:'change_list',
      payload:fromJS(res.data.data),//这里要将返回来的数据改成immutable类型,因为不改的话,reucer存入store的状态就是普通对象,在mapSstaeToProps中用getIn去接就会报错
      totalPage:Math.ceil(res.data.data.length/10)//也就是5,总页码5
    })
  }).catch(error=>{
     console.log(error.data);
  })
}
}