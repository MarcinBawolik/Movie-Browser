import {
  Tile,
  Image,
  Year,
  Rate,
  Content,
  Tags,
  Tag,
  Votes,
  VotesWrapper,
  Star,
  Title,
} from "./styled";

export const MovieTile = ({
  id,
  imageSrc,
  altText,
  title,
  year,
  genreList,
  rate,
  votes,
}) => (
  <Tile key={id}>
    <Image src={imageSrc} alt={altText} />
    <Content>
      <Title>{title}</Title>
      <Year>{year}</Year>
      <Tags>
        {genreList &&
          Array.isArray(genreList) &&
          genreList.map((genre) => <Tag key={genre.id}>{genre.name}</Tag>)}
      </Tags>
      <VotesWrapper>
        <Star />
        <Rate>{rate}</Rate>
        <Votes>{votes}</Votes>
      </VotesWrapper>
    </Content>
  </Tile>
);
