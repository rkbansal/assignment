import React, { Component } from 'react';
import Helmet from '../../content/helmet.png';
import Identification from '../../content/identification.png';
import EmojiFrequentIcon from '@atlaskit/icon/glyph/emoji/frequent';
import HipchatMediaAttachmentCountIcon from '@atlaskit/icon/glyph/hipchat/media-attachment-count';
export default class HelmetInfoBox extends Component {
    render () {
        return (
        <div className="helmet-info-box">
            <div className="flex-row-only flex-centeralize">
                <span className="helmet-icon-container"><img src={Helmet} className="helmet-info-icon"/></span><span className="font-14 helmet-id">{this.props.id}</span><HipchatMediaAttachmentCountIcon className="status_dot" primaryColor={this.props.status}/>
            </div>
            <div className="flex-row-only flex-centeralize">
            <span className="helmet-icon-container"><img src={Identification} className="helmet-info-icon"/></span><span className="font-14 helmet-id">{this.props.in}</span>
            </div>
            <div className="flex-row-only flex-centeralize">
            <span className="helmet-icon-container"><EmojiFrequentIcon className="helmet-info-icon"/></span><span className="font-14 helmet-id">{this.props.time_ago}</span>
            </div>
        </div>);
    }
}
