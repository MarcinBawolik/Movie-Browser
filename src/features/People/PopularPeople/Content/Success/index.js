import { Person, PeopleList, Name, Image, StyledLink, Header } from "./styled";
import Pages from "../../../../../common/Pages";
import { useState, useEffect } from "react";
import { getPopularPeople } from "../../../peopleAPI";
import Loader from "../../../../../common/Loader";
import { Error } from "../../../../../common/Error";
import noPicture from "../../../../../images/noPicture.svg";

export const Success = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resultsPerPage = 18;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setPeople([]);
  };

  const fetchPeople = async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await getPopularPeople(currentPage);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPeople((prevPeople) => [...prevPeople, ...results]);
    } catch (error) {
      console.error(error);
      setError("Wystąpił błąd podczas pobierania postaci.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPeople();
  }, [currentPage]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <Header>Popular People</Header>
      <PeopleList>
        {people.map(({ id, name, profile_path }) => (
          <>
            <StyledLink to={`/people/people/${id}`}>
              <Person key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                      : noPicture
                  }
                  alt={name}
                />
                <Name>{name}</Name>
              </Person>
            </StyledLink>
          </>
        ))}
      </PeopleList>
      <Pages
        totalPages={500}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
