import styled from 'styled-components';
import { Form as RocketForm } from '@rocketseat/unform';

import { DefaultInput } from '../../style';

export const Form = styled(RocketForm)`
  display: flex;
  flex-direction: column;

  span {
    color: #f95e5a;
    font-size: 12px;
    font-weight: bold;
  }

  textarea {
    padding: 8px 12px;
    font-family: inherit;
    font-size: 14px;
    background: #f5f4f6;
    border: 1px solid #dedce1;
    margin-top: 12px;
  }

  h3 {
    margin: 16px auto;
    font-size: 26px;
  }

  button {
    border: 0;
    outline: 0;
    border-radius: 5px;

    padding: 8px 12px;
    width: 120px;
    height: 36px;
    margin: 16px auto;

    color: #fff;
    font-weight: bold;
    background: #6554c0;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const Input = styled(DefaultInput)`
  margin-top: 12px;
`;
