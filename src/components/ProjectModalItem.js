import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
      <TextField
        fullWidth
        id="technologies"
        label="Technologies"
        margin="dense"
        variant="outlined"
        placeholder="Ex: ReactJS, NodeJS"
        onKeyPress={e => {
          e.key === "Enter" && e.preventDefault();
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          )
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
