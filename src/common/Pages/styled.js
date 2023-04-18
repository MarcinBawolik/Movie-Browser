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
`

export const Container = styled.a`
    background: #E4E6F0;
    border-radius: 5px;
    width: fit-content;
    text-align: center;
    padding: 8px 16px;
    gap: 8px;
`

export const Page = styled.p`
    display: inline-flex;
    text-align: center;
    gap: 8px;
`

export const Text = styled.p`
    color: #7E839A;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
`

export const Number = styled.p`
    color: #18181B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
`

export const StyledTile = styled(Tile)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
   
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #18181B;
`;

export const VectorLeft = styled(Left)`
   
`;

export const VectorRight = styled(Right)`
   
`;

   