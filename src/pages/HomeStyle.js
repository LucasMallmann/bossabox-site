import styled from 'styled-components';
import media from '../config/mediaQueryConfig';

import { DefaultInput } from '../style';

export const Container = styled.div`
  width: 70%;
  margin: 3rem auto;

  ${media.phone`
    width: auto;
    margin: 2rem 0;
    padding: 0 1rem;
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

export const FormInput = styled(DefaultInput)`
  width: 250px;
`;

export const FormWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input[type='checkbox'] {
    margin: 0 5px 0 24px;
  }
`;
