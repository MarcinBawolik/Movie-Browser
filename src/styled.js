import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    width: 100vw;
    background-color: #000000;
    align-items: center;
    padding: 23px 16px;
    
    @media (max-width: 768px) {
        height: auto;
        padding: 24px 16px 16px;
    }
`

export const StyledNavLink = styled(NavLink)`
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    text-decoration: none;
    padding: 13px 24px;

    &.active {
        border: 1px solid white;
        border-radius: 24px;
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 12px;
    }
`

export const Container = styled.ul`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 30px;
    align-items: center;
    width: 100%;
    max-width: 1368px;
    margin: 0 auto;
    padding: 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-row-gap: 24px;
        margin: 0;
    }
`

export const Search = styled.form`
    height: 48px;
    width: 432px;
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    justify-self: end;
    padding-left: 25px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        width: 100vw;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const NavItem = styled.li`
    list-style-type: none;
`

export const NavItems = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 80px;

    @media (max-width: 768px) {
        margin-left: 19px;
        margin-right: 19px;
    }
`

export const Input = styled.input`
    width: 360px;
    height: 30px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    color: #7E839A;
    border: none;
    margin-left: 10px;

    &:focus {
        outline: none;
  }
`