import { Text, Image } from "./styled";
import noResults from "./images/noResults.png";

export const NoReuslts = () => (
  <>
    <Text>Sorry, there are no results for “Muan”</Text>
    <Image src={noResults} alt="" />
  </>
);
