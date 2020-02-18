import axios from "axios";

const URL = `http://localhost:9000`;
const getApi = async id => {
  const result = await axios.get(`${URL}/api/content/${id}`);
  return result;
};

const postApi = async values => {
  const result = await axios.post(`${URL}/api/content`, values);
  return result;
};

const getData = async route => {
  const result = await axios.get(`${URL}${route}`);
  return result;
};

const postData = async (route, data) => {
  const result = await axios.post(`${URL}/api/${route}`, data);
  return result;
};

export { getApi, getData, postApi, postData };
