import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "./images/logo.svg";

export const Logo = styled(WebsiteLogo)`
  width: 220px;
  @media (max-width: 768px) {
    width: 120px;
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

