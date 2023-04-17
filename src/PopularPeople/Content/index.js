import { Loading } from "../../PopularMovies/Content/Loading";
import { Error } from "../../Error/index"
import { Success } from "./Success";

export const Content = ({ status, people }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <Error />;

    case "success":
      return <Success people={people} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
