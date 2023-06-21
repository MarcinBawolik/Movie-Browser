import { useMediaQuery } from "react-responsive";
import noPicture from "../../images/noPicture.svg"
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
                            <Image src={profile_path
                                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                : noPicture
                            }
                            />
                            <Content>
                                <Name>{name}</Name>
                                <StyledDiv>
                                    <Date>
                                        <LeftText>Birth:</LeftText>
                                        <RightText>{birthday ? birthday.replace(/-/g, '.') : 'Rok Nieznany'}</RightText>
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
                         <Image src={profile_path
                                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                : noPicture
                            }
                            />
                        <Content>
                            <Name>{name}</Name>
                            <StyledDiv>
                                <Date>
                                    <LeftText>Date of birth:</LeftText>
                                    <RightText>{birthday ? birthday.replace(/-/g, '.') : "Date unknown"} </RightText>
                                </Date>
                                <Place>
                                    <LeftText>Place of birth:</LeftText>
                                    <RightText>{place_of_birth ? place_of_birth : "Place unknown"}</RightText>
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