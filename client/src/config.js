import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ulasau-travel.herokuapp.com/api/",
});
