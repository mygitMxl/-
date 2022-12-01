import React, { PureComponent  } from 'react'
import { connect } from 'react-redux'
import{RecommendWriper,RecommendInfo,RecommendMa,RecommendMaBox,RecommendBox2} from '../style'
import * as types  from '../../../redux/action/HomeAction'
 class recommend extends PureComponent  {
  render() {
    let{recommedlist,codeEnter,codeLeave,code}=this.props
    console.log(this.props);
/* ........................................................................................ */    
    function Recommenderweima(){
      return(
        <RecommendBox2>{/* 隐藏与显示 */}
        <img className='pic' src={require('./img/二维码.png')} alt=''/>
        <div className='triangle'></div>{/* 小三角 */}
        </RecommendBox2>
      )
    }
/* .................................................................................. */    
    return (
      <div>
        <RecommendWriper>
          {/* {
           recommedlist.map(item=>{
            let newitem=item.toJS()
            return(
              <RecommendInfo key={newitem.id}>
              <img src={(newitem.imgUrl)} alt=''/>
              {newitem.title}
             </RecommendInfo>
            )
           })
          } */}
{/* ................................................................................................ */}
{/* 图片区域 */}
        <RecommendInfo>
        <img  className='pic' src={require('./img/日更.png')} alt=''/>
        <img  className='pic' src={require('./img/会员.png')} alt=''/>
        <img  className='pic' src={require('./img/连载.png')} alt=''/>
        <img  className='pic' src={require('./img/版权.png')} alt=''/>
        </RecommendInfo>
{/* ................................................................................................. */}
{/* 二维码区域 */}
        <RecommendMa onMouseOver={codeEnter} onMouseLeave={codeLeave}>
        <RecommendMaBox>
        <img className='pic' src={require('./img/二维码.png')} alt=''/>
        <h3 className='phone'>下载简书手机APP{'>'}</h3>
        <h3 className='create'>随时随地发现和创作内容</h3>
        </RecommendMaBox>
         {code?Recommenderweima():''}{/* 这里是划入出现的大二维码 */}
        </RecommendMa>
        <img style={{width:'300px',height:'220px',marginBottom:'20px'}} src='https://unmc.bj.bcebos.com/1660814226153_627323266.jpg' alt=''/>{/* 广告 */}
        </RecommendWriper>
{/*................................................................................................. */}        
        </div>
    )
  }
}
const mapStateToProps=(state)=>{
 return{
  recommedlist:state.getIn(['HomeReducer','recommedlist']),
  code:state.getIn(['HomeReducer','code'])
 }
}
export default connect(mapStateToProps,types)(recommend)