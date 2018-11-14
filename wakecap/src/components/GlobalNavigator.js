import React from 'react';
import { Link, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './HOC';
import Button from '@atlaskit/button/dist/cjs/components/Button';
 const GlobalNavigator = (props) => {

 const handleLogout = () => {
    localStorage.setItem('token','invalid');
    window.location.reload();
  }
  
  const list = props.list.map((ele, key) => {
                  return (
                    <React.Fragment key={key}>
                      <Link to={ele.path}>
                        <li className="sidebar-item">
                          {ele.name}
                        </li>
                      </Link>
                    </React.Fragment>);
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
        <div><Button shouldFitContainer appearance={'help'} onClick={handleLogout}>Sign Out</Button></div>
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