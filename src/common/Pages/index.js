import React from "react";
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
} from "./styled";

const Pages = ({ totalPages, currentPage, onPageChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(500);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <StyledTile onClick={handleFirstPage}>
            {isMobile ? (
              <>
                <VectorLeft />
                <VectorLeft />
              </>
            ) : (
              <VectorLeft />
            )}
            <TileText>First</TileText>
          </StyledTile>
        </Container>
        <Container>
          <StyledTile onClick={handlePreviousPage}>
            <VectorLeft />
            <TileText>Previous</TileText>
          </StyledTile>
        </Container>
        <Page>
          <Text>Page</Text>
          <Number>{currentPage}</Number>
          <Text>of</Text>
          <Number>{totalPages}</Number>
        </Page>
        <Container>
          <StyledTile onClick={handleNextPage}>
            <TileText>Next</TileText>
            <VectorRight />
          </StyledTile>
        </Container>
        <Container>
          <StyledTile onClick={handleLastPage}>
            <TileText>Last</TileText>
            {isMobile ? (
              <>
                <VectorRight />
                <VectorRight />
              </>
            ) : (
              <VectorRight />
            )}
          </StyledTile>
        </Container>
      </Wrapper>
    </>
  );
};

export default Pages;
