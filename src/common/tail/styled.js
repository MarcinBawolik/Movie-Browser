import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 24px;
    filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
    border-radius: 5px;

    @media (max-width: 320px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    }
`

export const Person = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 208px;
    height: 339px;
    background-color: white;
    justify-content: space-around;

    @media (max-width: 320px) {
    width: 136px;
    height: 245px;
    border-radius: 5px;
    }
`
export const Photo = styled.img`
    width: 176px;
    height: 231px;
    border-radius: 5px;
    margin: 16px 16px 12px 16px;

    @media (max-width: 320px) {
    width: 120px;
    height: 178px;
    margin: 8px;
    }
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

    @media (max-width: 320px) {
        font-size: 13px;
        margin: 0 0 8px 0;
    }
`