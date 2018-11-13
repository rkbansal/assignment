import React, { Component } from 'react';
import Dropdown, { DropdownItemGroupRadio, DropdownItemRadio, DropdownItem } from '@atlaskit/dropdown-menu';
import Avatar from '@atlaskit/avatar/dist/cjs/components/Avatar';
import Button from '@atlaskit/button/dist/cjs/components/Button';

export default class TopComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    handleLogout = () => {
        localStorage.setItem('token','invalid');
        window.location.reload();
    }

    render() {
        return (
        <div className="TopComponent">
            <div className="title">
                <div>
                    {this.props.title[0] || "WORKERS"}
                </div>
                <div>
                    {this.props.title[1] || "Overview"}
                </div>
            </div>
            <div className="select-site">
                <Dropdown triggerType="button" trigger="Select Site">
                    <DropdownItemGroupRadio id="sites" title="sites">
                        {this.props.sites.map((site, index)=> <span key={index}><DropdownItemRadio onClick={this.handleLogout} id={site}>{site || "No Site"}</DropdownItemRadio></span>)}
                    </DropdownItemGroupRadio>
                </Dropdown>
            </div>
            <div className="user-settings">
                <Avatar
                    name={this.props.user.name}
                    size="medium"
                    src={`https://api.adorable.io/avatars/24/${encodeURIComponent( this.props.user.name,)}.png`}
                    />
                    <Dropdown
                    isMixedMenu
                    triggerType="button"
                    trigger={this.props.user.name}>
                        <DropdownItem>Item 1</DropdownItem>
                        <DropdownItem>Item 2</DropdownItem>
                        <DropdownItem>Item 3</DropdownItem>
                    </Dropdown>
                    <Button appearance={'help'} onClick={this.handleLogout}>Sign Out</Button>
            </div>
        </div>);
    }
}