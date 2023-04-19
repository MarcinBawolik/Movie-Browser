import { useMediaQuery } from "react-responsive";
import {
    Page,
    Wrapper,
    StyledTile,
    VectorLeft,
    VectorRight,
    Container,
    Number,
    Text,
    TileText,
} from "./styled"


export const Pages = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            <Wrapper>
                <Container>
                    <StyledTile>
                        {isMobile ?
                            <>
                                <VectorLeft />
                                <VectorLeft />
                            </>
                            :
                            <VectorLeft />
                        }
                        <TileText>First</TileText>
                    </StyledTile>
                </Container>
                <Container>
                    <StyledTile>
                        <VectorLeft />
                        <TileText>Previous</TileText>
                    </StyledTile>
                </Container>
                <Page>
                    <Text>Page</Text>
                    <Number>1</Number>
                    <Text>of</Text>
                    <Number>500</Number>
                </Page>
                <Container>
                    <StyledTile>
                        <TileText>Next</TileText>
                        <VectorRight />
                    </StyledTile>
                </Container>
                <Container>
                    <StyledTile>
                        <TileText>Last</TileText>
                        {isMobile ?
                            <>
                                <VectorRight />
                                <VectorRight />
                            </>
                            :
                            <VectorRight />
                        }
                    </StyledTile>
                </Container>
            </Wrapper>
        </>

    )
};