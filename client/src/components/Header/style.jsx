import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
  a {
    display: flex;
    flex-direction: column;
    color: black;
    text-decoration: none;

    @media (max-width: 1024px) {
      padding: 32px 20px 24px;
      gap: 18px;
    }
  }

  p {
    margin: 0;
  }
`;
