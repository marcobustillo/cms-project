import React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const FloatingAction = props => {
  return (
    <div style={{ position: "absolute", bottom: 25, right: 25 }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default FloatingAction;
