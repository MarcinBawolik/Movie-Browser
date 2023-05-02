import styled from "styled-components";

export const Person = styled.div`
  display: grid;
  text-align: center;
  grid-gap: 8px;
  justify-content: center;
  padding: 16px;
  background-color: white;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
  border-radius: 5px;

  @media (max-width: 766px) {
    padding: 8px;
  }
`;
export const Photo = styled.img`
  border-radius: 5px;
  max-width: 100%;
  @media (max-width: 320px) {
    min-width: 120px;
  }
`;

export const Name = styled.h3`
  font-weight: 500;
  font-size: 22px;
  color: #18181b;
  text-align: center;
`;

export const Role = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #7e839a;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 13px;
  }
`;
