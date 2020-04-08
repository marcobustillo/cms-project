import React, { useState } from "react";
import { TextField, Button, Avatar, Typography } from "@material-ui/core";
import ForgotPasswordIcon from "@material-ui/icons/Help";
import { useSnackbar } from "notistack";
import { postData } from "../../utils/api";

const ForgotPassword = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e) => {
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
      <Avatar className={props.className}>
        <ForgotPasswordIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Forgot Password
      </Typography>
      <TextField
        fullWidth
        id="email"
        label="Email"
        placeholder="Enter email"
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
        Send
      </Button>
    </>
  );
};

export default ForgotPassword;
