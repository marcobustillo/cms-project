import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem as MUIListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Link
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 5,
    backgroundColor: theme.palette.background.paper
  }
}));

const ListItem = props => {
  const classes = useStyles();

  return (
    <MUIListItem className={classes.container}>
      <ListItemText
        primary={props.type}
        secondary={
          <Typography
            style={{ marginLeft: 20 }}
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            <Link href={props.link} target="_blank">
              {props.link}
            </Link>
          </Typography>
        }
      />
      {!props.viewMode && (
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={props.onClick}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </MUIListItem>
  );
};

export default ListItem;
