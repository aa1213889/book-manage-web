import React, { Component } from 'react';

class Frame extends Component {
  render () {
    return (
      <div className='frame'>
        <div className='frame-left'>
          111
       </div>
        <div className='frame-right'>
          <div className='frame-header'>222</div>
          <div className='frame-views'>333</div>
        </div>
      </div>
    );
  }
}

export default Frame;
