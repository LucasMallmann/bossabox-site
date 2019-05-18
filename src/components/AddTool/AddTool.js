import React from 'react';
import { Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../Modal/Modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Input as StyledInput, Form } from './AddToolStyle';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  link: Yup.string().required('Link is required'),
  description: Yup.string().required('Description is required'),
  tags: Yup.string().required('Tags are required'),
});

const AddTool = (props) => {
  const { tools, addRequest, hideModal } = props;
  const handleSubmit = (data) => {
    const requestData = { ...data, tags: data.tags.split(' ') };
    const {
      title, description, link, tags,
    } = requestData;
    addRequest(title, link, description, tags);
    hideModal();
  };

  return (
    <Modal>
      <Form onSubmit={handleSubmit} schema={schema}>
        <h3>Add Tool</h3>

        <StyledInput name="title" placeholder="Title" />
        <StyledInput name="link" placeholder="Link" />
        <Textarea name="description" placeholder="Description" rows="3" colums="20" />
        <StyledInput name="tags" placeholder="Tags" />
        <button type="submit">
          {tools.loading ? <FontAwesomeIcon icon="circle-notch" spin /> : 'Add Tool'}
        </button>
      </Form>
    </Modal>
  );
};

AddTool.propTypes = {
  tools: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  addRequest: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ToolsActions,
    ...ModalActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTool);
