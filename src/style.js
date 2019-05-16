import styled, { createGlobalStyle } from 'styled-components';
import { Input } from '@rocketseat/unform';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, ul, li {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  input[type="checkbox"] {
    margin: 0;
    padding: 0;
    vertical-align: middle;
  }
`;

export const DefaultInput = styled(Input)`
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 8px 12px;
  outline: 0;
`;

export default GlobalStyle;
