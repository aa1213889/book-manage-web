import React from 'react';
import Login from './components/frame/Login'
import Frame from './components/frame/Frame'
import { Switch, Route } from 'react-router-dom'
import './axios'
import './index.css'
function App () {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Frame}></Route>
      </Switch>
    </div>
  )
}

export default App
