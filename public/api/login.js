import Mock from 'mock.js'
Mock.mock('check.php','post',(options)=>{
    let data=JSON.parse(options.body)
    let username=data.username
    let password=data.password
    if(username==='tom'&&password==='123'){
     return Mock.mock({'status':'10001','message':'ok'})
    }else{
     return Mock.mock({'status':'10002','message':'用户名或密码失效'}) 
    }
})