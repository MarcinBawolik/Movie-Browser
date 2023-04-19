import styled from "styled-components";
import { Link } from "react-router-dom"

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 324px));
  grid-gap: 24px;
  list-style: none;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(0, 324px));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 324px));
    grid-gap: 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`