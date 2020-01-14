import React from "react";
import { Paper, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const DetailTile = props => {
  return (
    <Paper style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Typography variant="h5" component="h2">
          SM Retail Inc.
        </Typography>
        <IconButton
          size="small"
          edge="end"
          aria-label="edit"
          onClick={props.onClick}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
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
