import styled from "styled-components";
import { Tile} from "./Tile";
import { ReactComponent as Left} from "./icon/left.svg"
import { ReactComponent as Right} from "./icon/right.svg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 12px; 
    margin: 56px 0px 123px 0px;

    @media (max-width: 767px) {
    gap: 8px;
  };
`;

export const Container = styled.a`
    background: #E4E6F0;
    color: #7E839A;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
    padding: 8px 16px;
    gap: 8px;
    cursor: pointer;

    @media (max-width: 767px) {
    gap:4px;
    padding: 4px 12px;
  };

  &:hover {
    background: #D6E4FF;
    };

  &:active { 
    color: #0044CC;
  }

`;

export const StyledTile = styled(Tile)`
    display: inline-flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 767px) {
    gap:4px;
  };
`;

export const TileText = styled.p`
     color: #18181B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    @media (max-width: 767px) {
    display: none;
  };
`;

export const Page = styled.p`
    display: inline-flex;
    text-align: center;
    gap: 8px;

    @media (max-width: 767px) {
    gap:2px;
  };
`;

export const Text = styled.p`
    color: #7E839A;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 767px) {
    font-size: 10px;
    line-height: 24px;
  };
`;

export const Number = styled.p`
    color: #18181B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: 767px) {
    font-size: 10px;
    line-height: 24px;
  };
`;

export const VectorLeft = styled(Left)`

   @media (max-width: 767px) {
    width: 5px;
    height: 8px;
    width: 100%;
  };

`;

export const VectorRight = styled(Right)`

   @media (max-width: 767px) {
    width: 5px;
    height: 8px;
  };
`;;

   