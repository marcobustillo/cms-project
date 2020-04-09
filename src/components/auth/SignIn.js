import React, { useState } from "react";
import { TextField, Button, Avatar, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useSnackbar } from "notistack";
import { postData } from "../../utils/api";
import validation from "./authValidation";

const SignIn = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [errorState, setErrorState] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setErrorState({ ...errorState, [id]: "" });
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errors = validation(formValues);
      if (Object.keys(errors).length > 0 && errors.constructor === Object) {
        setErrorState(errors);
        return;
      }
      const result = await postData("login", formValues);
      console.log(result);
    } catch (err) {
      enqueueSnackbar("Incorrect username/password", { variant: "error" });
    }
  };

  return (
    <>
      <Avatar className={props.className}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <TextField
        fullWidth
        id="username"
        label="Username"
        placeholder="Enter username"
        variant="outlined"
        margin="dense"
        error={!!errorState.username}
        helperText={errorState.username}
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
        error={!!errorState.password}
        helperText={errorState.password}
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
