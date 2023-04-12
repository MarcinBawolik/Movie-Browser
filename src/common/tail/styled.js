import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 208px;
    height: 339px;
    background-color: white;
    justify-content: space-around;
    filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
`
export const Photo = styled.img`
    width: 176px;
    height: 231px;
    border-radius: 5px;
    margin: 16px 16px 12px 16px
`

export const Name = styled.h3`
    font-weight: 500;
    font-size: 22px;
    color: #18181B;
    margin: 0 0 8px 0;
`

export const Role = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #7E839A;
    margin: 0 0 16px 0;
`