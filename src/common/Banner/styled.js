import styled from "styled-components";
import { ReactComponent as StarIcon } from "./icon/StarIcon.svg";


export const Star = styled(StarIcon)`
  width: 40px;

  @media (max-width: 767px) {
    width: 30px;
  }

  @media (max-width: 480px) {
    width: 16px;
  }
`;

export const Background = styled.div`
  background-color: black;
  color: white;
  background-image: linear-gradient(
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
    ),
    url(${({ src }) => src});
  background-size: 1920px 770px, 1920px 770px, 1920px 770px, 1920px 770px,
    1368px 769px;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1200px) {
    background-size: 1366px 525px, 1366px 525px, 1366px 525px, 1366px 525px,
      1024px 525px;
  }

  @media (max-width: 1040px) {
    background-size: 1040px 400px, 1040px 400px, 1040px 400px, 1040px 400px,
      776px 400px;
  }

  @media (max-width: 767px) {
    background-size: 700px 300px, 700px 300px, 700px 300px, 700px 300px,
      550px 300px;
  }

  @media (max-width: 575px) {
    background-size: 450px 188px, 450px 188px, 450px 188px, 450px 188px,
      350px 188px;
  }
`;

export const Descripion = styled.div`
  padding-bottom: 56px;
  padding: 0px 0px 56px 0px;
  margin: 0 auto;
  width: 1368px;
  height: 770px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1420px) {
    padding: 0px 16px 56px 16px;
  }

  @media (max-width: 1200px) {
    width: 1024px;
    height: 525px;
  }

  @media (max-width: 1040px) {
    width: 776px;
    height: 400px;
    padding: 16px 32px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 300px;
    padding: 8px 16px;
  }

  @media (max-width: 576px) {
    height: 188px;
    padding: 0px 8px 56px 8px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  margin: 0px;
  color: white;

  @media (max-width: 140) {
    font-size: 36px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const MovieRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  flex-wrap: wrap;
  color: white;
`;

export const MovieRatingImg = styled.img`
  height: 40px;
  width: auto;
  transform: translateY(-8%);

  @media (max-width: 767px) {
    height: 16px;
  } ;
`;

export const MovieRatingNote = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  align-self: center;
  margin: 0px 8px;
  color: white;

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 600;
  } ;
`;

export const MovieRatingText = styled.p`
  margin: 0px;
  font-size: 16px;
  line-height: 1.2;
  color: white;
  flex-basis: 70%;
  margin-top: 8px;

  @media (max-width: 767px) {
    font-size: 10px;
    margin-top: 2px;
    margin-right: 8px;
    flex-basis: unset;
  } ;
`;

export const MovieRatingTextVote = styled(MovieRatingText)`
  margin-top: 16px;

  @media (max-width: 767px) {
    margin-top: 2px;
  } ;
`;