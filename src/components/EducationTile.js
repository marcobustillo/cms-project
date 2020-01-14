import React from "react";
import { Paper, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const EducationTile = props => {
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
          Technological University of the Philippines
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
        BS in Computer Science
      </Typography>
      <Typography
        variant="caption"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        Manila, Philippines
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        Apr 2012 - Apr 2017
      </Typography>
      <Typography
        variant="body2"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        Description......
      </Typography>
    </Paper>
  );
};

export default EducationTile;
