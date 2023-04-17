import styled from "styled-components";
import { ReactComponent as Triangle } from "./icon/triangle.svg";

export const IconError = styled.div`
    text-align: center;
    margin-top: 195px;
`;

export const WrapperError = styled.div`
    text-align: center;
    display: grid;
    gap: 24px;
    margin-top: 38px;
`;

export const HeaderError = styled.h1`
    color: #18181B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
`;

export const InfoError = styled.h2`
    color: #18181B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

export const ButtonLink = styled.a`
    color: #FFFFFF;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    background: #0044CC;
    border-radius: 5px;
    align-items: center;
    padding: 16px 24px;
    margin: auto;
`
export const TriangleIcon = styled(Triangle)`
width: 100px;
height: 90px;
color: #D6E4FF;
`