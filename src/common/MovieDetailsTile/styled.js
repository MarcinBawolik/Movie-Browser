import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/star.svg";

export const Tile = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 5px;
  max-width: 1368px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  margin: 64px auto;
`;

export const Image = styled.img`
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  margin-top: 8px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
  }
`;

export const Year = styled.div`
  font-size: 22px;
  line-height: 1.2;
  margin-top: 24px;

  @media (max-width: 767px) {
    /* font-size: 13px;
    line-height: 1.3; */
  }
`;
export const DetailsWrapper = styled.span`
  margin: 24px 0;
  display: grid;
  grid-template-columns: auto 1fr;
`;
export const Details = styled.p`
  color: #74788b;
  font-size: 18px;
  margin-right: 10px;
`;

export const DetailContent = styled.p`
  font-size: 18px;
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
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
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