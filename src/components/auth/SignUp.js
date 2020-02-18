import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { postData } from "../../utils/api";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    name: ""
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const result = await postData("register", formValues);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        id="username"
        label="Username"
        placeholder="Enter username"
        variant="outlined"
        margin="dense"
        style={{ margin: "5px auto" }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        variant="outlined"
        margin="dense"
        style={{ margin: "5px auto" }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="name"
        label="Full name"
        placeholder="Enter fullname"
        variant="outlined"
        margin="dense"
        style={{ margin: "5px auto" }}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ margin: "5px auto" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;
