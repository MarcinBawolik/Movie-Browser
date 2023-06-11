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
  GradientMask,
} from "./styled";

export const Banner = ({ imageSrc, altText, rate, votes, title }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={imageSrc} alt={altText} />
        <GradientMask />
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
