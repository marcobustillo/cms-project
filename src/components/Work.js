import React from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import DetailTile from "./DetailTile";
import Fab from "./FloatingAction";

const Work = props => {
  return (
    <>
      <Typography variant="h4">Work</Typography>
      <GridList cellHeight={250}>
        <GridListTile>
          <DetailTile />
        </GridListTile>
      </GridList>
      <Fab />
    </>
  );
};

export default Work;
