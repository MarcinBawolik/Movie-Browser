import { Container, Name, Photo, Role } from "./styled";
import Poster from "../../images/poster.png";

const Cast = () => (
    <Container>
        <Photo src={Poster}></Photo>
            <Name>Liu Yifei</Name>
            <Role>Mulan</Role>
    </Container>
);

export default Cast;