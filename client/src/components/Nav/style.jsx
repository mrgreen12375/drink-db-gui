import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  margin-top: 50px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
    background-color: black;
    font-weight: 500;
    padding: 8px 12px;
    border: 2px solid black;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
  }
`;
