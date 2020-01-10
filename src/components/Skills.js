import React, { useState } from "react";
import { List, Typography } from "@material-ui/core";
import ListItem from "./ListItem";
import Fab from "./FloatingAction";
import Modal from "./Modal";
import SkillModalItems from "./SkillModalItems";

const Skills = props => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [years, setYears] = useState(0);
  const [skill, setSkill] = useState("");
  const [rating, setRating] = useState(0);

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

  const TEST = [
    {
      title: "hey",
      level: "Learning",
      rating: 2,
      yearsOfExperience: 3
    },
    {
      title: "tested",
      level: "Advanced",
      rating: 4,
      yearsOfExperience: 5
    }
  ];

  const handleEdit = values => {
    setTitle(values.title);
    setSkill("Learning");
    setRating(values.rating);
    setYears(values.yearsOfExperience);
    setOpen(true);
  };

  const handleSubmit = () => {};

  const onChange = event => {
    setSkill(event.target.value);
    const rating = handleSkills(event.target.value);
    setRating(rating);
  };

  return (
    <>
      <Typography variant="h4">Skills</Typography>
      <List>
        {TEST.map(item => (
          <ListItem
            title={item.title}
            rating={item.rating}
            skill={item.level}
            yearsOfExperience={item.yearsOfExperience}
            key={item.title}
            onClick={() => handleEdit(item)}
          />
        ))}
      </List>
      <Fab onClick={() => setOpen(true)} />
      <Modal
        title="Add skills"
        open={open}
        handleSubmit={handleSubmit}
        handleClose={() => setOpen(false)}
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
