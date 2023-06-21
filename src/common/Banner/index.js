import {
  Background,
  Descripion,
  Title,
  MovieRatingImg,
  MovieRatingText,
  MovieRating,
  MovieRatingNote,
  MovieRatingTextVote,
  Star,
} from "./styled";

export const Banner = ({ imageSrc, rate, votes, title }) => {
  return (
    <>
    {imageSrc !== null && (
    <Background
      src={`https://image.tmdb.org/t/p/w1280/${imageSrc}`}>
      <Descripion>
        <Title>{title}</Title>
        <MovieRating>
          <Star />
          <MovieRatingNote>{rate}</MovieRatingNote>
          <MovieRatingText>/ 10</MovieRatingText>
          <MovieRatingTextVote>
            {votes} votes
          </MovieRatingTextVote>
        </MovieRating>
      </Descripion>
    </Background>
    )}
    </>
  )
};