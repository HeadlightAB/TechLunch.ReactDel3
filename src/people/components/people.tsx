import { LinearProgress } from "@material-ui/core";
import * as React from "react";
import { IPerson } from "../people-reducer";
import ListPeople from "./list-people";

const People: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [people, setPeople] = React.useState<IPerson[]>([]);

  const fetchPersons = async () => {
    setIsFetching(true);
    const response = await fetch("https://swapi.dev/api/people");

    if (response.ok) {
      const data: { results: IPerson[] } = await response.json();
      setPeople(data.results);
    }

    setIsFetching(false);
  };

  React.useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <>{isFetching ? <LinearProgress /> : <ListPeople people={people} />}</>
  );
};

export default People;
