import { Nav, StyledNavLink, Wrapper, NavItem, NavItems, Logo } from "./styled";
import { Search } from "../../features/Search";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = () => {
    return (
        <Nav>
            <Wrapper>
                <NavLink to="/movies">
                    <Logo />
                </NavLink>
                <NavItems>
                    <NavItem>
                        <StyledNavLink to="/movies" >
                            Movies
                        </StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to="/people/">
                            People
                        </StyledNavLink>
                    </NavItem>
                </NavItems>
                <Search />
            </Wrapper>
        </Nav>
    )
}
