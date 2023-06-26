import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchPopularMoviesLoading,
  selectPopularMovies,
  selectPopularMoviesStatus,
} from "../moviesSlice";
import { Content } from "./Content";
import { Header, MovieList, StyledLink } from "./Content/Success/styled";
import { Genres } from "../../../getMovieGenres";
import { MovieTile } from "../../../common/MovieTile";
import Pages from "../../../common/Pages";

import { getPopularMovies } from "../moviesAPI";
import Loader from "../../../common/Loader";
import { Error } from "../../../common/Error";

const MovieComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resultsPerPage = 20;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setMovies([]);
  };

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const results = await getPopularMovies(currentPage);
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      setMovies((prevMovies) => [...prevMovies, ...results]);
    } catch (error) {
      console.error(error);
      setError("Wystąpił błąd podczas pobierania filmów.");
    }
  
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <Header>Popular Movies</Header>
      <Genres>
        {({ genres }) => (
          <MovieList>
            {movies.map(
              ({
                id,
                title,
                poster_path,
                release_date,
                vote_average,
                vote_count,
                genre_ids,
              }) => (
                <>
                  <StyledLink to={`/movies/movies/${id}`}>
                    <MovieTile
                      key={id}
                      as="li"
                      id={id}
                      title={title}
                      imageSrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      altText={title}
                      year={release_date.slice(0, 4)}
                      genreList={genres.filter((genre) =>
                        genre_ids.includes(genre.id)
                      )}
                      rate={vote_average}
                      votes={vote_count}
                    />
                  </StyledLink>
                </>
              )
            )}
          </MovieList>
        )}
      </Genres>
      <Pages
        totalPages={500}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

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
        <MovieComponent />
      </Container>
    </>
  );
};
