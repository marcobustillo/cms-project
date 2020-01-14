import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import DetailTile from "./DetailTile";
import Fab from "./FloatingAction";
import Modal from "./Modal";
import WorkModalItem from "./WorkModalItem";

const Work = props => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Work");
  const [current, setCurrent] = useState(false);
  const [startDate, handleStartDate] = useState(new Date());
  const [endDate, handleEndDate] = useState(new Date());
  const [formValues, setFormValues] = useState({
    company: "",
    position: "",
    website: "",
    location: "",
    summary: ""
  });

  const handleChange = event => {
    const { id, value } = event.target;
    if (id === "isCurrent") {
      setCurrent(!current);
      return;
    }
    setFormValues({ ...formValues, [id]: value });
  };

  const handleEdit = values => {
    setModalTitle("Edit Work");
    setOpen(true);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const body = {
      ...formValues,
      isCurrent: current,
      startDate,
      endDate
    };
    console.log(body);
  };

  const handleOpenModal = () => {
    setOpen(!open);
    setModalTitle("Add Work");
  };
  return (
    <>
      <Typography variant="h4">Work</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile onClick={() => handleEdit("test")} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DetailTile />
        </Grid>
      </Grid>
      <Fab onClick={handleOpenModal} />
      <Modal
        title={modalTitle}
        open={open}
        handleSubmit={handleSubmit}
        handleClose={handleOpenModal}
      >
        <WorkModalItem
          data={formValues}
          current={current}
          startDate={startDate}
          handleStartDate={handleStartDate}
          endDate={endDate}
          handleEndDate={handleEndDate}
          action={handleChange}
        />
      </Modal>
    </>
  );
};

export default Work;
