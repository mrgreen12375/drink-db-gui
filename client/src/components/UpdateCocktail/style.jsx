import styled from 'styled-components';

export const StyledUpdateCocktailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  coler: black;
  margin-bottom: 50px;

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
    border: 1px solid black;
    border-radius: 5px;
  }

  button:hover {
    background-color: rgb(255, 192, 74);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      padding: 5px 0px 5px 0px;
      text-align: center;
    }
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

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const StyledIdForm = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  border: 2px dashed black;
  border-radius: 5px;
  padding: 10px 0px;

  @media (max-width: 768px) {
    input {
      width: 200px;
    }
  }
`;

export const StyledIngredientForm = styled.div`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
  }
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
