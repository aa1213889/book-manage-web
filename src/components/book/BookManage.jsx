/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import ViewTitle from '../common/ViewTitle'
import { Table, Input } from 'antd'
import Common from '../../common'



const UserColumns = [
  {
    title: '书名',
    dataIndex: 'name',
  },
  {
    title: '作者',
    dataIndex: 'author',
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '出版社',
    dataIndex: 'press',
  },
  {
    title: '录入日期',
    dataIndex: 'date',
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

export default class BookManage extends Component {

  state = {
    usersData: [],
    userModalVisible: false,
    form: {
      name: '',
      author: '',
      type: '',
      press: ''
    }
  }

  componentDidMount () {
    this.getBooks({})
  }

  getBooks = (queryData) => {
    this.$axios.post('/book/query', queryData).then(res => {
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

  getName = (e) => {
    this.setState({ form: Object.assign({}, this.state.form, { name: e.target.value }) })
    console.log(this.state.form)
  }

  queryHandle = () => {
    let queryData = {}
    for (const i in this.state.form) {
      if (this.state.form[i] === '') continue
      queryData[i] = this.state.form[i]
    }
    console.log(queryData)
    this.getBooks({
      ...queryData
    })
  }

  dataInit = (data) => {
    // for (let i in data) {
    //   if (data[i].gender === 0) {
    //     data[i].gender = '男'
    //   } else if (data[i].gender === 1) {
    //     data[i].gender = '女'
    //   } else {
    //     data[i].gender = '---'
    //   }
    // }
    return data
  }

  render () {
    return (
      <div className='view-page'>
        <Modal title="Basic Modal"
          visible={this.state.userModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
        </Modal>
        <ViewTitle mainTitle='图书管理' subTitle='图书信息' />
        <div className='view-condition'>
          <span>书名：</span>
          <Input placeholder="输入书名" onChange={this.getName} />
          <span className='last'>作者：</span>
          <Input placeholder="输入作者名称" onChange={this.getAuthor} />
          <span className='last'>类型：</span>
          <Input placeholder="输入书籍类型" onChange={this.gettype} />
          <span className='last'>出版社：</span>
          <Input placeholder="输入出版社名称" onChange={this.getPress} />
          <Button className='last' type="primary" onClick={this.queryHandle}>查询</Button>
        </div>
        <div className='view-table'>
          <div className='view-handle'>
            <span>录入书籍</span>
          </div>
          <Table columns={UserColumns} dataSource={this.state.usersData} onChange={onChange}
            onRow={record => {
              return {
                onClick: event => {
                  this.showModal()
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
