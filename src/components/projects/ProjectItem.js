import React from "react";
import { Paper, Typography, IconButton, Chip, Link } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const ProjectItem = props => {
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
          Open Source Labs
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
      <div>
        <Link href="https://github.com" variant="caption" target="_blank">
          Site URL
        </Link>
      </div>
      <div>
        <Link href="https://github.com" variant="caption" target="_blank">
          Repository URL
        </Link>
      </div>
      <div>
        <Chip
          style={{ margin: 5 }}
          size="small"
          label="Gastby"
          color="primary"
        />
        <Chip
          style={{ margin: 5 }}
          size="small"
          label="NodeJS"
          color="primary"
        />
      </div>
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

export default ProjectItem;
