import React from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontWeight: 500
  },
  input: {
    width: "40%"
  }
});

const PersonDetail = ({
  id,
  title,
  description,
  value,
  row,
  onChange,
  multiLine,
  isEditMode
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      {isEditMode && (
        <TextField
          className={classes.input}
          id={id}
          label={title}
          value={value}
          variant="outlined"
          margin="dense"
          row={row}
          rowsMax={4}
          multiline={multiLine}
          onChange={onChange}
        />
      )}
      {!isEditMode && (
        <Typography variant="subtitle1" color="textSecondary">
          {description
            ? description
            : "No Data found. Please enter information"}
        </Typography>
      )}
    </>
  );
};

export default PersonDetail;
