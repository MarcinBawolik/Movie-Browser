import { Input, Icon, Form } from "./styled";
import { useLocation } from "react-router-dom";
import { useInputChange } from "./useInputChange";
import { searchQueryParamName } from "../../searchQueryParamName";

export const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  return (
    <>
      <Form>
        <Icon />
        <Input
          type="text"
          placeholder={`Search for ${
            location.pathname.includes("/people")
              ? "people..."
              : location.pathname.includes("/")
              ? "movies..."
              : ""
          }`}
          value={query || ""}
          onChange={useInputChange()}
        />
      </Form>
    </>
  );
};
