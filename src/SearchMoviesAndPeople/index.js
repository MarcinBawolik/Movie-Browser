import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Error } from "../common/Error";
import Loader from "../common/Loader";
import MoviesList from "./MoviesList";
import { NoResults } from "../common/NoResults";
import PeopleList from "./PeopleList";
import {
  selectSearchMoviesText,
  selectMoviesTotalResults,
  selectSearchMovies,
  selectSearchMoviesStatus,
} from "./MoviesList/searchMoviesSlice";
import {
  selectPeopleTotalResults,
  selectSearchPeople,
  selectPeopleSearchText,
  selectSearchPeopleStatus,
} from "./PeopleList/searchPeopleSlice";
import { SearchResults, Wrapper } from "./styled";

const SearchMovieorPeople = () => {
  const history = useHistory();

  const searchMovie = useSelector(selectSearchMovies);
  const searchMoviesStatus = useSelector(selectSearchMoviesStatus);
  const moviesTotalResults = useSelector(selectMoviesTotalResults);
  const moviesQuery = useSelector(selectSearchMoviesText);

  const searchPeople = useSelector(selectSearchPeople);
  const searchPeopleStatus = useSelector(selectSearchPeopleStatus);
  const peopleTotalResults = useSelector(selectPeopleTotalResults);
  const peopleQuery = useSelector(selectPeopleSearchText);

  return (
    <>
      {moviesTotalResults === 0 &&
        moviesQuery === "" &&
        history.push("/popular-movies")}
      {peopleTotalResults === 0 &&
        peopleQuery === "" &&
        history.push("/popular-people")}
      {searchMoviesStatus === "error" || searchPeopleStatus === "error" ? (
        <Error />
      ) : null}
      {searchMoviesStatus === "loading" || searchPeopleStatus === "loading" ? (
        <Loader />
      ) : null}
      {searchMoviesStatus === "success" || searchPeopleStatus === "success" ? (
        moviesTotalResults !== 0 && peopleTotalResults !== 0 ? (
          <Wrapper>
            <SearchResults>
              Search results for “
              {moviesQuery !== "" ? moviesQuery : peopleQuery}” (
              {moviesTotalResults ? moviesTotalResults : peopleTotalResults})
            </SearchResults>
            {searchMovie && searchMovie.length > 0 && <MoviesList />}
            {searchPeople && searchPeople.length > 0 && <PeopleList />}
          </Wrapper>
        ) : (
          <NoResults />
        )
      ) : null}
    </>
  );
};

export default SearchMovieorPeople;
