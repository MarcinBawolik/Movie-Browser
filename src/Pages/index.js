
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

import React, { useState, useEffect } from "react";




export const Pages = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <Wrapper>{width >= 767 ?
                <>
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
                </>
                :
                <>
                    <Container>
                        <StyledTile>
                            <VectorLeft />
                            <VectorLeft />
                        </StyledTile>
                    </Container>
                    <Container>
                        <StyledTile>
                            <VectorLeft />
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
                        </StyledTile>
                    </Container>
                    <Container>
                        <StyledTile>
                            <VectorRight />
                            <VectorRight />
                        </StyledTile>
                    </Container>
                </>
            }</Wrapper>;
        </>
    )
}