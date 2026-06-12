import styled from 'styled-components';

export const StyledUpdateNavContainer = styled.section`
  margin-top: 10px;

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
    background-color: orange;
    font-weight: 500;
    padding: 2px 20px;
    border: 2px solid black;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
  }

  a:hover {
    background-color: rgb(255, 192, 74);
  }

  img {
    height: 400px;
  }
`;
