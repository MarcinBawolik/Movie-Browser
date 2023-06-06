import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamsName) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(searchQueryParamsName);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    value ? searchParams.set(key, value) : searchParams.delete(key);

    const newSearch = searchParams.toString();
    history.replace(`${location.pathname}?${newSearch}`);
  };
};