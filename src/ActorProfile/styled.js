import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    max-width: 1326px;
    margin: auto;
    margin-top: 56px;
` 
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;
    gap: 40px;
`

export const Image = styled.img`
    border-radius: 5px;
`

export const Content = styled.div`
    display: grid;
    gap:24px;
`

export const Name = styled.h1`
    margin-top: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
`

export const DateWrapper = styled.div`

`

export const Date = styled.div`
    display: flex;
    margin: 0px;
`

export const Place = styled.div`
    display: flex;
    margin: 8px 0px 0px 0px;
`

export const LeftText = styled.p`
    color: #74788B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    margin: 0px;
`

export const RightText = styled.p`
    color: #000000;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    margin: 0px 0px 0px 10px; 
`

export const Details = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;

    text-align: justify;
`