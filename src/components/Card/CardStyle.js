import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 2px;

  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 20px;
      color: #6554c0;
      text-decoration: none;
      text-transform: capitalize;
      font-weight: bold;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  p {
    margin-top: 20px;
    font-size: 15px;
    line-height: 24px;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  ul {
    display: flex;
    li {
      margin-right: 16px;
      font-weight: bold;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;

export const Remove = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    svg,
    small {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  svg,
  small {
    color: #f95e5a;
    margin-right: 4px;
  }
  small {
    font-weight: bold;
  }
`;
