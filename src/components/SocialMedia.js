import React, { useState } from "react";
import { List, Typography } from "@material-ui/core";
import SocialMediaItem from "./SocialMediaItem";
import Fab from "./FloatingAction";
import Modal from "./Modal";
import SocialMediaModalItems from "./SocialMediaModalItems";

const SocialMedia = props => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Social Media");
  const [formValues, setFormValues] = useState({
    link: "",
    type: ""
  });

  const handleChange = event => {
    const { id, value } = event.target;

    setFormValues({ ...formValues, [id]: value });
  };

  const handleModal = () => {
    setOpen(!open);
    setFormValues({ link: "", type: "" });
    setModalTitle("Add Social Media");
  };

  const MEDIA = [
    {
      link: "https://facebook.com",
      type: "Facebook"
    },
    {
      link: "https://twitter.com",
      type: "Twitter"
    },
    {
      link: "https://linkedin.com",
      type: "Linkedin"
    }
  ];

  const handleEdit = values => {
    setModalTitle("Edit Social Media");
    setFormValues(values);
    setOpen(true);
  };

  return (
    <>
      <Typography variant="h4">Social Media</Typography>
      <List>
        {MEDIA.map(media => (
          <SocialMediaItem
            key={media.link}
            link={media.link}
            type={media.type}
            onClick={() => handleEdit(media)}
          />
        ))}
      </List>
      <Fab onClick={handleModal} />
      <Modal title={modalTitle} open={open} handleClose={handleModal}>
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
