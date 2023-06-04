import { Text, Image } from "./styled";
import noResults from "./images/noResults.png";
import { useLocation } from "react-router-dom";
import { searchQueryParamName } from "../../searchQueryParamName";
export const NoResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  return (
    <>
    <Text>Sorry, there are no results for “{query}”</Text>
    <Image src={noResults} alt="" />
  </>
  )
};
