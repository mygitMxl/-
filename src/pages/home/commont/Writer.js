import React,{ useEffect,useState} from 'react'
import { Image, List } from 'antd-mobile'
import axios from 'axios'
import {ListALL,PlushConcern} from '../style'
export default function Writer() {
  const [writers, setwriters] = useState([])
  useEffect(() => {
   axios.get('https://www.fastmock.site/mock/16730e39be8ca262639484e6621af3e7/api/wri')//使用的fastmock写的mock数据
   .then(res=>{
    setwriters(res.data.articleList)
   })
  
  }, [])
  return (
    <div>
       <List header='推荐作者' >
      {writers.map(item => (
        <List.Item
        style={{position:'relative'}}
          key={item.id}
          prefix={
            <Image
              src={item.imgUrl}
              style={{ borderRadius: 20,border:'1px solid #ddd'}}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={
            <div>
              <p style={{color:'black',fontSize:'17px'}}>{item.title}</p>
              <h3>{item.desc}</h3>
            </div>

          }
        >
          <PlushConcern>+关注</PlushConcern>
        </List.Item>
      ))}
       <ListALL><div className='all'>查看全部</div></ListALL>
    </List>
    </div>
  )
}
