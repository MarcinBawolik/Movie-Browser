import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../../images/star.svg";

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 324px));
  grid-gap: 24px;
  list-style: none;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(0, 324px));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 324px));
    grid-gap: 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const Movie = styled.li`
  background-color: white;
  padding: 16px;
  border-radius: 5px;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    margin-bottom: 0;
    width: 100%;
    min-width: 114px;
  }
`;

export const Content = styled.div`
  margin-left: 16px;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 1.3;
  max-width: 292px;
  word-break: break-word;

  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    max-width: 120px;
  }
`;

export const Year = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #7e839a;
  margin: 8px 0;

  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  padding: 8px;
  margin: 0 8px 8px 0;
  background-color: #e4e6f0;
  border-radius: 5px;
  line-height: 1.4;

  @media (max-width: 767px) {
    padding: 4px 8px;
    line-height: 1.1;
    font-size: 10px;
  }
`;

export const VotesWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 39px;

  @media (max-width: 767px) {
    margin-top: 12px;
  }
`;

export const Star = styled(StarIcon)`
  margin-right: 12px;

  @media (max-width: 767px) {
    margin-right: 8px;
    width: 16px;
  }
`;
export const Rate = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-right: 12px;

  @media (max-width: 767px) {
    margin-right: 7px;
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  color: #7e839a;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
