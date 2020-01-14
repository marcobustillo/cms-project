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
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={props.onClick}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </MUIListItem>
  );
};

export default ListItem;
