/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import ViewTitle from '../common/ViewTitle'
import { Table } from 'antd'
import Common from '../../common'
const UserColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '用户编号',
    dataIndex: 'id',
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '手机号',
    dataIndex: 'phoneNum',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <div>
        <a className='table-btn-view interval-line blue' name='view'>查看</a>
        <a className='table-btn-view interval-line green' name='edit'>编辑</a>
        <a className='table-btn-view red' name='delete'>删除</a>
      </div>
    ),
  }
];

function onChange (pagination, filters, sorter, extra) {
  // console.log('params', pagination, filters, sorter, extra);
}

export default class UserManage extends Component {

  state = {
    usersData: [],
    userModalVisible: false
  }

  componentDidMount () {
    this.getUsers({})
  }

  getUsers = (queryData) => {
    this.$axios.post('/user/usersInfo', queryData).then(res => {
      let usersData = this.dataInit(Common.setTableKey(res.data.playload, '_id'))
      this.setState({ usersData })
    }).catch(err => {
    })
  }

  showModal = () => {
    this.setState({ userModalVisible: true })
  }

  handleOk = () => {
    this.setState({ userModalVisible: false })
  }

  handleCancel = () => {
    this.setState({ userModalVisible: false })
  }

  dataInit = (data) => {
    for (let i in data) {
      if (data[i].gender === 0) {
        data[i].gender = '男'
      } else if (data[i].gender === 1) {
        data[i].gender = '女'
      } else {
        data[i].gender = '---'
      }
    }
    return data
  }

  render () {
    return (
      <div className='view-page'>
        <Modal title="Basic Modal"
          visible={this.state.userModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
        </Modal>
        <ViewTitle mainTitle='用户信息' subTitle='用户设置' />
        <div className='view-condition'>
          2333:<input />
        </div>
        <div className='view-table'>
          <div className='view-handle'>
            <Button>添加用户</Button>
          </div>
          <Table columns={UserColumns} dataSource={this.state.usersData} onChange={onChange}
            onRow={record => {
              return {
                onClick: event => {
                  this.showModal()
                  // console.log(event.target.name)
                  // console.log(record)
                }, // 点击行
                onDoubleClick: event => { },
                onContextMenu: event => { },
                onMouseEnter: event => { }, // 鼠标移入行
                onMouseLeave: event => { },
              };
            }} />
        </div>
      </div>
    )
  }
}
