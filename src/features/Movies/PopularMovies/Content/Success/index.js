import {
  MovieList
} from "./styled";
import { Genres } from "../../../../../getMovieGenres";
import { MovieTile } from "../../../../../common/MovieTile";

export const Success = ({ movies }) => {
  return (
    <>
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
                <MovieTile
                as="li"
                id={id}
                title={title}
                imageSrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                altText={title}
                year={release_date.slice(0, 4)}
                genreList={genres.filter((genre) => genre_ids.includes(genre.id))}
                rate={vote_average}
                votes={vote_count}
                />
              )
            )}
          </MovieList>
        )}
      </Genres>
    </>
  );
};
