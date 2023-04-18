import { Person, PeopleList, Name, Image } from "./styled";

export const Success = ({ people }) => {
  return (
    <>
      <PeopleList>
        {people.map(({ id, name, profile_path }) => (
          <Person key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
              alt={name}
            />
            <Name>{name}</Name>
          </Person>
        ))}
      </PeopleList>
    </>
  );
};
