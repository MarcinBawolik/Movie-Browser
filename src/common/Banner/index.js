import { Container, MaxRate, Rate, Star, Votes, WrapperRate, Title, Image, Descripion, ImageWrapper } from "./styled"
import Poster from "./icon/Poster.png"

export const Banner = () => {
    return (
        <Container>
            <ImageWrapper>
                <Image src={Poster} alt="poster" />
                <Descripion>
                    <Title>Mulan long title</Title>
                    <WrapperRate>
                        <Star />
                        <Rate>7.8</Rate>
                        <MaxRate>/10</MaxRate>
                    </WrapperRate>
                    <Votes>335 głosów</Votes>
                </Descripion>
            </ImageWrapper>
        </Container>
    )
}