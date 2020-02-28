import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { postData } from "../../utils/api";

const SignIn = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const result = await postData("login", formValues);
      console.log(result);
    } catch (err) {
      enqueueSnackbar("Incorrect username/password", { variant: "error" });
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
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ margin: "5px auto" }}
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </>
  );
};

export default SignIn;
