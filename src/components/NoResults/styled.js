import styled from "styled-components";

export const Text = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-top: 56px;
  margin-bottom: 40px;
  margin-left: 14vw;
  @media (max-width: 1023px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 34vw;
  min-width: 256px;
  display: block;
  margin: 0 auto;
`;
