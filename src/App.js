import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PopularMovies } from "./features/Movies/PopularMovies";
import { PopularPeople } from "./features/People/PopularPeople";
import { MovieDetails } from "./features/Movies/MovieDetails";
import { PeopleDetails } from "./features/People/PeopleDetails";
import SearchMovieorPeople from "./SearchMoviesAndPeople";
import { Navigation } from "./common/Navigation";

function App() {
  return (
    <>
      <HashRouter >
        <Navigation />
        <Switch>
          <Route path="/people/:id">
            <PeopleDetails />
          </Route>
          <Route path="/people">
            <PopularPeople />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <PopularMovies />
          </Route>
          <Route path="*">
            <SearchMovieorPeople />
          </Route>
          <Redirect from="/" to="/movies" />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
