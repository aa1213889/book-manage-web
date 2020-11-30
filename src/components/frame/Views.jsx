import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../home'
import AdminManage from '../user/AdminManage'
import UserManage from '../user/UserManage'
import BookManage from '../book/BookManage'
export default class Views extends Component {
  render () {
    return (
      <div className='frame-views'>
        <Switch>HomePage
          <Route path='/home' component={HomePage} />
          <Route path='/book/manage' component={BookManage} />
          <Route path='/user/admin' component={AdminManage} />
          <Route path='/user/info' component={UserManage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    )
  }
}
