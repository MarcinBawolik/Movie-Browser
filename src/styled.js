import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "./images/logo.svg";
import { ReactComponent as SearchIcon } from "./images/Search.svg";

export const Logo = styled(WebsiteLogo)`
  width: 220px;
  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const Icon = styled(SearchIcon)`
  width: 18px;
  margin-left: 26px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 12px;
  }
`;

export const Nav = styled.nav`
  background-color: #000000;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
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
`;

export const Search = styled.form`
  border: 1px solid #e4e6f0;
  border-radius: 33px;
  background-color: white;
  padding: 12px;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: 1 / span 2;
    margin-top: 24px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  max-width: 1328px;
  margin: auto;
  padding: 23px 32px;
  @media (max-width: 768px) {
    padding: 24px 16px 16px 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const NavItem = styled.li``;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  margin: auto 0px;
  padding: 0px;
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  color: #7e839a;
  border: none;

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
