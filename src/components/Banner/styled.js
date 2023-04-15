import styled from "styled-components";
import { ReactComponent as StarIcon } from "./icon/StarIcon.svg";

export const Container = styled.div`
background-color:black;
text-align: center;
`
export const ImageWrapper = styled.div`
position: relative; 
display: inline-block;

`;

export const Image = styled.img`
    width: 100%;
    max-width: 1326px;
    box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 1);
`

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
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
`

export const Star = styled(StarIcon)`
width: 40px;
`;

export const WrapperRate = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
align-content: center;
gap:8px
`;

export const Rate = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
`;

export const MaxRate = styled.p`
  color: #FFFFFF;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`;

export const Votes = styled.p`
color: #FFFFFF;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 120%;
padding-bottom: 56px;
`;