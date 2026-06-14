import styled from 'styled-components';

export const StyledUpdateCocktailContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  coler: black;

 form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

 input,
 textarea {
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
  
  button {
    padding: 10px;
    cursor: pointer;
    color: white;
    background-color: orange;
    font-weight: bold;
  }

  button:hover {
    background-color: rgb(255, 192, 74);
  }
`;

export const StyledUpdateCocktailForm = styled.div`
  max-width: 600px;
  margin: 30px;
  padding: 20px;
  color: black;
  border: 1px solid black;
  border-radius: 5px;

  h2 {
    margin-top: 0;
  }
`;

export const StyledIngredientForm = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledCocktailCardContainer = styled.div`
  color: black;
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
    margin: 10px 0px 0px 0px;
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
