import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPopularMoviesLoading,
  selectPopularMovies,
  selectPopularMoviesStatus,
} from "../moviesSlice";
import { Content } from "./Content";

export const PopularMovies = () => {
  const dispatch = useDispatch();

  const moviesStatus = useSelector(selectPopularMoviesStatus);
  const movies = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(fetchPopularMoviesLoading());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Content status={moviesStatus} movies={movies} />
      </Container>
    </>
  );
};
