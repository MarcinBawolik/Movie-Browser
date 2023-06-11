import { useSelector } from "react-redux";
import { MoviesTilesList } from "../styled";
import { MovieTile } from "../../common/MovieTile";
import {
  selectMoviesTotalResults,
  selectSearchMovies,
} from "./searchMoviesSlice";
import Pages from "../../common/Pages";
import { useState } from "react";
import noPoster from "../../images/noPoster.png";
import { Genres } from "../../getMovieGenres";
import { StyledLink } from "../../features/Movies/PopularMovies/Content/Success/styled";

const MoviesList = () => {
  const searchMovies = useSelector(selectSearchMovies);
  const totalResults = useSelector(selectMoviesTotalResults);

  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(8);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchMovies.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Genres>
        {({ genres }) => (
          <MoviesTilesList>
            {currentResults.map(
              ({
                id,
                title,
                release_date,
                poster_path,
                genre_ids,
                vote_average,
                vote_count,
              }) => (
                <>
                  <StyledLink to={`/movies/movies/${id}`}>
                    <MovieTile
                      movie
                      id={id}
                      title={title}
                      year={release_date}
                      imageSrc={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : noPoster
                      }
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
          </MoviesTilesList>
        )}
      </Genres>
      <Pages
        totalResults={totalResults}
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MoviesList;
