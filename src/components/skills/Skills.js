import React, { useEffect, useContext, useState } from "react";
import { List, Typography } from "@material-ui/core";
import ListItem from "./ListItem";
import Fab from "../FloatingAction";
import Modal from "../Modal";
import SkillModalItems from "./SkillModalItems";
import { getApi } from "../../utils/api";
import { store } from "../../utils/store";

const Skills = props => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Skill");
  const [title, setTitle] = useState("");
  const [years, setYears] = useState(0);
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
    setTitle("");
    setSkill("");
    setRating(0);
    setYears(0);
    setOpen(!open);
  };

  const handleEdit = values => {
    setTitle(values.title);
    setSkill("Learning");
    setRating(values.rating);
    setYears(values.yearsOfExperience);
    setModalTitle("Edit Skill");
    setOpen(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { skills } = data;
    dispatch({
      type: "getUser",
      payload: {
        ...data,
        skills: skills.concat({
          title: "tested",
          level: "Advanced",
          rating: 4,
          yearsOfExperience: 5
        })
      }
    });
  };

  const onChange = event => {
    setSkill(event.target.value);
    const rating = handleSkills(event.target.value);
    setRating(rating);
  };

  return (
    <>
      <Typography variant="h4">Skills</Typography>
      <List>
        {data.skills &&
          data.skills.map(item => (
            <ListItem
              title={item.title}
              rating={item.rating}
              skill={item.level}
              yearsOfExperience={item.yearsOfExperience}
              key={item.title}
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
          title={title}
          years={years}
          rating={rating}
          skill={skill}
          onChange={onChange}
        />
      </Modal>
    </>
  );
};

export default Skills;
