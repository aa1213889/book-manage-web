/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import ViewTitle from '../common/ViewTitle'
import { Table, Input, Popconfirm, Form, InputNumber } from 'antd'
import Common from '../../common'
import moment from 'moment'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

export default class BookManage extends Component {

  state = {
    usersData: [],
    userModalVisible: false
  }

  columns = [
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
      render: (record) => (
        <div>
          <a className='table-btn-view blue' onClick={() => this.view(record)}>查看</a>
          <a className='table-btn-view interval-line green' onClick={() => this.edit(record)}>编辑</a>
          <Popconfirm
            title="是否删除此书籍?"
            onConfirm={() => this.confirm(record.id)}
            okText="确定"
            cancelText="取消">
            <a className='table-btn-view interval-line red'>删除</a>
          </Popconfirm>
        </div>
      ),
    }
  ]

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

  view = (row) => {
    this.showModal()
    console.log(row)
  }

  edit = (row) => {
    console.log(row)
  }

  confirm = (id) => {
    console.log(id)
  }

  queryHandle = () => {
    const data = []
    data.name = this.name.input.value
    data.author = this.author.input.value
    data.type = this.type.input.value
    data.press = this.press.input.value
    const queryData = {}
    for (const i in data) {
      if (data[i] === '') continue
      queryData[i] = data[i]
    }
    this.getBooks({
      ...queryData
    })
  }

  dataInit = (data) => {
    for (const i in data) {
      data[i].date = moment(data[i].date).format('yyyy-MM-DD')
    }
    return data
  }

  onFinish = values => {
    console.log(values);
  }

  render () {
    return (
      <div className='view-page'>
        <Modal title="Basic Modal" visible={this.state.userModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'name']} label="书名：" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Modal>
        <ViewTitle mainTitle='图书管理' subTitle='图书信息' />
        <div className='view-condition'>
          <span>书名：</span>
          <Input placeholder="输入书名" ref={input => this.name = input} />
          <span className='last'>作者：</span>
          <Input placeholder="输入作者名称" ref={input => this.author = input} />
          <span className='last'>类型：</span>
          <Input placeholder="输入书籍类型" ref={input => this.type = input} />
          <span className='last'>出版社：</span>
          <Input placeholder="输入出版社名称" ref={input => this.press = input} />
          <Button className='last' type="primary" onClick={this.queryHandle}>查询</Button>
        </div>
        <div className='view-table'>
          <div className='view-handle'>
            <span>录入书籍</span>
          </div>
          <Table columns={this.columns} dataSource={this.state.usersData} />
        </div>
      </div>
    )
  }
}
