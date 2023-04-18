import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPeopleLoading,
  selectPeople,
  selectPeopleStatus,
} from "./popularPeopleSlice";
import { Content } from "./Content";

export const PopularPeople = () => {
  const dispatch = useDispatch();

  const peopleStatus = useSelector(selectPeopleStatus);
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchPeopleLoading());
  }, [dispatch]);
  return (
    <Container>
      <Content status={peopleStatus} people={people} />
    </Container>
  );
};
