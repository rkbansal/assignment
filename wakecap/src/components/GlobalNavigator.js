import React from 'react';
import {Link, Switch} from 'react-router-dom';
import PrivateRoute from './HOC';
import { Redirect } from 'react-router-dom';
 const GlobalNavigator = (props) => {

  const list = props.list.map((ele, key) => {
                  return (
                  <li key={key} className="sidebar-item">
                    <Link to={ele.path}>{ele.name}</Link>
                  </li>);
                });

  const routes = props.list.map((ele, key) => {
    if(!ele.path === '/'){
      return (<PrivateRoute path={ele.path} key={key} component={ele.component} to='/login'/>);
    }else{
      return (<PrivateRoute exact path={ele.path} key={key} component={ele.component} to='/login'/>);
    }
  });

  return (
    <React.Fragment>
      <div className="sidebar-list">
        <ul className="routes-list">
          {list}
        </ul>
      </div>
      <div className="right-panel">
      <Switch>
        {routes}
        <Redirect to="/" />
      </Switch>
      </div>
    </React.Fragment>);
 };

export default GlobalNavigator;