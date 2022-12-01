import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper,Header,Content} from './style'
import * as types from '../../redux/action/DetailAction'
class Detail extends PureComponent {
  render() {
    let{title,content}=this.props
    console.log(this.props);
    return (
      <div>
        <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}}/>{/* 可解析标签 */}
        </DetailWrapper>
      </div>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapStateToProps=(state)=>{
  return{
    title:state.getIn(['DetailReducer','title']),
    content:state.getIn(['DetailReducer','content'])
  }

}
export default connect(mapStateToProps,types)(Detail)