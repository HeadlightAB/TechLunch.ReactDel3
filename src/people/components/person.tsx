import {
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../../redux/root-reducer";
import { fetchPerson } from "../people-actions";

const Person: React.FC = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const { isFetching, person } = useSelector((state: IApplicationState) => ({
    isFetching: state.people.fetching,
    person: state.people.person,
  }));

  React.useEffect(() => {
    dispatch(fetchPerson(id));
  }, [id, dispatch]);

  return (
    <Grid container justify="center">
      <Grid item xs={4}>
        {isFetching ? (
          <LinearProgress />
        ) : (
          <Card>
            <CardContent style={{ textAlign: "left" }}>
              <Typography variant="h5">{person?.name}</Typography>
              <Typography variant="body1">
                <div>Height: {person?.height}</div>
                <div>Gender: {person?.gender}</div>
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default Person;
