import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 160px;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: #170c3a;
    font-size: 26px;
  }

  p {
    color: #424242;
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 36px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  color: #365df0;
  font-weight: bold;
  transition: 0.3s all;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DangerButton = styled(Button)`
  background: #f95e5a;
  color: #fff;
`;

export const CancelButton = styled(Button)`
  margin-right: 16px;
`;
