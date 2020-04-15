import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Fab from "../FloatingAction";
import ProjectItem from "./ProjectItem";
import Modal from "../Modal";
import ProjectModalItem from "./ProjectModalItem";
import { getApi } from "../../utils/api";
import { store } from "../../utils/store";

const Projects = (props) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [modalTitle, setModalTitle] = useState("Add Education");
  const {
    state: { loading, data },
    dispatch,
  } = useContext(store);

  const getUser = async () => {
    dispatch({ type: "fetch" });
    const result = await getApi(id);
    if (result) {
      dispatch({
        type: "getUser",
        payload: result.data,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleEdit = (values) => {
    setModalTitle("Edit Project");
    setOpen(true);
  };

  const handleSubmit = async (event) => {};

  const handleOpenModal = () => {
    setOpen(!open);
    setModalTitle("Add Project");
  };

  return (
    <>
      <Typography variant="h4">Projects</Typography>
      {data.projects && data.projects.length > 0 && (
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            {data.projects &&
              data.projects.map((item) => (
                <Grid item xs={12} md={6} lg={6}>
                  <ProjectItem onClick={handleEdit} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      )}
      {data.projects && data.projects.length === 0 && (
        <div className="MuiList-root MuiList-padding">
          <Typography variant="subtitle1" paragraph color="textSecondary">
            No projects found. Add project
          </Typography>
        </div>
      )}
      <Fab onClick={handleOpenModal} />
      <Modal
        title={modalTitle}
        open={open}
        handleSubmit={handleSubmit}
        handleClose={handleOpenModal}
      >
        <ProjectModalItem />
      </Modal>
    </>
  );
};

export default Projects;
