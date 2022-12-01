
import React, { PureComponent  } from 'react'
import { connect } from 'react-redux'
import{ListItem,ListInfo,LoadingMore} from '../style'
import * as types from '../../../redux/action/HomeAction'
import { Link } from 'react-router-dom'
 class list extends PureComponent  {
  render() {
    let {articleList,getMoreList,page,}=this.props
     console.log(this.props);
    return (
    <div>
     {
      articleList.map((item,index)=>{
       return(
        <Link key={index} to={'/detail/'+item.get('id')}>
        <ListItem  >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
					</ListItem>
          </Link>
       )
      })
     }
        <LoadingMore onClick={()=>getMoreList(page)}>更多文字</LoadingMore>
  </div>
    )
  }
}
const mapStateToProps=(state)=>{
  console.log(state);
  return{
    articleList:state.getIn(['HomeReducer','articleList']),
    page:state.getIn(['HomeReducer',' articlePage'])
  }
}
export default connect( mapStateToProps,types)( list )