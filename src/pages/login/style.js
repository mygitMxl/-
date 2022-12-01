import styled from "styled-components";
//整体框架
export const LoginWrapper =styled.div`
position: absolute;
left: 0;
right: 0;
bottom: 0
top:0
background: #eee;
.Logo{
    position:fixed;
    top:50px;
    left:50px
    width:100px
}
`
export const SuperBox =styled.div`
width:800px;
height:600px
margin:5px auto
overflow:hidden
`
export const DownLoadAPP =styled.div`
float:left
.phone{
    width:350px
}
.dowloadbox{
    width:350px;
    height:60px
    overflow:hidden
    padding:30px 0 0 0
    .dowload{          /* 注意这里是子元素1 */
    float:left
    display: block;
    width: 252px;
    height: 46px;
    margin-right: 15px;
    background-color: #ea6f5a;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    line-height: 46px;
    cursor: pointer;
    text-align:center
    }
    .erweima{        /* 注意这里是子元素2 */
    float:right
    .pic{
      width:50px
      margin-right:24px
    }
    }
}
`
export const LoginAPP =styled.div`
float:left
width:400px
height:521px
margin-left:48px
background:white
overflow:hidden
`
export const EnrollBox =styled.div`
padding: 50px 50px 30px;
`
export const LoginOrError=styled.div`
width:300px
height:50px
margin-bottom:45px
.login{
   float:left
  padding:18px
   margin-left:60px
   color: #969696;
   font-size:15px;
   cursor:pointer
   }
   .Enroll{
    float:left
    padding:17px
    margin-left:40px
    font-size:15px;
    color: #969696;
    cursor:pointer
   }
   .change{
    font-weight: 700;
    font-size:15px;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a
   }
`
//.............................................................
//LoginComponents 组件
export const LoginComponentsWrapper=styled.div`
width:100%
height:320px
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
`
export const LoginInfo=styled.div`
width:100%
height:220px
position:relative
box-shandow:0 0 8px #e8e8e8
.user{
    position:absolute
    top:14px
    left:17px
    font-size:20px
    color:#969696
}
.pwd{
    position:absolute;
    top:68px
    left:17px
    font-size:20px
    color:#969696
}
.remember{
    font-size:15px
    color:#9696a4
}
.problem{
float:right
margin:right:10px
color:#9696a4
}
`
export const Input=styled.input`
display: block;
	width: 200px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px;
	margin: 10px auto;
	color:black;
    background-color:#f7f7f7
    border:1px solid #c8c8c8
`   
export const Check =styled.input`
margin-left:9px

`
export const Buttom=styled.button`
margin-top: 20px;
width: 100%;
padding: 9px 18px;
font-size: 18px;
border: none;
border-radius: 25px;
color: #fff;
background: #3194d0;
cursor: pointer;
outline: none;
display: block;
clear: both;
`
export const Socializing=styled.div`
height:70px
border-top:1px solid #b5b5b5
margin:0 20px 0 20px
position:relative
h6{
    position:absolute
    top:-4px
    left:66px
    width:120px
    text-align:center
    font-size:12px;
    color:#b5b5b5
    background:white
}
`
export const Ul=styled.ul`
overflow:hidden
margin-top:30px
li{
    float:left
    margin-right:20px
    .iconfont{
        font-size:35px
    }
}
`
//...............................................................
export const LoginInfo2=styled.div`
width:100%
height:220px
position:relative
box-shandow:0 0 8px #e8e8e8
.user{
    position:absolute
    top:14px
    left:17px
    font-size:20px
    color:#969696
}
.pwd{
    position:absolute;
    top:125px
    left:17px
    font-size:20px
    color:#969696
}
.phone{
    position:absolute;
    top:70px
    left:17px
    font-size:20px
    color:#969696
}
`
export const Buttom2=styled.button`
margin-top: 20px;
width: 100%;
padding: 9px 18px;
font-size: 18px;
border: none;
border-radius: 25px;
color: #fff;
background: #42c02e;
cursor: pointer;
outline: none;
display: block;
clear: both;
`
export const Socializing2=styled.div`
height:70px
margin:23px 20px 0 20px
h6{
     margin:0 auto
    left:66px
    width:220px
    text-align:center
    font-size:12px;
    color:#b5b5b5
}
`
export const U2=styled.ul`
overflow:hidden
margin-top:30px
li{
    float:left
    margin-right:20px
    .iconfont{
        font-size:35px
    }
}
`