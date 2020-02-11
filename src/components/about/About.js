import React, { useState, useContext, useEffect } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { Edit, Cancel, Save } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import PersonDetail from "./PersonDetail";
import { getApi, postApi } from "../../utils/api";
import { store } from "../../utils/store";

const useStyles = makeStyles({
  paper: {
    padding: 20
  }
});

const About = props => {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const {
    state: { loading, data },
    dispatch
  } = useContext(store);
  const [formValues, setFormValues] = useState({
    username: data.username,
    name: data.name,
    position: "",
    location: "",
    about: data.about
  });

  const getUser = async () => {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      dispatch({ type: "fetch" });
      const result = await getApi("marcobustillo");
      if (result) {
        setFormValues({
          username: result.data.username,
          name: result.data.name,
          position: result.data.position,
          location: result.data.location,
          about: result.data.about
        });
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

  const handleChange = e => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      const result = await postApi({ ...data, ...formValues });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <div />;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
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
          id="username"
          title="Username"
          description={`@${data.username}`}
          isEditMode={isEdit}
          value={formValues.username}
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
