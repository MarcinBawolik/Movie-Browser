import { HashRouter, Switch, Route } from "react-router-dom";
import {
  Nav,
  StyledNavLink,
  Search,
  Wrapper,
  NavItem,
  NavItems,
  Input,
  Logo,
  Icon,
} from "./styled";
import "./App.css";
import { PopularMovies } from "./features/Movies/PopularMovies";
import { PopularPeople } from "./features/People/PopularPeople";
import { MovieDetails } from "./features/Movies/MovieDetails";
import { PeopleDetails } from "./features/People/PeopleDetails";


function App() {
  
  return (
    <>
      <HashRouter basename="/movie-browser">
        <Nav>
          <Wrapper>
            <Logo />
            <NavItems>
              <NavItem>
                <StyledNavLink to="/movies" activeClassName="active">
                  Movies
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/people" activeClassName="active">
                  People
                </StyledNavLink>
              </NavItem>
            </NavItems>
            <Search>
              <Icon />
              <Input type="text" placeholder="Search for movies..." />
            </Search>
          </Wrapper>
        </Nav>
        <Switch>
          <Route path="/people/:id">
            <PeopleDetails />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/people">
            <PopularPeople />
          </Route>
          <Route path="/movies">
            <PopularMovies />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;


