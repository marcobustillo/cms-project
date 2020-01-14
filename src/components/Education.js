import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import EducationTile from "./EducationTile";
import Fab from "./FloatingAction";
import Modal from "./Modal";
import EducationModalItem from "./EducationModalItem";

const Education = props => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Education");
  const [current, setCurrent] = useState(false);
  const [startDate, handleStartDate] = useState(new Date());
  const [endDate, handleEndDate] = useState(new Date());
  const [formValues, setFormValues] = useState({
    company: "",
    position: "",
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
    setModalTitle("Edit Education");
    setFormValues({
      company: "",
      position: "",
      location: "",
      summary: ""
    });
    setCurrent(false);
    handleStartDate(new Date());
    handleEndDate(new Date());
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
    setModalTitle("Add Education");
  };

  return (
    <>
      <Typography variant="h4">Education</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <EducationTile onClick={() => handleEdit("test")} />
        </Grid>
      </Grid>
      <Fab onClick={handleOpenModal} />
      <Modal
        title={modalTitle}
        open={open}
        handleSubmit={handleSubmit}
        handleClose={handleOpenModal}
      >
        <EducationModalItem
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

export default Education;
