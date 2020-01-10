import React from "react";
import { Grid, GridList, GridListTile, Typography } from "@material-ui/core";
import DetailTile from "./DetailTile";
import Fab from "./FloatingAction";

const Work = props => {
  return (
    <>
      <Typography variant="h4">Work</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile />
        </Grid>
      </Grid>
      <Fab />
    </>
  );
};

export default Work;
