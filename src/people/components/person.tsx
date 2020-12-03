import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { useParams } from "react-router-dom";

const Person: React.FC = () => {
  const { id }: any = useParams();

  return (
    <Grid container justify="center">
      <Grid item xs={4}>
        <Card>
          <CardContent style={{ textAlign: "left" }}>
            <Typography variant="h5"></Typography>
            <Typography variant="body1">
              <div>Height:</div>
              <div>Gender:</div>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Person;
