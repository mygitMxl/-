import React, { useRef } from 'react'
import { connect } from 'react-redux'
import {LoginComponentsWrapper,LoginInfo,Input,Check,Buttom,Socializing,Ul} from './style'
import * as types from '../../redux/action/LoginAction'
import {Link,} from 'react-router-dom'
import PropTypes from 'prop-types' /* 类型检查 */
function LoginComponents(props) {
    let{Login,login}=props
    console.log(props);
   const accout=useRef()
   const password=useRef()
   const tupush=()=>{
    if(!login||localStorage.getItem('token')){
      props.history.push('/')
    }
   }
  return (
    <LoginComponentsWrapper>
        <LoginInfo>
          <Input placeholder='手机号或邮箱' innerRef={accout}/>{/* innerRef是styled components专属，用ref需要用innerRef */}
          <Input type={'password'} placeholder='密码'  innerRef={password}/>
          <i className="iconfont user" >&#xe6a2;</i>
          <i className="iconfont pwd">&#xe623;</i>
          <Check type={'checkbox'}/>
          <span className='remember'>记住我</span>
          <span className='problem'>登录遇到问题？</span>
           <Link ><Buttom  onClick={()=>{Login(accout.current.value,password.current.value);tupush()}}>登录</Buttom></Link>
                                                                              {/* 这个小login是判断对错的 */}
        </LoginInfo>
        <Socializing>
        <h6>社交账号登录</h6>
        <Ul>
            <li>  <i className="iconfont " style={{marginLeft:'54px'}} >&#xe666;</i></li>
            <li>  <i className="iconfont " >&#xe667;</i></li>   
            <li>  <i className="iconfont " >&#xe637;</i></li>
        </Ul>
        </Socializing>
    </LoginComponentsWrapper>
  )
}
LoginComponents.contextTypes = {
    router: PropTypes.object/* 当父组件没有给子组件传路由的时候这也是跳转的方法 */
  }
  const mapStateToProps=(state)=>{
   return{
    login:state.getIn(['LoginReducer','login'])
   }
  }
export default  connect(mapStateToProps,types)(LoginComponents)
