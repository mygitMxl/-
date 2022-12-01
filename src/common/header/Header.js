import React,{Component} from 'react'
import {
  HeaderWrapper,Logo,Nav,NavItem,
  NavSearch,Addition,Button,SearchWrapper,
  SearchInfo,SearchInfoTitle,SearchInfoSwitch,
  SearchInfoItem,SearchInfoList
} from './style'
import {connect} from 'react-redux'
import{CSSTransition}from 'react-transition-group'//动画组件
import * as types  from '../../redux/action/SearchAction'
import {Link} from 'react-router-dom'
class Header extends Component {
  render(){
    console.log(this.props);
    let{focused,handleFlocus,handleBlur,getList,list,page,MouseEnter,MouseLeave,mouseIn,changePage,totalPage,myHeader,login,logout}=this.props
    console.log(this.props);
    console.log(login);
    //.....................................................
    const getListArea=(focused)=>{
      const pagelist=[]
      const newList=list.toJS()//因为immutable没法写下标,所以转化成js,
        if(newList.length){
          for(let i =(page-1)*10;i<page*10;i++){//初始条数是第0条到第9条,第二页显示,10条到19条,以此类推
            pagelist.push(
             <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>//newList[i]在获取数据之间是undefined.key值是undefined会有警告,只需设置判断条件,newList有数据时才生效
            )
        }
      }
      if(focused||mouseIn){
        return(
          <SearchInfo onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}> {/* 搜索出现的下拉菜单, */}
          <SearchInfoTitle>{/* 标题 */}
           热门搜索
           <SearchInfoSwitch onClick={()=>{changePage(page,totalPage,this.spinIco)}}>{/* 换一换组件 */}
           <i ref={(icon)=>{this.spinIco=icon}} className="iconfont spin">&#xe653;</i>{/* this.spinIco=icon}整个 i 标签 */}
            换一批
           </SearchInfoSwitch>
           <SearchInfoList>{/*放置小框框 */}
           {pagelist}
            </SearchInfoList>
          </SearchInfoTitle>
          </SearchInfo>
        )
      }else{
        return null
      }
    }
 //........................................................................
 const logouts=()=>{
  alert('您已退出')
  localStorage.removeItem('token');
  logout()
  this.setState();/* 修改字样后,不会重新render,可通过this.setstate,刷新试图*/
 }
//.......................................................................................
const Header=()=>{
  return(
    <HeaderWrapper>
    <Link to='/'><Logo/></Link>
    <Nav>
      <NavItem className='left active'>首页</NavItem>
      <NavItem className='left'>下载</NavItem>
      {!localStorage.getItem('token')?
      <Link to={'/login'}> <NavItem  className='right'>登录</NavItem></Link>:
      <Link><NavItem className='right' onClick={logouts} style={{cursor:'pointer'}}>退出</NavItem></Link> 
      }
      <NavItem  className='right'>
      <i className="iconfont">&#xe636;</i>
      </NavItem>
     <SearchWrapper>{/* 搜索框的盒子 */}
     <CSSTransition timeout={200} in={focused} classNames='slide'>{/* slide左右的一个滑动 */}
     <NavSearch className={focused?'focused':''}
      onFocus={()=>{handleFlocus(list);getList()}}//点击搜索框触发
      onBlur={handleBlur}
      >
      </NavSearch>
     </CSSTransition>
      <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe848;</i>
      { getListArea(focused)}{/* 弹出的热门搜索 */}
      </SearchWrapper>
    </Nav>
    <Addition>
    <Link to={'/write'}>
    <Button className='writing'>
          <i className="iconfont">&#xe6b2;</i>
          写文章
        </Button>
    </Link>
     <Link to={'/login'}><Button className='reg' > 注册</Button></Link>
    </Addition>
  </HeaderWrapper>
  )
}
    return (
    <div>
   {myHeader?Header():''}{/* Header组件的隐藏与显示 */}
    </div>
    )
  }
  }
const mapStateToProps=(state)=>{
  console.log(state);
 return{
  focused: state.getIn(['HeaerRducer', 'focused']),
  list:state.getIn(['HeaerRducer','list']),
  page:state.getIn(['HeaerRducer','page']),
	mouseIn: state.getIn(['HeaerRducer','mousein']),
  totalPage: state.getIn(['HeaerRducer','totalPage']),
  myHeader:state.getIn(['LoginReducer','myHeader']),
  login:state.getIn(['LoginReducer','login'])        
 }
}
export default connect( mapStateToProps,types)(Header)