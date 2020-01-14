import React from "react";
import { TextField, FormControl, Select, InputLabel } from "@material-ui/core";

const SocialMediaModalItems = props => {
  const inputLabel = React.useRef(null);
  const SKILLS = [
    "Facebook",
    "Twitter",
    "Dev.to",
    "Medium",
    "Stack Over Flow",
    "Instagram",
    "Linkedin"
  ];

  return (
    <>
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel ref={inputLabel} htmlFor="lsocial-items-simple">
          Social Media Type
        </InputLabel>
        <Select
          native
          value={props.skill}
          onChange={props.onChange}
          inputProps={{
            name: "social-items",
            id: "social-items-simple"
          }}
        >
          <option value="" />
          {SKILLS.map(skill => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        required
        label="URL"
        margin="dense"
        variant="outlined"
        placeholder="URL"
        value={props.url}
      />
    </>
  );
};

export default SocialMediaModalItems;
