import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { IPerson } from "../people-reducer";
import styles from "./list-people.module.css";

export interface IListPeopleProps {
  people: IPerson[];
}

const ListPeople: React.FC<IListPeopleProps> = (props) => {
  return (
    <Grid container justify="flex-start">
      {props.people.map((person) => (
        <Grid item xs={2}>
          <Card className={styles.card}>
            <CardContent>
              <Link to={`/person/${person.url.replaceAll(/\D/gm, "")}`}>
                <Typography variant="h5">{person.name}</Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPeople;
