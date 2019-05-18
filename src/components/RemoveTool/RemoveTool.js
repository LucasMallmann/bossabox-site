import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../Modal/Modal';

import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import {
  Container, DangerButton, BtnContainer, CancelButton,
} from './RemoveToolStyle';

class RemoveTool extends Component {
  state = {
    tool: {},
  };

  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      id: PropTypes.number,
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
    removeRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { tools, modal } = this.props;
    const tool = tools.data.find(t => t.id === modal.id);
    this.setState({ tool });
  }

  onCloseModal = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  onDeleteHandle = () => {
    const { modal, removeRequest, hideModal } = this.props;
    removeRequest(modal.id);
    hideModal();
  };

  render() {
    const { tool } = this.state;
    const { tools } = this.props;
    return (
      <Fragment>
        <Modal>
          <Container>
            <div>
              <h1>Remove Tool</h1>
              <p>
                Are you sure you want to remove
                {' '}
                <strong>
                  {tool.title}
?
                </strong>
              </p>
            </div>
            <BtnContainer>
              <CancelButton onClick={this.onCloseModal}>Cancel</CancelButton>
              <DangerButton onClick={this.onDeleteHandle}>
                {tools.loading ? <FontAwesomeIcon icon="circle-notch" spin /> : 'Remove'}
              </DangerButton>
            </BtnContainer>
          </Container>
        </Modal>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...ToolsActions,
  },
  dispatch,
);

const mapStateToProps = state => ({
  modal: state.modal,
  tools: state.tools,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveTool);
