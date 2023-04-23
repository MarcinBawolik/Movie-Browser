import {
  Container,
  MaxRate,
  Rate,
  Star,
  Votes,
  WrapperRate,
  Title,
  Image,
  Descripion,
  ImageWrapper,
} from "./styled";

export const Banner = ({ imageSrc, altText, rate, votes, title }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={imageSrc} alt={altText} />
        <Descripion>
          <Title>{title}</Title>
          <WrapperRate>
            <Star />
            <Rate>{rate}</Rate>
            <MaxRate>/10</MaxRate>
          </WrapperRate>
          <Votes>{votes} głosów</Votes>
        </Descripion>
      </ImageWrapper>
    </Container>
  );
};