import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";

const Modal = props => {
  const { open, handleClose } = props;
  return (
    <Dialog fullWidth maxWidth="sm" onClose={handleClose} open={open}>
      <form onSubmit={props.handleSubmit}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="secondary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Modal;
