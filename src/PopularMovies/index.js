import {
  Container,
  Header
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesLoading, selectMovies, selectMoviesStatus } from "./popularMoviesSlice";
import { Content } from "./Content";

export const PopularMovies = () => {
  const dispatch = useDispatch();

  const moviesStatus = useSelector(selectMoviesStatus);
  const movies = useSelector(selectMovies);

  useEffect(() => {
dispatch(fetchMoviesLoading());
  },[dispatch])
  return (
    <Container>
      <Header>Popular Movies</Header>
      <Content status={moviesStatus} movies={movies} />
    </Container>
  );
};
