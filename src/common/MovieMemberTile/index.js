import { Name, Photo, Role, Person } from "./styled";

export const MovieMemberTile = ({ photo, name, role, id }) => (
  <Person key={id}>
    <Photo src={photo}></Photo>
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Person>
);
