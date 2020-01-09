import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem as MUIListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    marginBottom: 5,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

const ListItem = props => {
  const styles = useStyles();

  return (
    <MUIListItem className={styles.demo}>
      <ListItemText primary="test" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </MUIListItem>
  );
};

export default ListItem;
