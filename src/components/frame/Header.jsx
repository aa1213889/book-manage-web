import React, { Component } from 'react'
import { UserAddOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Button } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

class Header extends Component {
  render () {
    return (
      <div className="frame-header">
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <Button icon={<UserAddOutlined />}>bottomLeft</Button>
        </Dropdown>
      </div>
    );
  }
}

export default Header
