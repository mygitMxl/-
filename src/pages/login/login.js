import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import{LoginWrapper,DownLoadAPP,LoginAPP,
  SuperBox,EnrollBox,LoginOrError,}  from './style'
import * as types from '../../redux/action/LoginAction'
import { Link } from 'react-router-dom'
import LoginComponents from './LoginComponents'
import RefAutoComplete from './RegisterCpmponent'
class Login extends PureComponent {
  render() {
    let{DengLu,ZhuCe,Mylogin}=this.props
return(
    <LoginWrapper>
    <Link to={'/'}><img  className='Logo' src={require('../home/commont/img/简书.png')} alt='1'/></Link>
   <SuperBox>{/* 用来装下载APP和登录模块 */}
    <DownLoadAPP>
      <img  className='phone' src={require('../home/commont/img/phone.png')}alt='2'/>
      <div className='dowloadbox'>
        <div className='dowload'>下载简书APP</div>
        <div className='erweima'>
          <img  className='pic' src={require('../home/commont/img/small二维码.png')} alt='3'/>
        </div>
      </div>
    </DownLoadAPP>
    <LoginAPP>
     <EnrollBox>{/* 内部盒子 */}
    <LoginOrError>{/* 登陆注册 */}
    <div className={Mylogin?'login change':'login'} onClick={DengLu}>登录</div>
      <div className={Mylogin?'Enroll':'Enroll change'}onClick={ZhuCe}>注册</div>
    </LoginOrError>
     {Mylogin?<LoginComponents {...this.props}/>:<RefAutoComplete/>}{/* 这里引入了登录组件和注册组件 */}
      </EnrollBox>
    </LoginAPP>
   </SuperBox>
    </LoginWrapper>
)
}
componentDidMount(){
this.props.HeaderShow()   
}
componentWillUnmount(){
this.props.HeaderHide()
}
}

const mapStateToProps=(state)=>{
  return{
    Mylogin:state.getIn(['LoginReducer','Mylogin'])
  }

}
export default connect(mapStateToProps,types)(Login)