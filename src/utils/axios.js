import axios from "axios";

const headers = {
    "Content-Type": "application/json",
}

const BASE_URL = 'http://localhost:5555/api/v1/metrics'

const axiosInstance = async (data) => {
    try {
        return await axios.post(`${BASE_URL}`, data, headers)
            .then(responseJson => responseJson.data);
    } catch (err) {
        return err
    }
};


export {axiosInstance};
