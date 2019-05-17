/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Container, Remove } from './CardStyle';

const Card = (props) => {
  const onClickTag = (tag) => {
    const { fetchRequest } = props;
    const search = `?tags_like=${tag}`;
    fetchRequest(search);
  };

  const {
    id, title, link, description, tags, showModal,
  } = props;
  return (
    <Container>
      <div>
        <header>
          <a href={link}>{title}</a>
          <Remove onClick={() => showModal(id)}>
            <FontAwesomeIcon icon="times-circle" />
            <small>Remove</small>
          </Remove>
        </header>

        <p>{description}</p>
      </div>

      <ul>
        {tags.map((tag, i) => (
          <li key={i} onClick={() => onClickTag(tag)}>
            #
            {tag}
          </li>
        ))}
      </ul>
    </Container>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  fetchRequest: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  // hideModal: PropTypes.func,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Card.defaultProps = {
  link: '',
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ToolsActions,
    ...ModalActions,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Card);
