import styled from "styled-components";
import { ReactComponent as StarIcon } from "./icon/StarIcon.svg";

export const Container = styled.div`
  background-color: black;
  text-align: center;
`;
export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1326px;
`;

export const Descripion = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px;

  @media (max-width: 480px) {
   padding:8px ;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;

  @media (max-width: 767px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Star = styled(StarIcon)`
  width: 40px;

  @media (max-width: 767px) {
    width: 30px;
  }

  @media (max-width: 480px) {
    width: 16px;
  }
`;

export const WrapperRate = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  gap: 8px;

`;

export const Rate = styled.p`
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MaxRate = styled.p`
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Votes = styled.p`
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  padding: 16px 0px 40px 0px;

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 0px;
  }
`;
