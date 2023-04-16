import { HashRouter, Switch, Route } from 'react-router-dom';
import { Nav, StyledNavLink, Container, Search, Wrapper, NavItem, NavItems, Input } from './styled';
import { ReactComponent as WebsiteLogo } from './images/logo.svg';
import { ReactComponent as SearchIcon } from './images/Search.svg';

function App() {
  return (
    <>
    <HashRouter basename="/movie-browser">
      <Nav>
        <Container>
          <Wrapper>
            <WebsiteLogo />
            <NavItems>
              <NavItem>
                <StyledNavLink exact to="/">Movies</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/people">People</StyledNavLink>
              </NavItem>
            </NavItems>
          </Wrapper>
          <Search>
            <SearchIcon />
            <Input type="text" placeholder="Search for movies..."/>
          </Search>
        </Container>
      </Nav>
      <Switch>
            <Route path="/">
            </Route>
            <Route path="/people">
            </Route>
        </Switch>
    </HashRouter>
    </>
  );
}

export default App;
