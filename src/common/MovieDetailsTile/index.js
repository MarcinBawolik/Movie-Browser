import {
  Detailes,
  Tile,
  Image,
  Rate,
  Wrapper,
  Tags,
  Tag,
  Votes,
  VotesWrapper,
  Star,
  Title,
  DetailsWrapper,
  DetailsTitle,
  DetailContent,
  DetailContentList,
  DetailContentListItem,
  OnTen,
  Content,
  Content2,
} from "./styled";

export const MovieDetailsTile = ({
  id,
  imageSrc,
  altText,
  title,
  rate,
  votes,
  productionList,
  secondDetail,
  genreList,
  content,
  content2,
}) => (
  <Tile key={id}>
    <Image src={imageSrc} alt={altText} />
    <Wrapper>
      <Title>{title}</Title>
      <Detailes>
        <DetailsWrapper>
          <DetailsTitle>Production:</DetailsTitle>
          <DetailContentList>
            {productionList &&
              Array.isArray(productionList) &&
              productionList.map((firstDetail) => (
                <DetailContentListItem key={firstDetail.id}>
                  {firstDetail.name}
                </DetailContentListItem>
              ))}
        </DetailContentList>
        </DetailsWrapper>
          <DetailsWrapper>
          <DetailsTitle>Release date:</DetailsTitle>
          <DetailContent>{secondDetail ? secondDetail.replace(/-/g,'.') : "Date unknown"}</DetailContent>
        </DetailsWrapper>
      </Detailes>
      <Tags>
        {genreList &&
          Array.isArray(genreList) &&
          genreList.map((genre) => <Tag key={genre.id}>{genre.name}</Tag>)}
      </Tags>
      <VotesWrapper>
        <Star />
        <Rate>{rate}</Rate>
        <OnTen>/10</OnTen>
        <Votes>
          {votes}
          {" votes"}
        </Votes>
      </VotesWrapper>
      <Content>{content}</Content>
    </Wrapper>
    <Content2>{content2}</Content2>
  </Tile>
);
