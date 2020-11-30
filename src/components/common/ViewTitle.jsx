import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import '../../assets/css/view.sass'
class ViewTitle extends Component {

  render () {
    return (
      <div className='view-title'>
        <Breadcrumb>
          <Breadcrumb.Item>{this.props.mainTitle}</Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.subTitle}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default ViewTitle
