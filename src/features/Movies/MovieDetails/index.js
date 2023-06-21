import { Banner } from "../../../common/Banner";
import { MovieMemberTile } from "../../../common/MovieMemberTile";
import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits } from "../moviesAPI";
import { MovieDetailsWrapper, Wrapper, Header, List, StyledLink } from "./styled";
import noMovie from "../../../images/noMovie.svg"
import { useQuery } from "react-query";
import Loader from "../../../common/Loader"
import { Error } from "../../../common/Error";
import { useState, useEffect } from "react";

export const MovieDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: movie,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useQuery(["movie", { id }], getMovieDetails);

  const {
    data: credits,
    isLoading: isCreditsLoading,
    isError: isCreditsError,
  } = useQuery(["credits", { id }], getMovieCredits);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || isMovieLoading || isCreditsLoading) {
    return (
      <Loader></Loader>
    );
  }


  if (isMovieError || isCreditsError) {
    return (
      <Error></Error>
    );
  }
 
  return (
    <>
      {movie && (
        <>
          <Banner
            imageSrc={movie.backdrop_path}
            altText={movie.title}
            title={movie.title}
            votes={movie.vote_count}
            rate={movie.vote_average.toFixed(1)}
          />
          <MovieDetailsWrapper>
            <MovieDetailsTile
              id={id}
              imageSrc={movie.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : noMovie
              }
              altText={movie.title}
              title={movie.title}
              productionList={movie.production_countries.filter(
                (country) => country.name
              )}
              secondDetail={movie.release_date}
              genreList={movie.genres.filter((genre) => genre.id)}
              rate={movie.vote_average.toFixed(1)}
              votes={movie.vote_count}
              content={movie.overview}
              content2={movie.overview}
            />
          </MovieDetailsWrapper>
        </>
      )}
      <Wrapper>
        {credits.crew.length > 0 && (
          <>
            <Header>
              Cast ({credits.cast.length})
            </Header>
            <List>
              {credits &&
                credits.cast &&
                credits.cast.map((cast) => (
                  <StyledLink to={`/people/people/${cast.id}`}>
                    <MovieMemberTile
                      as="li"
                      id={cast.id}
                      name={cast.character}
                      role={cast.name}
                      photo={cast.profile_path}
                    />
                  </StyledLink>
                ))}
            </List>
          </>
        )}
      </Wrapper>
      <Wrapper>
        {credits.crew.length > 0 && (
          <>
            <Header>
              Crew ({credits.crew.length})
            </Header>
            <List>
              {credits &&
                credits.crew &&
                credits.crew.map((crew) => (
                  <StyledLink to={`/people/people/${crew.id}`}>
                    <MovieMemberTile
                      as="li"
                      id={crew.id}
                      role={crew.job}
                      name={crew.name}
                      photo={ crew.profile_path}
                    />
                  </StyledLink>
                ))}
            </List>
          </>
        )}
      </Wrapper>
    </>
  );
};