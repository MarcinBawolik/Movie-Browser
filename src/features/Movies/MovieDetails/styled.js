import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  max-width: 1368px;
  padding: 0 32px;
  margin: 0 auto;
  @media (max-width: 1023px) {
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 64px auto;
  padding: 0 32px;
  display: grid;
  grid-gap: 32px;
  @media (max-width: 1023px) {
    padding: 0 16px;
    margin: 32px 0;
  }
  @media (max-width: 766px) {
    margin: 20px auto;
    grid-gap: 20px;
  }
`;

export const Header = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  @media (max-width: 1023px) {
    font-size: 28px;
  }
  @media (max-width: 766px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 208px));
  justify-content: space-between;
  gap: 10px;
  list-style: none;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 16px; */
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`