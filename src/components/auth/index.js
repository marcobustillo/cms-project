import React, { useState } from "react";
import { Container, Typography, Avatar, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default () => {
  const classes = useStyles();
  const [state, setState] = useState(0);
  return (
    <Container className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {state === 0 ? `Sign In` : `Sign Up`}
      </Typography>
      {state === 0 && <SignIn />}
      {state === 0 && (
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link variant="body2" onClick={() => setState(1)}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      )}
      {state === 1 && <SignUp />}
      {state === 1 && (
        <Grid container justify="flex-end">
          <Grid item>
            <Link variant="body2" onClick={() => setState(0)}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
