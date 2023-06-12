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
    <>
      {imageSrc !== null && (
        <Container>
          <ImageWrapper>
            <Image src={`https://image.tmdb.org/t/p/w1280/${imageSrc}`} />
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
      )}
    </>
  );
};