import { LinearProgress } from "@material-ui/core";
import * as React from "react";
import { IPerson } from "../people-reducer";
import ListPeople from "./list-people";

const People: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [people, setPeople] = React.useState<IPerson[]>([]);

  const fetchPersons = async () => {
    // "https://swapi.dev/api/people"
  };

  React.useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <>{isFetching ? <LinearProgress /> : <ListPeople people={people} />}</>
  );
};

export default People;
