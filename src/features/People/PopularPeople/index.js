import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPopularPeopleLoading,
  selectPopularPeople,
  selectPopularPeopleStatus,
} from "../peopleSlice";
import { Content } from "./Content";

export const PopularPeople = () => {
  const dispatch = useDispatch();

  const peopleStatus = useSelector(selectPopularPeopleStatus);
  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeopleLoading());
  }, [dispatch]);
  return (
    <Container>
      <Content status={peopleStatus} people={people} />
    </Container>
  );
};
