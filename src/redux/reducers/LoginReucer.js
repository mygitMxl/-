
import { fromJS } from "immutable"/* 引入immmutable的意义防止外部修改状态 */
const defaultStae=fromJS({
   myHeader:true,
   Mylogin:true,
   login:true /* 判断用户是否登录 */
}
    )//stae初始值
 const  LoginReducer=(state=defaultStae,action={})=>{
     switch(action.type){
        case 'headrShow':
            return state.set('myHeader',false)
        case 'headHide':
            return state.set('myHeader',true)  
        case 'Yes':
            return state.set('Mylogin',true)    
        case 'No':
            return state.set('Mylogin',false)    
        case 'changeLogin':
            return state.set('login',action.value) 
        case 'loginout':
            return state.set('login',false)       
        default:
            return state
     }
    }
export default LoginReducer
