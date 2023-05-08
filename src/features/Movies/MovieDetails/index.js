import { Banner } from "../../../common/Banner";
import { MovieMemberTile } from "../../../common/MovieMemberTile";
import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits } from "../moviesAPI";
import { MovieDetailsWrapper, Wrapper, Header, List, StyledLink } from "./styled";
import noPicture from "../../../images/noPicture.png";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    const fetchDetailsData = async () => {
      const data = await getMovieDetails({ id });
      setMovieDetails(data);
    };
    fetchDetailsData();
  }, [id]);

  useEffect(() => {
    const fetchCreditsData = async () => {
      const data = await getMovieCredits({ id });
      setMovieCredits(data);
    };
    fetchCreditsData();
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
          <MovieDetailsWrapper>
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
          </MovieDetailsWrapper>
        </>
      ) : null}
      <Wrapper>
        <Header>Cast</Header>

        <List>
          {movieCredits &&
            movieCredits.cast &&
            movieCredits.cast.map((cast) => (
              <StyledLink to={`/people/${cast.id}`}>
                <MovieMemberTile
                  as="li"
                  id={cast.id}
                  name={cast.character}
                  role={cast.name}
                  photo={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${cast.profile_path}`
                      : noPicture
                  }
                />
              </StyledLink>
            ))}
        </List>

      </Wrapper>
      <Wrapper>
        <Header>Crew</Header>
        <List>
          {movieCredits &&
            movieCredits.crew &&
            movieCredits.crew.map((crew) => (
              <StyledLink to={`/people/${crew.id}`}>
                <MovieMemberTile
                  as="li"
                  id={crew.id}
                  role={crew.job}
                  name={crew.name}
                  photo={
                    crew.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${crew.profile_path}`
                      : noPicture
                  }
                />
              </StyledLink>
            ))}
        </List>
      </Wrapper>
    </>
  );
};
