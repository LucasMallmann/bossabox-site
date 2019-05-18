/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactModal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as ModalActions } from '../../store/ducks/modal';

import './ModalStyle.css';

const Modal = (props) => {
  const { modal, hideModal } = props;
  return (
    <ReactModal
      isOpen={modal.visible}
      onRequestClose={() => hideModal()}
      contentLabel="Add User Modal"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      {props.children}
    </ReactModal>
  );
};

Modal.propTypes = {
  modal: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    id: PropTypes.number,
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  hideModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

const mapStateToProps = state => ({
  modal: state.modal,
  tools: state.tools,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
