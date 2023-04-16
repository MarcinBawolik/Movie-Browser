
import {
    Page,
    Wrapper,
    StyledTile,
    VectorLeft,
    VectorRight,
    Container,
    Number,
    Text,
} from "./styled"


export const Pages = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <StyledTile>
                        <VectorLeft />
                        First
                    </StyledTile>
                </Container>
                <Container>
                    <StyledTile>
                        <VectorLeft />
                        Previous
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
                        <VectorRight />
                        Next
                    </StyledTile>
                </Container>
                <Container>
                    <StyledTile>
                        <VectorRight />
                        Last
                    </StyledTile>
                </Container>
            </Wrapper>
        </>

    )
}