import React from "react";
import { Paper, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const EducationTile = props => {
  const { data } = props;
  return (
    <Paper style={{ padding: 20 }} elevation={props.viewMode ? 0 : 1}>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Typography variant="h5" component="h2">
          {data.institution}
        </Typography>
        {!props.viewMode && (
          <IconButton
            size="small"
            edge="end"
            aria-label="edit"
            onClick={props.onClick}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        )}
      </div>
      <Typography
        variant="caption"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        {data.studyType}
      </Typography>
      <Typography
        variant="caption"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        {data.location}
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
        {data.area}
      </Typography>
    </Paper>
  );
};

export default EducationTile;
