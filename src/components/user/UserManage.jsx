/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import ViewTitle from '../common/ViewTitle'
import { Table } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: 'Action',
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

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  }
]

function onChange (pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

export default class UserManage extends Component {
  render () {
    return (
      <div className='view-page'>
        <ViewTitle mainTitle='用户信息' subTitle='用户设置' />
        <div className='view-condition'>
          2333:<input />
        </div>
        <div className='view-table'>
          <div className='view-handle'>
            <button>添加用户</button>
          </div>
          <Table columns={columns} dataSource={data} onChange={onChange}
            onRow={record => {
              return {
                onClick: event => {
                  console.log(event.target.name)
                  console.log(record)
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
