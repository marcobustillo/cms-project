import React, { useState } from "react";
import { TextField, Button, Avatar, Typography } from "@material-ui/core";
import SignUpIcon from "@material-ui/icons/PersonAdd";
import { useSnackbar } from "notistack";
import { postData } from "../../utils/api";

const SignUp = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await postData("register", formValues);
      console.log(result);
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Something went wrong...", { variant: "error" });
    }
  };

  return (
    <>
      <Avatar className={props.className}>
        <SignUpIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
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
