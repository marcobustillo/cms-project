import React from "react";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import BarChartIcon from "@material-ui/icons/BarChart";
import StarsIcon from "@material-ui/icons/Stars";
import ProfileIcon from "@material-ui/icons/AccountBox";
import ProjectIcon from "@material-ui/icons/AccountTree";
import LanguageIcon from "@material-ui/icons/Language";
import SignOut from "@material-ui/icons/ExitToApp";

const DrawerItems = props => {
  const history = useHistory();
  const { onClose } = props;
  const id = "marcobustillo";
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <ProfileIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}/about`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}/work`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Work" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}/projects`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <ProjectIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}/education`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Education" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}/skills`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}/language`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary="Language" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push(`/${id}/social-media`);
          if (onClose) {
            onClose();
          }
        }}
      >
        <ListItemIcon>
          <StarsIcon />
        </ListItemIcon>
        <ListItemText primary="Social Media" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          localStorage.clear();
        }}
      >
        <ListItemIcon>
          <SignOut />
        </ListItemIcon>
        <ListItemText primary="Sign out" />
      </ListItem>
    </div>
  );
};

export default DrawerItems;
