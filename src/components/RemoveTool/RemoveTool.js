import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import './RemoveToolStyle.css';

Modal.setAppElement(document.getElementById('root'));

class RemoveTool extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { visible } = this.props.modal;
    return (
      <Fragment>
        <Modal
          isOpen={visible}
          onRequestClose={this.handleHideModal}
          contentLabel="Add User Modal"
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <h1>modal</h1>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(RemoveTool);
