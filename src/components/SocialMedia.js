import React, { useState } from "react";
import { List, Typography } from "@material-ui/core";
import SocialMediaItem from "./SocialMediaItem";
import Fab from "./FloatingAction";
import Modal from "./Modal";
import SocialMediaModalItems from "./SocialMediaModalItems";

const SocialMedia = props => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
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

  return (
    <>
      <Typography variant="h4">Social Media</Typography>
      <List>
        {MEDIA.map(media => (
          <SocialMediaItem
            key={media.link}
            link={media.link}
            type={media.type}
          />
        ))}
      </List>
      <Fab onClick={handleModal} />
      <Modal open={open} handleClose={handleModal}>
        <SocialMediaModalItems />
      </Modal>
    </>
  );
};

export default SocialMedia;
