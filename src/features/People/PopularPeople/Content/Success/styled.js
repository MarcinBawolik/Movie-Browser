import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Header = styled.h1`
padding: 56px 0px 24px 0px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 120%;
color: #18181B;

@media (max-width: 767px) {
   font-size: 28px;
  }

@media (max-width: 320px) {
font-size: 20px;
color: #000000;
  }
`

export const PeopleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 208px));
  grid-gap: 24px;
  list-style: none;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(4, minmax(0, 208px));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, minmax(0, 208px));
    grid-gap: 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }
  @media (max-width: 320px) {
    grid-gap: 8px;
  }
`;

export const Person = styled.li`
  background-color: white;
  padding: 16px;
  border-radius: 5px;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;
`;

export const Name = styled.h2`
  font-size: 22px;
  line-height: 1.3;
  max-width: 292px;
  font-weight: 500;
  word-break: break-word;

  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    max-width: 120px;
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`


