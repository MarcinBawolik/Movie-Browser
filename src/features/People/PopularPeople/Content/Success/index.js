import { Person, PeopleList, Name, Image, StyledLink, Header } from "./styled";
import Pages from "../../../../../common/Pages"
import { useState } from "react";

export const Success = ({ people }) => {
      const [currentPage, setCurrentPage] = useState(1);
      const [resultsPerPage] = useState(18);

      const indexOfLastResult = currentPage * resultsPerPage;
      const indexOfFirstResult = indexOfLastResult - resultsPerPage;
      const currentResults = people.slice(indexOfFirstResult, indexOfLastResult);

      const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };

      return (
        <>
        <Header>Popular People</Header>
          <PeopleList>
            {currentResults.map(({ id,
              name,
              profile_path
            }) => (
              <>
                <StyledLink to={`/people/people/${id}`}>
                  <Person key={id}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                      alt={name}
                    />
                    <Name>{name}</Name>
                  </Person>
                </StyledLink>
              </>
            ))}
          </PeopleList>
          <Pages
           totalResults={people.length}
           resultsPerPage={resultsPerPage}
           currentPage={currentPage}
           onPageChange={handlePageChange}
          />
        </>
      );
    };
