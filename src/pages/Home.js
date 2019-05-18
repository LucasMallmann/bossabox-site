/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { Form } from '@rocketseat/unform';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ToolsActions } from '../store/ducks/tools';
import { Creators as ModalActions } from '../store/ducks/modal';

import {
  Header, Container, FormWrapper, FormInput, AddButton,
} from './HomeStyle';
import Card from '../components/Card/Card';
import AddTool from '../components/AddTool/AddTool';
import RemoveTool from '../components/RemoveTool/RemoveTool';

class Home extends Component {
  state = {
    tagsOnly: false,
  };

  componentDidMount() {
    const { fetchRequest } = this.props;
    fetchRequest('');
  }

  handleSubmit = (data) => {
    const { fetchRequest } = this.props;
    const { tagsOnly } = this.state;
    let queryString = '';
    if (data.tool) {
      if (tagsOnly) queryString = `?tags_like=${data.tool}`;
      else queryString = `?q=${data.tool}`;
    }
    fetchRequest(queryString);
  };

  onHandleAddTool = async () => {
    const { addTool } = this.props;
    await addTool();
  };

  render() {
    const { tagsOnly } = this.state;
    const { tools, modal } = this.props;

    let modalToRender = null;

    if (modal.id && !modal.add) modalToRender = <RemoveTool />;
    if (modal.add && !modal.id) modalToRender = <AddTool />;

    return (
      <Fragment>
        <Container>
          <Header>
            <h1>VUTTR</h1>
            <h3>Very Useful Tools to Remember</h3>
          </Header>

          <FormWrapper>
            <Form onSubmit={this.handleSubmit}>
              <FormInput name="tool" placeholder="Search..." />
              <input
                type="checkbox"
                name="Update Password"
                checked={tagsOnly}
                // eslint-disable-next-line react/no-access-state-in-setstate
                onChange={e => this.setState({ ...this.state, tagsOnly: e.target.checked })}
              />
              <small>search in tags only</small>
            </Form>
            <AddButton onClick={this.onHandleAddTool} type="button">
              Add
            </AddButton>
          </FormWrapper>

          {tools.map(tool => (
            <Card
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              link={tool.link}
              tags={tool.tags}
            />
          ))}

          {modalToRender}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools.data,
  loading: state.tools.loading,
  modal: state.modal,
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
)(Home);
