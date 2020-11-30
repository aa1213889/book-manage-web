import React, { Component } from 'react'
import ViewTitle from '../common/ViewTitle'
export default class UserManage extends Component {
  render () {
    return (
      <div className='view-page'>
        <ViewTitle mainTitle='用户信息' subTitle='用户设置' />
        <div className='view-condition'>
          2333:<input />
        </div>
        <div className='view-table'>

        </div>
      </div>
    )
  }
}
