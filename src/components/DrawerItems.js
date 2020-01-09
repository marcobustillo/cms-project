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

const DrawerItems = () => {
  const history = useHistory();
  return (
    <div>
      <ListItem button onClick={() => history.push("/about")}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button onClick={() => history.push("/work")}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Work" />
      </ListItem>
      <ListItem button onClick={() => history.push("/education")}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Education" />
      </ListItem>
      <ListItem button onClick={() => history.push("/skills")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
      </ListItem>
      <ListItem button onClick={() => history.push("/social-media")}>
        <ListItemIcon>
          <StarsIcon />
        </ListItemIcon>
        <ListItemText primary="Social Media" />
      </ListItem>
    </div>
  );
};

export default DrawerItems;
