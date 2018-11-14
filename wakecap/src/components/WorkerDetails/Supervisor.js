import React, { Component } from 'react';
import Avatar from '@atlaskit/avatar';

export default class Supervisor extends Component {
    render() {
        return (
            <div className="supervisor-profile">
                <div>
                <div className="supervisor-name">
                    {this.props.name}
                </div>
                <div className="supervisor-designation">
                    {this.props.designation}
                </div>
                </div>
                <Avatar
                name={this.props.name}
                size="medium"
                src={`https://api.adorable.io/avatars/24/${encodeURIComponent( this.props.name,)}.png`}
                />
            </div>
        )
    }
}
