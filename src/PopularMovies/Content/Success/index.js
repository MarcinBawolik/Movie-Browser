import {
  Movie,
  MovieList,
  Star,
  Tags,
  Title,
  Votes,
  VotesWrapper,
  Year,
  Tag,
  Rate,
  Image,
  Content,
} from "./styled";
import { Genres } from "../../../getMovieGenres";

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
                <Movie key={id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                  <Content>
                    <Title>{title}</Title>
                    <Year>{release_date.slice(0, 4)}</Year>
                    <Tags>
                      {genres
                        .filter((genre) => genre_ids.includes(genre.id))
                        .map((genre) => (
                          <Tag key={genre.id}>{genre.name}</Tag>
                        ))}
                    </Tags>
                    <VotesWrapper>
                      <Star />
                      <Rate>{vote_average}</Rate>
                      <Votes>{vote_count} głosów</Votes>
                    </VotesWrapper>
                  </Content>
                </Movie>
              )
            )}
          </MovieList>
        )}
      </Genres>
    </>
  );
};
