import axios from "axios";

const axiosInstance = async (data) => {
  try {
    return await axios
      .post(process.env.REACT_APP_BASE_SERVICE_URL, data)
      .then((responseJson) => responseJson.data);
  } catch (err) {
    return err;
  }
};

export default axiosInstance;
