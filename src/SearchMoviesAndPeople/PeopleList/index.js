import { useSelector } from "react-redux";
import {
  selectSearchPeople,
  selectPeopleTotalResults,
} from "./searchPeopleSlice";
import { PeopleTilesList } from "../styled";
import { MovieMemberTile } from "../../common/MovieMemberTile";
import { useState } from "react";
import Pages from "../../common/Pages";
import noPicture from "../../images/noPicture.svg";
import { StyledLink } from "../../features/People/PopularPeople/Content/Success/styled";

const PeopleList = () => {
  const searchPeople = useSelector(selectSearchPeople);
  const totalResults = useSelector(selectPeopleTotalResults);

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 24;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchPeople.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <PeopleTilesList>
        {currentResults.map(({ id, name, profile_path }) => (
          <StyledLink to={`/people/people/${id}`}>
            <MovieMemberTile
              person
              key={id}
              id={id}
              name={name}
              photo={profile_path}
            />
          </StyledLink>
        ))}
      </PeopleTilesList>
      <Pages
        totalPages={Math.ceil(totalResults / 20)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PeopleList;
