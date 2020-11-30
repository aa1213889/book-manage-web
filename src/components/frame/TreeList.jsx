import React, { Component } from 'react'
import { Menu } from 'antd';
import { SettingFilled, CalendarFilled, HomeFilled, BookFilled, AntDesignOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu;
export default class TreeList extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render () {
    return (
      <div className='tree-list'>
        <div className='tree-header flex-center'>
          <AntDesignOutlined className='tree-header-icon' />
        </div>
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']} //默认选中的值
          defaultOpenKeys={['sub2']}  //默认展开的列表
          mode="inline">
          <Menu.Item key="1" icon={<HomeFilled />}>
            < NavLink to='/home'>首页</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<BookFilled />} title='图书管理' >
            <Menu.Item key="2">< NavLink to='/book/manage'>图书信息</NavLink></Menu.Item>
            <Menu.Item key="3">< NavLink to='/book/type'>图书类型</NavLink></Menu.Item>
            <Menu.Item key="4">< NavLink to='/book/record'>图书录入</NavLink></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<CalendarFilled />} title='借阅管理' >
            <Menu.Item key="5">< NavLink to='/borrow/lend'>图书借阅</NavLink></Menu.Item>
            <Menu.Item key="6">< NavLink to='/borrow/return'>图书归还</NavLink></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<SettingFilled />} title="用户信息">
            <Menu.Item key="7">
              < NavLink to='/user/info'>用户设置</NavLink>
            </Menu.Item>
            <Menu.Item key="8">
              < NavLink to='/user/admin'>管理员设置</NavLink></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
