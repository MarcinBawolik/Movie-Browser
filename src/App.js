import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Nav, StyledNavLink, Wrapper, NavItem, NavItems, Logo } from "./styled";
import { PopularMovies } from "./features/Movies/PopularMovies";
import { PopularPeople } from "./features/People/PopularPeople";
import { MovieDetails } from "./features/Movies/MovieDetails";
import { PeopleDetails } from "./features/People/PeopleDetails";
import { Search } from "./features/Search";
import SearchMovieorPeople from "./SearchMoviesAndPeople";

function App() {
  return (
    <>
      <HashRouter basename="/movie-browser">
        <Nav>
          <Wrapper>
            <Logo />
            <NavItems>
              <NavItem>
                <StyledNavLink exact to="/movies/popular-movies">
                  Movies
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink exact to="/people/popular-people">
                  People
                </StyledNavLink>
              </NavItem>
            </NavItems>
            <Search />
          </Wrapper>
        </Nav>
        <Switch>
          <Route exact path="/">
            <Redirect to="/movies/popular-movies" />
          </Route>
          <Route path="/people/people/:id">
            <PeopleDetails />
          </Route>
          <Route path="/movies/movies/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/people/popular-people">
            <PopularPeople />
          </Route>
          <Route exact path="/movies/popular-movies">
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
