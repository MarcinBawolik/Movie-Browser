import styled from "styled-components";

export const Container = styled.div`
  max-width: 1328px;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 56px auto 40px auto;
  @media (max-width: 767px) {
    margin: 24px 16px 32px 16px;
  }
`;

export const Header = styled.h1`
  text-align: left;
  font-size: 36px;
  margin: 0 0 24px 0;

  @media (max-width: 767px) {
    font-size: 18px;
    margin: 0 0 12px 0;
  }
`;

