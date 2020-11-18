import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import '../../assets/css/frame.sass'

class Login extends Component {
  loginHandle = () => {
    this.props.history.push('/home')
  }
  render () {
    return (
      <div>
        <h1 className='nav'>我是Login</h1>
        <Button color="primary" onClick={this.loginHandle}>Hello World</Button>
      </div>
    );
  }
}

export default Login
