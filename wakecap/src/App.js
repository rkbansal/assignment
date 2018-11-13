import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AppProvider } from './Provider/AppContext';
import Login from './components/Login';
import WorkSpace from './components/Workspace';
import PrivateRoute from './components/HOC';

class App extends Component {

  constructor(props){
    super(props);
    localStorage.setItem('email','test@test.com');
    localStorage.setItem('password','1234');
    if(!localStorage.getItem('token')) {
      localStorage.setItem('token','invalid');
    }
  }

  render() {
    return (
      <AppProvider>
        <Router>
        <div className="App">
            <Switch>
              <PrivateRoute path='/login' component={Login} to="/" noRedirect={true}/>}/>
              <Route render={(props) => <WorkSpace {...props}/>}/>
            </Switch>
          </div>
          </Router>
      </AppProvider>
    );
  }
}
export default App;
