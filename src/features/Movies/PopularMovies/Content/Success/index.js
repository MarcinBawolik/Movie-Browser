import { MovieList, StyledLink } from "./styled";
import { Genres } from "../../../../../getMovieGenres";
import { MovieTile } from "../../../../../common/MovieTile";
import { useState } from "react";
import Pages from "../../../../../common/Pages";

export const Success = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(8);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = movies.slice(indexOfFirstResult, indexOfLastResult);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Genres>
        {({ genres }) => (
          <MovieList>
            {currentResults.map(
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
                  <StyledLink to={`/movies/${id}`}>
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
           totalResults={movies.length}
           resultsPerPage={resultsPerPage}
           currentPage={currentPage}
           onPageChange={handlePageChange}
          />
    </>
  );
};
