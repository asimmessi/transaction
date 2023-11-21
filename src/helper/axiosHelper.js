import axios from "axios";

const apiEp = "http://localhost:8000/api/v2/task";

export const postData = async (obj) => {
  try {
    const { data } = await axios.post(apiEp, obj);

    return data;
  } catch (error) {
    console.log(error);
  }
};
