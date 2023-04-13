import { HashRouter } from 'react-router-dom';
import './App.css';
import Logo from './images/logo';
import { Nav, StyledNavLink, NavItems, Search, NavBle, NavItem } from './styled';

function App() {
  return (
    <>
    <HashRouter>
      <Nav>
        <NavItems>
        <NavBle>
        <Logo />
        <NavItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/people">People</StyledNavLink>
          </NavItem>
        </NavBle>
        <Search type="text" placeholder="Search for movies..."></Search>
        </NavItems>
      </Nav>
    </HashRouter>
    </>
  );
}

export default App;
