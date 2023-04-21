import { useMediaQuery } from "react-responsive";
import actor from "./images/actor.png"
import {
    Container,
    Content,
    Date,
    Details,
    Image,
    LeftText,
    Name,
    Place,
    RightText,
    StyledDiv,
    Wrapper
} from "./styled"

export const ActorProfile = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            <Container>
                {isMobile ?
                    <>
                    <Wrapper>
                        <Image src={actor} alt="actor" />
                        <Content>
                            <Name>Liu Yifei</Name>
                            <StyledDiv>
                                <Date>
                                    <LeftText>Birth:</LeftText>
                                    <RightText>25.08.1987 </RightText>
                                </Date>
                                <Place>
                                    <LeftText>Place of birth:</LeftText>
                                    <RightText>Wuhan, Hubei, China</RightText>
                                </Place>
                            </StyledDiv>
                        </Content>
                    </Wrapper>
                    <Details>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</Details>
                    </>
                    :
                    <Wrapper>
                        <Image src={actor} alt="actor" />
                        <Content>
                            <Name>Liu Yifei</Name>
                            <StyledDiv>
                                <Date>
                                    <LeftText>Date of birth:</LeftText>
                                    <RightText>25.08.1987 </RightText>
                                </Date>
                                <Place>
                                    <LeftText>Place of birth:</LeftText>
                                    <RightText>Wuhan, Hubei, China</RightText>
                                </Place>
                            </StyledDiv>
                            <Details>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</Details>
                        </Content>
                    </Wrapper>
                }
            </Container>
        </>
    )

};