import React, { Component } from 'react';
import Dropdown, { DropdownItemGroupRadio, DropdownItemRadio, DropdownItem } from '@atlaskit/dropdown-menu';
import Avatar from '@atlaskit/avatar/dist/cjs/components/Avatar';

export default class TopComponent extends Component {
    render() {
        return (
        <div className="TopComponent">
            <div className="title">
                <div className="title-1">
                    {this.props.title[0] || "WORKERS"}
                </div>
                <div className="title-2">
                    {this.props.title[1] || "Overview"}
                </div>
            </div>
            <div className="select-site">
                <Dropdown
                    triggerType="button"
                    trigger="Select Site"
                    shouldFlip={true}
                    position="bottom left"
                >
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
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem>Option 3</DropdownItem>
                    </Dropdown>
            </div>
        </div>);
    }
}