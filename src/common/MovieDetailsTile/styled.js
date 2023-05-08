import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/star.svg";

export const Tile = styled.div`
  background-color: white;
  border-radius: 5px;
  max-width: 1368px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  margin: 64px auto;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: 1023px) {
    grid-template-rows: auto 1fr;
    grid-gap: 24px;
    padding: 16px;
  }
  @media (max-width: 767px) {
    margin: 32px auto;
  }
  @media (max-width: 320px) {
    margin: 16px auto;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 24vw;
  min-width: 116px;
  max-width: 320px;
  @media (max-width: 1023px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  @media (max-width: 767px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1023px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const DetailsWrapper = styled.span`
  margin: 24px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: 767px) {
    margin: 16px 0;
    grid-template-columns: 1fr;
  }
`;
export const Details = styled.p`
  color: #74788b;
  font-size: 18px;
  margin-right: 10px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const DetailContent = styled.p`
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
export const DetailContentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const DetailContentListItem = styled.li`
  font-size: 18px;

  :not(:last-child)::after {
    content: ",";
    margin-right: 5px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
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
    margin: 0 4px 4px 0;
  }
`;

export const VotesWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
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
  margin-right: 8px;

  @media (max-width: 767px) {
    font-size: 12px;
    margin-right: 6px;
  }
`;

export const OnTen = styled.p`
  font-size: 14px;
  margin-right: 12px;
  @media (max-width: 767px) {
    font-size: 10px;
    margin-right: 8px;
  }
`;

export const Votes = styled.p`
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const Content = styled.span`
  font-size: 20px;
  line-height: 1.6;
  margin-top: 24px;
  @media (max-width: 1023px) {
    display: none;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.4;
    margin-top: 16px;
  }
`;

export const Content2 = styled.span`
  font-size: 16px;
  line-height: 1.4;
  margin-top: 16px;
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  @media (min-width: 1023px) {
    display: none;
  }
`;
