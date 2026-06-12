import styled from 'styled-components';

export const StyledContainer = styled.div`
  color: black;

  h2 {
    margin: 25px 0px 0px 0px;
  }
`;

export const StyledCocktailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: white;
  margin: 20px 50px;
  gap: 30px;
`;

export const StyledCocktailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 15px;
  padding: 20px;

  h3 {
    margin: 0;
    text-align: start;
    width: 100%;
  }

  h4 {
    margin: 5px;
  }

  h5 {
    margin: 0;
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 5px;
  }

  p {
    margin: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: black;
    padding: 0px 30px;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 5px;
  }

  a:hover {
    background-color: black;
    color: white;
  }
`;
