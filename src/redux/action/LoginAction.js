import axios from "axios"
//用于登录验证
export const Login=(account,password,)=>{
    return (dispatch) => {
        axios.post('https://www.fastmock.site/mock/16730e39be8ca262639484e6621af3e7/api/login',{
            username:account,
            password:password
        }).then(res=>{
            let result=res.data.info
            if(result.code==='10001'){
                dispatch(changeLogin())
                localStorage.setItem('token','tom')
            }else{
                alert(result.message)
            }
        })
	}
}
const changeLogin=()=>{
    return{
        type:'changeLogin',
        value:false
    }
}
//.......
//.............................
//用于Header组件隐藏与显示
export const HeaderShow=()=>{
 return{
    type:'headrShow'
 }
}
export const HeaderHide=()=>{
    return{
        type:'headHide'
    }
}
//............................
//用于登录和注册组件切换
export const DengLu=()=>{
    return{
        type:'Yes'
    }
}
export const ZhuCe=()=>{
    return{
        type:'No'
    }
}