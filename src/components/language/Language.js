import React, { useEffect, useContext, useState } from "react";
import { List, Typography } from "@material-ui/core";
import Fab from "../FloatingAction";
import LanguageItem from "./LanguageItem";
import LanguageModalItem from "./LanguageModalItem";
import Modal from "../Modal";
import { getApi } from "../../utils/api";
import { store } from "../../utils/store";

const Language = props => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Language");

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

  const handleLanguage = value => {
    switch (value) {
      case "Learning":
        return 1;
      case "Beginner":
        return 2;
      case "Intermediate":
        return 3;
      case "Fluent":
        return 4;
      case "Native Tounge":
        return 5;
      default:
        return 0;
    }
  };

  const handleOpenModal = () => {
    setModalTitle("Add Language");
    setOpen(!open);
  };

  const handleEdit = values => {
    setModalTitle("Edit Language");
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

  return (
    <>
      <Typography variant="h4">Languages</Typography>
      <List>
        {data.lang &&
          data.lang.map(item => (
            <LanguageItem onClick={() => handleEdit(item)} />
          ))}
        {data.lang && data.lang.length === 0 && (
          <Typography variant="subtitle1" paragraph color="textSecondary">
            No language found. Add language
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
        <LanguageModalItem />
      </Modal>
    </>
  );
};

export default Language;
