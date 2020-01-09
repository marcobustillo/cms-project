import React from "react";
import { List } from "@material-ui/core";
import ListItem from "./ListItem";
import Fab from "./FloatingAction";

const Skills = props => {
  return (
    <>
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
