import React, { Component } from 'react'
import 'antd/dist/antd.css'
import Header from './Header'
import TreeList from './TreeList'
import Views from './Views'


class Frame extends Component {
  render () {
    return (
      <div className='frame'>
        <div className='frame-left'>
          <TreeList />
        </div>
        <div className='frame-right'>
          <Header />
          <Views />
        </div>
      </div>
    )
  }
}

export default Frame
