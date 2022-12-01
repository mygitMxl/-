
import { fromJS } from "immutable"/* 引入immmutable的意义防止外部修改状态 */
const defaultStae=fromJS({
    topicList: [],
    articleList:[
    ],
    recommedlist:[
        // {
        // id:1,
        // imgUrl:'../../pages/home/commont/img/日更.png',
        // title:'日更'
        // },
        // {
        //  id:2,
        //  imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
        //  title:'会员'
        // },
        // {
        //  id:3,
        //  imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
        //  title:'连载'
        // },
        // {
        //  id:4,
        //  imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
        //  title:'版权'
        // },
],

       code:false,
       articlePage:1,
       showScroll:false
}
    )//stae初始值
 const HomeReducer=(state=defaultStae,action={})=>{
     switch(action.type){
          case 'codeEnter':
            return state.set('code',true)
          case 'codeLeave':
            return state.set('code',false) 
          case 'change_hone_data':
         return  state.merge({
                    topicList: fromJS(action.topicList),/* 不转成immutable组件就无法接 */
                    articleList: fromJS(action.articleList),
                    recommendList: fromJS(action.recommendList)
                })
           case 'addList':
             return state.merge({
              'articleList':state.get('articleList').concat(action.list),          /* 注意获取之前的state,用到是state */    /* concat 数组的API 连接两个数组 */
              'articlePage':action.nextPage
             })
             case 'toggleTopShow':
              return state.set('showScroll',action.payload)
        default: 
            return state
     }
    }
export default HomeReducer
