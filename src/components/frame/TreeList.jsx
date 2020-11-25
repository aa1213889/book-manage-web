import React, { Component } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class TreeList extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render () {
    return (
      <div className='tree-list'>
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['5']} //默认选中的值
          defaultOpenKeys={['sub2']}  //默认展开的列表
          mode="inline">
          <Menu.Item key="1" icon={<MailOutlined />}>首页</Menu.Item>
          <SubMenu key="sub1" icon={<SettingOutlined />} title='图书管理' >
            <Menu.Item key="2">图书管理</Menu.Item>
            <Menu.Item key="3">图书类型</Menu.Item>
            <Menu.Item key="4">图书录入</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title='借阅管理' >
            <Menu.Item key="5">图书借阅</Menu.Item>
            <Menu.Item key="6">图书归还</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="用户管理">
            <Menu.Item key="7">用户设置</Menu.Item>
            <Menu.Item key="8">管理员设置</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
