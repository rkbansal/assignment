import React from 'react';
import Button from '@atlaskit/button';
import {AppConsumer} from '../Provider/AppContext';
import TopComponent from './TopComponent';
import GlobalNavigator from './GlobalNavigator';
import Logo from '../content/wakecap.png';
import DummyComponent from './DummyComponent';
import Workers from './Workers';
import ListModal from './ListModal';
const list = [
    {
      "name": "Dashboard",
      "path": "/dashboard",
      "component": DummyComponent
    },
    {
      "name": "Workers",
      "path": "/",
      "component": Workers
    },
    {
      "name": "Zones",
      "path": "/zones",
      "component": DummyComponent
    },
    {
      "name": "Assign Helmets",
      "path": "/assign_helmets",
      "component": DummyComponent
    },
    {
      "name": "Reports",
      "path": "/reports",
      "component": DummyComponent
    },
    {
      "name": "Manage Site",
      "path": "/manage_site",
      "component": DummyComponent
    },
    {
      "name": "Settings",
      "path": "/settings",
      "component": DummyComponent
    },
  ];

  const handleLogout = () => {
    localStorage.setItem('token','invalid');
    window.location.reload();
  }

const WorkSpace=(props)=>{
  return(
    <React.Fragment>
        <div className="workspace">
            <div className="company-logo">
              <div className="drawer-button">
                <ListModal data={list}/>
              </div>
                <img className="company-logo-png" src={Logo} />
                <div className="signout-mobile">
                  <Button appearance={"help"} onClick={handleLogout}>Sign Out</Button>
                </div>
            </div>
            <AppConsumer>
            {(context)=>{
                return <TopComponent sites={context.sites} title={["WORKERS", "Overview"]} user={context.user}/>
            }}
            </AppConsumer>
            <GlobalNavigator list={list}/>
        </div>
    </React.Fragment>
  );
};

export default WorkSpace;