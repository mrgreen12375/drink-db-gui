import styled from 'styled-components';

export const StyledDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  h2 {
    margin: 25px 0px 0px 0px;
  }
`;

export const StyledDeleteForm = styled.div`
  display: flex;
  max-width: 600px;
  margin: 30px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;

  div {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    padding: 10px 0px;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }

  button {
    color: white;
    background-color: red;
    border-radius: 5px;
  }

  button:hover {
    background-color: rgb(255, 89, 89);
  }
`;
