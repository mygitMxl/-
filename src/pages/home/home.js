import React, { PureComponent } from 'react'
import {HomeWrapper,HomeLeft, HomeRight,BackTop} from './style'
import List from './commont/List'
import Recommend from './commont/recommend'
import Topic from './commont/Topic'
import Writer from './commont/Writer'
import { connect } from 'react-redux'
import * as types from '../../redux/action/HomeAction'
 class Home extends PureComponent {
 
  render() {   
   console.log(this.props);
  const handleScrollTop=()=>{
     window.scrollTo(0,0)
   }
   
    return (
      <HomeWrapper>
       <HomeLeft> 
        <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/5067/5c739c1fd87cbe1352a16f575d2df32a43bea438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='大图片'/>
        <Topic/>{/* 专题部分 */}
        <List {...this.props}/>{/* 内容列表 */}
       </HomeLeft>
       <HomeRight>
        <Recommend/>{/* 推荐 */}
        <Writer/>{/* 作者 */}
       </HomeRight>
     	{ this.props.showScroll? <BackTop onClick={handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.getHomeInfo()
    this.bindEvents();
  }
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow());
	}
}
//...................................................................
const mapStateToProps=(state)=>{
  return{
    showScroll:state.getIn(['HomeReducer','showScroll'])
  }
}
export default connect(mapStateToProps,types)(Home)