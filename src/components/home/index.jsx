import React, { Component } from 'react'
import '../../assets/css/home.sass'
export default class index extends Component {
  render () {
    return (
      <div className='home-page'>
        <div className='page-one'>
          <div className='page-one-one home-container'></div>
          <div className='page-one-two home-container'></div>
          <div className='page-one-two home-container'></div>
          <div className='page-one-two home-container'></div>
        </div>
        <div className='page-two'>
          <div className='page-two-one home-container'></div>
          <div className='page-two-two home-container'></div>
        </div>
        <div className='page-three'>
          <div className='page-three-one home-container'></div>
          <div className='page-three-two home-container'></div>
        </div>
      </div>
    )
  }
}
