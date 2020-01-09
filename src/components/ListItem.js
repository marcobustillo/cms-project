import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem as MUIListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
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
  },
  inline: {
    display: "inline"
  }
}));

const ListItem = props => {
  const classes = useStyles();

  return (
    <MUIListItem className={classes.demo}>
      <ListItemText
        primary="test"
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Intermediate
            </Typography>
            {" —  3 Years of Experience"}
          </>
        }
      />
      <Rating name="simple-controlled" value={3} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </MUIListItem>
  );
};

export default ListItem;
