import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    height: 94px;
    background-color: #000000;
    display: flex;
    align-items: center;
    padding: 0 16px;
    
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
    padding: 13.5px 24px;

    &.active {
        border: 1px solid white;
        border-radius: 24px;
    }
`

export const NavItems = styled.ul`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: auto;
    align-items: center;
    width: 100%;
    max-width: 1368px;
    margin: 0 auto;
    padding: 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 24px;
        margin: 0;
    }
`

export const Search = styled.input`
    height: 48px;
    width: 432px;
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    color: #7E839A;
    justify-self: end;
    padding-left: 25px;

    @media (max-width: 768px) {
        grid-row-start: 2;
        width: 100%;
        padding-left: 0;
    }
`

export const NavBle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    margin-right: 19px;

    @media (max-width: 768px) {
    }
`

export const NavItem = styled.li`
    list-style-type: none;
    justify-self: end;
`