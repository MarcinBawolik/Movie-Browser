import { Person, PeopleList, Name, Image, StyledLink } from "./styled";

export const Success = ({ people }) => {
  return (
    <>
      <PeopleList>
        {people.map(({ id,
          name,
          profile_path
        }) => (
          <>
            <StyledLink to={`/people/${id}`}>
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
    </>
  );
};
