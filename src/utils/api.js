import axios from "axios";

const URL = `http://localhost:9000`;
const getApi = async id => {
  const result = await axios.get(`${URL}/api/content/${id}`);
  return result;
};

const getData = async route => {
  const result = await axios.get(`${URL}${route}`);
  return result;
};

export { getApi, getData };
