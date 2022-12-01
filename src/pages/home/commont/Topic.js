import React, { PureComponent } from 'react'
import {TopicWrapper,TopicItem} from '../style'
import {connect} from 'react-redux'
 class Topic extends PureComponent  {
  render() {
    let{topicList}=this.props
    return (
      <div>
        <TopicWrapper>
         {
          topicList.map(item=>{
            return(
              <TopicItem key={item.get('id')}>
                <img className='topic-pic' src={item.get('imgUrl')} alt='img'/>{/* 注意点item现在是immutable对象,想要拿到immutable里的数据就得用get */}
                {item.get('title')}
              </TopicItem>
            )
          })
         }
        </TopicWrapper>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    topicList: state.getIn(['HomeReducer','topicList']),
  }
}
export default connect(mapStateToProps,null)(Topic) 