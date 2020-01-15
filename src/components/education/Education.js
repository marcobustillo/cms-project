import React, { useEffect, useContext, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import EducationTile from "./EducationTile";
import Fab from "../FloatingAction";
import Modal from "../Modal";
import EducationModalItem from "./EducationModalItem";
import { getApi } from "../../utils/api";
import { store } from "../../utils/store";

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

  const {
    state: { loading, data },
    dispatch
  } = useContext(store);

  const getUser = async () => {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      dispatch({ type: "fetch" });
      const result = await getApi("marcobustillo");
      if (result) {
        dispatch({
          type: "getUser",
          payload: result.data
        });
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
      {data.education && data.education.length > 0 && (
        <Grid container spacing={3}>
          {data.education &&
            data.education.map(item => (
              <Grid item xs={12} md={6} lg={6}>
                <EducationTile onClick={() => handleEdit("test")} />
              </Grid>
            ))}
        </Grid>
      )}
      {data.education && data.education.length === 0 && (
        <div className="MuiList-root MuiList-padding">
          <Typography variant="subtitle1" paragraph color="textSecondary">
            No education found. Add education
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
