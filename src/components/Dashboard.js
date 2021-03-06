import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useRouteMatch } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import DrawerItems from "./DrawerItems";
import Router from "../navigation";
import Modal from "./Modal";
import Auth from "./auth";
import { store } from "../utils/store";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://marcobustillo.ml">
        Portfolio Builder
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 20,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: { flexGrow: 1 },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    state: { isAuthenticated },
    dispatch,
  } = useContext(store);
  const [open, setOpen] = React.useState(false);

  const match = useRouteMatch();

  const matchMemo = React.useMemo(() => match, [match]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: "auth",
      });
    }
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {isAuthenticated && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div className={classes.title}>
            <Link variant="h6" color="inherit" component={RouterLink} to="/">
              Portfolio Builder
            </Link>
          </div>
          {!isAuthenticated && (
            <Button color="inherit" onClick={() => setModalOpen(true)}>
              Sign In/Sign Up
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {isAuthenticated && (
        <>
          <Hidden smDown>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(
                  classes.drawerPaper,
                  !open && classes.drawerPaperClose
                ),
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <DrawerItems />
              </List>
            </Drawer>
          </Hidden>

          <Hidden mdUp>
            <SwipeableDrawer
              open={open}
              onClose={handleDrawerClose}
              onOpen={handleDrawerOpen}
            >
              <DrawerItems onClose={handleDrawerClose} />
            </SwipeableDrawer>
          </Hidden>
        </>
      )}

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {Router(matchMemo)}
          <div
            style={{
              margin: "20px auto",
            }}
          >
            <Copyright />
          </div>
        </Container>
        <Modal
          open={modalOpen}
          noAction
          handleClose={() => setModalOpen(false)}
        >
          <Auth handleClose={() => setModalOpen(false)} />
        </Modal>
      </main>
    </div>
  );
};

export default Dashboard;
