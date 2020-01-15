import axios from "axios";

const URL = `http://localhost:9000`;
const getApi = async id => {
  const result = await axios.get(`${URL}/api/content/${id}`);
  return result;
};

export { getApi };
