import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/star.svg";

export const Tile = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 5px;
  height: 100%;
  position: relative;

  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;

  @media (max-width: 767px) {
    margin-bottom: 0;
    min-width: 114px;
  }

  @media (max-width: 480px) {
    height: 100%;
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
  position: absolute;
  bottom: 16px;

  @media (max-width: 767px) {
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    bottom: 8px;
    position: static;
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