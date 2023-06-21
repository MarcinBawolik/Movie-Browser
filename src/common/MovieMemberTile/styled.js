import styled from "styled-components";

export const Person = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 5px;
  height: 100%;
  position: relative;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  grid-gap: 12px;
  

  @media (max-width: 766px) {
    padding: 8px;
    grid-template-rows: auto;
    grid-gap: 8px;
  }

  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
  }
`;
export const Photo = styled.img`
  margin: 0 auto;
  width: 177px;
  height: 264px;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 767px) {
    width: 120px;
    height: 178px;
  }
`;

export const NoPhoto = styled.div`
  margin: 0 auto;
  width: 177px;
  height: 264px;
  border-radius: 5px;
  background: silver;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 120px;
    height: 178px;
  };
`

export const ProfileImage = styled.img`
  width: 72px;
  height: 72px;
  color: white;
`

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
