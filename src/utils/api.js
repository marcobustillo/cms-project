import axios from "axios";

const URL = `http://localhost:9000`;
const getApi = async (id) => {
  const result = await axios.get(`${URL}/content/${id}`);
  return result;
};

const postApi = async (values) => {
  try {
    const result = await axios.post(`${URL}/api/content`, values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return result;
  } catch (err) {
    return err;
  }
};

const getData = async (route) => {
  const result = await axios.get(`${URL}${route}`);
  return result;
};

const postData = async (route, data) => {
  const result = await axios.post(`${URL}${route}`, data);
  return result;
};

export { getApi, getData, postApi, postData };
