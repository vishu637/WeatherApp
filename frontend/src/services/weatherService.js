import axios from "axios";
import config from "../config";

const getWeather = async (city) => {
  if (!city) {
    throw new Error("City name is required.");
  }

  const response = await axios.get(`${config.backendBaseUrl}/${encodeURIComponent(city)}`);
  return response.data;
};

export default {
  getWeather,
};
