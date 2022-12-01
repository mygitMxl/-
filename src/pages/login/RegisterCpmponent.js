
import React from 'react'
import { Link } from 'react-router-dom'
import {LoginComponentsWrapper,LoginInfo2,Input,Buttom2,Socializing2,U2} from './style'
export default function RegisterCpmponent() {
  return (
    <LoginComponentsWrapper>
        <LoginInfo2>
          <Input placeholder='你的昵称'/>
          <Input placeholder='手机号'/>
          <Input type={'password'} placeholder='设置密码'/>
          <i className="iconfont user" >&#xe6a2;</i>
          <i className="iconfont pwd">&#xe623;</i>
          <i className="iconfont phone">&#xe600;</i>
           <Buttom2 onClick={()=>{alert(2)}}>注册</Buttom2>
        </LoginInfo2>
        <Socializing2>
        <h6>点击 “注册” 即表示您同意并愿意遵守简书
            <Link style={{color:'#3194d0',listStyle:'none'}}>用户协议</Link>
            和
            <Link style={{color:'#3194d0',listStyle:'none'}}>隐私协议</Link>

        </h6>
        <U2>
        <li>  <i className="iconfont " style={{marginLeft:'90px'}}>&#xe637;</i></li>
        <li>  <i className="iconfont " >&#xe667;</i></li>   

        </U2>
        </Socializing2>
    </LoginComponentsWrapper>
  )
}
