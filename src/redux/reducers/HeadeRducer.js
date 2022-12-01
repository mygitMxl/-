
import { fromJS } from "immutable"/* 引入immmutable的意义防止外部修改状态 */
const defaultStae=fromJS({
    focused:false,
    list:[],
    page:1,
    totalPage:1,//总页码
    mousein:false,
}
    )//stae初始值
 const HeadReducer=(state=defaultStae,action={})=>{
     switch(action.type){
      case 'true':
        return state.set('focused',true)
        case 'fasle':
        return state.set('focused',false)
        case 'change_list':
            return state.merge({
                list:action.payload,
                totalPage:action.totalPage
            })
        case 'MouseEnter':
            return state.set('mousein',true) 
        case 'MouseLeave':
            return state.set('mousein',false) 
            case 'pages':
                return state.set('page',action.pages)       
        default:
            return state
     }
    }
export default HeadReducer
