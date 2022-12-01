import React, { Component } from 'react'
import Header from './common/header/Header'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Redirect, Route,} from 'react-router-dom';
import Home from './pages/home/home'
import Detail from './pages/detail/detail';
import Login from  './pages/login/login'
import Write from './pages/write/write';
export default class App extends Component {
  render() {
    return (
        < Provider store={store}>
          <BrowserRouter>
          < Header/>
          <Route path='/' exact  component={Home}/>
          <Route path='/detail/:id'component={Detail}/>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/write'} exact render={()=>{
          return( localStorage.getItem('token')?<Write/>:<Redirect to={'/login'}/>)
     
          }}/>
          </BrowserRouter>
        </Provider>
    )
  }
}
