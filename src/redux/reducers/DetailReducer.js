
import { fromJS } from "immutable"/* 引入immmutable的意义防止外部修改状态 */
const defaultStae=fromJS({
    title: '',
	content: ''
}
    )//stae初始值
 const  DetailReducer=(state=defaultStae,action={})=>{
     switch(action.type){
         case 'changeDetail': 
          return state.merge({
            title:action.title,
            content:action.content
          })  
        default:
            return state
     }
    }
export default DetailReducer
