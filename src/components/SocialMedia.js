import React from "react";
import { List, Typography } from "@material-ui/core";
import ListItem from "./ListItem";
import Fab from "./FloatingAction";

const SocialMedia = props => {
  return (
    <>
      <Typography variant="h4">Social Media</Typography>
      <List>
        <ListItem />
      </List>
      <Fab />
    </>
  );
};

export default SocialMedia;
