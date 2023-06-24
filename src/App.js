import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Nav, StyledNavLink, Wrapper, NavItem, NavItems, Logo } from "./styled";
import { PopularMovies } from "./features/Movies/PopularMovies";
import { PopularPeople } from "./features/People/PopularPeople";
import { MovieDetails } from "./features/Movies/MovieDetails";
import { PeopleDetails } from "./features/People/PeopleDetails";
import { Search } from "./features/Search";
import SearchMovieorPeople from "./SearchMoviesAndPeople";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <HashRouter >
        <Nav>
          <Wrapper>
            <NavLink to="/movies">
              <Logo />
            </NavLink>
            <NavItems>
              <NavItem>
                <StyledNavLink  to="/movies" >
                  Movies
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink  to="/people/">
                  People
                </StyledNavLink>
              </NavItem>
            </NavItems>
            <Search />
          </Wrapper>
        </Nav>
        <Switch>
          <Route path="/people/:id">
            <PeopleDetails />
          </Route>
          <Route  path="/people">
            <PopularPeople />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route  path="/movies">
            <PopularMovies />
          </Route>
          <Route path="*">
            <SearchMovieorPeople />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
