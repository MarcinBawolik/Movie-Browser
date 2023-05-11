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



