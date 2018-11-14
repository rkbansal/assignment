import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import Hamburger from '../content/hamburger-icon.png';

export default class ListModal extends Component{
    constructor(props){
      super(props);
      this.state = {
        isOpen: false
      }
    }

    open = () => this.setState({ isOpen: true });
    close = () => this.setState({ isOpen: false });

    drawerItems = this.props.data.map((ele, key) => {
      return (
        <React.Fragment key={key}>
          <div onClick={this.close}>
            <Link to={ele.path}>
              <li className="sidebar-item">
                {ele.name}
              </li>
            </Link>
          </div>
        </React.Fragment>);
    });
  
    render() {
      const {isOpen} = this.state;
      const actions = [
        { text: 'Close', onClick: this.close }
      ];

      return (
        <div className="modal-with-button">
          <button className="hamburger-btn" onClick={this.open}><img className="hamburger-img" src={Hamburger}/></button>
          <ModalTransition>
            {isOpen && (
              <Modal actions={actions} onClose={this.close} heading="Menu">
                {this.drawerItems}
              </Modal>
            )}
          </ModalTransition>
        </div>
      );
    }
  }