import styled from 'styled-components';
import media from '../config/mediaQueryConfig';

import { DefaultInput } from '../style';

export const Container = styled.div`
  width: 60%;
  margin: 3rem auto;

  ${media.tablet`
    width: auto;
    padding: 0 1rem;
  `}

  ${media.phone`
    width: auto;
    margin: 2rem 0;
  `}
`;

export const Header = styled.div`
  h1,
  h3 {
    font-weight: normal;
    text-align: center;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 30px;
  }

  ${media.phone`
    h1 {
      font-size: 36px;
    }
    h3 {
      font-size: 24px;
    }
  `}
`;

export const FormWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input[type='checkbox'] {
    margin: 0 5px 0 24px;
  }
`;

export const FormInput = styled(DefaultInput)`
  width: 160px;
  padding: 5px 10px;
`;

export const AddButton = styled.button`
  border: 0;
  outline: 0;
  padding: 5px 16px;
  font-family: inherit;

  background: #6554c0;
  color: white;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
