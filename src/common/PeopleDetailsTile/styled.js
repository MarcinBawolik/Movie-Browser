import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    max-width: 1326px;
    margin: auto;
    margin-top: 56px;
` ;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;
    gap: 40px;

    @media (max-width: 767px) {
    padding: 28px;
    gap: 28px;
  }

    @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const Image = styled.img`
    border-radius: 5px;
    width: 564px;

    @media (max-width: 1023px) {
    width: 40%;
  }

  @media (max-width: 767px) {
    width: 45%;
  }

  @media (max-width: 480px) {
   width: 45%;
  }

  @media (max-width: 320px) {
    height: 183px;
    width: 130px;
  }
`;

export const Content = styled.div`
    display: grid;
    gap: 24px;

    @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const StyledDiv = styled.div`
`;

export const Name = styled.h1`
    margin-top: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;

    @media (max-width: 767px) {
    font-size: 24px;
  }

    @media (max-width: 480px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
  }
`;

export const Date = styled.div`
    display: flex;
    gap: 10px;
   
    @media(max-width: 767px) {
    gap: 4px;
  }
`;

export const Place = styled.p`
    display: flex;
    gap: 10px;
    margin: 8px 0px 0px 0px;
    
    @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 4px;
  }
`;

export const LeftText = styled.p`
    color: #74788B;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;

    @media (max-width: 767px) {
    font-size: 16px;
  }

    @media (max-width: 480px) {
    font-size: 12px;
    
  }
`;

export const RightText = styled.p`
    color: #000000;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;

    @media (max-width: 767px) {
    font-size: 16px;
  }
    

    @media (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;    
  }

`;

export const Details = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    text-align: justify;
    position: relative;

    @media (max-width: 767px) {
    font-size: 20px;
    padding: 0px 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0px 16px;
  }
`;