import { Container, Name, Photo, Role, Person } from "./styled";
import Poster from "../../images/poster.png";

const Cast = () => (

    // zamiast photo trzeba zrobic osobny div i przekazac mu background img, jesli nie ma nic to puste logo
    <Container>
        <Person>
            <Photo src={Poster}></Photo>
            <Name>Liu Yifei</Name>
            <Role>Mulan</Role>
        </Person>
        <Person>
            <Photo src={Poster}></Photo>
            <Name>Liu Yifei</Name>
            <Role>Mulan</Role>
        </Person>
        <Person>
            <Photo src={Poster}></Photo>
            <Name>Liu Yifei</Name>
            <Role>Mulan</Role>
        </Person>
        <Person>
            <Photo src={Poster}></Photo>
            <Name>Liu Yifei</Name>
            <Role>Mulan</Role>
        </Person>
        <Person>
            <Photo src={Poster}></Photo>
            <Name>Liu Yifei</Name>
            <Role>Mulan</Role>
        </Person>
        <Person>
            <Photo src={Poster}></Photo>
            <Name>Liu Yifei</Name>
            <Role>Mulan</Role>
        </Person>
    </Container>
);

export default Cast;