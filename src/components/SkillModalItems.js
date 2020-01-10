import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  Typography
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const SkillModalItems = props => {
  const inputLabel = React.useRef(null);
  const SKILLS = ["Learning", "Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <>
      <TextField
        fullWidth
        required
        label="Title"
        margin="dense"
        variant="outlined"
        placeholder="Title"
        value={props.title}
      />
      <TextField
        fullWidth
        label="Years Of Experience"
        margin="dense"
        variant="outlined"
        placeholder="Years of Experience"
        value={props.years}
      />
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel ref={inputLabel} htmlFor="level-native-simple">
          Level
        </InputLabel>
        <Select
          native
          value={props.skill}
          onChange={props.onChange}
          inputProps={{
            name: "level",
            id: "level-native-simple"
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
      <div style={{ display: "flex" }}>
        <Typography>Rating:</Typography>
        <Rating value={props.rating} readOnly />
      </div>
    </>
  );
};

export default SkillModalItems;
