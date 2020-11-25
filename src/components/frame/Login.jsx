import React, { Component } from 'react'
import '../../assets/css/frame.sass'

class Login extends Component {
  loginHandle = () => {
    this.props.history.push('/home')
  }
  render () {
    return (
      <div>
        <h1 className='nav'>我是Login</h1>
        <button color="primary" onClick={this.loginHandle}>Hello World</button>
      </div>
    );
  }
}

export default Login
