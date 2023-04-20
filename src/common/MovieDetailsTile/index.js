import {
  Tile,
  Image,
  Year,
  Rate,
  Wrapper,
  Tags,
  Tag,
  Votes,
  VotesWrapper,
  Star,
  Title,
  DetailsWrapper,
  Details,
  DetailContent,
  DetailContentList,
  DetailContentListItem,
} from "./styled";

export const MovieDetailsTile = ({
  id,
  imageSrc,
  altText,
  title,
  year,
  rate,
  votes,
  productionList,
  secondDetail,
  genreList,
}) => (
  <Tile key={id}>
    <Image src={imageSrc} alt={altText} />
    <Wrapper>
      <Title>{title}</Title>
      <Year>{year}</Year>
      <DetailsWrapper>
        <Details>Production:</Details>
        <DetailContentList>
          {productionList &&
            Array.isArray(productionList) &&
            productionList.map((firstDetail) => <DetailContentListItem key={firstDetail.id}>{firstDetail.name}</DetailContentListItem>
            )}
        </DetailContentList>
        <Details>Release date:</Details>
        <DetailContent>{secondDetail}</DetailContent>
      </DetailsWrapper>
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
    </Wrapper>
  </Tile>
);