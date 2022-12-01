import styled from "styled-components";
//整体框架
export const HomeWrapper =styled.div`
width:960px;
margin:0 auto;
overflow:hidden
`
export const HomeLeft =styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-img{
    width:625px;
    height:270px
}

`
export const HomeRight =styled.div`
width:275px;
float:right
padding-top:30px;
`
//..................................................
 //Topic区域
 export const TopicWrapper =styled.div`
 overflow:hidden;
 padding:20px 0 10px 0
 border-bottom:1px solid #f0f0f0
 margin-left:-18px
`
export const TopicItem =styled.div`
float: left;
height: 32px;
line-height: 32px;
margin-left: 18px;
margin-bottom: 18px;
padding-right: 10px
background: #f7f7f7;
font-size: 14px;
color: #000;    
border: 1px solid #dcdcdc;
border-radius: 4px;
.topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
}
`
//..........................................................
//List区域
export const ListItem=styled.div`
padding:20px 0;
overflow: hidden;
border-bottom:1px solid #f0f0f0
.pic{
    width:125px;
    height:100px;
    float:right
    border-radius:8px
}
`
export const ListInfo=styled.div`
width:500px
float:left
.title{
    line-height:27px;
     font-size:18px;
     font-weight:bold
     color:#333
}
.desc{
    line-height:24px;
    font-size:13px;
    color:#999
}
`
export const LoadingMore=styled.div`
width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`
//................................................
//recommend部分
export const RecommendWriper=styled.div`
height:480px
`
export const RecommendInfo=styled.div`
width:218px
margin-bottom:6px
.pic{
    height:39px
    cursor:pointer
}
`
export const RecommendMa=styled.div`
position:relative
width:218px
height:66px
border:1px solid #f0f0f0
margin-bottom:20px
cursor:pointer
`
export const RecommendMaBox=styled.div`
padding:7px 10px
.pic{
    width:50px
    height:50px
    float:left
    margin-right:7px
}
.phone{
font-size:14px
color:#333333
margin-top:6px
}
.create{
font-size:12px
color:#999999
margin-top:14px
}
`
export const RecommendBox2=styled.div`
position:absolute
top:-188px
left:25px
width:170px
height:170px
border:1px solid #ccc
background:white
border-radius:6px
.pic{
    width:150px
    height:150px
    float:left
    padding:7px 10px
}
.triangle{
    position:absolute
    bottom:-26px
    left:75px
    border-width:13px;
    border-style:solid;
    border-color:white transparent transparent transparent;
}
`
//.....................................................................
//Writer 组件
export const PlushConcern=styled.div`
color:#42c02e
position:absolute;          //它的父亲的定位是设置的行内样式
right:8px
font-size: 13px;
cursor:pointer
`
export  const ListALL=styled.div`
width: 100%;
height:29px
font-size: 13px;
color: #787878;
background-color: #f7f7f7;
border: 1px solid #dcdcdc;
border-radius: 4px;
line-height:29px
text-align:center
margin-top:20px
cursor:pointer
.all{
    margin-right:20px
    margin-top:2px
}
`
//.........................................
//回顶部
export const BackTop=styled.div`
position: fixed;
right: 100px;
bottom: 100px;
width: 60px;
height: 60px;
line-height: 60px;
text-align: center;
border: 1px solid #ccc;
font-size: 14px;
cursor:pointer
`