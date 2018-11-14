import React, { Component } from 'react';
export default class IconWithLabel extends Component {
    render() {
        return(
            <div className="history-cards">
                <div>
                    <this.props.icon size="large"/>
                </div>
                <div>
                    <div className="heading">
                        {this.props.heading}
                    </div>
                    <div className="body">
                        {this.props.body}
                    </div>
                </div>
            </div>
        );
    }
}