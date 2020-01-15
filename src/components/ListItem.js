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
  container: {
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
    <MUIListItem className={classes.container}>
      <ListItemText
        primary={props.title}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {props.skill}
            </Typography>
            {` —  ${props.yearsOfExperience} Years of Experience`}
          </>
        }
      />
      <Rating value={props.rating} readOnly />
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
