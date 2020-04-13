import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Paper, Button } from "@material-ui/core";
import { Edit, Cancel, Save } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import PersonDetail from "./PersonDetail";
import { getApi, postApi } from "../../utils/api";
import { store } from "../../utils/store";

const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
});

const About = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const {
    state: { loading, data },
    dispatch,
  } = useContext(store);

  const [formValues, setFormValues] = useState({
    username: data.username,
    name: data.name,
    position: data.position,
    location: data.location,
    about: data.about,
  });

  const getUser = async () => {
    dispatch({ type: "fetch" });
    const result = await getApi(id);
    if (result) {
      setFormValues({
        username: result.data.username,
        name: result.data.name,
        position: result.data.position,
        location: result.data.location,
        about: result.data.about,
      });
      dispatch({
        type: "getUser",
        payload: result.data,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      const result = await postApi({ ...data, ...formValues });
      if (result) {
        dispatch({
          type: "getUser",
          payload: result.data,
        });
        setIsEdit(false);
        enqueueSnackbar("Successfully updated", { variant: "success" });
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Somehing went wrong...", { variant: "error" });
    }
  };

  if (loading) return <div />;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Personal Information</Typography>
        <div>
          {isEdit && (
            <>
              <Button
                endIcon={<Cancel>cancel</Cancel>}
                onClick={() => setIsEdit(false)}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                endIcon={<Save>save</Save>}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </>
          )}
          {!isEdit && (
            <Button
              color="primary"
              endIcon={<Edit>edit</Edit>}
              onClick={() => setIsEdit(true)}
            >
              Edit
            </Button>
          )}
        </div>
      </div>
      <Paper className={classes.paper}>
        <PersonDetail
          id="name"
          title="Name"
          description={data.name}
          isEditMode={isEdit}
          value={formValues.name}
          onChange={handleChange}
        />
        <PersonDetail
          id="position"
          title="Position"
          description={data.position}
          isEditMode={isEdit}
          value={formValues.position}
          onChange={handleChange}
        />
        <PersonDetail
          id="location"
          title="Location"
          description={data.location}
          isEditMode={isEdit}
          value={formValues.location}
          onChange={handleChange}
        />
        <PersonDetail
          id="about"
          title="About"
          description={data.about}
          isEditMode={isEdit}
          value={formValues.about}
          onChange={handleChange}
          row={4}
          multiLine
        />
      </Paper>
    </>
  );
};

export default About;
