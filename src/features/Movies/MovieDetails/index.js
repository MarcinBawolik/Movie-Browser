import { Banner } from "../../../common/Banner";
import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../moviesAPI";
import { Wrapper } from "./styled";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails({ id });
      setMovieDetails(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {movieDetails ? (
        <>
          <Banner
            imageSrc={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`}
            altText={movieDetails.title}
            title={movieDetails.title}
            votes={movieDetails.vote_count}
            rate={movieDetails.vote_average.toFixed(1)}
          />
          <Wrapper>
            <MovieDetailsTile
              id={id}
              imageSrc={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
              altText={movieDetails.title}
              title={movieDetails.title}
              productionList={movieDetails.production_countries.filter(
                (country) => country.name
              )}
              secondDetail={movieDetails.release_date}
              genreList={movieDetails.genres.filter((genre) => genre.id)}
              rate={movieDetails.vote_average.toFixed(1)}
              votes={movieDetails.vote_count}
              content={movieDetails.overview}
              content2={movieDetails.overview}
            />
          </Wrapper>
        </>
      ) : null}
    </>
  );
};
