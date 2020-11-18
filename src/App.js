import Login from './components/frame/Login'
import Frame from './components/frame/Frame'
import { Switch, Route, Redirect } from 'react-router-dom'
function App () {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Frame}></Route>
        <Redirect to='/login' />
      </Switch>
    </div>
  );
}

export default App
