import React from "react";
import { List, Typography } from "@material-ui/core";
import ListItem from "./ListItem";
import Fab from "./FloatingAction";

const Skills = props => {
  return (
    <>
      <Typography variant="h4">Skills</Typography>
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
      <Fab />
    </>
  );
};

export default Skills;
