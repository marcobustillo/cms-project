import React, { useEffect, useContext, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import DetailTile from "./DetailTile";
import Fab from "../FloatingAction";
import Modal from "../Modal";
import WorkModalItem from "./WorkModalItem";
import { getApi, postApi } from "../../utils/api";
import { store } from "../../utils/store";

const Work = props => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Work");
  const [current, setCurrent] = useState(false);
  const [startDate, handleStartDate] = useState(new Date());
  const [endDate, handleEndDate] = useState(new Date());
  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState({
    company: "",
    position: "",
    website: "",
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
    setModalTitle("Edit Work");
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
    try {
      event.preventDefault();
      const body = {
        ...formValues,
        isCurrent: current,
        startDate,
        endDate
      };
      const result = await postApi({ ...data, work: [...data.work, body] });
      if (result) {
        dispatch({
          type: "getUser",
          payload: result.data
        });
        setOpen(false);
        enqueueSnackbar("Sucess!", { variant: "success" });
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Something went wrong...", { variant: "error" });
    }
  };

  const handleOpenModal = () => {
    setOpen(!open);
    setModalTitle("Add Work");
  };

  return (
    <>
      <Typography variant="h4">Work</Typography>
      {data.work && data.work.length > 0 && (
        <Grid container spacing={3}>
          {data.work &&
            data.work.map((item, i) => (
              <Grid item xs={12} md={6} lg={6} key={i.toString()}>
                <DetailTile data={item} onClick={() => handleEdit("test")} />
              </Grid>
            ))}
        </Grid>
      )}
      {data.work && data.work.length === 0 && (
        <div className="MuiList-root MuiList-padding">
          <Typography variant="subtitle1" paragraph color="textSecondary">
            No work found. Add work
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
