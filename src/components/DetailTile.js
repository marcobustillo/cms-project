import React from "react";
import { Paper, Typography } from "@material-ui/core";

const DetailTile = props => {
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5" component="h2">
        SM Retail Inc.
      </Typography>
      <Typography
        variant="caption"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        Software Developer
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        Apr 2019 - Current
      </Typography>
      <Typography
        variant="body2"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        Working as a software developer on the biggest e-commerce and mall in
        the Philippines. This application using GatsbyJS for the frontend,
        GraphQL wrapped API-Gateway and Lamdba functions as its backend. And as
        a team we are using scrum methodology
      </Typography>
    </Paper>
  );
};

export default DetailTile;
