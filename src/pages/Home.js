/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component, Fragment } from 'react';
import { Form } from '@rocketseat/unform';

import {
  Header, Container, FormWrapper, FormInput,
} from './HomeStyle';

class Home extends Component {
  state = {
    tools: [],
    checkboxChecked: false,
  };

  handleSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Header>
            <h1>VUTTR</h1>
            <h3>Very Useful Tools to Remember</h3>
          </Header>

          <FormWrapper>
            <Form onSubmit={this.handleSubmit}>
              <FormInput name="tool" placeholder="Search for a tool" />
              <input
                type="checkbox"
                name="Update Password"
                checked={this.state.checkboxChecked}
                onChange={e => this.setState({ ...this.state, checkboxChecked: e.target.checked })}
              />
              <span>search in tags only</span>
            </Form>

            <button type="button">+ Add</button>
          </FormWrapper>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
