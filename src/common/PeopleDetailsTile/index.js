import { useMediaQuery } from "react-responsive";
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

export const PeopleDetailsTile = ({
    id,
    profile_path,
    birthday,
    place_of_birth,
    biography,
    name,
}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            <Container key={id}>
                {isMobile ?
                    <>
                    <Wrapper>
                        <Image src={`https://image.tmdb.org/t/p/w500/${profile_path}`} 
                        alt="{name}" />
                        <Content>
                            <Name>{name}</Name>
                            <StyledDiv>
                                <Date>
                                    <LeftText>Birth:</LeftText>
                                    <RightText>{birthday.replace(/-/g,'.')}</RightText>
                                </Date>
                                <Place>
                                    <LeftText>Place of birth:</LeftText>
                                    <RightText>{place_of_birth}</RightText>
                                </Place>
                            </StyledDiv>
                        </Content>
                    </Wrapper>
                    <Details>{biography}</Details>
                    </>
                    :
                    <Wrapper>
                        <Image src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="{name}" />
                        <Content>
                            <Name>{name}</Name>
                            <StyledDiv>
                                <Date>
                                    <LeftText>Date of birth:</LeftText>
                                    <RightText>{birthday.replace(/-/g,'.')} </RightText>
                                </Date>
                                <Place>
                                    <LeftText>Place of birth:</LeftText>
                                    <RightText>{place_of_birth}</RightText>
                                </Place>
                            </StyledDiv>
                            <Details>{biography}</Details>
                        </Content>
                    </Wrapper>
                }
            </Container>
        </>
    )

};