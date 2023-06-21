import { Name, Photo, Role, Person, NoPhoto, ProfileImage } from "./styled";
import noProfile from "../../images/noProfile.svg"

export const MovieMemberTile = ({ photo, name, role, id }) => (
  <Person key={id}>
    {
      photo ?
        <Photo src={`https://image.tmdb.org/t/p/w185${photo}`} /> :
      <NoPhoto>
        <ProfileImage src={noProfile} />
      </NoPhoto>
      }
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Person>
);
