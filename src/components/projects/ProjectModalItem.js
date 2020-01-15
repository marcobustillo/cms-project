import React from "react";
import { TextField } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";

const ProjectModalItem = props => {
  const { data, action } = props;

  return (
    <>
      <TextField
        fullWidth
        required
        id="title"
        label="Project Title"
        margin="dense"
        variant="outlined"
        placeholder="Ex: Twitter Clone"
      />
      <TextField
        fullWidth
        required
        id="github"
        label="Repository URL"
        margin="dense"
        variant="outlined"
        placeholder="Ex: https://github.com/twitter-clone"
      />
      <TextField
        fullWidth
        required
        id="siteurl"
        label="Site URL"
        margin="dense"
        variant="outlined"
        placeholder="Ex: https://twitterclone.com"
      />
      <ChipInput
        fullWidth
        id="technologies"
        label="Technologies"
        margin="dense"
        variant="outlined"
        placeholder="Ex: ReactJS. Press enter to add technology"
        onKeyPress={e => {
          e.key === "Enter" && e.preventDefault();
        }}
      />
      <TextField
        fullWidth
        id="description"
        label="Description"
        margin="dense"
        multiline
        rows={4}
        rowsMax={4}
        variant="outlined"
      />
    </>
  );
};

export default ProjectModalItem;
