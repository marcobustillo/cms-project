import React, { useEffect, useState, useContext } from "react";
import { List, Typography } from "@material-ui/core";
import SocialMediaItem from "./SocialMediaItem";
import Fab from "../FloatingAction";
import Modal from "../Modal";
import SocialMediaModalItems from "./SocialMediaModalItems";
import { getApi } from "../../utils/api";
import { store } from "../../utils/store";

const SocialMedia = props => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Social Media");
  const [formValues, setFormValues] = useState({
    link: "",
    type: ""
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

  const handleSubmit = event => {
    event.preventDefault();
    const { socials } = data;
    dispatch({
      type: "getUser",
      payload: {
        ...data,
        socials: socials.concat({
          type: "Twitter",
          link: "https://twitter.com"
        })
      }
    });
  };

  const handleChange = event => {
    const { id, value } = event.target;

    setFormValues({ ...formValues, [id]: value });
  };

  const handleModal = () => {
    setOpen(!open);
    setFormValues({ link: "", type: "" });
    setModalTitle("Add Social Media");
  };

  const handleEdit = values => {
    setModalTitle("Edit Social Media");
    setFormValues(values);
    setOpen(true);
  };

  return (
    <>
      <Typography variant="h4">Social Media</Typography>
      <List>
        {data.socials &&
          data.socials.map(media => (
            <SocialMediaItem
              key={media.link}
              link={media.link}
              type={media.type}
              onClick={() => handleEdit(media)}
            />
          ))}
        {data.socials && data.socials.length === 0 && (
          <Typography variant="subtitle1" paragraph color="textSecondary">
            No social media/s found. Add social media
          </Typography>
        )}
      </List>
      <Fab onClick={handleModal} />
      <Modal
        title={modalTitle}
        open={open}
        handleClose={handleModal}
        handleSubmit={handleSubmit}
      >
        <SocialMediaModalItems
          type={formValues.type}
          link={formValues.link}
          onChange={handleChange}
        />
      </Modal>
    </>
  );
};

export default SocialMedia;
