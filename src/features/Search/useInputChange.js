import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { searchQueryParamName } from "../../searchQueryParamName";
import {
  changePeopleSearchText,
  fetchSearchPeople,
  removeSearchPeople,
  setPeoplePageFirst,
} from "../../SearchMoviesAndPeople/PeopleList/searchPeopleSlice";
import {
  changeMoviesSearchText,
  fetchSearchMovies,
  removeSearchMovies,
  setMoviesPageFirst,
} from "../../SearchMoviesAndPeople/MoviesList/searchMoviesSlice";
import { usePathname } from "../../usePathname";
import { useReplaceQueryParameter } from "../../queryParameters";

export const useInputChange = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const pathname = usePathname();
  const replaceQueryParameter = useReplaceQueryParameter();

  const updateSearchParams = (target) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() ? target.value : undefined,
    });
  };

  const dispatchesHandler = (
    removeDispatch,
    fetchDispatch,
    firstPageDispatch,
    searchFirstTextDispatch,
    searchSecondTextDispatch,
    target
  ) => {
    dispatch(removeDispatch());
    dispatch(fetchDispatch());
    dispatch(firstPageDispatch());
    dispatch(searchFirstTextDispatch(""));
    dispatch(searchSecondTextDispatch(target.value));
  };

  const pushToPath = (pathname, target) => {
    history.push({
      pathname: pathname,
      search: `?${searchQueryParamName}=${target.value}`,
    });
  };

  const searchMovies = (target) => {
    updateSearchParams(target);

    dispatchesHandler(
      removeSearchPeople,
      fetchSearchMovies,
      setMoviesPageFirst,
      changePeopleSearchText,
      changeMoviesSearchText,
      target
    );

    pushToPath("/movies/search", target);
  };

  const searchPeople = (target) => {
    updateSearchParams(target);

    dispatchesHandler(
      removeSearchMovies,
      fetchSearchPeople,
      setPeoplePageFirst,
      changeMoviesSearchText,
      changePeopleSearchText,
      target
    );

    pushToPath("/people/search", target);
  };

  const onInputChange = ({ target }) => {
    if (pathname.includes("/movies")) {
      searchMovies(target);
    } else if (pathname.includes("/people")) {
      searchPeople(target);
    } else {
      return null;
    }
  };

  return onInputChange;
};
