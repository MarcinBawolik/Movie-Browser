import { Loading } from "./Loading";
import { Error } from "./Error";
import { Success } from "./Success";

export const Content = ({ status, movies }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <Error />;

    case "success":
      return <Success movies={movies} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
