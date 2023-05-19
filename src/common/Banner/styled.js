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
  background: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );

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
