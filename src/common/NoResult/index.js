import { Header } from "../../features/Movies/MovieDetails/styled";
import { Wrapper, Photo } from "./styled";
import PictureImage from './icon/Picture.png';

export const NoResult = () => (
  <>
    <Wrapper>
        <Header>Sorry, there are no results for “Muan”</Header>
        <Photo src={PictureImage}></Photo>
    </Wrapper>
  </>
);
