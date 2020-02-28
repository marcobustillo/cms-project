import React, { useEffect, useContext, useState } from "react";
import { List, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import ListItem from "./ListItem";
import Fab from "../FloatingAction";
import Modal from "../Modal";
import SkillModalItems from "./SkillModalItems";
import { getApi, postApi } from "../../utils/api";
import { store } from "../../utils/store";

const Skills = props => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [modalTitle, setModalTitle] = useState("Add Skill");
  const [formValues, setFormValues] = useState({
    title: "",
    years: ""
  });
  const [skill, setSkill] = useState("");
  const [rating, setRating] = useState(0);

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

  const handleSkills = value => {
    switch (value) {
      case "Learning":
        return 1;
      case "Beginner":
        return 2;
      case "Intermediate":
        return 3;
      case "Advanced":
        return 4;
      case "Expert":
        return 5;
      default:
        return 0;
    }
  };

  const handleOpenModal = () => {
    setModalTitle("Add Skill");
    setFormValues({
      title: "",
      years: 0
    });
    setSkill("");
    setRating(0);
    setOpen(!open);
  };

  const handleEdit = values => {
    setFormValues({
      title: values.title,
      years: values.yearsOfExperience
    });
    setSkill("Learning");
    setRating(values.rating);
    setModalTitle("Edit Skill");
    setOpen(true);
  };

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const body = {
        name: formValues.title,
        level: skill,
        rating: parseInt(rating),
        yearsOfExperience: parseInt()
      };
      const result = await postApi({ ...data, skills: [...data.skills, body] });
      dispatch({
        type: "getUser",
        payload: result.data
      });
      enqueueSnackbar("Success!", { variant: "success" });
      setOpen(false);
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Something went wrong...", { variant: "error" });
    }
  };

  const onChange = event => {
    setSkill(event.target.value);
    const rating = handleSkills(event.target.value);
    setRating(rating);
  };

  const handleChange = event => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <>
      <Typography variant="h4">Skills</Typography>
      <List>
        {data.skills &&
          data.skills.map((item, i) => (
            <ListItem
              key={i.toString()}
              title={item.name}
              rating={parseInt(item.rating)}
              skill={item.level}
              yearsOfExperience={item.yearsOfExperience}
              onClick={() => handleEdit(item)}
            />
          ))}
        {data.skills && data.skills.length === 0 && (
          <Typography variant="subtitle1" paragraph color="textSecondary">
            No skills found. Add skills
          </Typography>
        )}
      </List>
      <Fab onClick={handleOpenModal} />
      <Modal
        title={modalTitle}
        open={open}
        handleSubmit={handleSubmit}
        handleClose={handleOpenModal}
      >
        <SkillModalItems
          title={formValues.title}
          years={formValues.years}
          rating={rating}
          skill={skill}
          onChange={onChange}
          handleChange={handleChange}
        />
      </Modal>
    </>
  );
};

export default Skills;
