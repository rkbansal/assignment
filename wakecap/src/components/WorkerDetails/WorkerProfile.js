import React, { Component } from 'react';
import Avatar, { AvatarItem } from '@atlaskit/avatar';

export default class WorkerProfile extends Component {
    render() {
        return (
        <div className="worker-profile">
        <AvatarItem
            avatar={<Avatar src={`https://api.adorable.io/avatars/24/${encodeURIComponent( this.props.name,)}.png`} size="large"  />}
            primaryText={this.props.name}
            secondaryText={this.props.designation}
        />
        </div>
        );
    }
}