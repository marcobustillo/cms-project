import React, { useState } from "react";
import { Container, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default (props) => {
  const classes = useStyles();
  const [state, setState] = useState(0);
  return (
    <Container className={classes.paper}>
      {state === 0 && (
        <SignIn className={classes.logo} handleClose={props.handleClose} />
      )}
      {state === 0 && (
        <Grid container>
          <Grid item xs>
            <Link
              onClick={() => setState(2)}
              variant="body2"
              style={{ cursor: "pointer" }}
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              variant="body2"
              onClick={() => setState(1)}
              style={{ cursor: "pointer" }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      )}
      {state === 1 && <SignUp className={classes.logo} />}
      {state === 1 && (
        <Grid container justify="flex-end">
          <Grid item>
            <Link
              variant="body2"
              onClick={() => setState(0)}
              style={{ cursor: "pointer" }}
            >
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      )}
      {state === 2 && <ForgotPassword className={classes.logo} />}
    </Container>
  );
};
