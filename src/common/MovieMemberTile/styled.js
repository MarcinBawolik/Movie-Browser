import styled from "styled-components";

export const Person = styled.div`
 background-color: white;
  padding: 16px;
  border-radius: 5px;
  height: 100%;
  position: relative;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
  border-radius: 5px;

  @media (max-width: 766px) {
    padding: 8px;
  }

  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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

  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Role = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #7e839a;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
