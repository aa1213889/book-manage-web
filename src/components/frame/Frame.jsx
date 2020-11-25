import React, { Component } from 'react'
import 'antd/dist/antd.css'
import Header from './Header'
import TreeList from './TreeList'
class Frame extends Component {
  render () {
    return (
      <div className='frame'>
        <div className='frame-left'>
          <TreeList />
        </div>
        <div className='frame-right'>
          <Header />
          <div className='frame-views'>333</div>
        </div>
      </div>
    )
  }
}

export default Frame
