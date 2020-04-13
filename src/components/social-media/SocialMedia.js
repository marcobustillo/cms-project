import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { List, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import SocialMediaItem from "./SocialMediaItem";
import Fab from "../FloatingAction";
import Modal from "../Modal";
import SocialMediaModalItems from "./SocialMediaModalItems";
import { getApi, postApi } from "../../utils/api";
import { store } from "../../utils/store";

const SocialMedia = (props) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [modalTitle, setModalTitle] = useState("Add Social Media");
  const [formValues, setFormValues] = useState({
    link: "",
    type: "",
  });

  const {
    state: { loading, data },
    dispatch,
  } = useContext(store);

  const getUser = async () => {
    dispatch({ type: "fetch" });
    const result = await getApi(id);
    if (result) {
      dispatch({
        type: "getUser",
        payload: result.data,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await postApi({
        ...data,
        socials: [...data.socials, formValues],
      });
      dispatch({
        type: "getUser",
        payload: result.data,
      });
      enqueueSnackbar("Success!", { variant: "success" });
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Something went wrong...!", { variant: "success" });
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleModal = () => {
    setOpen(!open);
    setFormValues({ link: "", type: "" });
    setModalTitle("Add Social Media");
  };

  const handleEdit = (values) => {
    setModalTitle("Edit Social Media");
    setFormValues(values);
    setOpen(true);
  };

  return (
    <>
      <Typography variant="h4">Social Media</Typography>
      <List>
        {data.socials &&
          data.socials.map((media) => (
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
