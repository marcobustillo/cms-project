import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import EducationTile from "./EducationTile";
import Fab from "../FloatingAction";
import Modal from "../Modal";
import EducationModalItem from "./EducationModalItem";
import { getApi, postApi } from "../../utils/api";
import { store } from "../../utils/store";

const Education = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Education");
  const [current, setCurrent] = useState(false);
  const [startDate, handleStartDate] = useState(new Date());
  const [endDate, handleEndDate] = useState(new Date());
  const [formValues, setFormValues] = useState({
    institution: "",
    area: "",
    location: "",
    studyType: "",
  });

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

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "isCurrent") {
      setCurrent(!current);
      return;
    }
    setFormValues({ ...formValues, [id]: value });
  };

  const handleEdit = (values) => {
    setModalTitle("Edit Education");
    setFormValues({
      institution: "",
      area: "",
      location: "",
      studyType: "",
    });
    setCurrent(false);
    handleStartDate(new Date());
    handleEndDate(new Date());
    setOpen(true);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const body = {
        ...formValues,
        isCurrent: current,
        startDate,
        endDate,
      };
      const result = await postApi({
        ...data,
        education: [...data.education, body],
      });
      dispatch({
        type: "getUser",
        payload: result.data,
      });
      setOpen(false);
      enqueueSnackbar("Success!", { variant: "success" });
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Something went wrong...!", { variant: "error" });
    }
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
            data.education.map((item, i) => (
              <Grid item xs={12} md={6} lg={6} key={i.toString()}>
                <EducationTile data={item} onClick={() => handleEdit("test")} />
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
